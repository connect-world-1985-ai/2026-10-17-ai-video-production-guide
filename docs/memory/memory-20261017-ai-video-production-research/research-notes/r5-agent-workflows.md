# R5 - How AI coding agents and agent systems produce and inspect video

Research / access date: 2026-10-17. GitHub star counts pulled via `gh api` on 2026-10-17 (stars show interest, not quality).
Evidence classes: **VERIFIED IMPL** = code/workflow publicly inspectable (I read the repo/README/SKILL); **PLAUSIBLE** = tech capable, exact workflow not inspectable; **PROMOTIONAL** = insufficient evidence / vendor or blog claim only.
Autonomy: **High** = agent runs plan->render from a prompt; **Med** = agent does most, human approves plan / reviews / supplies inputs; **Low** = substantial human prep/selection/editing.

Headline: coding-agent video today = **programmatic video (HTML/React/Manim/Blender-Python code rendered to MP4)** plus agent orchestration of generative-model APIs. It is inspectable and works for motion graphics, explainers and edits. Evidence for fully autonomous *cinematic* generative film is mostly paper-grade (small human evals) or demo-grade.

## 1. Agent skills and integrations (coding agent -> video tooling)

| Name | Type | What it does | Tools orchestrated | Evidence | Autonomy | Stars (2026-10-17) / date | Sources |
|---|---|---|---|---|---|---|---|
| Remotion Agent Skills (remotion-dev/skills) | Official skill pack | Best-practice skills for Remotion: remotion-create, -markup, -studio, -render, -maps, -captions, -saas | Remotion (React->MP4), Studio preview, render CLI; supports Claude Code, Codex, Kimi Code, Cursor | VERIFIED IMPL. Docs page gives example prompts but makes no explicit "prompt-to-video" claim | Med (human previews in Studio) | skills 5,269 (repo created 2026-01-19); remotion core 64,688 | [1][2][3] |
| Remotion Claude Code plugin | Official plugin | Create/edit Remotion projects, bundles skills | Remotion | Page exists (surfaced via search, not fetched) | Med | n/a | [4] |
| HeyGen HyperFrames (heygen-com/hyperframes) | Open-source HTML->MP4 framework with agent skills/plugin (Apache-2.0) | Agent writes HTML+CSS+GSAP/Three.js, lint/preview/deterministic render; Claude Code plugin + `npx skills add`; also Cursor, Gemini CLI, Codex | Puppeteer/Chrome + FFmpeg, CLI, Studio UI; 21 published skills | VERIFIED IMPL (README read). Exists. Blogs disagree on launch date (Mar 10 vs Apr 17 2026); repo created 2026-03-10 | Med | 65,651 (surprisingly high for age; read from API, not cross-checked) | [5][6] |
| browser-use/video-use | Open-source skill (Claude Code/Codex/Hermes) | Edits raw footage: cuts filler words (ElevenLabs transcripts), color grade, subtitles, animation overlays via HyperFrames/Remotion/Manim/PIL in parallel sub-agents; **self-evaluates rendered output at every cut boundary** (filmstrip + waveform), optional critic sub-agent, cap of 3 self-eval passes | ffmpeg, ElevenLabs Scribe, HyperFrames/Remotion/Manim, PIL | VERIFIED IMPL (SKILL.md read). Rule: user approves plain-English plan before cutting | Med (human supplies footage, approves strategy) | 29,160 (created 2026-04-12) | [7] |
| EveryInc/product-launch-video | Claude Code skill + Remotion scaffold | Brief + screen recording -> storyboard -> Remotion scenes -> render/audit -> **4 parallel critic agents** read ~20 PNG frames (design, readability, pacing, brand) | Remotion, ffmpeg (GIF) | VERIFIED IMPL | Med (human supplies brief, brand tokens, recording) | 62 (2026-04-20) | [8] |
| digitalsamba/claude-code-video-toolkit | Skills/commands/templates for Claude Code | `/setup`, `/video`: script, voiceover, music, visuals, Remotion render. README claims voiceover ~$0.01, AI clips ~$0.23, a 52 s short ~$0.80 | Remotion, Qwen3-TTS, FLUX.2, ACE-Step, LTX-2, Ideogram, Modal GPU, R2 | VERIFIED IMPL for tooling; cost numbers PROMOTIONAL (author-reported); demo MP4s hosted by author, human steering unknown | Med | 2,261 (pushed 2026-10-12) | [9] |
| openfilm/openfilm | Open-source "agent writes film as HTML" + local editor | Agent writes `film.html` (frame(t) per shot); Studio editor for hand edits | Browser (three.js/WebGL/canvas/GSAP), ffmpeg | VERIFIED IMPL (README); output quality not assessed | Med (explicit human editor) | 754 (created 2026-10-04) | [10] |
| Hainrixz/editor-pro-max | Remotion + Claude Code editor | Natural language -> Remotion videos | Remotion | PLAUSIBLE (not inspected deeply) | Med | 273 | [11] |
| Manim skills (yusuke710/manim-skill; ifrit98/Explainer; NousResearch hermes-agent manim-video skill) | Agent skills | Plan->Code->Render->Iterate for 3b1b-style Manim; Explainer adds local voiceover (Kokoro) | Manim CE, ffmpeg, TTS | VERIFIED that skills exist (repo descriptions/search); output quality not verified | Med | manim-skill 173; Explainer 10; hermes-agent 254,571 (general agent repo) | [12][13] |
| Anthropic `anthropics/skills` | Official skills repo | Listing 2026-10-17: academy-guide, algorithmic-art, brand-guidelines, canvas-design, claude-api, discernment-nudge, doc-coauthoring, docx, frontend-design, internal-comms, mcp-builder, pdf, pptx, skill-creator, slack-gif-creator, theme-factory, web-artifacts-builder, webapp-testing, xlsx. **No video-production skill** (closest: slack-gif-creator) | n/a | VERIFIED (negative finding) | n/a | 181,697 | [14] |
| Blender MCP (ahujasid/blender-mcp; PyPI now `mcp-for-blender`) | MCP server + Blender add-on | LLM drives Blender; agent writes Blender Python; 9 tools incl. `generate_3d` (Tripo, Hunyuan3D, Hyper3D Rodin), `search_assets`/`import_asset` (Poly Haven, Sketchfab, Poly Pizza) | Blender, 3D-gen APIs | VERIFIED IMPL (README). No end-to-end film claim by the repo | Med | 31,324 (created 2025-03-07) | [15] |
| ComfyUI MCP (artokun/comfyui-mcp; joenorton/comfyui-mcp-server) | MCP servers | artokun: "178 tools, 36 AI skills"; generate image/video/audio, author/run workflows, edit live graph | ComfyUI | VERIFIED (repo description); depth not inspected | Med | 830 / 410 | [16] |
| DaVinci Resolve MCP (samuelgursky) | MCP server | Scripting-API control: edit, media pool, render, grading, Fusion, Fairlight, analysis; README: 37 tools (390 full) | DaVinci Resolve Studio API | VERIFIED IMPL | Med | 3,589 | [17] |
| After Effects MCP (Dakkshin) / Premiere Pro MCP (hetpatel-11; leancoderkavy) | MCP servers | Remote control via ExtendScript / Premiere API | Adobe apps | VERIFIED (descriptions only) | Low-Med | AE 758; Premiere 711 and 400 | [18] |
| FFmpeg MCP (video-creator; egoist) | MCP servers | Dialogue-driven trim/stitch/overlay/concat | ffmpeg | VERIFIED (descriptions) | Med | 153 / 120 | [19] |
| MiniMax MCP (official) | MCP | TTS, image, video generation APIs | MiniMax | VERIFIED (description) | tool-call level | 1,590 | [20] |
| ElevenLabs MCP (official) | MCP | Voice/TTS tools | ElevenLabs | VERIFIED; **repo shows archived=true** on 2026-10-17 - check current status | tool-call level | 1,535 | [21] |
| Runway MCP plugin (runwayml) | Official plugin (Cursor etc.) | Generate images/video/audio via Runway hosted MCP | Runway | VERIFIED (description) | tool-call level | 4 (new, 2026-09) | [22] |
| Manim MCP (abhiemj) | MCP | Render Manim from LLM code | Manim | VERIFIED exists | Med | 652 (last push 2025-05) | [23] |
| fal.ai / Replicate / Luma MCP | - | Only tiny community repos found (<=4 stars); official fal/Luma MCP not located | - | Not established | - | - | gh search |
| punkpeye/awesome-mcp-servers | Directory | Large MCP list; I could not parse a video category | - | Not verified | - | 96,506 | [24] |

Unverifiable blog stats ("117K weekly installs", "28K stars", "2M videos/month") are not used.

## 2. Open-source agentic pipelines, research systems, products

| Name | Type | What it does | Models/tools orchestrated | Evidence | Autonomy | Paper / stars | Sources |
|---|---|---|---|---|---|---|---|
| Code2Video (showlab) | Research + repo (ICML 2026) | Planner/Coder/Critic agents write Manim code for educational videos | Claude Opus 4.1, GPT-5, GPT-4.1, Gemini 2.5 Pro (critic + judge); Manim | VERIFIED IMPL (repo + paper) | High per run | arXiv 2510.01174 (Oct 2025); 2,134 stars | [25][26] |
| TheoremExplainAgent (TIGER-AI-Lab) | Research + repo | Planner + coding agent -> Manim + TTS, >5 min theorem videos; TheoremExplainBench (240 theorems) | GPT-4o, Gemini 2.0 Flash, Claude 3.5 Sonnet, o3-mini | VERIFIED IMPL | High per run (retries up to 5) | arXiv 2502.19400; 1,512 stars | [27][28] |
| FilmAgent (HITsz-TMG) | Research + repo | Director/screenwriter/actor/cinematographer agents make a film in **virtual 3D spaces** (not generative video) | GPT-4o; fixed 21 actions, 9 shot types | VERIFIED IMPL; small eval | High | arXiv 2501.12909 (Jan 2025); 1,863 stars | [29] |
| MovieAgent (showlab) | Research + repo | Director/screenwriter/storyboard/location agents, hierarchical CoT, multi-shot long video from script + character bank | Models not named in abstract; no numbers in abstract | Repo exists; "SOTA" claim not checked against full paper | Med (needs script + character bank) | arXiv 2503.07314; 368 stars | [30] |
| ViMax (HKUDS) | Open-source agentic framework | Idea/Script/Novel->Video: story, characters, storyboard, shots; VLM picks between 2 keyframe candidates; video generation; assembly | OpenAI-compatible LLM (e.g. Gemini Flash-Lite via OpenRouter), Nano Banana, GPT Image 2, Veo, Seedance 2.0 Fast | VERIFIED IMPL (README). "Movie-grade" claims have demos but **no benchmark**; tech report cited as arXiv 2606.07649 (not opened) | Med: user supplies concept/script/style/API keys; revision loop | 12,676 stars; v1.2.0 2026-07-20 | [31] |
| HKUDS VideoAgent | Research + repo (EMNLP 2026) | Understand/edit/remake video (meme, commentary, music video); graph router + storyboard agent | Claude (router), GPT, DeepSeek, Gemini, CosyVoice, Whisper | VERIFIED IMPL; results self-reported (0.95 workflow composition success rate) | Med | arXiv 2606.23327; 1,952 stars | [32] |
| AutoMV | Research | Multi-agent full-length music video from a song (screenwriter, director, verifier) | Music analysis tools, image + video generators | Paper only (via abstract/search). Expert human raters preferred it over commercial baselines in 4 categories; LMM judges "promising but trail humans"; code not checked | High | arXiv 2512.12196 (Dec 2025) | [33] |
| Mora | Research | Multi-agent wrapper over open-source modules to imitate Sora | VBench T2V video quality 0.800 vs Sora 0.797 (paper's own comparison) | Paper (via search); code not inspected | Med | arXiv 2403.13248 | [34] |
| Anim-Director, StoryAgent, VideoGen-of-Thought, Open-Sora agents | Research | - | - | Not verified in this pass (no source found for Anim-Director) | - | - | - |
| MoneyPrinterTurbo; ShortGPT; short-video-maker | Open-source short-video automation | Topic -> script -> stock footage + TTS + subtitles -> MP4 (assembly, not generative) | LLM, stock APIs, TTS | VERIFIED exist | High for templated shorts | 132,265 (pushed 2026-10-17); 8,035 (last push 2025-02); 1,412 (2025-06) | [35] |
| video-db/Director; JimLiu/baocut | Open-source video agents | Agent frameworks; baocut: transcribe/subtitle/translate/dub/cut/animate with editable timeline | - | VERIFIED descriptions only | Med | 1,554 / 1,043 | [36] |
| Google Flow Agent | Product | After I/O 2026: in-Flow assistant that plans multi-step creative tasks, batch-edits, organizes assets; Gemini Omni Flash added | Gemini, Omni/Veo | PROMOTIONAL/secondary (Google Labs primary page not retrieved; outlets conflict on rollout) | Med ("under your direction") | - | [37] |
| OpenAI Sora app/API | Product, discontinued | Shutdown announced 2026-03-24 (several outlets). Later end dates (app 2026-04-26, API 2026-09-24) came from one secondary source | - | VERIFIED announcement; dates secondary | - | - | [38] |
| Invideo AI agent, Higgsfield, Kling/Runway agent modes, LTX Studio, Pictory | Products | Invideo described by review blogs as write/storyboard/generate/edit from a brief; Higgsfield = multi-model aggregator (no agent mode found) | Various | PROMOTIONAL (blogs/reviews only); Kling, LTX Studio, Pictory not researched | unknown | - | [39] |

## 3. "Coding agent as video producer" demos - classification

| Demo | Claim | Evidence found | Class | Autonomy notes |
|---|---|---|---|---|
| Remotion + Claude Code prompt-to-video (Jan 2026 blog/tutorial wave) | Plain-English prompt -> rendered MP4 | Official skills repo/docs inspectable; tutorials (Tella etc.) show iterative prompting with Studio preview. I could **not** find a specific viral post or verified view counts | VERIFIED IMPL for pipeline; viral claims unverified | Human previews and re-prompts; motion-graphics/template style, not footage |
| Remotion founder Jonny Burger Claude Code sessions (macOS terminal composition) | Iterative building | Only second-hand blog summaries | PLAUSIBLE | Iterative, human in loop |
| browser-use/video-use | Edit video with Claude Code, with self-eval | Repo + SKILL.md read, self-eval procedure documented | VERIFIED IMPL (workflow); output quality not independently judged | Human supplies footage, approves plan |
| EveryInc product-launch-video | Launch video with 4-critic review | Repo + SKILL.md read | VERIFIED IMPL | Human supplies brief/recording |
| claude-code-video-toolkit demos | Concept->MP4 for cents | Repo inspectable; MP4s hosted by author; costs author-reported | VERIFIED tooling / PROMOTIONAL costs | Prompt count/edits unknown |
| Codex/GPT + Blender MCP "hospital corridor flythrough in ~45 min" (LinkedIn) and Developers Digest "Mars car game + trailers" | Prompts -> 3D scene -> cinematic clip | Single LinkedIn post and a video page seen via search; model name in them could not be verified by me; second uses Higgsfield plugin + Seedance | PROMOTIONAL | Uncontrolled; third-party paid tools involved |
| Manim agents (Code2Video, TheoremExplainAgent) | Autonomous explainer videos | Papers + repos + numbers (below) | VERIFIED IMPL (research-grade) | Success rate depends strongly on model |
| Fully autonomous cinematic film from one prompt by a coding agent | Occasional social claims | Nothing inspectable found | PROMOTIONAL | - |

Numbers:
- Code2Video (arXiv 2510.01174), aesthetics/TeachQuiz: human 3Blue1Brown 99.7/97.1; Veo3 9.0/2.5; Claude Opus 4.1 direct code 37.8/40.0; Code2Video(Claude Opus 4.1) 87.9/86.0; (GPT-4.1) 79.0/82.0; (GPT-5) 72.2/80.0. Cost ~13.8 min and 43.1K tokens per topic vs 2.8 min / 2.3K tokens direct. Gemini 2.5 Pro is both in-system Critic and aesthetics judge. Human study: 8 participants per group; Code2Video 81.8 aesthetics vs 96.5 human-made.
- TheoremExplainAgent (arXiv 2502.19400) full-video success: o3-mini 93.8% (82.1% with RAG), GPT-4o 55.0%, Gemini 2.0 Flash 14.6%, Claude 3.5 Sonnet v1 2.1%. Top failure = Manim hallucinations, then LaTeX errors; overlap/misalignment common. Auto metrics vs humans: Spearman 0.72 visual relevance, 0.42 layout, only 0.14-0.17 for accuracy/depth/flow/consistency. Models are 2025-era; current models would differ.

## 4. Video understanding / QA for agents

### Model input
| Item | Fact | Source |
|---|---|---|
| Gemini API video | Default 1 fps + audio; custom `fps` in `processing`; ~66 tok/frame (low res) or 258 (high); audio 32 tok/s => ~100 tok/s low res, ~300 tok/s high. 1M-context models: ~3 h low res / ~1 h high res. File API 20 GB paid / 2 GB free; clipping via start/end offset; MM:SS timestamps. Inline limits stated inconsistently (<100 MB vs ~20 MB). Optional "agentic mode" for long video (up to 88% fewer tokens) | [40] |
| Claude | Vision docs: **images only** (JPEG/PNG/GIF/WebP); GIF animation unsupported, first frame only. Up to 600 images/request (100 for 200k-context models); >20 images triggers stricter ~2000 px limit. Tokens per image = ceil(w/28)*ceil(h/28); standard cap 1,568 tokens, high-res tier (Claude 4.7+) cap 4,784; 1920x1080 = 1,560 (standard) / 2,691 (high-res). Counting approximate; tiny/low-quality images error-prone; cannot detect AI-generated images. No video block documented | [41] |
| Practical agent pattern | Extract frames/filmstrips/contact sheets + waveform + transcript, send as images. video-use: `timeline_view` filmstrip+waveform at cut boundaries (±1.5 s); EveryInc: ~20 key PNG frames to critic agents; ViMax: VLM picks keyframe candidate | [7][8][31] |
| Frame extraction | ffmpeg (fps / scene filter), PySceneDetect (5,253 stars, active 2026-10-17); not benchmarked by me | [42] |

### Metrics
| Metric | Measures | Evidence | Source |
|---|---|---|---|
| VBench | 16 dimensions for generated video; human-preference annotations validate each | arXiv 2311.17982; no numbers in abstract | [43] |
| VBench-2.0 | Intrinsic faithfulness: human fidelity, controllability, creativity, physics, commonsense; VLM/LLM + specialist detectors | arXiv 2503.21755; no agreement stats in abstract | [44] |
| VideoScore | Learned multi-aspect scorer (VideoFeedback, 37.6K videos, 11 generators) | Spearman 77.1 with humans on own test set (~+50 over prior metrics, authors' claim); better on EvalCrafter, GenAI-Bench, VBench | [45] |
| DOVER / FAST-VQA | Technical + aesthetic quality of UGC video | DOVER repo 531 stars, last push 2024-08; not benchmarked | [46] |
| SyncNet (LSE-C/D) | Audio-visual lip-sync | repo 913 stars; only relevant to talking heads | [47] |
| Loudness, subtitle WER vs ASR | Deterministic checks | video-use masters to -14 LUFS / -1 dBTP and checks waveform pops; no benchmark | [7] |
| CLIP score, FVD, EvalCrafter | Alignment / distribution | Not researched | - |

### VLM-as-judge reliability
- Temporal order: TOMATO (arXiv 2410.23266): 1,484 questions, 31 models; humans 95.2% (full video); best Qwen2-VL-72B 37.9%, GPT-4o 37.7%; shuffling 16 frames drops average accuracy 37.8% -> 28.5% [49]. 2024-era models.
- Vinoground (arXiv 2410.02763): human ~90%, best (GPT-4o) ~50% on temporal counterfactuals [50].
- Physics / fine motion (secondary, from a search summary, papers not read in full): PhysicsLENS 439 human-annotated videos, AUC 0.72 for plausibility; a motion study with a Gemini-3.1-Flash judge: instance r=0.774 simple motion vs 0.116 part-level, system-level Pearson -0.146 [51].
- Judge setup matters: SimuScene (arXiv 2602.10840, Appendix C): VLM judge viewing rendered video 87.8% agreement with humans vs 69.1% for text-only LLM judge [52]. Evidence-grounded checklists reduce false positives (VideoScience-Bench, secondary).
- Circularity: Code2Video uses Gemini 2.5 Pro as both critic and judge (my observation; unquantified).
- Gaps: no study found isolating counting, small text, or fast motion for video judges.

Rough cost (derived, not from a paper; no price tables fetched): Gemini high-res ~300 tok/s => 60 s ~18K tokens; 60 Claude standard-tier frames at ~1,560 tokens each ~94K tokens.

## 5. Multi-agent vs single-agent evidence

| Study | Finding | Strength |
|---|---|---|
| FilmAgent (arXiv 2501.12909) | Human eval, 15 ideas, avg score: CoT GPT-4o 2.63; CoT o1 3.30; FilmAgent Solo GPT-4o 3.04; FilmAgent Group GPT-4o 3.98. Plot 1.87->3.53, camera 2.07->3.53 | Weak-moderate: tiny sample, annotator count/agreement not reported, no per-mechanism ablation, o1 via ChatGPT web UI |
| Code2Video ablation (GPT-4.1 base 79.0/82.0) | No Planner -> 38.1/40.5; no Critic -> 72.5/60.7; no visual anchors -> 69.2/55.2; staged pipeline vs direct code (Claude 37.8/40.0 -> 87.9/86.0) | Moderate, but this is a staged tool pipeline judged by an LLM; planner (decomposition) matters most |
| Kim et al., "Towards a Science of Scaling Agent Systems" (arXiv 2512.08296) | 260 configs (v2; v1 and Google blog say 180), 5 architectures: multi-agent helps parallelizable tasks, hurts sequential; 87% accuracy predicting best architecture | Strong general evidence; not video |
| Cemri et al., "Why Do Multi-Agent LLM Systems Fail?" (arXiv 2503.13657) | 7 frameworks, >200 tasks, 14 failure modes; 41%-86.7% failure rates in v3 abstract; gains often minimal vs single-agent | Strong general caution; not video |
| Practitioner repos | EveryInc 4 parallel critics; video-use "roast" critic, 3-pass cap | Anecdotal, no ablation |

Takeaway: evidence supports role decomposition plus critic loops fed with real render output (planner, coder, visual critic). I found no head-to-head published study showing N peer agents beat one strong agent with the same loop on video.

## 6. Disagreements and uncertainties
- HyperFrames launch date: blogs say Mar 10 or Apr 17 2026; repo created 2026-03-10. 65.6K stars is unusually high; API value used as is.
- Remotion "prompt-to-video" claims are third-party; viral post and view counts unverified.
- Google Flow Agent: primary Google post not retrieved; rollout conflicts across outlets.
- Sora: announcement date consistent (2026-03-24); later end dates single-source.
- ViMax / VideoAgent arXiv IDs (2606.x) from READMEs; reports not opened. ViMax has no benchmark in README.
- Code2Video: abstract "40% gain" vs larger table gains; self-judging risk.
- TheoremExplainAgent numbers reflect 2025-era models.
- ElevenLabs MCP repo archived on GitHub; confirm official status.
- Not covered: Kling / LTX Studio / Pictory agents, official fal/Luma MCP, CLIP/FVD/EvalCrafter/DOVER numbers, Anim-Director / StoryAgent / VideoGen-of-Thought, frame-based QA pricing, awesome-mcp-servers video category.

## 7. Sources (all accessed 2026-10-17)
[1] https://github.com/remotion-dev/skills
[2] https://www.remotion.dev/docs/ai/skills
[3] https://github.com/remotion-dev/remotion
[4] https://www.remotion.dev/docs/ai/claude-code-plugin (surfaced via search)
[5] https://github.com/heygen-com/hyperframes
[6] https://themenonlab.blog/blog/heygen-hyperframes-video-as-code ; https://yuv.ai/blog/heygen-hyperframes-html-video (secondary)
[7] https://github.com/browser-use/video-use
[8] https://github.com/EveryInc/product-launch-video
[9] https://github.com/digitalsamba/claude-code-video-toolkit
[10] https://github.com/openfilm/openfilm
[11] https://github.com/Hainrixz/editor-pro-max
[12] https://github.com/yusuke710/manim-skill ; https://github.com/ifrit98/Explainer
[13] https://github.com/NousResearch/hermes-agent
[14] https://github.com/anthropics/skills
[15] https://github.com/ahujasid/blender-mcp
[16] https://github.com/artokun/comfyui-mcp ; https://github.com/joenorton/comfyui-mcp-server
[17] https://github.com/samuelgursky/davinci-resolve-mcp
[18] https://github.com/Dakkshin/after-effects-mcp ; https://github.com/hetpatel-11/Adobe_Premiere_Pro_MCP ; https://github.com/leancoderkavy/premiere-pro-mcp
[19] https://github.com/video-creator/ffmpeg-mcp ; https://github.com/egoist/ffmpeg-mcp
[20] https://github.com/minimax-AI/MiniMax-MCP
[21] https://github.com/elevenlabs/elevenlabs-mcp
[22] https://github.com/runwayml/runway-mcp-plugin
[23] https://github.com/abhiemj/manim-mcp-server
[24] https://github.com/punkpeye/awesome-mcp-servers
[25] https://arxiv.org/html/2510.01174 ; [26] https://github.com/showlab/Code2Video
[27] https://arxiv.org/html/2502.19400 ; [28] https://github.com/TIGER-AI-Lab/TheoremExplainAgent
[29] https://arxiv.org/abs/2501.12909 ; https://arxiv.org/html/2501.12909 ; https://github.com/HITsz-TMG/FilmAgent
[30] https://arxiv.org/abs/2503.07314 ; https://github.com/showlab/MovieAgent
[31] https://github.com/HKUDS/ViMax
[32] https://github.com/HKUDS/VideoAgent
[33] https://arxiv.org/html/2512.12196v1 (via search summary)
[34] https://arxiv.org/abs/2403.13248 (via search summary)
[35] https://github.com/harry0703/MoneyPrinterTurbo ; https://github.com/RayVentura/ShortGPT ; https://github.com/gyoridavid/short-video-maker
[36] https://github.com/video-db/Director ; https://github.com/JimLiu/baocut
[37] https://www.fonearena.com/blog/483182/google-i-o-2026-google-flow-music-gemini-omni-ai-agents-mobile-apps.html ; https://www.simpliaxis.com/resources/what-is-google-flow
[38] https://9to5google.com/2026/03/24/openai-shutting-down-sora-video-generation-app-but-without-explaining-why/ ; https://engadget.com/ai/openai-is-shutting-down-its-sora-video-generation-app-211023358.html
[39] https://higgsfield.ai/blog/best-ai-video-generators-2026 ; https://chatcut.io/blog/best-ai-tools-for-creating-videos (vendor/review, low reliability)
[40] https://ai.google.dev/gemini-api/docs/video-understanding
[41] https://platform.claude.com/docs/en/build-with-claude/vision
[42] https://github.com/Breakthrough/PySceneDetect
[43] https://arxiv.org/abs/2311.17982 ; [44] https://arxiv.org/abs/2503.21755 ; [45] https://arxiv.org/abs/2406.15252
[46] https://github.com/QualityAssessment/DOVER ; [47] https://github.com/joonson/syncnet_python
[49] https://arxiv.org/html/2410.23266 ; [50] https://arxiv.org/abs/2410.02763
[51] Search summary citing https://arxiv.org/html/2610.01162v1 (PhysicsLENS), https://arxiv.org/pdf/2606.04773, https://arxiv.org/pdf/2502.20694 (not read in full)
[52] https://arxiv.org/html/2602.10840
Multi-agent: https://arxiv.org/abs/2512.08296 ; https://arxiv.org/abs/2503.13657 (via search summaries)
Demo searches: https://www.tella.com/blog/how-to-use-remotion-agent-skills-with-claude-code ; https://www.startuphub.ai/ai-news/general/2026/remotion-ai-video-makes-production-code-from-plain-prompts ; https://www.developersdigest.tech/topics/ai-video ; https://tw.linkedin.com/in/tonytsao3d (unverified LinkedIn post)
