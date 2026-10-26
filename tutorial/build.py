#!/usr/bin/env python3
"""Build the narrated tutorial.

  python3 build.py --preview          # one finished frame per slide
  python3 build.py --tts              # speech only
  python3 build.py                    # full film

Pictures are rendered in a browser (family B). Speech is neural TTS.
Assembly is FFmpeg (family C). That is the lesson, performed.
"""

from __future__ import annotations

import argparse
import asyncio
import hashlib
import json
import math
import struct
import subprocess
import wave
from pathlib import Path

import edge_tts

from narration import SEGMENTS

ROOT = Path(__file__).resolve().parent
BUILD = ROOT / "build"
HTML = ROOT / "slides.html"
VOICE = "en-US-AndrewNeural"
RATE = "-5%"
NODE = "node"
CHROME_CAPTURE = ROOT / "capture.js"


def run(cmd: list[str]) -> None:
    print("+", " ".join(cmd[:8]), "..." if len(cmd) > 8 else "")
    subprocess.run(cmd, check=True)


def ffprobe_duration(path: Path) -> float:
    out = subprocess.check_output(
        [
            "ffprobe", "-v", "error", "-show_entries", "format=duration",
            "-of", "default=noprint_wrappers=1:nokey=1", str(path),
        ],
        text=True,
    )
    return float(out.strip())


async def synth_one(seg: dict, sem: asyncio.Semaphore) -> None:
    text = seg["text"]
    digest = hashlib.sha1(text.encode()).hexdigest()[:10]
    audio = BUILD / "audio" / f"{seg['id']}-{digest}.mp3"
    words_path = BUILD / "audio" / f"{seg['id']}-{digest}.words.json"
    seg["audio"] = str(audio)
    seg["words_path"] = str(words_path)
    if audio.exists() and words_path.exists() and audio.stat().st_size > 1000:
        existing = json.loads(words_path.read_text() or "[]")
        if existing:
            return
    async with sem:
        for attempt in range(4):
            try:
                comm = edge_tts.Communicate(text, VOICE, rate=RATE, boundary="WordBoundary")
                words = []
                audio.parent.mkdir(parents=True, exist_ok=True)
                with audio.open("wb") as fh:
                    async for chunk in comm.stream():
                        if chunk["type"] == "audio":
                            fh.write(chunk["data"])
                        elif chunk["type"] == "WordBoundary":
                            words.append({
                                "t": chunk["offset"] / 10_000_000,
                                "d": chunk["duration"] / 10_000_000,
                                "text": chunk["text"],
                            })
                words_path.write_text(json.dumps(words))
                print("tts", seg["id"], f"{ffprobe_duration(audio):.1f}s", len(words), "words")
                return
            except Exception as exc:
                print("tts retry", seg["id"], attempt, exc)
                await asyncio.sleep(2 * (attempt + 1))
        raise RuntimeError(f"TTS failed for {seg['id']}")


async def synth_all() -> None:
    sem = asyncio.Semaphore(3)
    await asyncio.gather(*(synth_one(s, sem) for s in SEGMENTS))


def ass_time(t: float) -> str:
    if t < 0:
        t = 0
    cs = int(round(t * 100))
    s, cs = divmod(cs, 100)
    m, s = divmod(s, 60)
    h, m = divmod(m, 60)
    return f"{h}:{m:02d}:{s:02d}.{cs:02d}"


def wrap_ass(text: str, limit: int = 46) -> str:
    text = text.replace("{", "(").replace("}", ")").replace("\\", "")
    words = text.split()
    if len(text) <= limit or len(words) < 2:
        return text
    best = None
    acc = ""
    for i, w in enumerate(words[:-1]):
        acc = w if not acc else acc + " " + w
        if best is None or abs(len(acc) - len(text) / 2) < abs(best[0] - len(text) / 2):
            best = (len(acc), i)
    cut = best[1]
    return " ".join(words[: cut + 1]) + r"\N" + " ".join(words[cut + 1 :])


def sentence_breaks(words: list[dict]) -> list[dict]:
    """The speech service omits punctuation. Pauses of ~0.4s are the sentence boundaries."""
    out = []
    for i, w in enumerate(words):
        item = dict(w)
        text = item["text"]
        if i + 1 < len(words):
            gap = words[i + 1]["t"] - (w["t"] + w["d"])
            if gap >= 0.38 and not text.endswith((".", "?", "!")):
                text += "."
        item["text"] = text
        out.append(item)
    if out and not out[-1]["text"].endswith((".", "?", "!")):
        out[-1]["text"] += "."
    return out


def write_ass(seg: dict, words: list[dict], dur: float, path: Path) -> None:
    pad = float(seg.get("pad_start", 0))
    words = sentence_breaks(words)
    cues = []
    buf: list[dict] = []
    for w in words:
        buf.append(w)
        text = " ".join(x["text"] for x in buf)
        endish = buf[-1]["text"].endswith((".", "?", "!"))
        if endish or len(text) >= 48 or len(buf) >= 9:
            cues.append(buf)
            buf = []
    if buf:
        cues.append(buf)
    lines = []
    for i, cue in enumerate(cues):
        start = pad + cue[0]["t"]
        end = pad + cue[-1]["t"] + cue[-1]["d"]
        if i + 1 < len(cues):
            nxt = pad + cues[i + 1][0]["t"]
            end = min(end, nxt - 0.04)
        end = min(end, dur - 0.04)
        if end <= start + 0.05:
            continue
        text = wrap_ass(" ".join(w["text"] for w in cue))
        lines.append(
            f"Dialogue: 0,{ass_time(start)},{ass_time(end)},Cap,,0,0,0,,{text}"
        )
    header = """[Script Info]
ScriptType: v4.00+
PlayResX: 1920
PlayResY: 1080
WrapStyle: 0
ScaledBorderAndShadow: yes

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Cap,Inter,46,&H00F7F4FB,&H000000FF,&H00140E0C,&HB4141824,-1,0,0,0,100,100,0,0,3,14,0,2,90,90,54,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
"""
    path.write_text(header + "\n".join(lines) + "\n")


def write_bed(duration: float, path: Path) -> None:
    sr = 48000
    n = int(duration * sr)
    # Quiet A-minor pad. Rendered audio, not a recording.
    freqs = (55.0, 110.0, 164.81, 220.0, 329.63)
    amps = (0.22, 0.16, 0.10, 0.06, 0.04)
    path.parent.mkdir(parents=True, exist_ok=True)
    with wave.open(str(path), "w") as wf:
        wf.setnchannels(2)
        wf.setsampwidth(2)
        wf.setframerate(sr)
        chunk = 4096
        for i0 in range(0, n, chunk):
            frames = bytearray()
            for i in range(i0, min(n, i0 + chunk)):
                t = i / sr
                env = 1.0
                if t < 2.0:
                    env = t / 2.0
                if duration - t < 3.0:
                    env *= max(0.0, (duration - t) / 3.0)
                lfo = 0.85 + 0.15 * math.sin(2 * math.pi * 0.05 * t)
                sample = 0.0
                for f, a in zip(freqs, amps):
                    sample += a * math.sin(2 * math.pi * f * t)
                sample *= 0.35 * env * lfo
                # slight stereo width
                r = sample * 0.92 + 0.08 * math.sin(2 * math.pi * 110.4 * t)
                l = max(-1, min(1, sample))
                rr = max(-1, min(1, r))
                frames += struct.pack("<hh", int(l * 7000), int(rr * 7000))
            wf.writeframes(frames)


def progress_filter(g0: float, g1: float, dur: float) -> str:
    # Top progress line. Commas inside expressions are escaped for the filtergraph.
    width = f"max(8\\,iw*({g0:.6f}+({g1 - g0:.6f})*t/{dur:.6f}))"
    return (
        "drawbox=x=0:y=0:w=iw:h=8:color=0x10182A:t=fill,"
        f"drawbox=x=0:y=0:w='{width}':h=8:color=0x8EB6FF:t=fill"
    )


def encode_segment(seg: dict, g0: float, g1: float, out: Path) -> None:
    dur = seg["dur"]
    ass = Path(seg["ass"])
    fonts = "/usr/share/fonts/truetype/macos"
    vf = (
        progress_filter(g0, g1, dur)
        + f",subtitles={ass}:fontsdir={fonts}"
        + f",fade=t=in:st=0:d=0.20,fade=t=out:st={max(0, dur - 0.22):.3f}:d=0.20,format=yuv420p"
    )
    af = f"afade=t=in:st=0:d=0.04,afade=t=out:st={max(0, dur - 0.06):.3f}:d=0.05,aresample=48000,aformat=channel_layouts=stereo"
    cmd = ["ffmpeg", "-y", "-hide_banner", "-loglevel", "error"]
    if seg["mode"] == "still":
        frame = BUILD / "frames" / seg["id"] / "0000.jpg"
        cmd += ["-loop", "1", "-framerate", "30", "-i", str(frame)]
    else:
        cmd += ["-framerate", str(seg["fps"]), "-i", str(BUILD / "frames" / seg["id"] / "%04d.jpg")]
    cmd += [
        "-i", seg["audio_padded"],
        "-t", f"{dur:.3f}",
        "-vf", vf,
        "-af", af,
        "-r", "30",
        "-c:v", "libx264", "-preset", "medium", "-crf", "18",
        "-pix_fmt", "yuv420p", "-profile:v", "high",
        "-c:a", "aac", "-b:a", "160k", "-ar", "48000", "-ac", "2",
        "-shortest",
        str(out),
    ]
    run(cmd)


def pad_audio(seg: dict) -> None:
    src = Path(seg["audio"])
    dest = BUILD / "audio" / f"{seg['id']}-padded.wav"
    pad_s = float(seg.get("pad_start", 0))
    pad_e = float(seg.get("pad_end", 0))
    # apad then atrim would need known duration. adelay + apad is enough.
    delay = int(pad_s * 1000)
    af = f"adelay={delay}|{delay},apad=pad_dur={pad_e:.3f},aresample=48000"
    run([
        "ffmpeg", "-y", "-hide_banner", "-loglevel", "error",
        "-i", str(src), "-af", af, str(dest),
    ])
    seg["audio_padded"] = str(dest)
    seg["dur"] = ffprobe_duration(dest)


def preview() -> None:
    jobs = []
    for seg in SEGMENTS:
        jobs.append({
            "slide": seg["id"],
            "frames": 1,
            "localP": 1,
            "g0": 0,
            "g1": 1,
            "outDir": str(BUILD / "preview"),
        })
    # Also a mid-denoise frame so the animation can be checked.
    jobs.append({
        "slide": "s06",
        "frames": 1,
        "localP": 0.25,
        "g0": 0,
        "g1": 1,
        "outDir": str(BUILD / "preview-mid"),
    })
    jobs_path = BUILD / "preview-jobs.json"
    BUILD.mkdir(parents=True, exist_ok=True)
    # capture.js names files 0000.jpg inside outDir, so one job per directory.
    split = []
    for job in jobs:
        d = Path(job["outDir"])
        if job["slide"] == "s06" and "preview-mid" in job["outDir"]:
            job["outDir"] = str(BUILD / "preview" / "s06-mid")
        else:
            job["outDir"] = str(BUILD / "preview" / job["slide"])
        split.append(job)
    jobs_path.write_text(json.dumps(split))
    run(["node", str(CHROME_CAPTURE), str(jobs_path), str(HTML)])
    # Rename to stable preview names.
    out = BUILD / "preview"
    for seg in SEGMENTS:
        src = out / seg["id"] / "0000.jpg"
        if src.exists():
            src.replace(out / f"{seg['id']}.jpg")
    mid = out / "s06-mid" / "0000.jpg"
    if mid.exists():
        mid.replace(out / "s06-mid.jpg")


def capture_all(durations_known: bool) -> None:
    total = sum(s["dur"] for s in SEGMENTS)
    jobs = []
    acc = 0.0
    for seg in SEGMENTS:
        g0 = acc / total
        acc += seg["dur"]
        g1 = acc / total
        n = 1 if seg["mode"] == "still" else max(2, int(round(seg["dur"] * seg["fps"])))
        jobs.append({
            "slide": seg["id"],
            "frames": n,
            "g0": g0,
            "g1": g1,
            "outDir": str(BUILD / "frames" / seg["id"]),
        })
        seg["g0"] = g0
        seg["g1"] = g1
    jobs_path = BUILD / "jobs.json"
    jobs_path.write_text(json.dumps(jobs))
    run(["node", str(CHROME_CAPTURE), str(jobs_path), str(HTML)])


def assemble() -> Path:
    seg_dir = BUILD / "segments"
    seg_dir.mkdir(parents=True, exist_ok=True)
    paths = []
    cursor = 0.0
    chapters = []
    current = None
    for seg in SEGMENTS:
        if seg["chapter"] != current:
            if current is not None:
                chapters[-1]["end"] = cursor
            chapters.append({"title": seg["chapter"], "start": cursor})
            current = seg["chapter"]
        out = seg_dir / f"{seg['id']}.mp4"
        encode_segment(seg, seg["g0"], seg["g1"], out)
        paths.append(out)
        cursor += seg["dur"]
    chapters[-1]["end"] = cursor

    concat = BUILD / "concat.txt"
    concat.write_text("".join(f"file '{p}'\n" for p in paths))
    joined = BUILD / "joined.mp4"
    run([
        "ffmpeg", "-y", "-hide_banner", "-loglevel", "error",
        "-f", "concat", "-safe", "0", "-i", str(concat),
        "-c", "copy", str(joined),
    ])
    bed = BUILD / "bed.wav"
    write_bed(ffprobe_duration(joined) + 0.5, bed)
    meta = BUILD / "chapters.txt"
    lines = [";FFMETADATA1"]
    for ch in chapters:
        lines += [
            "[CHAPTER]",
            "TIMEBASE=1/1000",
            f"START={int(ch['start'] * 1000)}",
            f"END={int(ch['end'] * 1000)}",
            f"title={ch['title']}",
        ]
    meta.write_text("\n".join(lines) + "\n")
    final = BUILD / "ai-video-from-the-inside.mp4"
    run([
        "ffmpeg", "-y", "-hide_banner", "-loglevel", "error",
        "-i", str(joined), "-i", str(bed), "-i", str(meta),
        "-filter_complex",
        "[1:a]volume=0.9[b];[0:a][b]amix=inputs=2:duration=first:dropout_transition=0:normalize=0[m];"
        "[m]loudnorm=I=-16:TP=-1.5:LRA=11[a]",
        "-map", "0:v", "-map", "[a]", "-map_metadata", "2",
        "-c:v", "copy", "-c:a", "aac", "-b:a", "160k",
        "-movflags", "+faststart",
        str(final),
    ])
    return final


def prepare_segments() -> None:
    for seg in SEGMENTS:
        pad_audio(seg)
        words = json.loads(Path(seg["words_path"]).read_text())
        ass = BUILD / "subs" / f"{seg['id']}.ass"
        ass.parent.mkdir(parents=True, exist_ok=True)
        write_ass(seg, words, seg["dur"], ass)
        seg["ass"] = str(ass)
    total = sum(s["dur"] for s in SEGMENTS)
    acc = 0.0
    for seg in SEGMENTS:
        seg["g0"] = acc / total
        acc += seg["dur"]
        seg["g1"] = acc / total


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--preview", action="store_true")
    parser.add_argument("--tts", action="store_true")
    parser.add_argument("--assemble-only", action="store_true")
    args = parser.parse_args()
    BUILD.mkdir(parents=True, exist_ok=True)
    if args.preview:
        preview()
        return
    if args.tts:
        asyncio.run(synth_all())
        return
    asyncio.run(synth_all())
    prepare_segments()
    if not args.assemble_only:
        capture_all(True)
    final = assemble()
    print("FINAL", final, f"{ffprobe_duration(final):.1f}s")


if __name__ == "__main__":
    main()
