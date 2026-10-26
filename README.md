# AI video production — a field guide you can watch

A vendor-neutral field guide for a software engineer who wants to direct video with coding agents, and a narrated tutorial of the same material. Written and filmed in October 2026. The guide and the film are in English and in Chinese.

## Open it

The guide and the film are viewable in a browser with no install. The English film is 22 minutes and the Chinese film is 24 minutes. Captions are burned in, and the chapter list seeks the player.

- Field guide: <https://htmlpreview.github.io/?https://github.com/connect-world-1985-ai/2026-10-17-ai-video-production-guide/blob/main/site/index.html>
- Tutorial: <https://htmlpreview.github.io/?https://github.com/connect-world-1985-ai/2026-10-17-ai-video-production-guide/blob/main/site/watch.html>
- 中文指南：<https://htmlpreview.github.io/?https://github.com/connect-world-1985-ai/2026-10-17-ai-video-production-guide/blob/main/site/zh/index.html>
- 中文教程：<https://htmlpreview.github.io/?https://github.com/connect-world-1985-ai/2026-10-17-ai-video-production-guide/blob/main/site/zh/watch.html>

From a clone, open `site/index.html` or `site/watch.html`. There is no server. The video file sits next to the page, so it plays from disk.

GitHub Pages publishes the same `site/` folder. The workflow is `.github/workflows/pages.yml`, and it runs on every push to `main`. Once the repository’s Pages source is **GitHub Actions** (Settings → Pages → Build and deployment → Source), these addresses serve the guide and the film:

- <https://connect-world-1985-ai.github.io/2026-10-17-ai-video-production-guide/>
- <https://connect-world-1985-ai.github.io/2026-10-17-ai-video-production-guide/watch.html>

That source switch is a repository admin setting. The workflow cannot turn it on by itself. Until it is set, use the htmlpreview links at the top of this section. The same addresses with `/zh/` are the Chinese guide and the Chinese film once Pages is on.

## What you will know afterwards

Where the pixels of a shot came from, and where the motion came from. Why a neural clip is beautiful and still the wrong source of truth for a word, a number, or a machine. Why the voice sets the clock. How a coding agent directs a film by writing a plan into files, calling tools, measuring the output, and changing one thing at a time.

The tutorial is the sitting. The HTML pages are the reference: taxonomy, the inside of a video model, programmatic rendering, audio, the tool explorer, the agent loop, a two-minute booster documentary worked end to end, a decision framework, and the sources.

## What is in this repository

| Path | What it is |
| --- | --- |
| `site/` | The English guide, the watch page, and the English video. This folder is what GitHub Pages publishes. |
| `site/zh/` | The same guide and watch page in Chinese. |
| `tutorial/` | Slides, spoken scripts (English and Chinese), and the build that produced both films. |
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

The Chinese film uses the same build with a Chinese script, Chinese slides, and a Chinese voice. Captions are burned in from the speech timings.

```bash
python3 build.py --lang zh
```

That writes `tutorial/build-zh/ai-video-from-the-inside-zh.mp4`. The copy the Chinese watch page serves is `site/assets/video/ai-video-from-the-inside-zh.mp4`. The written guide in Chinese is `site/zh/`. The English pages are unchanged. A control in the top bar switches language.
