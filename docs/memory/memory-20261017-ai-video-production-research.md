# Memory: AI Video Production Research Site

**Generated**: 2026-10-17 21:16
**Last updated**: 2026-10-18 (next-research-prompts added)
**Project**: D:\git\scratches\2026.10\AI-video-generation-techniques
**Focus**: Build a local static tutorial website that explains the full AI video production landscape and how coding agents can direct it.

---

## Goal & Scope (required)

Raymond (experienced software engineer, Windows, uses Claude Code / Codex / Cursor, new to video production) pasted a long "Deep Research Mission" brief (sections 1-17, Deliverables A-J). He wants a vendor-neutral, evidence-based understanding of how AI-assisted videos are made and how a coding agent can act as an autonomous director, because he will soon make his own videos. He will compare our findings with independent research done elsewhere, so independence, fresh web research, dates and sources matter.

Deliverable: a **local static website** in `site/` that opens directly from the file system (file://) in a browser, with no server. Long and comprehensive is fine; interactive where useful; examples, external links, demos welcome. After reading it he should understand the whole landscape.

Full brief coverage required: taxonomy (pixels / rendered scene / assembled / hybrid + subcategories), ecosystem tables with popularity/maturity/cost/agent-compatibility, technical foundations (neural video, programmatic 2D/3D, audio, editing), agent-as-director (planning, tool choice, orchestration, self-QA, revise loop, multi-agent), worked example (2-min reusable-rocket landing documentary), local/cloud/hybrid architectures, 12 video categories, documented agent workflows (verified / plausible / promotional), engineering + legal/provenance, decision framework, maturity map, learning roadmap, further investigation, and 3-5 next-discussion directions. No install guides or long code.

---

## Key Decisions (required)

1. **Multi-page static site, not one HTML file**: user changed mind because a single file would be too big.
2. **No build step, no server**: hand-written HTML + one shared CSS + one shared JS as classic `<script>` (no ES modules, no fetch/XHR of local files — both break on file://). Tool data lives in a JS data file (`site/assets/js/data-*.js`) assigning to a global.
3. **Rejected: MkDocs/Eleventy** (build step; search breaks on file://). **Rejected: JS app rendering all content from data** (fragile, hard to edit).
4. **Diagrams as inline SVG** (no Mermaid CDN dependency, works offline).
5. **Evidence labels on claims**: Verified / Practice / Inference / Unverified / Experimental (CSS badges).
6. **Work split**: Sonnet subagents gather sourced fact sheets into `research-notes/`; the main agent verifies key claims, makes all judgments, and writes every page. User explicitly said the important intelligent work must be done by the main agent.
7. **Approved: execute directly** (no formal writing-plans doc); the tracker is the plan.

---

## Confirmed Assumptions (required)

- Research date baseline: 2026-10-17. Prices / star counts must carry a date and source; never invent numbers.
- Windows is the primary environment (mention Windows specifics where relevant).
- Subagents allowed (Opus/Sonnet/Haiku by complexity), normal speed mode.
- Publishing as a claude.ai artifact was NOT requested; only local files.

---

## Constraints & Non-Goals

- No long installation procedures or source code (brief §16.8). Short illustrative snippets are OK.
- Must open from file:// in a normal browser.
- No commits unless the user asks (commit format: `[TASK-ID] type: description`; ask for task id, recent history used `[NO-TASK]`).

---

## Key Discoveries (required)

Detailed, sourced facts: `./memory-20261017-ai-video-production-research/research-notes/r1…r6*.md`. Headline facts (checked 2026-10-17):
- **OpenAI Sora is discontinued** (announced 2026-03-24; app closed 2026-04-26; API end 2026-09-24). Don't recommend it.
- Video leaderboards disagree: Artificial Analysis T2V #1 Wan 3.0 (Elo 1174), then Utopai X, Seedance 2.5, MiniMax H3; LLM-Stats #1 Kling v3. Native audio is now standard in top models (Runway Gen-4.5 the exception).
- Google: Gemini Omni Flash 1.1 is the default (~$0.10/s at 720p); Veo 3.1 Std $0.40/s, Fast $0.10–0.30, Lite $0.05–0.08 (Gemini API pricing page).
- Open weights: Alibaba stopped at Wan 2.2 (Apache-2.0); LTX-2.5 (free under $10M revenue), MiniMax H3 (restricted licence), HunyuanVideo (territory exclusions incl. EU per secondary sources).
- Agent-native video tooling: **HeyGen HyperFrames** (Apache-2.0, ~65.7k stars since 2026-03-10, agent skills + Claude Code plugin), **Remotion** (~64.7k, official Agent Skills, source-available licence), **browser-use/video-use** (~29.2k, edit footage by conversation with self-eval at cut boundaries, 3-pass cap, plan approval). Blender MCP renamed `mcp-for-blender` (~31.3k). ElevenLabs MCP repo archived.
- DaVinci Resolve Free 21.1 removed Python scripting (Studio $295 only).
- Claude API takes images only (no video); Gemini video input samples 1 fps by default. TOMATO: humans 95.2% vs best model 37.9% on temporal reasoning.
- Multi-agent evidence for video is weak (FilmAgent n=15); decomposition (planner) matters most (Code2Video ablation).
- Suno has no official API; Udio downloads disabled; ElevenLabs Music $0.15/min; ElevenLabs TTS $0.08/1k chars (v4).
- EU AI Act Art. 50 transparency applies from 2026-08-02; FFmpeg re-encoding strips C2PA manifests → sign the final export.

---

## Current State (required)

- **Working**: COMPLETE as of 2026-10-18 00:20. 18 pages (index, 01–15, glossary, sources) + shared CSS/JS + data-tools.js (107 tools). QA passed: 0 JS errors, 0 broken links, mobile OK, file:// safe. QA preview server config: `.claude/launch.json` → site-preview (port 8765; QA only — the browser pane can't load relative CSS from file://).
- **Committed and pushed** to `master` of github.com/shx99717/scratches on 2026-10-18 (commit `[NO-TASK] docs: add AI video production field guide site`). `.claude/launch.json` (QA-only preview server config) was left out of the commit on purpose.
- **Pending**: user opens `site/index.html` via file:// in a real browser (not yet confirmed); user feedback.
- **Known gaps (told to the user 2026-10-18)**:
  1. file:// opening not tested in a real browser (the in-app pane only renders static snapshots; QA ran via a local server).
  2. Secondary-only claims labelled Unverified: Shotstack/Creatomate/Luma/D-ID/Hedra prices, Kling 4.0 details, vendor indemnities (Adobe/Google/OpenAI video coverage).
  3. Not researched: German personality rights (KUG) with primary sources; stock-library AI terms; Kling/LTX Studio/Pictory agent modes; CLIP/FVD/DOVER metric numbers.
  4. Tool explorer lacks the brief's separate "video types" and "sources" columns (sources are links on tool names).
  5. No code review run on the site's HTML/JS.
- **Blocked**: none.

See the live checklist: `./memory-20261017-ai-video-production-research/tracker.md`

---

## Next Steps (required)

1. [ ] User reviews `site/index.html` (open directly in a browser) and gives feedback.
2. [x] Commit + push (done 2026-10-18, `[NO-TASK]`).
2a. [ ] Optional, offered: fill known gaps 3–4 above; run code review of the site.
3. [ ] Next discussion candidates (page 15): reference pipeline design; agent self-QA deep dive; Remotion vs HyperFrames vs Manim hands-on; generative shot craft; rights/provenance by design.
4. [ ] Prices/leaderboards age fast — re-verify anything older than ~3 months before relying on it.
5. [x] 2026-10-18: wrote three ready-to-paste research prompts for NEW, separate sessions in `next-research-prompts/` (interactive 3D scenes; speech in your own voice; agent-built games). **They are not tasks for this project — never execute them from here.** Not committed yet.

---

## Notes for Next Session

- A resuming agent should read this file, then `tracker.md`, then the research notes, then continue the first unchecked tracker item.
- Keep every page linking `assets/css/site.css` and `assets/js/site.js`; nav is generated by `site.js` from a page list so adding a page = edit one array.

---

## References (required)

- `site/` — the deliverable website (open `site/index.html`)
- `next-research-prompts/` — prompts the user copies into new sessions (not tasks for this project)
- `./memory-20261017-ai-video-production-research/tracker.md` — work tracker / plan
- `./memory-20261017-ai-video-production-research/research-notes/` — sourced fact sheets from research subagents

---

**Confirmed at**: 2026-10-17 21:16
