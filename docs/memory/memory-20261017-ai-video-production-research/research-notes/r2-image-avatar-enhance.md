# R2 fact sheet: image models, digital humans, enhancement/matting for video

Research date: 2026-10-17. All "seen" dates are 2026-10-17 unless stated. GitHub stars, licences and last-push dates were read live via the GitHub API on 2026-10-17 (primary data). Prices from vendor pages are marked [V]; prices from aggregators, resellers or competitor blogs are marked [3P]. Anything not confirmable is "unverified". Web-search summaries were a secondary layer; where a page was actually fetched, the source list says "fetched".

---------------------------------------------------------------------
## A. Image generation and editing (keyframes / assets)

### Landscape summary
- The leaderboard moved fast in 2026. Artificial Analysis (AA) text-to-image arena (AA-Image-T2I v2.1, fetched 2026-10-17, no snapshot date shown on the page), top of the list: GPT Image 2.5 Sunburst (max) Elo 1220 and Flare (max) 1207 (both Sep 2026), GPT Image 2 (high) 1186 (Apr 2026), Nano Banana 2.1 1174 (Oct 2026), Grok Imagine Image 2.0 1167, MAI-Image-2.6 1166, Nano Banana 2 1140, Muse Image 1127, GPT Image 1.5 1123, FLUX 3 Image 1116 (Oct 2026), Nano Banana Pro 1115. Open-weights leaders on AA: Qwen-Image-2.1 1042 (Sep 2026, "no API"), Ideogram 4.0 (Quality) 1026, Ideogram 4.0 1001.
- A search snippet of an older or cached AA copy showed different numbers (GPT Image 2 high 1339, HiDream-O1-Image-1.5 1265, Cosmos3-Super as open-weights leader). Elo scales differ between AA versions, so do not compare numbers across snapshots. Only the ordering of the fetched v2.1 table is used here.
- Closed models lead on quality. Open-weights models (Qwen-Image-2.1, FLUX.2 klein/dev, HiDream, SD family) lead on controllability and local use. Qwen-Image-2.1 is reported to have moved to a research-only licence (see section D).
- Practical pattern for video keyframes: generate or edit a start frame (and end frame) with an image model, keep character identity via reference images (closed models) or LoRA / IP-Adapter / ControlNet (open), then pass the frames to an image-to-video model.
- Midjourney has no official API (third-party statement, unverified against Midjourney); only reseller APIs.

### Table A1: image models
| Tool | Category | Capability | Control mechanism | Deployment | Price (date) | License / stars | Maturity | Limitations | Sources |
|---|---|---|---|---|---|---|---|---|---|
| OpenAI GPT Image 2.5 (Sunburst / Flare), GPT Image 2 | closed T2I + edit | AA #1/#2 (Sep 2026); Sunburst positioned for edits | prompt, reference images, edit via Images API | cloud API | Token pricing [3P citing OpenAI model page]: $5/M text in, $8/M image in, $30/M image out. Estimated 1024sq output only [3P, Sep 2026]: low ~$0.0059, medium ~$0.0132, high ~$0.0527, max ~$0.211. Official pricing page not read (redirect only) | proprietary | high (leader) | cost varies with quality; per-image estimates conflict | S1, S5, S6 |
| Google Nano Banana 2.1 (`gemini-nano-banana-2.1`) | closed T2I + edit | AA #4; multi-image reference, conversational edit | prompt + reference images | Gemini API / Vertex | [V] ai.google.dev fetched 2026-10-17: $0.0336 (1K), $0.0504 (2K), $0.113 (4K); batch about half | proprietary | high | model IDs and tiers change quickly | S2 |
| Nano Banana 2 (`gemini-3.1-flash-image`, Feb 2026) | closed | AA #7 | same | API | [V] $0.045 (0.5K), $0.067 (1K), $0.101 (2K), $0.151 (4K); batch about half | proprietary | high | - | S2 |
| Nano Banana Pro (`gemini-3-pro-image`) | closed | AA #13 | same | API | [V] $0.134 (1K/2K), $0.24 (4K) | proprietary | high | pricier | S2 |
| Nano Banana 2 Lite | closed | AA #15 | same | API | [V] $0.0336 (1K) | proprietary | medium | - | S2 |
| Nano Banana original (`gemini-2.5-flash-image`) | closed | - | - | API | [V] $0.039; page marks it deprecated, shutdown scheduled 2026-10-02 | proprietary | retired | do not build on it | S2 |
| Imagen 4 | closed | not listed on Gemini pricing page | - | - | unverified | proprietary | unverified | status not confirmed | S2 |
| Black Forest Labs FLUX 3 (Image, Video, Action) | closed multimodal | announced 2026-07-23; FLUX 3 Video GA about Aug 4-5; FLUX 3 Image on AA #12 (Oct 2026) | prompt, image-to-video, continuation | cloud API (BFL, partners) | FLUX 3 Image Klein [V docs.bfl.ai]: $0.008 (768sq), $0.009 (1K), $0.011 (1.5K), $0.014 (2K), $0.036 (4K). Other FLUX 3 prices not captured | no open weights at launch; open versions "planned later in 2026" [3P] | medium-high (new) | image availability dates conflict between sources | S3, S4, S7 |
| FLUX.2 [pro]/[flex]/[max]/[klein] | closed + open | high-quality T2I and multi-reference edit | references, prompt | API; klein/dev local | [3P, BFL help page June 2026] klein from $0.014 (4B) / $0.015 (9B); pro $0.03/MP T2I, $0.045/MP edit; flex $0.05 or $0.06/MP (sources disagree) | klein 4B Apache-2.0; 9B and dev non-commercial or paid commercial. GitHub black-forest-labs/flux2: 2,784 stars, Apache-2.0 (repo code) | high | licence differs per variant | S3, S4, S8 |
| FLUX.1 Kontext (pro/max/dev) | edit model | instruction-based editing, character consistency | text instruction + ref image | API; dev 12B open | [3P] about $0.04 pro / $0.08 max per image | dev non-commercial. black-forest-labs/flux repo 26,022 stars | legacy line, still used | superseded by FLUX.2/3 | S3, S8 |
| Qwen-Image-2.1 (Alibaba, 2026-09-20) | open-weights T2I + edit, unified | 7B; native RGBA output; up to 10 reference images; 2K | references, localized edit | local (HF/ModelScope); AA says no API | free weights | reported Qwen Research License, commercial use needs separate agreement [3P, not verified on HF card]. Earlier QwenLM/Qwen-Image repo: 8,407 stars, Apache-2.0 | medium | licence; "Turbo" variant claimed Oct 9 (unverified) | S9, S8 |
| Ideogram 4.0 | T2I (strong text rendering) | AA open-weights #2/#3 (Jun 2026) | prompt | API / self-host (claims conflict) | about $0.06/image via Together [3P] | unverified | medium-high | access path claims conflict | S10 |
| ByteDance Seedream 5.0 Lite / Pro | closed | T2I + edit | references | API (BytePlus, OpenRouter) | OpenRouter [3P]: Lite $0.035, Pro from $0.045 | proprietary | medium-high | prices vary by host | S10 |
| Recraft V4 / V4.1 | closed (vector + raster) | brand/vector assets | style refs | API | OpenRouter [3P]: V4 Styles from $0.035; V4.1 Vector $0.08; V4.1 Pro Vector $0.30 | proprietary | medium | - | S10 |
| Midjourney V8 / 8.1 / 8.2 | closed | high aesthetic quality | web/Discord prompt, style refs | web app; no official API (3P claim) | resellers about $0.08-0.24 per 4-image request [3P]; official subscriptions not verified | proprietary | high (consumer) | automation only via resellers; ToS risk | S11 |
| HiDream-I1 / O1 | open T2I | appeared on an older AA snapshot | prompt | local | free | MIT; HiDream-ai/HiDream-I1 2,509 stars (last push 2025-07) | medium | I1 repo stale | S8 |
| Stable Diffusion family (SD3.5, SDXL) | open | base of the LoRA/ControlNet ecosystem | LoRA, ControlNet, IP-Adapter | local | free | Stability-AI/sd3.5 1,539 stars MIT (push 2025-01); generative-models 27,302 stars MIT (push 2025-12) | mature, no longer leading | behind 2026 leaders in quality | S8 |

### Table A2: consistency techniques and hosts (stars as of 2026-10-17)
| Tool | Category | Capability | Control mechanism | Deployment | License / stars / last push | Maturity | Limitations | How an agent calls it |
|---|---|---|---|---|---|---|---|---|
| ControlNet (lllyasviel) | consistency | pose/depth/edge conditioning | conditioning images | local | Apache-2.0, 34,122 stars, 2024-02 | mature, stable | tied to SD-era models | via ComfyUI / diffusers |
| comfyui_controlnet_aux | preprocessors | pose/depth extractors | nodes | local | Apache-2.0, 4,230 stars, 2026-10-11 | active | - | ComfyUI workflow |
| IP-Adapter (Tencent) | identity/style transfer | image-prompt conditioning | reference image | local | Apache-2.0, 6,701 stars, 2024-06 | mature, stale upstream | SD1.5/SDXL era | ComfyUI node (ComfyUI_IPAdapter_plus: GPL-3.0, 6,146 stars, 2025-04) |
| LoRA training: kohya-ss/sd-scripts, ostris/ai-toolkit | consistency | train character/style LoRA | dataset | local GPU | sd-scripts Apache-2.0 7,244 stars; ai-toolkit MIT 12,334 stars; both pushed within days of 2026-10-17 | active | needs GPU and dataset curation | CLI scripts |
| ComfyUI | host (node graph) | any pipeline incl. video | JSON workflow; HTTP API `/prompt`, `/history/{id}`, `/view` on port 8188 | local or Comfy Cloud | GPL-3.0, about 138k stars (API returned 138000, looks rounded), release v0.41.0 (2026-10-15) | very active, de-facto standard | workflows fragile to node updates | HTTP API; community MCP servers: artokun/comfyui-mcp 830 stars (push 2026-10-14), joenorton/comfyui-mcp-server 410 stars; comfy-cli 1,015 stars |
| Comfy Cloud | host | hosted ComfyUI | API with concurrency by tier | cloud | [3P/official snippet] Standard $20/mo (4,200 credits), Creator $35 (7,400), Pro $100 (21,100); billed by workflow runtime. A $700 Team tier appears in one source only (unverified) | production | parity of cloud API with local `/prompt` not confirmed | API key |
| AUTOMATIC1111 WebUI | host | legacy GUI | txt2img REST via `--api` | local | AGPL-3.0, 165,070 stars, 2026-03-02 | mature, slow | poor fit for modern models | REST |
| Forge (lllyasviel) | host | A1111 fork | same | local | AGPL-3.0, 13,070 stars, 2025-07-31 | stale | - | REST |
| diffusers (Hugging Face) | library | run most open image/video models in Python | Python API | local/cloud | Apache-2.0, 34,744 stars, v0.41.0 (2026-10-06) | active | - | Python scripting, best fit for agents |

---------------------------------------------------------------------
## B. Digital humans, avatars, talking heads, lip-sync, motion capture

### Landscape summary
- Commercial avatar platforms (HeyGen, Synthesia, D-ID, Tavus, Hedra) sell subscription plus credits plus API, and enforce consent for digital twins. Lip-sync specialists (sync.so) bill per second of video. Large-lab audio-driven human video (ByteDance OmniHuman 1.5, Kling Avatar) is mainly reachable through resellers; official prices were not captured.
- Open-source audio-driven video moved from SadTalker/Wav2Lip to diffusion-transformer models: Wan2.2-S2V, InfiniteTalk/MultiTalk, FantasyTalking, EchoMimic v3, Hunyuan-Avatar. Several have non-Apache or unclear licences; check each.
- Video-based motion capture (Move.ai, Autodesk Flow Studio, DeepMotion, Rokoko) is subscription/credit based. Flow Studio tiers are partly confirmed by an Autodesk press release (Aug 2025).

### Table B1: commercial avatar, lip-sync, mocap
| Tool | Category | Capability | Control mechanism | Deployment | Price (date) | License | Maturity | Limitations / consent policy | Sources |
|---|---|---|---|---|---|---|---|---|---|
| HeyGen | avatar platform | digital twin, photo avatar, Avatar IV, Video Agent, translation | script, avatar id, API, MCP integration | cloud | [V] fetched 2026-10-17: Free $0 (3 videos/mo), Creator $29 ($24 annual), Pro $49, Business $149 + $20/seat, Enterprise custom. API is a separate pay-as-you-go wallet from $5; Avatar IV about 6 credits/min via API [3P]; no free API credits since Feb 2026 [3P] | proprietary | mature | Digital twin needs on-camera consent statement; pre-recorded consent only for whitelisted accounts; photo avatars exempt; moderation policy forbids avatars of others without explicit consent; face geometry processed for verification | S13, S14 |
| Synthesia | avatar platform | stock + personal avatars, API | script, API | cloud | [V] fetched 2026-10-17: Basic $0 (10 free min), Starter $29, Pro $89, Enterprise custom; which plan includes API is unclear on the page | proprietary | mature | Customer contractually responsible for consent of the custom-avatar person (3P summary of ToS); stock avatars need written permission for paid social ads; face/voice biometric processing disclosed | S15, S16 |
| D-ID | avatar / talking head, streaming agents | Agents V4 Expressive announced 2026-03-17 [3P] | API, streaming | cloud | [3P, competitor Creatify blog] Lite $4.70, Pro $16-29, Launch $35, Scale $138.60; credits per 15-s block; official page not captured | proprietary | mature | policy for living digital twins not found (unverified) | S17 |
| Tavus | conversational avatar (CVI) | real-time replicas from 2-min video or image | API | cloud | [V] fetched 2026-10-17 (page shows two plan sets): newer set Free 20 min, Starter $22, Builder $59, Growth $397, Business $975; overage about $0.26-0.37/min; `test_mode` available | proprietary | production | consent workflow white-labelable on Enterprise | S18 |
| Hedra Character-3 | audio-to-video character | 6 credits/sec [3P tracker Jun-Jul 2026]; at about $0.01/credit that is about $3.60/min (my calculation, not a published price) | API, studio | cloud | Basic $15/mo for 1,500 credits [3P]; Hedra pricing page fetched but had no numbers | proprietary | medium | consent policy not verified | S19 |
| sync.so (Sync Labs) | lip-sync / dubbing | models sync-3, lipsync-2-pro, react-1 | REST API + SDKs | cloud | [V] fetched 2026-10-17: plans $5/$19/$49/$249 per month plus usage $0.05/s (about $3.00/min) falling to $0.04/s at Scale; billed per second | proprietary | production | video length cap per plan (1 to 30 min) | S20 |
| ByteDance OmniHuman 1.5 | single image + audio to video | audio up to about 35 s per request | API (BytePlus; resellers) | cloud | official unverified. Resellers [3P]: $0.045-0.06/s (MuAPI), $0.14 (ModelsLab), $0.168 (ApiPass), $0.177 (EvoLink) | proprietary; no open repo found | medium | huge price spread; likeness policy not verified | S21 |
| Kling AI Avatar (v1/v2) | image + audio to video | via Kling or fal.ai | API | cloud | fal.ai v2 [3P]: Pro $0.115/s, Standard $0.0562/s; Picsart lower; sources conflict | proprietary | medium | v1 and v2 prices mixed up across pages | S22 |
| Autodesk Flow Studio (ex Wonder Studio) | video mocap + CG character replacement | AI mocap 10 credits/s; live action 20 credits/s | web UI; export to Maya/Blender/Unreal | cloud | [3P tracker] Free 300 credits (720p, watermark), Lite $10 (2,100), Standard $45 (6,000), Pro $95 (12,000); Autodesk press release Aug 2025 confirms Lite cut from $20 to $10 and a free tier | proprietary | production | credit hungry; no public API found (unverified) | S23 |
| Move.ai (Move One) | markerless mocap from video | single-camera mocap | app/web | cloud | [Move help centre] Starter $15 (180 credits), Basic $35 (480), Teams $75/user (4,000 shared); another Move docs page lists $15/$50/$250 (conflict) | proprietary | production | pricing sources inconsistent | S24 |
| DeepMotion, Rokoko | video mocap | - | web | cloud | one 3P roundup: DeepMotion free to $83/mo, Rokoko software free to $50/mo; unverified | proprietary | production | primary pages not read | S23 |
| Mixamo, Character Creator, MetaHuman | rigging/animation, character creation | not researched this session | - | - | unverified | - | - | no data collected | - |

### Table B2: open-source talking head / body animation (stars as of 2026-10-17)
| Tool | Capability | Control | Deployment | License / stars | Last push | Maturity / limitations | Agent calling |
|---|---|---|---|---|---|---|---|
| Wan2.2 (S2V-14B 2025-08-26, Animate-14B 2025-09-19) | speech-to-video, character animation/replacement | image + audio / reference video | local GPU (large), Replicate host | repo Apache-2.0, 17,977 stars; checkpoint-level licence not verified | 2026-09-21 | active; VRAM heavy | Python CLI, ComfyUI wrapper kijai/ComfyUI-WanVideoWrapper (6,734 stars, Apache-2.0) |
| InfiniteTalk / MultiTalk (MeiGen-AI) | long-form / multi-person audio-driven video | image/video + audio | local | Apache-2.0; InfiniteTalk 8,085 stars, MultiTalk 3,001 | 2026-05-22 | active | CLI / ComfyUI |
| FantasyTalking | portrait audio-driven | image + audio | local | Apache-2.0, 1,629 stars | 2026-01-26 | moderate | CLI |
| EchoMimic v2 / v3 (antgroup) | half-body audio-driven | image + audio | local | Apache-2.0; v2 4,659 stars, v3 1,091 | v3 2026-03-18 | moderate | CLI |
| HunyuanVideo-Avatar | audio-driven | - | local | NOASSERTION (custom licence), 2,184 stars | 2025-12-16 | check licence | CLI |
| LivePortrait (KwaiVGI) | expression/head-pose retargeting | driving video | local, fast | NOASSERTION, 19,254 stars | 2026-06-01 | mature | CLI / ComfyUI |
| MuseTalk (TMElyralab) | real-time lip-sync | audio | local | NOASSERTION, 6,737 stars | 2025-09-26 | moderate | CLI |
| LatentSync (ByteDance) | lip-sync | audio | local | Apache-2.0, 6,149 stars | 2025-06-20 | slowing | CLI |
| Hallo2 / Hallo3 (Fudan) | audio-driven portrait | image + audio | local | MIT; 3,749 / 1,417 stars | 2025-02 / 2025-03 | stale | CLI |
| SadTalker | talking head | image + audio | local | NOASSERTION, 14,140 stars | 2024-06 | legacy | CLI |
| Wav2Lip | lip-sync | audio | local | no licence listed, 13,242 stars | 2025-06 | legacy; commercial use terms unverified | CLI |
| ByteDance OmniHuman (open code) | - | - | - | no public GitHub repo found (bytedance/OmniHuman-1 returned 404) | - | closed | - |

---------------------------------------------------------------------
## C. Enhancement, interpolation, restoration, matting, segmentation

### Landscape summary
- Segmentation/tracking is dominated by Meta SAM 2 (Apache-2.0) and SAM 3 (text/concept prompts plus video tracking; HF licence "other", gated; repo pushed 2026-10-14). SAM 3 is the most agent-friendly segmentation tool because it takes a text prompt.
- Matting/background removal: rembg (MIT, active, v2.0.85 on 2026-09-20), BiRefNet (MIT, active), RobustVideoMatting (GPL-3.0, stale since 2024).
- Upscaling: Real-ESRGAN (BSD-3, stale since 2024-08 but widely embedded), SeedVR / SeedVR2 (Apache-2.0, diffusion video restoration, push 2026-01), Topaz (commercial, has cloud API). Interpolation: RIFE (MIT), FILM (Apache-2.0, stale), GIMM-VFI (NOASSERTION), Flowframes GUI (GPL-3.0), Video2X (AGPL-3.0, last release 6.4.0 on 2025-01-24, push 2026-03-07). Face restoration: CodeFormer and GFPGAN (NOASSERTION).

### Table C1 (stars as of 2026-10-17)
| Tool | Category | Capability | Control mechanism | Deployment | Price (date) | License / stars / last push | Maturity | Limitations | How an agent calls it |
|---|---|---|---|---|---|---|---|---|---|
| Topaz Video AI / Topaz cloud + API | upscale, interpolation, Starlight restoration | commercial benchmark | GUI, desktop CLI, REST API | local + cloud | API [V topazlabs.com/api fetched 2026-10-17]: Developer $50/mo (500 credits, $0.10 each), Scale $240/mo (3,000 credits, $0.08), Starter marked "Coming soon"; image Enhance 1 credit up to 24 MP. Desktop Personal $299/yr, Pro $699/yr [3P, conflicting]. Starlight Precise 2.6 listed, API availability of video models not confirmed | proprietary | mature | pricing sources conflict; video models in API unverified | REST API |
| DaVinci Resolve Studio (Magic Mask etc.) | segmentation/tracking in NLE | AI tools incl. Magic Mask | GUI; Python/Lua scripting | local | $295 one-time for Studio [3P, several]; one roundup claims Magic Mask in free version (conflict) | proprietary | mature | whether scripting exposes AI features unverified | Resolve scripting API |
| Runway (Aleph, Act-Two, Gen-4) | video-to-video edit, performance transfer | - | REST API | cloud | API credits $0.01 each [3P]; Aleph 2.0 28 credits/s (about $16.80/min), Act-Two 5 credits/s; Picsart lists 9 credits/s (conflict) | proprietary | production | background removal feature not confirmed | REST API |
| SAM 3 (Meta) | segmentation + tracking | text/concept prompts, point/box/mask, video, streaming | Python | local GPU | free | HF licence "other" (gated); repo 12,007 stars, NOASSERTION; push 2026-10-14 | active, new | gated weights; no GitHub releases | Python |
| SAM 2 | video segmentation/tracking | prompts | Python | local | free | Apache-2.0, 20,014 stars, 2026-05-30 | mature | - | Python |
| rembg | background removal | per image/frame | CLI, Python, HTTP server | local | free | MIT, 25,104 stars, v2.0.85 (2026-09-20), push 2026-10-10 | mature | frame-by-frame, flicker on video | CLI |
| BiRefNet | high-res segmentation / matting | image | Python, HF | local | free | MIT, 4,295 stars, 2026-10-11 | active | image model; no built-in temporal consistency | Python |
| RobustVideoMatting | video matting | recurrent, real-time | Python/ONNX | local | free | GPL-3.0, 9,561 stars, 2024-04-02 | stale but works | GPL | Python |
| Real-ESRGAN | upscale | per-frame | CLI, ncnn builds | local | free | BSD-3-Clause, 37,126 stars, 2024-08-06 | mature/stale | temporal flicker; weaker than diffusion VSR | CLI |
| SeedVR / SeedVR2 | diffusion video restoration | one-step (SeedVR2) | Python | local GPU | free | Apache-2.0; 1,402 / 906 stars; 2026-01-27 | research-grade | heavy VRAM (numbers not collected) | Python / ComfyUI |
| RIFE | frame interpolation | 2x/4x | CLI (rife-ncnn-vulkan: MIT, 1,113 stars, 2024-01), Python | local | free | MIT, 5,612 stars, 2025-09-10 | mature | artifacts on large motion | CLI |
| FILM (Google) | frame interpolation | large motion | Python | local | free | Apache-2.0, 3,154 stars, 2024-08-10 | stale | slow | Python |
| GIMM-VFI | interpolation | arbitrary timestep | Python | local | free | NOASSERTION, 408 stars, 2025-06-05 | research | licence unclear | Python |
| Video2X | upscale + interpolate pipeline | wraps ESRGAN/RIFE | CLI/GUI | local | free | AGPL-3.0, 22,287 stars; release 6.4.0 (2025-01-24); push 2026-03-07 | mature | AGPL | CLI |
| Flowframes | interpolation GUI | RIFE and others | Windows GUI | local | free | GPL-3.0, 2,062 stars, 2026-05-20 | mature | GUI-first; CLI unverified | limited |
| CodeFormer / GFPGAN | face restoration | per-frame | CLI | local | free | CodeFormer NOASSERTION 18,182 stars (2025-11); GFPGAN NOASSERTION 37,699 stars (2024-07) | mature | licence restrictions unverified; face flicker in video | CLI |

---------------------------------------------------------------------
## D. Disagreements and uncertainties
1. Leaderboard numbers: fetched AA page (v2.1, GPT Image 2.5 on top at 1220) vs search snippet of an older snapshot (GPT Image 2 at 1339). Different Elo versions; no snapshot date on the fetched page. Only rank order is usable and it will change.
2. FLUX 3 Image: one directory says Oct 2026, BFL docs list FLUX 3 Image pricing tiers, but narrative sources said "rolling out in following weeks". Treat availability as unverified. FLUX.2 flex price $0.05 vs $0.06 per MP.
3. Qwen-Image-2.1 licence: all found sources (aggregators, not the HF card) say Qwen Research License / non-commercial; the earlier Qwen-Image was Apache-2.0. Verify on the model card before use. The Oct 9 "Turbo" variant is uncorroborated.
4. GPT Image 2.5 per-image cost: calculator-derived about $0.053 (high, 1024sq) vs article proxy about $0.211 for the same size. OpenAI's own page was not read (redirect only).
5. Topaz: perpetual vs subscription, annual price and credits conflict across blogs. API page was read; desktop pricing page was not.
6. HeyGen API rates, D-ID plans, Hedra per-minute, OmniHuman, Kling Avatar: only reseller or competitor-blog figures; official pages were not captured.
7. Move.ai plan prices: two Move pages disagree ($15/35/75 vs $15/50/250).
8. Ideogram 4.0: described as both open-weight and API-only.
9. DaVinci Resolve 21: Magic Mask Studio-only (most sources) vs free (one roundup).
10. Not researched or no data: Mixamo, Character Creator, MetaHuman, Captions, Imagen 4 status, hosted-API MCP servers (fal/Replicate), CodeFormer exact licence, SeedVR VRAM needs, Stability AI current commercial licence terms.
11. ComfyUI stars returned as exactly 138000, which looks rounded; treat as about 138k.

---------------------------------------------------------------------
## E. Sources (access date 2026-10-17 for all)
- S1 https://artificialanalysis.ai/text-to-image/arena/leaderboard-text (fetched; leaderboard)
- S2 https://ai.google.dev/gemini-api/docs/pricing (fetched; Gemini image prices)
- S3 https://bfl.ai/pricing and https://docs.bfl.ai/quick_start/pricing (fetched; partial numbers)
- S4 https://help.bfl.ai/articles/7424166364-wip-welcome-to-the-forest ; https://openrouter.ai/black-forest-labs/flux.2-flex/pricing ; https://zenmux.ai/bfl/flux-2-flex (search results, 3P)
- S5 https://developers.openai.com/api/docs/models/gpt-image-2.5-flare ; https://www.eesel.ai/blog/chatgpt-images-2-5-pricing ; https://blog.laozhang.ai/en/posts/gpt-image-2-5-api-pricing (search results, 3P)
- S6 https://developers.openai.com/api/docs/pricing (redirect target, not read)
- S7 https://datanorth.ai/news/black-forest-labs-releases-flux-3 ; https://www.mindstudio.ai/blog/flux-3-video-model-launch ; https://muapi.ai/flux-3 (search results, 3P)
- S8 GitHub API repo metadata (gh api repos/OWNER/REPO), stars/licence/pushed_at read 2026-10-17, for: comfyanonymous/ComfyUI, AUTOMATIC1111/stable-diffusion-webui, lllyasviel/stable-diffusion-webui-forge, black-forest-labs/flux, black-forest-labs/flux2, QwenLM/Qwen-Image, HiDream-ai/HiDream-I1, Stability-AI/sd3.5, Stability-AI/generative-models, lllyasviel/ControlNet, tencent-ailab/IP-Adapter, kohya-ss/sd-scripts, ostris/ai-toolkit, huggingface/diffusers, Fannovel16/comfyui_controlnet_aux, cubiq/ComfyUI_IPAdapter_plus, artokun/comfyui-mcp, joenorton/comfyui-mcp-server, Comfy-Org/comfy-cli, Wan-Video/Wan2.2, kijai/ComfyUI-WanVideoWrapper, MeiGen-AI/InfiniteTalk, MeiGen-AI/MultiTalk, Fantasy-AMAP/fantasy-talking, antgroup/echomimic_v2, antgroup/echomimic_v3, Tencent-Hunyuan/HunyuanVideo-Avatar, KwaiVGI/LivePortrait, TMElyralab/MuseTalk, bytedance/LatentSync, fudan-generative-vision/hallo2 and hallo3, OpenTalker/SadTalker, Rudrabha/Wav2Lip, facebookresearch/sam2, facebookresearch/sam3, PeterL1n/RobustVideoMatting, ZhengPeng7/BiRefNet, danielgatis/rembg, xinntao/Real-ESRGAN, ByteDance-Seed/SeedVR, IceClear/SeedVR2, hzwer/ECCV2022-RIFE, nihui/rife-ncnn-vulkan, google-research/frame-interpolation, GSeanCDAT/GIMM-VFI, k4yt3x/video2x, n00mkrad/flowframes, sczhou/CodeFormer, TencentARC/GFPGAN
- S9 https://datanorth.ai/news/qwen-releases-qwen-image-2-1 ; https://apidog.com/blog/what-is-qwen-image-2-1/ (search results, 3P)
- S10 https://openrouter.ai/compare/recraft/recraft-v4-styles/bytedance-seed/seedream-5-0-lite ; https://www.gradually.ai/en/ai-image-model-comparison/seedream-5-pro-vs-ideogram-4/ (search results, 3P)
- S11 https://the-decoder.com/midjourney-v8-rolls-out-with-5x-faster-generation-but-charges-4x-more-for-its-best-features/ ; https://evolink.ai/midjourney-v8-1 (search results, 3P)
- S13 https://www.heygen.com/pricing (fetched)
- S14 https://developers.heygen.com/docs/avatar-consent ; https://www.heygen.com/moderation-policy ; https://www.heygen.com/biometric-privacy-notice (search results)
- S15 https://www.synthesia.io/pricing (fetched)
- S16 https://conductatlas.com/platform/synthesia/synthesia-terms-of-service/custom-avatar-consent-requirement/ (3P summary) ; https://decrypt.co/243795/ai-video-avatars-synthesia-review
- S17 https://creatify.ai/blog/d-id-pricing-(2026)-plans-credits-and-what-you-ll-actually-pay (3P) ; https://partnershiponai.org/d-id-framework-case-study/
- S18 https://www.tavus.io/pricing (fetched)
- S19 https://hedra.com/docs/pages/getting_started/pricing ; https://www.usagepricing.com/blueprint/activity/hedra-2026-07-29-character-3-hailuo-lineup (3P)
- S20 https://sync.so/pricing (fetched)
- S21 https://muapi.ai/ko/playground/omnihuman-1-5 ; https://apipass.dev/model/omni-human-1-5/bytedance_omni-human-1-5 ; https://evolink.ai/de/omnihuman-1-5 (3P)
- S22 https://fal.ai/models/fal-ai/kling-video/ai-avatar/v2/pro ; https://picsart.com/api-platform/models/kling-avatar/pricing (3P)
- S23 https://digitalproduction.com/2025/08/13/flow-studio-prices-drop-tiers-multiply-features-shift ; https://www.usagepricing.com/blueprint/wonder-dynamics ; https://fast.io/resources/best-ai-animation-tools-2026/ (3P)
- S24 https://help.move.ai/en/articles/8851451-move-one-pricing ; https://docs.move.ai/knowledge/move-ai-pricing-plans-credits
- S25 https://www.topazlabs.com/api (fetched)
- S26 https://huggingface.co/facebook/sam3 (fetched)
- S27 https://davinciresolveclub.com/davinci-resolve-price-and-studio-cost-2026/ ; https://dev.to/kunal_d6a8fea2309e1571ee7/resolve-studio-21-ai-features-whats-worth-paying-for-2026-1bgg (3P)
- S28 https://flexprice.io/pricing-index/runway (3P)
- S29 https://blog.comfy.org/p/comfy-cloud-new-features-and-pricing ; https://www.mintlify.com/Comfy-Org/ComfyUI/api/overview (search results)
- S30 https://huggingface.co/wan-ai/wan2.2-s2v-14b ; https://huggingface.co/wan-ai/wan2.2-animate-14b (search results; licence not read)
