# R4 - Audio for video production (state as of 2026-10-17)

Method note: web research on 2026-10-17. Primary vendor pages (WebFetch) and GitHub API (`gh api`) were used where possible; web-search summaries and aggregator pages are marked "(secondary)". GitHub star counts and `pushed_at` dates were read from the GitHub API on 2026-10-17. Hugging Face was unreachable from the sandbox (timeouts), so HF-only facts (licenses of Parakeet, Canary, Kokoro weights etc.) are "unverified". Anything not found is "unverified"; no numbers were invented.

Legend: WTS = word-level timestamps. "[S#]" = source number in the list at the end.

## 0. Key findings (the 10 things that matter)

1. ElevenLabs shipped Eleven v4 and v4 Turbo on 2026-09-28 (90+ languages, audio tags, 100 ms median inference for Turbo) [S1]. Official API price page shows $0.08 per 1k chars (v4/v3/Multilingual) and $0.04 (v4 Turbo, v3 Conversational, Flash/Turbo) [S2]. Secondary sources (OpenRouter, news) quote different numbers ($40/1M and $20/1M, or intro $22/$11 per 1M) - conflict, see section 9.
2. The only ElevenLabs endpoint I could verify for timing returns character-level alignment (characters + start/end seconds, plus normalized_alignment) [S3]. Word timing must be derived by grouping characters. Whether v4 supports it: unverified.
3. Azure AI Speech is still the only mainstream TTS that emits viseme events natively (22 viseme IDs with audio offset in 100 ns ticks; SVG; 3D blend shapes = 55 ARKit-style values at 60 FPS) [S4]. Best fit for lip-synced character animation. Viseme support is per-locale.
4. Suno: v5.5 (2026-03-26), v6 family (v6, v6-wild, v6-mini; 2026-09-09; v6/v6-wild paid only), "Speech" beta (2026-10-01) [S5]. No public official API (partner-only; third-party resellers are unofficial) [S6, secondary]. Warner settled Nov 2025; UMG and Sony still litigating vs Suno [S7, S8].
5. Udio: UMG settled 2025-10-29, Warner Nov 2025; downloads disabled since 2025-10-29; licensed platform not confirmed launched as of mid-Oct 2026 (secondary); Sony filed a new suit July 2026 [S9, S10]. Not usable as an asset pipeline.
6. Stability Stable Audio 3.0 (2026-05-20): Small SFX, Small (459M), Medium (1.4B) open weights; Large (2.7B) API only; trained on licensed data; Community License, free under USD 1M revenue [S11].
7. Google: Chirp 3 HD $30/1M chars (secondary quoting Google page); Gemini TTS billed by tokens (25 audio tokens/s); Lyria 3 family priced per song/clip (secondary) [S12, S13].
8. Native-audio video: Veo 3.1 (priced per second incl. audio), Kling 3.0, Seedance 2.0, Wan 2.6, LTX-2.x all produce audio with video. Sora is discontinued (app closed 2026-04-26, API scheduled to end 2026-09-24) [S14-S18, secondary].
9. ASR/alignment stack for subtitles: faster-whisper / WhisperX (WTS + diarization) remain the practical open default; whisper.cpp for local; ElevenLabs Scribe v2 $0.22/h, Deepgram Nova-3 $0.0043/min, AssemblyAI Universal-3.5 Pro $0.21/h, gpt-4o-transcribe $0.006/min [S2, S19-S21].
10. Loudness: EBU R128 = -23 LUFS, TP max -1 dBTP; ATSC A/85 = -24 LKFS (A/85 revised 2026-07-15, secondary); YouTube "-14 LUFS" is a widely used figure but no official page was retrieved (unverified) [S22, S23].

## 1. Text-to-speech and voice

### 1a. Commercial / hosted TTS

| Product | Latest version (date) | Control | Price (date, URL) | WTS / alignment | Limits / notes |
|---|---|---|---|---|---|
| ElevenLabs | Eleven v4 + v4 Turbo, published 2026-09-28, updated 2026-10-12 [S1]. v3 GA Feb 2026 (secondary) | REST API, SDKs, Studio/dubbing UI | API list: $0.08/1k chars v4, v3, Multilingual; $0.04/1k v4 Turbo, v3 Conversational, Flash/Turbo (fetched 2026-10-17, S2) | `convert-with-timestamps` returns character-level `alignment` + `normalized_alignment` (S3). Word-level: derive from characters. Scribe (STT) gives word timestamps (see group 4) | v3 per-request cap disputed (5,000 vs 40,000 chars; secondary). Audio tags for emotion. IVC from 10 s audio; PVC supported with v4 [S1]. Dubbing, voice design, voice changer exist (not re-verified this session) |
| OpenAI TTS | gpt-4o-mini-tts (newer TTS model: none found) | REST API | gpt-4o-mini-tts $0.60/1M text-in + $12/1M audio-out tokens; tts-1 $15/1M chars; tts-1-hd $30/1M chars (fetched 2026-10-17, S24) | No alignment output (unverified; none documented in fetched page) | Steerable via instructions prompt (from model knowledge, unverified this session) |
| Google Cloud TTS | Chirp 3 HD; Gemini TTS (e.g. Gemini 3.1 Flash TTS preview) | Cloud API | Chirp 3 HD $30/1M chars after free tier; Gemini TTS $1/1M text tokens in, $20/1M audio tokens out, 25 audio tokens/s (secondary quoting Google page, S12) | Word timepoints via SSML `<mark>` in Cloud TTS (from knowledge, unverified this session) | Page layout ambiguous on which model row; verify before budgeting |
| Azure AI Speech | Neural / HD voices; docs updated 2026-06-05 [S4] | Speech SDK, REST, SSML | Price table renders "$-" in fetch; unverified (use Azure calculator) | WordBoundary events (from knowledge) + **viseme events: 22 IDs, 100 ns tick offsets, SVG (en-US only), 3D blend shapes: 55 values/frame @60 FPS** [S4] | Viseme/blend-shape locales limited (see language-support page). Best for lip-sync |
| Amazon Polly | Standard/Neural/Long-form/Generative | AWS API | Per 1M chars: Standard $4, Neural $16, Long-Form $100, Generative $30 (S25, fetched 2026-10-17); free tier 5M std chars/mo | Speech Marks (word, sentence, viseme, SSML) - page says speech-marks requests are billed at the same rates | Generative has no speech marks per page ("speech requests only") |
| Cartesia | Sonic-3.6 current [S26] | API, WebSocket | Credits: 1 credit/char; Pro $5/mo 100K credits; Startup $49 1.25M; Scale $299 8M; overage $38-65/1M credits (S26, 2026-10-17). STT Ink: 3 credits/s | Timestamps price/feature not on pricing page - unverified | Low-latency voice-agent focus |
| PlayHT | **Shut down.** Meta acquired team 2025-07-12; API ended 2025-07-26; platform closed 2025-12-31 (secondary, S27) | - | - | - | All data deleted; do not use |
| Hume | Octave 2 (June 2026 toggle) | API | Octave 2 overage $0.075 down to $0.025 per 1k chars across tiers (secondary, S28) | unverified | Plans/pricing sources conflict |
| Resemble AI | Chatterbox family (open), hosted product | API / OSS | Open model free (MIT); hosted rates unverified | unverified | See open table |
| Murf | Falcon / Falcon 2 for agents | API | ~$0.01/min claimed by vendor (secondary, S29) | unverified | Vendor-claimed 55 ms latency |
| WellSaid | Studio + API by quote | Quote-based API | No published API rate (secondary, S30) | unverified | Plans vary by source |

### 1b. Open-source TTS (stars/license read from GitHub API 2026-10-17)

| Model | Stars | License (GitHub) | Last push | Status / notes |
|---|---|---|---|---|
| VibeVoice (Microsoft) | 54,857 | MIT | 2026-10-08 | Long-form multi-speaker; MIT per GitHub but a roundup said "research only" - conflict, read repo before commercial use |
| F5-TTS | 15,415 | MIT (code; pretrained weights historically CC-BY-NC - unverified) | 2026-10-14 | Flow-matching, zero-shot clone; active |
| Chatterbox (Resemble) | 27,022 | MIT | 2026-07-21 | Zero-shot clone; Turbo variant (secondary) |
| Fish Speech / OpenAudio / Fish Audio S2 | 33,227 | "Fish Audio Community License v1.0, updated 2026-10-13" (repo LICENSE file); GitHub shows NOASSERTION | 2026-10-14 | Not OSI open; commercial use requires terms - read license |
| IndexTTS / IndexTTS2 | 24,535 | bilibili Model Use License Agreement (custom) | 2026-09-29 | Custom license, check commercial clause |
| CosyVoice | 24,018 | Apache-2.0 | 2026-05-25 | Moved to QwenAudio org |
| Dia (Nari Labs) | 19,407 | Apache-2.0 | 2025-11-19 | Dialogue generation; slow cadence |
| SesameAILabs CSM | 14,727 | Apache-2.0 | 2025-05-27 | Stale |
| Spark-TTS | 10,984 | Apache-2.0 | 2025-04-09 | Stale |
| Kokoro | 9,397 | Apache-2.0 | 2025-08-06 | 82M params, no cloning (secondary) |
| Higgs Audio (Boson AI) | 8,371 | Apache-2.0 | 2026-06-05 | V2 ~5.8B (secondary) |
| Orpheus-TTS | 6,357 | Apache-2.0 | 2025-12-05 | Llama-based |
| VoxCPM | 39,452 | Apache-2.0 | 2026-10-08 | Newly prominent; not researched further |
| Coqui TTS / XTTS-v2 | 46,128 | MPL-2.0 (code); XTTS weights CPML non-commercial (from knowledge, unverified) | 2024-08-16 | Company shut down; repo stale = effectively unmaintained |
| Piper | 11,302 | MIT | 2025-08-26 | Archived (archived=true) |

WTS for open TTS: none output word times natively in general; run forced alignment (section 4) on the output. Independent benchmarks are scarce; one roundup notes top models are within ~13 Elo and results come from makers' own evals (secondary, S31).

### 1c. Voice conversion / speech-to-speech

| Tool | Stars / license / status | Notes |
|---|---|---|
| ElevenLabs Voice Changer | Hosted; not re-verified this session | |
| RVC WebUI | 38,788 stars, MIT, last push 2026-08-04 | Needs per-speaker training; biggest community |
| Seed-VC | 3,897, GPL-3.0, archived, last push 2025-04-20 | Zero-shot; repo archived |

### 1d. Voice-cloning consent (vendors)

- ElevenLabs (official help center via search): a Professional Voice Clone can only be made of your own voice; the voice owner must pass a verification step; even with consent, someone else cannot create it - the owner makes it and shares it [S32]. Circumventing verification (e.g. CAPTCHA) violates the Prohibited Use Policy and can lead to a ban (S32). Instant cloning: lighter verification (secondary). Prohibited policy details (political candidates etc.) are secondary summaries - unverified.
- Others (Azure Custom Neural Voice gating, Resemble verification, Cartesia, Hume): not verified this session.
- Practical rule for the project: keep written consent for every real voice, use vendor stock/designed voices where possible.

## 2. Music generation

| Product | Latest (date) | Control | Price | License / legal | Notes |
|---|---|---|---|---|---|
| Suno | v6 family 2026-09-09 (v6, v6-wild paid only, v6-mini free) [S5]; v5.5 2026-03-26; Speech beta 2026-10-01 | Web/mobile; **no official public API** (partner beta + intake form, S6 secondary) | Consumer plans only; third-party resellers ~USD 0.014-0.111/song (secondary, unreliable) | Warner settled + licensed deal Nov 2025; downloads need paid account, "current models deprecated" (S7). UMG and Sony still litigating; labels sought to add 61,026 recordings (May 2026) (S8, secondary) | Do not build on unofficial wrappers for a product |
| Udio | Legacy product; licensed platform announced for 2026 | Web only | n/a | UMG settled 2025-10-29; Warner Nov 2025; Merlin Jan 2026, Kobalt Apr 2026 (secondary); Sony not settled, new suit July 2026 (S9, S10) | **Downloads disabled since 2025-10-29**; unusable for video assets |
| Google Lyria | Lyria 3 / 3.5 / Pro Preview / Clip Preview; Lyria RealTime (model `lyria-realtime-exp`, WebSocket, 48 kHz stereo PCM, experimental) | Gemini API, Vertex AI | $0.08/song (Lyria 3.5 and 3 Pro), $0.04/30 s clip (secondary tracker Sept 2026, S13); Lyria 2 $0.06/30 s (Vertex, secondary) | SynthID-style watermark (secondary) | RealTime price unpublished (secondary) |
| ElevenLabs Music (Eleven Music) | launched Aug 2025 | API + Studio | Official page: $0.15/min (S2, 2026-10-17); a secondary review said $0.50/min - conflict, trust official | Trained under Merlin/Kobalt licenses; commercial rights by plan (secondary, S33) | Stems: unverified |
| Stable Audio 3.0 | 2026-05-20 [S11] | HF weights (Small SFX/Small/Medium); Large via Stability API/fal.ai | API price unverified | Community License: free to use commercially under USD 1M revenue; licensed training data | Up to 6:20 tracks; inpainting/extension; LoRA docs |
| ACE-Step | 1.5 (paper 2026-01-31, arXiv 2602.00744); repo `ace-step/ACE-Step` 4,948 stars, Apache-2.0, last push 2026-02-15 | Local, <4 GB VRAM claimed | free | Apache-2.0 (v1; 1.5 license claim from secondary) | Fast: <10 s/song on RTX 3090 (paper claim) |
| YuE | 12,066 stars, Apache-2.0, push 2026-10-06 | Local | free | | Lyrics-to-song, heavy |
| DiffRhythm | 2,348, Apache-2.0, push 2025-11-27 | Local | | | |
| SongGeneration (Tencent) | repo path not resolved (404 on guess) - unverified | | | | |
| MusicGen / AudioCraft (Meta) | 23,738 stars, MIT code, last push 2026-03-03; no releases | Local | free | **Weights CC-BY-NC 4.0** (from knowledge, unverified this session) | Stale; 30 s clips |
| Epidemic Sound | Partner API | Partnership agreement, then Developer Portal creds; a free tier is advertised by one page (conflict) (S34) | by deal | Licensed catalogue (~40k tracks, 90k+ SFX per docs) | Soundmatch video-to-music, beat detection, track-versions to fit duration |
| Artlist | Music API | Enterprise, OAuth2 client credentials issued by account manager (S35) | by deal | | |
| Adobe Firefly Generate Soundtrack | beta | App only; no public API found (secondary, S36) | credits | "Commercially safe" per Adobe | |

## 3. Sound effects and foley

| Tool | Facts | License / price |
|---|---|---|
| ElevenLabs SFX | $0.12/min via API (S2) | per plan |
| Stable Audio 3.0 Small SFX | 459M, on-device-class, open weights (S11) | Community License |
| MMAudio | 2,287 stars, MIT, push 2026-02-23. Video+text to audio (CVPR 2025; from knowledge) | free, local |
| HunyuanVideo-Foley | 1,074 stars, Tencent Hunyuan Community License (release 2025-08-28), excludes EU/UK/South Korea (LICENSE text read) | custom, territorial limits |
| ThinkSound | 1,383 stars, no license detected, push 2026-04-03 | unclear = treat as unlicensed |
| AudioLDM2 | 2,641 stars, CC BY-NC-SA 4.0 (LICENSE text read), last push 2024-09-29 | non-commercial |
| Tango | 1,242 stars, NOASSERTION, push 2025-07-29 | unverified |
| Freesound API | APIv2 (v1 EOL); search/browse/info, upload etc.; auth by token or OAuth2; license types and download rules on separate pages not retrieved - unverified (S37). CC0 / CC-BY / CC-BY-NC mix is known from general knowledge: filter by license | |
| Native video audio | See section 7 | |

WTS: not applicable to SFX.

## 4. ASR and alignment

| Tool | Version / date | Stars / license | WTS | Price | Notes |
|---|---|---|---|---|---|
| OpenAI Whisper | large-v3 / large-v3-turbo (Oct 2024; secondary); repo last release v20250625 | 110,737 / MIT | Yes (word via pipeline option `return_timestamps="word"`, HF; native cross-attention timestamps) | API $0.006/min (S24) | Hallucinations on silence (known) |
| faster-whisper | v1.2.1, 2025-10-31 | 25,910 / MIT, push 2026-10-16 | Yes (`word_timestamps=True`) | free | CTranslate2 |
| WhisperX | v3.8.6, 2026-05-25 | 24,628 / BSD-2, push 2026-09-26 | Yes, wav2vec2 forced alignment + pyannote diarization | free | Best open subtitle pipeline |
| whisper.cpp | no tagged release check | 54,447 / MIT, push 2026-10-12 | Yes (token timestamps) | free | CPU/Metal/CUDA local |
| NVIDIA NeMo (Parakeet, Canary) | repo renamed `NVIDIA-NeMo/Speech`, push 2026-10-17 | 18,594 / Apache-2.0 (code). Model weight licenses: unverified (HF unreachable) | Parakeet v3: provider page says segment timestamps only (secondary); NeMo can give word via TDT durations (knowledge, unverified) | free | 600M, 6.34% avg WER on Open ASR leaderboard (secondary) |
| gpt-4o-transcribe / mini | | | Unverified (documented as no word timestamps on 4o models; verify) | $0.006/min and $0.003/min (S24) | |
| ElevenLabs Scribe v2 | | | Word-level (from knowledge, unverified this session) | $0.22/h; Realtime $0.39/h (S2) | |
| Deepgram | Nova-3, Flux | | Yes (from knowledge) | Nova-3 pre-recorded $0.0043/min mono, $0.0052 multi; streaming $0.0048 / $0.0058 promo; Flux $0.0065 (S19) | |
| AssemblyAI | Universal-3.5 Pro, Universal-2 | | Yes (from knowledge) | $0.21/h and $0.15/h; diarization +$0.02/h (S20) | |
| Montreal Forced Aligner | | 1,904 / MIT, push 2026-10-08 | Word + phone | free | Needs transcript + acoustic model |
| ctc-forced-aligner | | 569 / BSD-2, push 2026-09-07 | Word-level | free | Used by modern alignment pipelines; multilingual |
| stable-ts | | 2,281 / MIT, **archived** | Word-level for Whisper | free | Archived 2026 |
| aeneas | repo path 404 - unverified | | | | Older |

## 5. Cleanup and separation

| Tool | Facts |
|---|---|
| Demucs / HTDemucs | facebookresearch/demucs: 10,389 stars, MIT, archived, last push 2024-04-24; maintained fork adefossez/demucs: 3,397 stars, push 2026-08-31 |
| UVR (Ultimate Vocal Remover) | 26,660 stars, MIT, push 2026-10-06; GUI wrapper over MDX/Demucs models (model licenses vary - unverified) |
| DeepFilterNet | 4,840 stars, Apache-2.0 or MIT (README), last push 2024-10-17 (stale) |
| RNNoise | 5,898 stars, BSD-3, push 2025-02-22 |
| Resemble Enhance | 2,459 stars, MIT, push 2024-12-03 (stale) |
| Adobe Podcast Enhance | Web tool; sources disagree on any public API - unverified (S36) |
| Auphonic | API included in all plans; billing per audio duration; 2 h free/month; loudness normalization on all plans; per-hour prices not rendered in fetch (S38) |
| iZotope RX | Not researched (desktop, commercial) - unverified |

## 6. Mixing, mastering, loudness

- EBU R128: programme loudness target -23.0 LUFS, tolerance +-1.0 LU for live, max true peak -1 dBTP (S22). LUFS = LKFS (same measure under ITU-R BS.1770).
- ATSC A/85: -24 LKFS +-2 dB typical target; A/85 revision reported 2026-07-15 extending guidance to streaming (secondary, S23).
- YouTube: -14 LUFS integrated is the commonly cited reference; louder content is turned down, quieter generally not turned up; no official YouTube page retrieved - **unverified** (S39, secondary, sources disagree on exact figures).
- ffmpeg `loudnorm` two-pass: pass 1 `loudnorm=I=-16:TP=-1.5:LRA=11:print_format=json` to null output; pass 2 feed `measured_I/LRA/TP/thresh` and `offset` with `linear=true`. Linear mode silently falls back to dynamic if target LRA < input LRA or TP conditions fail; loudnorm may resample to 192 kHz so add `aresample=48000` (S40, mailing list). The official filter page was too large to read in the fetch.
- Sidechain ducking: ffmpeg `sidechaincompress` exists (confirmed in filter TOC); parameter details not retrieved.
- pyloudnorm: 783 stars, MIT, push 2026-01-04 (BS.1770 meter in Python). Matchering: 2,661 stars, GPL-3.0, push 2026-10-07 (reference-based mastering; GPL matters for embedding).
- LANDR API / automated mastering: not researched - unverified.

## 7. Joint audio-video generation vs separate (brief)

| Model | Native audio? | Status / price / license | Source quality |
|---|---|---|---|
| Veo 3.1 (Google) | Yes: dialogue, SFX, ambience, lip sync | Gemini API per second: standard $0.40/s (720p/1080p), $0.60 4K; Fast $0.10/$0.12/$0.30; Lite $0.05/$0.08 (tracker reading Google page 2026-09-11). Forum report of ~50% audio surcharge unconfirmed. No Veo 4 found; "Gemini Omni" video models announced at I/O 2026 (secondary) | secondary |
| Sora 2 | Yes while it lived | **Discontinued**: announced 2026-03-24, app/web closed 2026-04-26, API scheduled to end 2026-09-24 (Decoder, secondary) | secondary; verify via OpenAI help page |
| Kling 3.0 | Yes: dialogue, ambience, music; lip sync in 5 languages; 3-15 s clips | Hosted only | secondary (aggregators) |
| Seedance 2.0 (ByteDance) | Yes, joint generation, multilingual lip sync | Hosted; resolution claims conflict (480/720p academic vs 1080p/2K vendor); "Seedance 2.5" unverified | secondary |
| Wan 2.6 (Alibaba) | Yes: auto voiceover + custom audio import | Alibaba Cloud Model Studio (wan2.6-t2v/i2v); open Wan2.2 repo 17,977 stars Apache-2.0 (no audio in 2.2) | mixed |
| LTX-2 / 2.3 / 2.5 (Lightricks) | Yes, 19B audio-video DiT; open weights | Repo Lightricks/LTX-2 9,773 stars, push 2026-10-13; LTX-2.x Community License dated 2026-08-11 for 2.5, LICENSE-2 dated 2026-01-05 for earlier; free under USD 10M revenue per a secondary source (conflicts with GitHub custom license; read LICENSE) | repo primary |
| Ovi (Character.AI) | Yes, joint | 1,761 stars, Apache-2.0, push 2025-11-15 | repo |
| Video-to-audio (separate) | MMAudio (MIT), HunyuanVideo-Foley (territorial license), ThinkSound (no license) | see section 3 | repo |

Trade-off: native audio is convenient for 5-15 s clips but gives little control over dialogue wording, voice consistency, loudness and timing. A separate pipeline (TTS + alignment + music + SFX + mix) is controllable and gives timestamps for subtitles and animation sync.

## 8. Conceptual notes (from model knowledge; paper IDs not re-fetched this session - verify before quoting)

**How modern TTS works.** Pipeline: (1) text frontend - normalization (numbers, abbreviations), grapheme-to-phoneme or direct byte/subword tokens; (2) acoustic model that predicts either continuous features (mel spectrograms) or discrete audio tokens; (3) waveform decoder - a vocoder (HiFi-GAN, arXiv 2010.05646) or a neural codec decoder.
- Codec-LM family: a neural audio codec (SoundStream arXiv 2107.03312, EnCodec arXiv 2210.13438) turns audio into discrete tokens via residual vector quantization; a Transformer LM predicts those tokens conditioned on text and a short voice prompt. VALL-E (arXiv 2301.02111) showed zero-shot voice cloning from a 3 s prompt this way; AudioLM (arXiv 2209.03143) is the token-LM precursor. Orpheus, Dia, Higgs-style models use LLM backbones with codec tokens.
- Diffusion/flow family: non-autoregressive generation of mel or latent features, e.g. F5-TTS (arXiv 2410.06885, flow matching); VITS (arXiv 2106.06103) is a VAE+flow+GAN end-to-end predecessor.
- Why timing matters for you: autoregressive token models do not give explicit durations, so word times come from a second step (forced alignment) or from vendor-provided alignment (ElevenLabs characters, Azure word/viseme events, Polly speech marks).

**How music generation works.** Two main designs: (a) token LMs over codec tokens - MusicLM (arXiv 2301.11325), MusicGen (arXiv 2306.05284, single-stage Transformer over EnCodec tokens with codebook interleaving); (b) latent diffusion with text/timing conditioning - Stable Audio (arXiv 2402.04825: VAE latent, diffusion transformer, explicit seconds-start/seconds-total conditioning giving variable-length output). Song-with-vocals systems (Suno, Udio, YuE, ACE-Step) combine lyric conditioning with these ideas; their exact architectures are not published (Suno/Udio) - unverified. ACE-Step 1.5 paper: arXiv 2602.00744 (found via search).

## 9. Disagreements and uncertainties

- ElevenLabs v3/v4 price: official API page $0.08 and $0.04 per 1k chars (S2) vs OpenRouter $40 and $20 per 1M chars, vs intro $22 and $11 per 1M (secondary). Earlier third-party pages quoted $0.10/1k for v3. Official page was fetched by a summarizing tool; re-check by eye before quoting.
- ElevenLabs Music: $0.15/min (official fetch) vs $0.50/min (secondary review).
- Eleven v4 release: 2026-09-28 (official) vs 2026-10-07 (OpenRouter listing date, likely listing date).
- Suno v6: confirmed by Suno release-notes fetch (S5) although several secondary pages (dated before Sept) still said "not shipped".
- Suno API: no official API (secondary x several); anything labelled "Suno API" is a third-party wrapper.
- Udio licensed platform: secondary sources disagree on timing; no primary confirmation.
- VibeVoice license: GitHub says MIT, one roundup says research only. Fish Speech: custom community license (updated 2026-10-13). IndexTTS2: custom bilibili license. LTX-2: GitHub custom license vs "$10M" secondary claim.
- Native-audio claims for Kling/Sora/Veo vary across aggregators; Sora shutdown date relies on one secondary article quoting OpenAI.
- Parakeet word timestamps: only segment timestamps in one secondary page; unverified.
- gpt-4o-transcribe word timestamps: unverified.
- Not covered / unverified: Hume, Resemble, Murf, WellSaid official prices; Azure price; Scribe WTS; Polly viseme details; Freesound licensing terms; iZotope RX; LANDR; SongGeneration; aeneas; Demucs model quality comparisons; Canary-Qwen; HF license for all model weights.

## 10. Sources (accessed 2026-10-17 unless noted)

S1 https://elevenlabs.io/blog/eleven-v4 (fetched)
S2 https://elevenlabs.io/pricing/api (fetched)
S3 https://elevenlabs.io/docs/api-reference/text-to-speech/convert-with-timestamps (fetched)
S4 https://learn.microsoft.com/en-us/azure/ai-services/speech-service/how-to-speech-synthesis-viseme (fetched; page ms.date 2026-02-25, updated 2026-06-05)
S5 https://suno.com/release-notes (fetched)
S6 https://aimusicapi.ai/en/blog/does-suno-have-an-api and https://gptproto.com/blog/suno-api (search results, secondary)
S7 https://www.musicbusinessworldwide.com/warner-music-group-settles-with-suno-strikes-first-of-its-kind-deal-with-ai-song-generator/ (search result)
S8 https://www.musicbusinessworldwide.com/suno-asks-court-to-block-umg-and-sony-from-expanding-copyright-lawsuit-to-over-61000-recordings/ (search result)
S9 https://www.musicbusinessworldwide.com/universal-music-settles-udio-lawsuit-strikes-deal-for-licensed-ai-music-platform/ (search result)
S10 https://musicbusinessworldwide.com/sony-music-files-new-lawsuit-against-ai-platform-udio-asserting-over-30000-sound-recordings-a-judge-barred-it-from-adding-to-its-original-case (search result)
S11 https://www.the-decoder.com/stability-ai-launches-stable-audio-3-0-with-up-to-six-minute-tracks-and-open-weights/ (fetched); https://stability.ai/news-updates/meet-stable-audio-3-the-model-family-built-for-artistic-experimentation-with-open-weight-models (search result)
S12 https://cloud.google.com/text-to-speech/pricing (search result summary, secondary)
S13 https://benchlm.ai/md/media-pricing/lyria.md ; https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-reference/lyria-music-generation (search results); https://ai.google.dev/gemini-api/docs/realtime-music-generation
S14 https://benchlm.ai/md/media-pricing/veo.md (Veo prices, secondary)
S15 https://the-decoder.com/openai-sets-two-stage-sora-shutdown-with-app-closing-april-2026-and-api-following-in-september/
S16 https://www.atlascloud.ai/blog/Kling-3-0-Live-on-Atlas-Cloud-The-All-in-One-AI-Video-Generator-with-Smart-Storyboarding-Native-Lip-Sync (secondary)
S17 https://www.cutout.pro/learn/?p=2804 (Seedance 2.0, secondary)
S18 https://www.cometapi.com/en/models/aliyun/wan-2-6 ; https://en.wikipedia.org/wiki/LTX-2 ; https://comfyui-wiki.com/en/models/ltx-video/ltx-2
S19 https://deepgram.com/pricing (fetched)
S20 https://www.assemblyai.com/pricing (fetched)
S21 https://github.com/NVIDIA-NeMo/Speech ; https://openrouter.ai/nvidia/parakeet-tdt-0.6b-v3 (secondary)
S22 https://tech.ebu.ch/docs/r/r128v4_0.pdf and https://tech.ebu.ch/publications/r128 (search results)
S23 https://www.production-expert.com/production-expert-1/atsc-a/85-loudness-spec-updated-whats-changed-and-what-you-need-to-do ; https://www.webpronews.com/atsc-tightens-loudness-rules-for-streaming-ads-as-california-law-takes-effect/ (search results)
S24 https://developers.openai.com/api/docs/pricing (fetched)
S25 https://aws.amazon.com/polly/pricing/ (fetched)
S26 https://cartesia.ai/pricing (fetched)
S27 https://texttolab.com/blog/play-ht-shutdown-alternatives ; https://cognitivefuture.ai/elevenlabs-vs-playht-alternatives/ (search results, secondary)
S28 https://perkstack.co/blog/cheapest-hume-octave-tts-api ; https://anotherwrapper.com/tools/llm-pricing/speech-models/octave-2 (secondary)
S29 https://murf.ai/api ; https://customerthink.com/murf-ai-launches-falcon-the-text-to-speech-api-that-outperforms-elevenlabs-with-55ms-model-latency-across-35-languages/ (secondary)
S30 https://help.wellsaidlabs.com/how-much-does-it-cost ; https://speechactors.com/article/wellsaid-labs-pricing-and-plans (secondary)
S31 https://tts.ai/blog/open-source-text-to-speech-guide-2026/ (secondary)
S32 https://elevenlabs.io/docs/help-center/product/voices/voice-cloning/can-i-create-a-professional-voice-clone-of-someone-elses-voice.md ; https://elevenlabs.io/docs/help-center/product/voices/voice-cloning/are-there-any-restrictions-on-what-voices-i-can-upload-for-voice-cloning (search results)
S33 https://alternativeto.net/news/2025/8/elevenlabs-launches-ai-music-platform-with-artist-backed-licensing-and-commercial-clearance (secondary)
S34 https://developers.epidemicsound.com/docs/
S35 https://developer.artlist.io/welcome
S36 https://helpx.adobe.com/firefly/web/work-with-audio-and-video/work-with-audio/generate-soundtrack-for-an-uploaded-video.html ; https://cleanvoice.ai/blog/adobe-podcast-enhance-speech/
S37 https://freesound.org/docs/api/ (fetched; index only)
S38 https://auphonic.com/pricing (fetched)
S39 https://productionadvice.co.uk/stats-for-nerds/ ; https://workflow.frame.io/guide/loudness-for-youtube (secondary)
S40 https://lists.ffmpeg.org/pipermail/ffmpeg-devel/2018-August/233372.html ; https://dev.to/javidjamae/ffmpeg-loudnorm-filter-ebu-r128-loudness-normalization-guide-15d4 ; https://ffmpeg.org/ffmpeg-filters.html (TOC only)
GitHub API (stars, license, pushed_at, archived; accessed 2026-10-17): repos named in the tables, e.g. https://github.com/microsoft/VibeVoice, https://github.com/SWivid/F5-TTS, https://github.com/resemble-ai/chatterbox, https://github.com/fishaudio/fish-speech (LICENSE read), https://github.com/index-tts/index-tts (LICENSE read), https://github.com/Lightricks/LTX-2 (LICENSE read), https://github.com/Tencent-Hunyuan/HunyuanVideo-Foley (LICENSE read), https://github.com/haoheliu/AudioLDM2 (LICENSE read), https://github.com/m-bain/whisperX, https://github.com/SYSTRAN/faster-whisper, https://github.com/ggml-org/whisper.cpp, https://github.com/openai/whisper, https://github.com/facebookresearch/audiocraft, https://github.com/ace-step/ACE-Step, https://arxiv.org/abs/2602.00744 (ACE-Step 1.5, search result)
