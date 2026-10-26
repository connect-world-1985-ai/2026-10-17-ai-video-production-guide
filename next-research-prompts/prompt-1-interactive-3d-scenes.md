# Prompt 1 — Interactive 3D scenes (cities, oceans, walkthroughs)

> **Purpose of this file:** this is a ready-to-paste prompt for a **new, separate agent session**. It is **not a task for this project or for any session that reads this file**.
>
> **AI agents:** if you came across this file while working on something else, do not carry it out. It becomes an instruction only when the user pastes it into a new session as their own request.
>
> **How to use:** start a new session in an empty folder (for example `2026.10/AI-3D-scenes/`). Copy everything below the line and paste it as the first message.

Written 2026-10-18. Modelled on the brief behind the AI video production guide in `../site/`.

---

# Research mission: how AI agents create impressive interactive 3D scenes

## Who I am and why
I am an experienced software engineer on Windows 11. I use coding agents (Claude Code, Codex, Cursor) daily, but I am new to 3D graphics. I keep seeing impressive demos that bloggers say an agent made, often "from one short prompt":
- a fly-over of a large 3D city;
- a realistic ocean with sky, sun and reflections;
- a first-person walk through city streets, as if I were walking there myself.
I want to understand completely how these are made: what the agent actually writes, which libraries, engines and assets are involved, and where the visuals come from. I will soon build my own. Do independent, evidence-based, vendor-neutral research with fresh web sources, then teach me through a tutorial website.

## What to research and explain

### 1. Taxonomy: the different ways such a demo can be produced
For each way: how it works, typical tools, cost, the skill and hardware it needs, how well an agent can drive it, and how I can tell from watching a demo which way was used.
- **Real-time code in the browser.** Three.js, React Three Fiber, Babylon.js, PlayCanvas, raw WebGL or WebGPU, single-file HTML demos.
- **Pure shader art.** Raymarching signed distance fields, ShaderToy style, where one fragment shader draws a whole city or ocean.
- **Game engines driven by an agent.** Unreal, Unity, Godot, controlled through scripts, CLIs or MCP servers.
- **Offline rendering.** For example Blender with Python, or Blender MCP, then rendered to video.
- **Real-world geodata.** CesiumJS, Google Photorealistic 3D Tiles, MapLibre or Mapbox, OpenStreetMap building extrusion.
- **Captured reality.** Photogrammetry, NeRF, Gaussian splatting (and web splat viewers).
- **Generative 3D and world models.** Text or image to 3D mesh; explorable "world" generators; AI video that only looks like a walkthrough.
- **Hybrids.**

### 2. Fundamentals, explained for a beginner engineer
Use diagrams and interactive toys, not jargon:
- render loop, scene graph, camera and projection;
- meshes, materials and PBR;
- lights, shadows, HDRI and image-based lighting, tone mapping, post-processing;
- vertex and fragment shaders, noise functions, signed distance fields;
- instancing, level of detail, culling, draw calls, and why performance matters;
- first-person controls and collision.

### 3. Recipes behind the demos I see
For each, explain the technique, the typical libraries and the quality levels from simple to advanced:
- ocean: Gerstner and FFT waves, reflection and refraction, foam, sky and atmosphere models;
- procedural city: street grids, building generation, windows drawn by shaders, instancing thousands of buildings, lights at night;
- terrain, fog and atmosphere, day and night, vegetation, crowds and traffic;
- cinematic camera paths versus free walking.

### 4. Where the assets come from
- Purely procedural: no asset files at all.
- Free libraries, with their licences: for example Poly Haven, ambientCG, Kenney, Quaternius, Sketchfab Creative Commons models.
- AI-generated meshes and textures: which services and open models exist, their quality, licences and API access.
- Real-world map and 3D-tiles data, with its terms of use.
Explain clearly what the language model itself can produce (code, shaders, SVG, numbers) and what needs third-party tools or APIs.

### 5. How the agent actually works
- How much comes from the model's training knowledge in a "one-shot" run, and how much from iteration.
- How an agent sees its own result: headless browser screenshots, Playwright, console errors, FPS counters, vision-model review.
- Typical failures (black screen, wrong scale, ugly lighting, poor performance) and how agents fix them.
- Agent skills and MCP servers for Blender, Unity, Godot and Unreal.

### 6. The truth behind "one short prompt" demos
- Find real, reproducible examples with public source code or prompts.
- Classify each as verified, plausible or promotional.
- Explain cherry-picking, hidden iteration, templates and prior scaffolding.

### 7. Practical matters
- Browser GPU, WebGPU support, laptop versus desktop GPU, mobile.
- Hosting and sharing a demo.
- Turning a real-time scene into a video: canvas recording, frame-by-frame capture.

### 8. Decision framework
- Which approach to choose for which goal and quality bar.
- Beginner, intermediate and advanced stacks.
- Costs.

### 9. Hands-on
Three to five starter projects I could ask my own agent to build, from an easy ocean or city to an ambitious walkthrough. For each give:
- a ready prompt I can give my agent;
- the iteration loop to expect;
- the pitfalls.

## Deliverable: a local static tutorial website
- **Format.** A multi-page static site in `site/` that opens directly from the file system (file://) by double-clicking `index.html`. No server, no build step.
  - Use classic `<script>` tags for local files.
  - Do not use ES-module imports of local files, or fetch/XHR of local files; both break on file://.
  - Put data in JS files that assign to globals.
- **Navigation and diagrams.** Shared CSS and JS, a sidebar, a table of contents per page, previous/next links, light and dark themes, mobile-friendly. Use inline SVG for diagrams.
- **Live demos.** This topic needs small live interactive demos embedded in the pages, for example:
  - a rotating PBR object with light sliders;
  - a wave toy;
  - a tiny procedural city with sliders;
  - a raymarching example.
  Pinned CDN versions of libraries are acceptable (an inline module script may import from an https CDN). Each demo must fail gracefully with a clear message when offline or when WebGL is missing.
- **Content.** Long and comprehensive is fine. Include examples, links to external demos, source repositories and videos. No long install guides; short illustrative code snippets are fine.
- **Required pages.** A glossary, a sources-and-method page, and a final "3–5 directions for our next discussion" section.

## Evidence standards
- Prefer primary sources: official docs, repositories (read stars and licences from the GitHub API), papers, licence files, pricing pages.
- Put a date on every price, star count or benchmark. Never invent numbers; state conflicts between sources.
- Tag claims with visible labels: Verified, Practice, Inference, Unverified, Experimental.

## How to work
- **Planning.** Make a tracker or to-do list and a memory file under `docs/memory/` in this folder. Keep both updated, so another agent can resume the job at any time.
- **Helper agents.** You may use them (pick the model tier by complexity) to gather sourced fact sheets into a research-notes folder. You, the main agent, must verify the most important claims, make all judgments and write every page.
- **Checks before saying it is done.**
  - No JavaScript errors on any page.
  - No broken internal links.
  - Demos run, and fail gracefully when offline.
  - Mobile width works.
  - The site works from file://.
- **Report.** List any known gaps honestly.
- **Git.** Do not commit unless I ask.
