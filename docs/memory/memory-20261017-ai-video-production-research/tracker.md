# Tracker: AI Video Production Research Site

Status legend: [ ] todo · [~] in progress · [x] done · [!] blocked
Update this file after every finished item. A resuming agent continues at the first non-[x] item.

## Phase 1 — Research (fact sheets in research-notes/)

| # | Item | Owner | Status | Output file |
|---|---|---|---|---|
| R1 | Neural video models & APIs (T2V, I2V, V2V, native audio, open weights, aggregators) | subagent (Sonnet) | [x] | research-notes/r1-neural-video.md |
| R2 | Image gen/edit, avatars & lip-sync, enhancement/upscale/interpolation | subagent (Sonnet) | [x] | research-notes/r2-image-avatar-enhance.md |
| R3 | Programmatic 2D/3D/motion graphics, rendering engines, editing/composition tools & APIs, GitHub stats | subagent (Sonnet) | [x] | research-notes/r3-programmatic-editing.md |
| R4 | Audio: TTS, voice clone, music, SFX, ASR, alignment, cleanup, loudness | subagent (Sonnet) | [x] | research-notes/r4-audio.md |
| R5 | Documented agent video workflows, MCP servers, skills, research systems, video QA/understanding | subagent (Sonnet) | [x] | research-notes/r5-agent-workflows.md |
| R6 | Legal, licensing, consent, provenance (C2PA, SynthID, EU AI Act, platform rules) | subagent (Sonnet) | [x] | research-notes/r6-legal-provenance.md |
| R7 | Main-agent verification pass of key claims (spot-check top items) | main | [x] | notes inline in pages |

## Phase 2 — Site skeleton

| # | Item | Status |
|---|---|---|
| S1 | site/assets/css/site.css (tokens, light/dark, layout, badges, tables, diagrams) | [x] |
| S2 | site/assets/js/site.js (nav from page list, TOC, theme toggle, collapsibles, table filter) | [x] |

## Phase 3 — Pages (main agent writes all)

| # | Page | Brief § / Deliverable | Status |
|---|---|---|---|
| P0 | index.html — big picture, mental model, reading guide | A | [x] |
| P1 | 01-taxonomy.html | §3, B | [x] |
| P2 | 02-neural-video.html (foundations) | §6, D | [x] |
| P3 | 03-programmatic-graphics.html (foundations) | §6, D | [x] |
| P4 | 04-audio.html (foundations) | §6, D | [x] |
| P5 | 05-editing-compositing.html (foundations) | §4.3, D | [x] |
| P6 | 06-ecosystem.html — filterable tool tables + popularity | §4, §5, C | [x] |
| P7 | 07-agent-director.html — architecture, QA, loops, multi-agent | §7, E | [x] |
| P8 | 08-worked-example.html — reusable-rocket documentary | §8 | [x] |
| P9 | 09-architectures.html — local/cloud/hybrid | §9 | [x] |
| P10 | 10-video-types.html — 12 categories + workflows | §10, F | [x] |
| P11 | 11-documented-workflows.html | §11 | [x] |
| P12 | 12-engineering-legal.html | §12 | [x] |
| P13 | 13-decision-framework.html + interactive helper + stacks | §13, G | [x] |
| P14 | 14-maturity.html | H | [x] |
| P15 | 15-roadmap.html — roadmap, open questions, next directions | I, J | [x] |
| P16 | glossary.html | — | [x] |
| P17 | sources.html | §14 | [x] |

## Phase 4 — QA

| # | Item | Status |
|---|---|---|
| Q1 | Open every page via file:// in the browser pane, check nav/TOC/theme/interactive parts, no console errors | [x] |
| Q2 | Link check (internal anchors + page links) | [x] |
| Q3 | Mobile-width check | [x] |
| Q4 | Update memory file + report to user | [x] |

## Log
- 2026-10-17 21:16 — tracker created.
- 2026-10-17 21:40 — R1–R6 subagents dispatched; S1, S2, P0, P1 written. QA preview: `.claude/launch.json` "site-preview" (python http.server on port 8765, QA only — the browser pane cannot load relative CSS from file://). Nav order lives in `site/assets/js/site.js` PAGES.
- 2026-10-17 21:45 — R6 done.
- 2026-10-17 22:30 — R1–R4 done; P2–P4 written. Main-agent checks done so far: GitHub stats for HyperFrames/Remotion/Manim/Blender-MCP (gh api), Wan paper architecture numbers, Sora shutdown (Engadget/Decoder). Remaining research: R5.
- 2026-10-17 23:20 — R5 done (all research in). P5–P8 written. Ecosystem data lives in site/assets/js/data-tools.js (107 entries; add tools there, page renders automatically). R7 spot-checks done: Gemini pricing page (Veo 3.1 $0.40/0.10–0.30/0.05–0.08; Omni ≈$0.10/s), AA T2V top-12, Resolve 21.1 scripting→Studio (Puget), gh stats for agent repos, video-use SKILL.md read. Next: P9–P17, then QA.
- 2026-10-18 00:20 — P9–P17 written. Extra main-agent verification: HunyuanVideo LICENSE.txt territory clause (excludes EU/UK/KR). QA: 18 pages load with 0 JS errors (iframe sweep), sidebar/TOC/pager present on all; link check 0 broken; mobile 375px no horizontal scroll; helper + explorer + calculator tested; no fetch/modules/external scripts (file:// safe). Site = 21 files, 376 KB. DONE — awaiting user review.
- 2026-10-18 00:40 — Memory updated with known gaps; committing and pushing (launch.json excluded).
