# R3 - Code-driven graphics, rendering engines, programmatic editing (approaches B "rendered scene" and C "assembled")

Research date: 2026-10-17. GitHub numbers were read with `gh api` on 2026-10-17 (stars, last push, latest GitHub release). "unverified" = not confirmed from a primary source in this session. "(gk)" = general knowledge, not re-checked today.
Caveat: blender/blender, FFmpeg/FFmpeg, GStreamer/gstreamer, VTK, ParaView are GitHub mirrors or secondary hosts; their star counts understate real popularity and "latest release" via API is empty (use project sites).

## Headline findings
1. **HyperFrames (heygen-com/hyperframes)** is a new HTML-to-MP4 framework "built for agents": 65.6k stars, created 2026-03-10, Apache-2.0, release v0.8.168 on 2026-10-17 (very fast cadence). Headless Chrome (Puppeteer) seeks each frame, FFmpeg encodes; local, Docker or AWS Lambda; ships 21 agent skills and a Claude Code plugin. Node 22+ and FFmpeg required. Windows support: not stated on the page (unverified).
2. **Remotion** (64.7k stars) is the established React-to-video tool; custom licence, not OSI open source. Free for individuals, for-profit orgs up to 3 employees, non-profits, evaluators; otherwise paid. It publishes official Agent Skills (`npx skills add remotion-dev/skills`, usable with Claude Code).
3. **DaVinci Resolve Free lost scripting in v21.1** (Puget Systems, 2026-09-10, quoting the 21.1 release notes: "We have moved the ability to script in Python to the Studio version"). Free v21.0 still scripts. Studio costs $295 (blackmagicdesign.com, 2026-10-17). Another source says external scripting on Free was already blocked from 19.1; sources disagree on history, agree on current state.
4. **Premiere Pro**: Adobe moved third-party extensibility to UXP (Nov 2025); ExtendScript support promised "through September 2026" - that date has passed; no post-September confirmation found. UXP timeline API still has gaps vs ExtendScript (community reports).
5. **CapCut**: no official editing/rendering API found; community "CapCutAPI" repos only write draft files. Descript: public API in open beta in 2026 with MCP support (secondary sources only).

## Group 1 - 2D / motion graphics in code
| Tool | Role | Control | Deployment | License / cost (date) | Stars & last release (2026-10-17) | Maturity | Windows | Agent notes | Limitations | Sources |
|---|---|---|---|---|---|---|---|---|---|---|
| Remotion | React components -> MP4/still/GIF | Code (TSX), CLI, Node API, Studio GUI | Local, Docker, Remotion Lambda (AWS), Cloud Run (gk) | Source-available custom licence. Free: individuals, for-profit <=3 people, non-profits, evaluators. Company: "Automators" $0.01/render, $100/mo min; "Creators" $25/seat/mo; Enterprise from $500/mo (remotion.pro/license, 2026-10-17). Licence page says terms change in v5.0 | 64,688 stars; v4.0.536 (2026-10-16); pushed 2026-10-17; SPDX NOASSERTION | High, near-daily releases | Yes (Node) (gk) | Headless CLI; official Agent Skills (12 skills incl. render, captions, docs) for Claude Code/Codex/Cursor; no MCP mentioned on the skills page. Determinism depends on frame-based code | Needs headless Chromium; licence gate for >3-employee companies; Lambda costs separate | remotion.dev/docs/license, remotion.pro/license, remotion.dev/docs/ai/skills, GitHub |
| Remotion Lambda cost | Cloud rendering | CLI/API | AWS | Docs examples (us-east-1, 2048MB, warm): hello world ~$0.001; 1-min 720p ~$0.021; 10-min 720p ~$0.162; 10s 4K ~$0.017. Excludes S3, CloudWatch, Remotion licence fees | - | - | - | Estimates only; "measure yourself" | Older doc version showed ~$0.10 for 1 min, so figures vary by version | remotion.dev/docs/lambda/cost-example |
| HyperFrames (HeyGen) | HTML/CSS + GSAP/Lottie/Three.js/WAAPI -> deterministic MP4 | HTML with data-attributes, CLI, agent skills | Local, Docker, AWS Lambda | Apache-2.0 | 65,651 stars; v0.8.168 (2026-10-17); created 2026-03-10; 370 open issues | Young (7 months), pre-1.0, very active | Unverified | Designed for agents; Claude Code plugin (`claude plugin marketplace add heygen-com/hyperframes`), 21 skills | Pre-1.0 API churn; Node 22+, FFmpeg needed; star count very high for its age | github.com/heygen-com/hyperframes |
| Motion Canvas | TS generator-based animation + editor | Code (TS) + visual editor | Local (Vite) | MIT | 19,369 stars; v3.17.2 (2024-12-14); push 2026-07-02 | Releases stagnant ~22 months | Yes (gk) | Scriptable; render via editor/ffmpeg plugin | No release since Dec 2024 | GitHub |
| Revideo | Motion Canvas fork, headless render API | TS + `renderVideo()` | Node, cloud | MIT | 4,117 stars (midrender/revideo); no GitHub release; push 2026-07-15 | Small; status unclear | unverified | Headless by design | Repo moved orgs; maintenance level unverified | GitHub |
| Manim Community | Math animation in Python | Python + CLI | Local, Docker | MIT | 41,615 stars; v0.22.0 (2026-10-08) | High | Yes (needs FFmpeg; LaTeX for Tex) (gk) | CLI headless; deterministic | LaTeX dependency; math-style look | GitHub |
| manimgl (3b1b) | Original OpenGL Manim | Python | Local | MIT | 95,220 stars; v1.7.2 (2024-12-13); push 2026-09-09 | Mature, author-driven | Harder setup (gk) | Interactive-first | Few releases | GitHub |
| Theatre.js | Timeline/keyframe toolkit (+R3F) | JS + studio GUI | Browser | Apache-2.0 | 12,776 stars; no release; last push 2024-08-14 | Dormant | n/a | Not a renderer | No commits for 2 years | GitHub |
| GSAP | JS animation engine | JS | Browser | Free incl. commercial per vendor (unverified this session); repo licence field empty | 29,348 stars; tag 3.15.0; push 2026-04-13 | Very mature | n/a | Seekable timelines (used by HyperFrames) | Not a renderer | GitHub |
| Lottie (lottie-web) | JSON animation player (AE Bodymovin) | JSON + JS | Browser/mobile | MIT | 32,242 stars; tag v5.13.0; push 2025-09-01 | Mature, slow | n/a | Video needs player + capture | Subset of AE features | GitHub |
| Rive | Interactive vector animation runtime | Rive editor + runtime API | Web/mobile/game | Runtime MIT; editor pricing unverified | rive-wasm 1,005 stars; 2.44.2 (2026-10-10) | Active | Editor: unverified | No headless export evidence | Proprietary editor | GitHub |
| p5.js | Creative coding canvas | JS | Browser | LGPL-2.1 | 24,138 stars; v2.3.4 (2026-09-25) | High | n/a | Frame capture via external tools | Not video-native | GitHub |
| PixiJS | 2D WebGL/WebGPU renderer | JS | Browser | MIT | 48,407 stars; v8.22.0 (2026-10-01) | High | n/a | Capture needed | - | GitHub |
| D3 | Data viz | JS | Browser | ISC | 113,763 stars; v7.9.0 (2024-03-12); push 2026-05-28 | Very mature | n/a | SVG output; capture for video | - | GitHub |
| Vega | Declarative chart grammar | JSON spec | Node/browser | BSD-3 | 12,025 stars; v6.4.0 (2026-08-14) | Mature | Yes (gk) | Declarative specs suit LLM generation | Static unless animated via signals | GitHub |
| Motion (ex Framer Motion) | UI animation lib | JS/React | Browser | MIT | 34,235 stars; tag v14.3.0 | High | n/a | Not a renderer | - | GitHub |
| timecut | Puppeteer frame capture -> video | Node CLI | Local | BSD-3 | 654 stars; v0.3.3 (2022-04-03); push 2023-07-18 | Abandoned | Yes (gk) | Superseded by Remotion/HyperFrames | Unmaintained | GitHub |
| WebCodecs | Browser-native encode/decode | JS API | Browser | W3C spec | w3c/webcodecs 1,295 stars; push 2026-10-16 | Shipped in Chromium (gk) | n/a | Mediabunny used in Remotion skills | Codec support differs per browser/OS | GitHub, Remotion skills page |

## Group 2 - 3D
| Tool | Role | Control | License / cost (date) | Stars & last release | Windows | Agent notes / limitations | Sources |
|---|---|---|---|---|---|---|---|
| Blender | 3D suite; Cycles (path tracer) + EEVEE (real-time) | Python `bpy`, CLI `blender -b file -P script.py` (gk), Geometry Nodes | Free, GPL (gk) | Mirror 20,987 stars; **5.2.2 LTS released 2026-09-15**, 5.3 expected 2026-11-10 (blender.org, 2026-10-17) | Yes | Headless is supported (gk); seeds make renders repeatable; 5.0 changed EEVEE file compatibility; scripts brittle across versions | blender.org/download, developer.blender.org release notes 5.0 |
| Three.js | WebGL 3D | JS | MIT | 116,533 stars; r186 (2026-09-24) | n/a | Usable inside Remotion/HyperFrames; frame capture required | GitHub |
| React Three Fiber | React renderer for Three | JSX | MIT | 33,029 stars; v9.8.2 (2026-10-15) | n/a | - | GitHub |
| Babylon.js | WebGL/WebGPU engine | JS/TS | Apache-2.0 | 26,175 stars; 9.30.0 (2026-10-08) | n/a | - | GitHub |
| Unreal Engine | Real-time/film renderer | Python, Movie Render Queue (command line + Python executors), Sequencer, Remote Control API (gk) | 5% royalty on lifetime gross >$1M per runtime product; linear content treated differently, exact condition unconfirmed (unrealengine.com/license via search) | no public repo stats | Yes | MRQ docs: CLI args reduced to a few; use Python executor for control. Heavy, GPU | dev.epicgames.com MRQ page, unrealengine.com/license |
| Unity | Engine; Recorder + Timeline | C#, Recorder, Timeline | Personal free; Pro ~$2,200/user/yr (undated, unverified) | - | Yes | Recorder works only in Editor, not in builds (docs) | docs.unity3d.com Recorder manual |
| Godot | Open engine, Movie Maker mode | `godot --path P --write-movie out.avi --fixed-fps 30` | MIT | 118,542 stars; 4.7.2-stable (2026-08-18) | Yes | Writers AVI (MJPEG, 4 GB cap, no alpha), OGV, PNG sequence + WAV; deterministic fixed fps | docs.godotengine.org creating_movies |
| NVIDIA Omniverse / Kit | OpenUSD sim/render platform | Python, Kit apps, Replicator | Isaac Sim licence: Kit use apart from Isaac Sim/Lab is outside "Purpose" (2026-10-17) | - | unverified | Headless container exists; licence ambiguity for standalone use | docs.isaacsim.omniverse.nvidia.com license page |
| Houdini | Procedural 3D/VFX | Python/HScript, hython | Apprentice free non-commercial (watermark); Indie ~$269-299/yr per aggregators (conflict, unverified) | - | Yes | Procedural = repeatable; headless licensing unverified | cgchannel, softwarefinder (secondary) |
| Cinema 4D | Motion-design 3D | Python SDK (gk), Redshift | Subscription; $94/mo (Capterra) vs $81.91/mo (aggregator): conflict | - | Yes | Pricing unclear | capterra.com |
| Gaussian splatting / NeRF | Captured-scene 3D | Python training | graphdeco repo: research non-commercial licence (gk; SPDX NOASSERTION); nerfstudio Apache-2.0 | 24,233 stars (push 2025-10-17); nerfstudio 12,079, v1.1.5 (2024-11-11) | CUDA needed | Reconstruction from captures, not generation | GitHub |

## Group 3 - Simulation and scientific viz
| Tool | Role | License | Stars & last release | Notes |
|---|---|---|---|---|
| Matplotlib | Charts, FuncAnimation -> FFmpeg | BSD-style (SPDX empty) | 23,375; v3.11.2 (2026-09-11) | Headless; Windows yes |
| Plotly (python) | Interactive charts | MIT | 18,846; v7.1.0 (2026-09-15) | Static export needs Kaleido/Chrome (gk) |
| ParaView | Scientific viz, pvpython/pvbatch | BSD-3 | 1,711 (mirror) | Batch rendering (gk) |
| VTK | Viz toolkit | NOASSERTION in API | 3,214 (mirror) | - |
| Taichi | GPU sim language | Apache-2.0 | 28,413; v1.7.4 (2025-07-31); push 2026-10-05 | Release cadence slowed |
| Genesis | Physics sim + render | Apache-2.0 | 30,070 (genesis-world); v1.4.4 (2026-10-11) | Active |
| MuJoCo | Physics | Apache-2.0 | 15,726; 3.16.0 (2026-10-14) | Offscreen render (gk) |
| NVIDIA Warp | Differentiable GPU sim | Apache-2.0 | 7,209; v1.18.0 (2026-10-05) | NVIDIA GPU for CUDA |
| OpenFOAM, Blender physics | Not researched | - | unverified | - |

## Group 4 - Programmatic editing and assembly
| Tool | Role | Control | License / cost (date) | Stars & last release | Maturity | Windows | Agent notes / limitations | Sources |
|---|---|---|---|---|---|---|---|---|
| FFmpeg | Base layer: filters, concat, xfade, overlay, subtitles, loudnorm | CLI | LGPL/GPL depending on build (gk); source-only distribution | Mirror 65,313 stars; **9.0.2 released 2026-09-18** (8.1.3 on 2026-09-21) | Highest | Yes (gyan.dev, BtbN builds) | Headless, repeatable; complex filtergraph syntax | ffmpeg.org/download.html |
| MoviePy | Python editing wrapper | Python | MIT | 14,994; v2.2.1 (2025-05-21); push 2026-08-26 | Mature, slow releases | Yes | v2 API differs from v1; slower than raw FFmpeg | GitHub |
| PyAV | FFmpeg bindings | Python | BSD-3 | 3,310; v19.0.1 (2026-10-03) | High | Yes (gk) | Low-level | GitHub |
| GStreamer | Pipeline framework | C/CLI/bindings | LGPL (gk) | 3,339 (mirror) | High | Yes | Steeper than FFmpeg | GitHub |
| MLT / melt | Framework behind Shotcut/Kdenlive | XML + CLI | LGPL-2.1 | 1,864; v7.42.0 (2026-10-03) | High | Yes | Headless melt renders | GitHub |
| editly | JSON declarative editing | JSON/CLI | MIT | 5,527; v0.15.0-rc.1 (2025-01-19); push 2025-05-12 | Stale | Yes | Only RC releases | GitHub |
| OpenTimelineIO | Timeline interchange | Python | Apache-2.0 | 2,024; push 2026-10-14 | High (ASWF) | Yes | Not a renderer | GitHub |
| auto-editor | Silence/motion cutting | CLI | Unlicense | 5,538; 31.7.2 (2026-10-03) | Active | Yes | Good first-pass cutter | GitHub |
| PySceneDetect | Shot detection | Python/CLI | BSD-3 | 5,253; v0.7.2 (2026-10-12) | Active | Yes | - | GitHub |
| Shotstack | JSON video API | REST | Sources disagree: $39/mo 200 credits (Wireflow, Sep 2026); $49/200 min 720p (Creatomate comparison); $0.40/min PAYG. Official page not read: unverified | - | Established | n/a | Cloud, async | wireflow.ai/blog/shotstack-pricing |
| Creatomate | Template video API | REST | Essential ~$41/mo ~144 min (secondary); another source $54: unverified | - | Established | n/a | - | creatomate.com/compare/shotstack-alternative |
| JSON2Video | JSON video API | REST | 1 credit = 1 s Full HD; 600 free credits (secondary): unverified | - | - | n/a | - | motionbox.io blog |
| Plainly | After Effects template cloud rendering | REST/UI | Per-render-minute; no price found | - | - | n/a | AE templates only | wireflow.ai |
| Rendi, Cloudinary, Mux | FFmpeg-as-service / media APIs | - | Not researched: unverified | - | - | - | - | - |

## Group 5 - NLE applications and scripting
| Tool | Control | Cost / limits (date) | Agent notes | Sources |
|---|---|---|---|---|
| DaVinci Resolve 21 | Python/Lua scripting; Fusion | Studio $295 (2026-10-17). **Free 21.1+ has no scripting**; Free 21.0 does. Community MCP bridge projects exist | Studio needed for automation; Free is 8-bit up to UHD/60fps | blackmagicdesign.com, pugetsystems.com (2026-09-10), cined.com |
| Premiere Pro | UXP (new), ExtendScript (deprecated; supported "through Sept 2026") | Subscription (price unverified) | UXP timeline API incomplete; conflicting reports on UXP release status (beta vs 25.6) | community.adobe.com, ppro-scripting.docsforadobe.dev |
| After Effects | ExtendScript, `aerender` CLI | Subscription. Whether headless aerender needs its own licence: sources conflict | Good for template farms (Plainly) | community.adobe.com threads |
| Final Cut Pro | FCPXML (1.13 with FCP 11 per CommandPost, Nov 2024) | Mac only | Generating FCPXML is an assembly route; Apple docs examples at 1.10 | developer.apple.com, fcp.cafe |
| Kdenlive / Shotcut | MLT XML projects | GPL; Shotcut 15,439 stars, v26.9.27 (2026-09-28); Kdenlive v26.08.2 (KDE/kdenlive) | Project files can be generated by hand/script | GitHub |
| CapCut | No official API found (guide checked 2026-10-15); community CapCutAPI writes draft files; ToS reportedly bans scripted access | free/pro | Not agent-safe | wireflow.ai/blog/capcut-api, json2video |
| Descript | Public API in open beta 2026 + MCP (secondary sources); plans from $16/mo annual (secondary) | - | Official docs not read: unverified | sonix.ai review |
| Captions, OpusClip, Kapwing, Canva video | Not researched: unverified | - | - | - |
| Subtitles | SRT, VTT, ASS (styling in ASS); burn in with FFmpeg `subtitles`/`ass` filters (gk) | - | - | - |

## Group 6 - Encoding and delivery basics
- **YouTube recommended upload (official page support.google.com/youtube/answer/1722171, accessed 2026-10-17 via search snippet):** MP4, moov atom at front, no edit lists; H.264 progressive, High Profile, CABAC, 2 consecutive B-frames, closed GOP (GOP = half frame rate), 4:2:0; audio AAC-LC / Opus / Eclipsa, 48 kHz, stereo or 5.1; keep native frame rate (24-60 common); deinterlace first. SDR bitrates: 2160p 35-45 Mbps (24-30fps) / 53-68 (48-60); 1440p 16/24; 1080p 8/12; 720p 5/7.5. HDR 1080p 10/15 Mbps. Audio bitrate not specified by Google.
- Codecs/containers (H.264, H.265, AV1, ProRes), NVENC, Rec.709 colour: not researched this session, unverified. Rule of thumb (gk): Rec.709 SDR, yuv420p H.264 for broadest compatibility.

## Disagreements and uncertainties
- Resolve scripting history: Puget/CineD say removed in 21.1; another project doc says external scripting was blocked on Free from 19.1. Current state (Free 21.1+ no scripting) agreed; 21.1 release notes not read directly.
- Premiere: ExtendScript sunset (Sept 2026) already passed; no confirmation of what happened. UXP availability reports conflict.
- Shotstack/Creatomate pricing: several secondary sources disagree; no official page read.
- Remotion licence terms change in v5.0; Automators pricing came from remotion.pro via summariser fetch.
- HyperFrames: 65k stars in 7 months is unusual; Windows support not stated.
- Unreal: royalty applies to runtime products; linear-content condition unclear (company revenue under $1M vs none).
- Houdini and Cinema 4D prices conflict across aggregators.
- Mirror repos' star counts not representative.
- Not researched: Cloudinary, Mux, Rendi, Captions, OpusClip, Kapwing, Canva, OpenFOAM, Descript official docs, Rive editor pricing, GSAP licence text, codec/colour details.

## Sources (accessed 2026-10-17)
- GitHub API (`gh api repos/...`) for all star/release/licence figures
- https://www.remotion.dev/docs/license ; https://www.remotion.pro/license ; https://www.remotion.dev/docs/ai/skills ; https://remotion.dev/docs/lambda/cost-example
- https://github.com/heygen-com/hyperframes
- https://www.pugetsystems.com/blog/2026/09/10/how-davinci-resolve-free-v21-1-scripting-changes-affect-puget-bench/ ; https://www.cined.com/es/davinci-resolve-21-1-released-ai-assistant-integration-via-mcp-individual-hdr-trims-and-python-scripting-moves-to-studio/ ; https://www.blackmagicdesign.com/products/davinciresolve
- https://www.blender.org/download/ ; https://developer.blender.org/docs/release_notes/5.0/eevee/
- https://ffmpeg.org/download.html
- https://support.google.com/youtube/answer/1722171
- https://ppro-scripting.docsforadobe.dev/ ; https://community.adobe.com/questions-729/extendscript-to-uxp-for-premiere-pro-1553924
- https://dev.epicgames.com/documentation/unreal-engine/using-command-line-rendering-with-move-render-queue-in-unreal-engine ; https://www.unrealengine.com/license
- https://docs.godotengine.org/en/4.x/tutorials/animation/creating_movies.html
- https://docs.isaacsim.omniverse.nvidia.com/6.2.0/common/license-isaac-sim-additional.html
- https://docs.unity3d.com/Packages/com.unity.recorder@2.6/manual/index.html ; https://unity.com/products/pricing-updates
- https://www.wireflow.ai/blog/shotstack-pricing ; https://creatomate.com/compare/shotstack-alternative ; https://www.wireflow.ai/blog/capcut-api ; https://json2video.com/how-to/capcut-api/ ; https://sonix.ai/resources/descript-review-pricing/amp/
- https://www.cgchannel.com/?p=64075 ; https://www.capterra.com/p/210368/Cinema-4D/pricing/
- https://community.adobe.com/t5/after-effects-discussions/licensing-requirement-to-run-aerender-as-background-job/m-p/14339769 ; https://fcp.cafe/news/20241121
