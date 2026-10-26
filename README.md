# AI video production — a field guide you can watch

A vendor-neutral field guide for a software engineer who wants to direct video with coding agents, and a 22-minute narrated tutorial of the same material. Written and filmed in October 2026.

## Open it

The live site is GitHub Pages. The guide is the homepage. The film is one click from the top of that page, and from the sidebar.

- Field guide: <https://connect-world-1985-ai.github.io/2026-10-17-ai-video-production-guide/>
- Tutorial (22 min): <https://connect-world-1985-ai.github.io/2026-10-17-ai-video-production-guide/watch.html>

On your own machine, open `site/index.html` or `site/watch.html` in a browser. There is no install and no server. The video file sits next to the page, so it plays from disk as well as from Pages.

## What you will know afterwards

Where the pixels of a shot came from, and where the motion came from. Why a neural clip is beautiful and still the wrong source of truth for a word, a number, or a machine. Why the voice sets the clock. How a coding agent directs a film by writing a plan into files, calling tools, measuring the output, and changing one thing at a time.

The tutorial is the sitting. The HTML pages are the reference: taxonomy, the inside of a video model, programmatic rendering, audio, the tool explorer, the agent loop, a two-minute booster documentary worked end to end, a decision framework, and the sources.

## What is in this repository

| Path | What it is |
| --- | --- |
| `site/` | The guide, the watch page, and the video. This folder is what GitHub Pages publishes. |
| `tutorial/` | Slides, spoken script, and the build that produced the film. |
| `docs/memory/` | The research notes behind the guide. |
| `next-research-prompts/` | Prompts to paste into a new session. They are not tasks for this repository. |

Vendor numbers in the film and the pages were checked in October 2026. Re-check a product before you build on it. The routing rules age more slowly than the brand names.

## Rebuild the film

From `tutorial/`, with Chrome, FFmpeg, Node, and network access for speech synthesis:

```bash
npm install
python3 -m pip install edge-tts
python3 build.py
```

That writes `tutorial/build/ai-video-from-the-inside.mp4`. The copy Pages serves is `site/assets/video/ai-video-from-the-inside.mp4`.
