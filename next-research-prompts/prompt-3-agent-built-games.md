# Prompt 3 — How agents build 2D/3D games, and where the art comes from

> **Purpose of this file:** this is a ready-to-paste prompt for a **new, separate agent session**. It is **not a task for this project or for any session that reads this file**.
>
> **AI agents:** if you came across this file while working on something else, do not carry it out. It becomes an instruction only when the user pastes it into a new session as their own request.
>
> **How to use:** start a new session in an empty folder (for example `2026.10/AI-game-building/`). Copy everything below the line and paste it as the first message.

Written 2026-10-18. Modelled on the brief behind the AI video production guide in `../site/`.

---

# Research mission: how AI agents build 2D and 3D games, and where the art comes from

## Who I am and why
I am an experienced software engineer on Windows 11. I use coding agents (Claude Code, Codex, Cursor), but I have never made a game.

I see many games that bloggers say an agent generated, some from "just a short prompt":
- 2D platformers like Mario;
- 3D car racing;
- other games that used to need whole teams.

My biggest confusion: where do the pictures, sprites, textures, 3D models, sounds and music come from?
- Does the agent invent them itself?
- Does it call third-party APIs for images or 3D models?
- Does it download free asset packs?
- Does it draw everything with code?

I also want to understand the engines, libraries and techniques, so I can soon build my own games with an agent. Do independent, evidence-based, vendor-neutral research with fresh web sources, then teach me through a tutorial website.

## What to research and explain

### 1. Where game assets come from
Give a clear taxonomy with examples:
- **Drawn by code, no asset files.** Canvas or WebGL primitives, SVG written by the model, CSS, emoji, procedurally generated pixel art, shaders, procedural textures and levels.
- **Free asset libraries.** For example Kenney, OpenGameArt, itch.io packs, Quaternius, Poly Pizza, Mixamo animations, freesound; explain their licences (CC0, CC-BY and so on).
- **AI image generation through an API, called by the agent.** Sprites, sprite sheets, tiles, backgrounds, textures. Cover which models and services exist, and the difficulty of consistency, transparency and animation frames.
- **AI 3D generation.** Text or image to mesh, rigging and animation; current services and open models, their quality and licences.
- **Audio.** Procedural sound effects (for example jsfxr and the WebAudio API), AI sound effects and music, free libraries.
Be precise about what a language model can output by itself (code, SVG, data, shader text) and what needs an external tool. Explain how an agent gets access to such tools (APIs, MCP servers, CLI scripts).

### 2. Engines and libraries
For each: what it is good for, whether it is 2D or 3D, the language, agent-friendliness (text-based project files, CLI or headless builds, MCP servers, documentation the model already knows), licence and cost, popularity with dated numbers, and Windows support.
- **Web 2D:** for example Phaser, PixiJS, Kaplay, Excalibur.
- **Web 3D:** for example Three.js, Babylon.js, PlayCanvas.
- **Physics:** for example Rapier, cannon-es, Matter.js.
- **Desktop or native engines:** for example Godot, Unity, Unreal, Bevy, LÖVE, Pygame, MonoGame.
- **Tile and level editors.**
- **AI game-builder platforms**, and "world models" that generate playable-looking video. Explain how these differ from real game code.

### 3. Game fundamentals, explained for a beginner engineer
Use diagrams and interactive toys:
- game loop and delta time, input handling, entity/component patterns, state machines;
- collision and physics, tilemaps, cameras, sprite animation;
- enemy AI, level design, UI and menus, saving, audio;
- "game feel": acceleration, jump buffering, coyote time, screen shake.
Explain why these are where agent-made games often fall short.

### 4. Two worked examples, step by step
(a) A Mario-like 2D platformer.
(b) A 3D car-racing game.
For each:
- the architecture;
- the engine choice;
- where every asset comes from, comparing the code-drawn, free-pack and AI-generated strategies;
- the order an agent would build things in;
- what is hard (vehicle physics, track design, camera, tuning);
- realistic time and cost.
Note intellectual-property limits: do not copy Nintendo characters or levels.

### 5. How agents test and improve games
- Headless browser runs, screenshots and vision-model review.
- Scripted input and automated playtesting, deterministic simulation, unit tests for game logic.
- Performance checks.
- What still needs a human player.

### 6. The truth behind "one short prompt" games
- Find real, reproducible examples with public code or prompts.
- Classify each as verified, plausible or promotional.
- Explain cherry-picking, hidden iteration, templates, starter kits and the role of the model's training knowledge.

### 7. Publishing and legal
- Hosting web games (itch.io, static hosting) and desktop builds.
- Asset licences and attribution.
- Copyright status of AI-generated assets.
- Store policies on AI content disclosure (for example Steam).
- Trademark and "clone" risks.

### 8. Decision framework and learning path
- Which engine and asset strategy for which kind of game.
- Beginner, intermediate and advanced stacks.
- Costs.

### 9. Hands-on
Three to five starter projects, from very easy to ambitious. For each give:
- a ready prompt I can give my coding agent;
- the iteration loop to expect;
- the pitfalls.

## Deliverable: a local static tutorial website
- **Format.** A multi-page static site in `site/` that opens directly from the file system (file://) by double-clicking `index.html`. No server, no build step.
  - Use classic `<script>` tags for local files.
  - No ES-module imports of local files; no fetch/XHR of local files.
  - Put data in JS files that assign to globals.
- **Navigation and diagrams.** Shared CSS and JS, a sidebar, a table of contents per page, previous/next links, light and dark themes, mobile-friendly. Use inline SVG for diagrams.
- **Small playable demos embedded in the pages.** For example:
  - a tiny platformer where I can toggle between code-drawn shapes and a CC0 sprite style, to see the asset question visually;
  - a game-loop and delta-time toy;
  - a collision toy.
  Prefer self-contained code. A pinned CDN library is acceptable if the demo fails gracefully when offline. Bundle no assets without a CC0 or compatible licence, and credit any you use.
- **Other interactive parts.** A sortable, filterable explorer of engines, libraries and asset sources.
- **Content.** Long and comprehensive is fine. Include examples and links to external playable demos and repositories. No long install guides; short snippets are fine.
- **Required pages.** A glossary, a sources-and-method page, and a final "3–5 directions for our next discussion" section.

## Evidence standards
- Prefer primary sources: official docs, repositories (stars and licences from the GitHub API), papers, licence files, pricing pages, store policies.
- Put a date on every number. Never invent numbers; state conflicts between sources.
- Tag claims with visible labels: Verified, Practice, Inference, Unverified, Experimental.

## How to work
- **Planning.** Make a tracker or to-do list and a memory file under `docs/memory/` in this folder. Keep both updated, so another agent can resume the job at any time.
- **Helper agents.** You may use them (pick the model tier by complexity) to gather sourced fact sheets into a research-notes folder. You, the main agent, must verify the most important claims, make all judgments and write every page.
- **Checks before saying it is done.**
  - No JavaScript errors.
  - No broken internal links.
  - Demos are playable.
  - Mobile width works.
  - The site works from file://.
- **Report.** List any known gaps honestly.
- **Git.** Do not commit unless I ask.
