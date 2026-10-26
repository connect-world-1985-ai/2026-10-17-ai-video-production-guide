# R1 - Neural (generative) video models and services, state as of 2026-10-17

All facts below were seen on 2026-10-17 (access date for every source) unless noted. "unverified" = only secondary/aggregator or conflicting sources. Prices are USD per second of output unless noted. Primary = vendor/official page or direct API; Secondary = blog/aggregator.

## 1. Landscape summary

1. The field is led by Chinese vendors plus Google. Artificial Analysis (AA) text-to-video (with audio) top: Wan 3.0 (Alibaba) 1174, Utopai X 1169, Seedance 2.5 (ByteDance) 1160, MiniMax H3 768p 1159, FLUX 3 (Black Forest Labs) 1146, Seedance 2.0 1136, Gemini Omni Flash 1.1 1132 (AA page, no explicit snapshot date).
2. Native joint audio+video generation is now the norm for top models (Veo 3.1, Omni Flash, Kling 3.0, Seedance 2.x, Wan 3.0 per some sources, MiniMax H3, LTX-2.5, Grok Imagine 1.5, FLUX 3). Runway Gen-4.5 is the notable no-audio holdout.
3. OpenAI Sora is discontinued: app closed 2026-04-26, API scheduled to end 2026-09-24 (announced 2026-03-24). Do not plan on Sora.
4. Google's current default is Gemini Omni (Flash, 1.1 since Aug 2026): multimodal in, conversational editing, extension, SynthID; Veo 3.1 (Jan 2026) remains the extension/first-last-frame/reference workhorse. No Veo 4 announced (as of late-May sources; unverified after).
5. Clip length moved from 5-10 s to 15-30 s per generation (Kling 3.0: 15 s; Seedance 2.5, Wan 3.0, Kling 4.0 full: 30 s; Gemini Omni: extend to 40 s total; Veo 3.1: extend up to ~148 s).
6. Reference/character consistency is a first-class feature: Seedance 2.5 up to 30 images + 10 videos + 10 audio refs; Kling 4.0 up to 15 mixed refs; Veo 3.1 up to 3 images; Omni subject refs.
7. Open-weight leaders have changed: Alibaba stopped open-sourcing at Wan 2.2 (Apache-2.0, 2025); MiniMax H3 (33B, Aug 2026, restrictive community license with territory limits) and Lightricks LTX-2.5 (Aug 2026, revenue-gated license) are the strongest open-weight options; HunyuanVideo-1.5 (8.3B) is the lighter one.
8. Prices fell sharply: cheapest AA-listed API models are ~$0.04-0.08/s (Agnes-Video-2.5 $2.40/min, MiniMax H3 $4.80/min, Veo 3.1 Lite $0.05-0.08/s), premium ~$0.40-0.57/s (Veo 3.1 Std, Seedance 2.5).
9. Aggregators/hosts (fal, Replicate, Runway API as reseller, Runware, Together, ComfyUI Partner Nodes, Adobe Firefly partner models) serve most closed models; all use async submit/poll/webhook patterns.
10. Rankings differ by board and date: Kling v3 #1 on LLM-Stats arena (2026-10-17) but mid-pack on AA. Kling 4.0 full launch announced for "October" (Flash early access since 2026-09-28); Vidu Q4 Preview launched 2026-10-07.

## 2. Model table

(Order: roughly by current relevance. "AA" = Artificial Analysis; Elo from AA T2V with-audio tab, 2026-10-17, unless noted.)

| Model | Developer | Latest version + date | Access | Length / resolution | Audio | Controls | Price (date) | License | Limitations / notes | Sources |
|---|---|---|---|---|---|---|---|---|---|---|
| Wan 3.0 | Alibaba | Wan3.0, public beta 2026-08-06; broad release 2026-08-24 (sources conflict) | wan.video, Alibaba Cloud Model Studio, Qwen Cloud API; Runway API; fal etc. | up to 30 s; up to 1080p | Accepts audio input; native audio output stated by some sources, one source says unclear -> partially unverified (AA lists it in "with audio" T2V board, rank 1) | Text/image/video/audio multimodal prompt (up to 10 img, 5 video, 5 audio), documents/web pages as input, extension tool, editing (AA editing board #1, Elo 1200) | Std $0.05/$0.10/$0.20 per s at 480/720/1080p (30% discount applied); Prime $0.068/$0.14/$0.28 (datanorth 2026-08-25); Runway API same: 5/10/20 credits/s (2026-10-17); AA $12.00/min | Closed, no weights (secondary sources) | Pricing is promo-discounted; no Alibaba primary page fetched | [datanorth], [runway-pricing], [AA-T2V], [AA-edit], [howaiworks-wan] |
| Utopai X | Utopai Studios | Sep 2026 (AA) | Only inside Utopai's PAI platform, no public API | n/a | yes (AA with-audio board) | n/a | n/a | Closed | Reported as post-train of MiniMax H3 (single secondary source, unverified); AA #2 | [AA-T2V], [orcarouter-utopai] |
| Seedance 2.5 (Dreamina) | ByteDance Seed | 2026-07-31 launch (other sources say 06-23 or 07-09: conflict) | Jimeng/Doubao, Dreamina, BytePlus ModelArk (status per sources unclear), Runway API, ComfyUI partner nodes, Adobe(2.0 only verified) | up to 30 s single pass; 480p/720p/1080p | yes, joint, dialogue + lip-sync + music | T2V, I2V, first/last frame, reference-to-video (up to 30 images, 10 videos, 10 audio), editing, forward/backward extension, 480p draft mode | Runway API: $0.20/$0.30/$0.68 per s (480/720/1080p) (2026-10-17); AA $34.12/min T2V; BytePlus token pricing ($10.70/1M tokens w/o video in) per one blog - unverified | Closed | Regional API availability uneven; no tech report found | [comfy-seedance25], [runway-pricing], [AA-T2V], [atlas-seedance] |
| Seedance 2.0 / 2.0 Fast / Mini | ByteDance Seed | 2.0: Mar 2026 (AA); paper dated 2026-04-15 | Same channels; Adobe Firefly partner (added 2026-06-25, secondary) | 15 s (secondary); 4K on ComfyUI/Runway | yes | multimodal refs (9 img/3 video/3 audio per secondary) | Runway API 2.0: $0.36 (480-720p) / $0.40 (1080p) / $1.50 (4K); Fast $0.29; Mini $0.16 | Closed | AA lists "no API" for 2.0 on its own page - differs from Runway/Comfy offering | [runway-pricing], [AA-T2V], [seed-paper] |
| MiniMax H3 (Hailuo 3) | MiniMax | 2026-07-31 API; open weights 2026-08-03 | API (MiniMax, fal, Runway API since 2026-09-03), HF weights, ComfyUI native | 4-15 s, 24 fps; 768p short side default, 2K via H3-Regenerate-2K stage | yes, native 32 kHz stereo | T2V/I2V, multimodal refs (card: omni-modal); AA I2V rank #1 (1140) | Runway API: H3 768p/2K $0.10/$0.15; H3 Max 480p/768p $0.05/$0.08; AA $4.80/min (2026-10-17) | "MiniMax H3 Community License"; HF page links application form "only for USA/EU/UK/South Korea"; other sources: attribution mark, extra authorisation >USD 20M revenue (unverified, not on card text fetched) | 33B dense transformer; 4+ GPUs in SGLang examples, no VRAM figure on card; HF 4.36M downloads/month, ~6.18k likes (card, 2026-10-17); GitHub MiniMax-AI/MiniMax-H3 10,067 stars (2026-10-17); sparse attention not in first release | [hf-h3], [github-api], [AA-T2V], [AA-I2V], [dlai-h3] |
| FLUX 3 Video | Black Forest Labs | Announced 2026-07-23; API GA reported 2026-08-04 | BFL API / partners | up to 20 s; HD / Full HD (720p cap at launch per early report) | yes (dialogue, SFX, ambience) | T2V, I2V, keyframes, continuation, multi-scene | AA $17.40/min | Closed; "Dev" open-weight version planned later in 2026 (unverified) | BFL self-reported Elo not comparable to AA | [the-decoder-flux3], [AA-T2V] |
| Gemini Omni Flash / 1.1 Flash | Google | Omni Flash 2026-05-19 (I/O); 1.1 Flash late Aug 2026 | Gemini app, Flow, YouTube Shorts/Create, Gemini API / AI Studio, Gemini Enterprise Agent Platform; Runway API | Docs: 360p/720p default/1080p+4K upscaled; 16:9 or 9:16; extend +3-10 s up to 40 s total; uploaded videos for editing <=10 s | yes, default; audio reference not supported | T2V, I2V, first/last frame, subject refs (multi-image), up to 3 video refs (3 s each), conversational multi-turn editing, extension (append only) | Gemini API token-based: $1.50/1M input, $17.50/1M video output tokens, ~ $0.10/s at 720p (2026-10-17); Runway API 1.1: $0.034/$0.10/$0.15/$0.30 at 360p/720p/1080p/4K; AA $9.12/min | Closed | SynthID on all output; editing/uploads of video not available in EEA, Switzerland, UK; no negative prompt/temperature; YouTube links unsupported; AA T2V rank ~7-8, I2V #3, edit #2-3 | [gemini-pricing], [gemini-omni-docs], [itbrief-omni], [runway-pricing] |
| Veo 3.1 / Fast / Lite | Google DeepMind | Veo 3.1 Jan 2026; Lite 2026-03-31 | Gemini API, Vertex, Flow, Gemini app, fal, Runway API, Adobe | 4/6/8 s; 720p/1080p/4K (1080p+4K need 8 s; Lite no 4K); extend +7 s up to 20 times, output up to 148 s, extension at 720p only | yes | Reference images (up to 3 of one subject), first+last frame (image + lastFrame), extension (Veo-generated clips only) | Gemini API (2026-10-17): Std $0.40 (720p/1080p), $0.60 (4K); Fast $0.10/$0.12/$0.30; Lite $0.05/$0.08. fal: Std $0.20 no audio/$0.40 audio; Fast $0.10/$0.15 (fal endpoint "deprecated 2026-11-17") | Closed | Videos stored 2 days on server; person generation: `allow_adult` only in EU/UK/CH/MENA; SynthID; latency 11 s-6 min | [gemini-pricing], [gemini-veo-docs], [fal-veo] |
| Kling 3.0 / 3.0 Omni / O3 / 3.0 Turbo; Kling 4.0 (announced) | Kuaishou (Kling AI) | 3.0: 2026-01-31 to 02-04 (sources differ); 4K added 2026-04-23; Turbo/Omni update 2026-06-17; 4.0 Flash early access 2026-09-28; full 4.0 "October" | Kling app/API, Runway API, Adobe, Freepik, ComfyUI partner nodes, fal | 3.0: up to 15 s; 4K; 4.0 full (per Kling release notes via secondary): 3-30 s, up to 4K, Flash 3-20 s 720p | yes (multilingual speech; 4.0: stereo, voice reference) | Multi-shot storyboard (up to 6 shots), start/end frames, element/character refs (Omni up to 4 images), video editing; 4.0: up to 10 keyframes, 15 mixed refs, extension up to 2 min "coming soon" | Runway API (2026-10-17): 3.0 Std $0.09 no-audio/$0.13 audio; Pro $0.12/$0.17; 4K $0.43; O3 Std $0.13, Pro $0.17; AA Omni Pro $8.40/min. Kling 4.0 price: not published | Closed | #1 on LLM-Stats arena 2026-10-17 (Kling v3 1934) but ~#14-18 on AA; 4.0 specs from reseller blog quoting Kling notes: partially unverified | [runway-pricing], [atlas-kling4], [llmstats], [AA-T2V] |
| Alibaba HappyHorse 1.0 / 1.1 | Alibaba-ATH | 1.0 Apr 2026; 1.1 Jun 2026 | Alibaba, ComfyUI partner node, Runway API | n/a in sources | yes (audio-native, ComfyUI v0.26.0) | n/a | Runway API 1.0: $0.15 (720p)/$0.30 (1080p); AA 1.1 $10.80/min | Closed | LLM-Stats #2 (1816); AA #9-12 | [runway-pricing], [llmstats], [comfy-search] |
| Grok Imagine Video 1.5 / 1.5 Lite | xAI / "SpaceXAI" (AA label) | 1.5 GA Jun 2026 (some say updated 2026-07-31); Lite Aug 2026 | xAI API, Runway API, Krea, others | 1-15 s; 480p/720p/1080p | yes (default) | Face/voice references (secondary), I2V | Runway API 1.5: $0.10/$0.16/$0.29; Lite $0.02/$0.03/$0.14; third-party list other figures ($0.084-0.2625) - differ | Closed | Blocked-by-policy outputs still billed (one platform); xAI primary pricing not found | [runway-pricing], [grok-search] |
| Runway Gen-4.5, Aleph 2.0, Gen-4 Turbo, Act-Two | Runway | Gen-4.5 (2025/2026, date unverified); Aleph 2.0 (date unverified) | Runway app + API (also resells Kling, Wan 3.0, Seedance, Veo, MiniMax, Grok) | Gen-4.5: 2-10 s, up to 720p (secondary) | Gen-4.5 no audio | Aleph = video-to-video editing; Act-Two performance transfer; HDR/ProRes outputs as add-ons | API (2026-10-17): 1 credit = $0.01; Gen-4.5 $0.12/s; Gen-4 Turbo $0.05; Aleph 2.0 $0.28 (min 56 credits); Act-Two $0.05 | Closed | AA edit board: Aleph 2.0 rank 8 (1014); no "Gen-5" found | [runway-pricing], [creatify-runway] |
| Luma Ray 3.2 (Agents API) | Luma AI | Ray3.2 June 2026 (secondary) | Luma Agents API (separate keys/billing), fal, Runware, ComfyUI partner nodes, Adobe | 5-10 s; 360p-1080p; HDR/EXR | not stated in fetched sources (unverified) | Up to 16 keyframes per clip (Luma API page, secondary), extend, reframe, video-to-video | Luma docs (via search snippet): 5 s standard $0.06 (360p), $0.15 (540p), $0.30 (720p), $1.20 (1080p); HDR roughly 2x (Runware: 720p $0.60, 1080p $2.40 per 5 s) | Closed | HDR/EXR only for 5 s clips | [luma-pricing], [runware-luma] |
| Vidu Q3 / Q4 Preview | Shengshu | Q3 Jan 2026 (reference-to-video 2026-04-13); Q4 Preview 2026-10-07 | Vidu app/API, Novita, Huawei Cloud etc. | n/a | yes (Q3 native A/V) | Q4 Preview: I2V and reference-to-video only (up to 12-15 refs: conflict), no T2V yet | AA: Q3 Pro $7.20/min, Q3 Turbo $3.90/min; Q4 prices conflicting ($0.014/s start vs $7.20/min) - unverified | Closed | Q4 reported #3 on some board (alphasignal headline; unverified) | [AA-T2V], [vidu-search] |
| PixVerse V5.6 / V6 | PixVerse | V6 Mar 2026 (AA); V5.6 vendor claims #2 on AA | PixVerse app/API | n/a | n/a | n/a | AA V6 $6.90/min | Closed | Vendor claim only | [AA-T2V], [pixverse-aa] |
| Midjourney Video (V1) | Midjourney | V1 June 2025; no newer video model found | Midjourney web/Discord, subscription only | image-to-video only, 5 s extendable to ~21 s, 480p default, 720p higher modes (Krea guide Sep 2026) | no (not stated) | Image-to-video, extend | Subscription $10/$30/$60/$120 per month; video uses GPU time (4 HD videos ~26 GPU-min) - secondary | Closed | No text-to-video; no API | [mj-search] |
| Adobe Firefly Video | Adobe | Own Firefly Video model + partner models (list recorded 2026-07-18: Kling 3.0/Omni, Ray3.x, Gen-4.5, Sora 2, Veo 3.1, Seedance 2.0 added 2026-06-25) | Firefly app, Creative Cloud | n/a | partner-dependent | Generative credits per second per model | e.g. Seedance 2.0 720p 90 credits/s (secondary) | Closed; Adobe states "IP-friendly" (marketing claim) | Partner models carry their own terms | [adobe-partner], [feisworld-adobe] |
| Moonvalley Marey | Moonvalley | GA 2025-07 (no 2026 info found) | Moonvalley platform | 5-10 s (sources conflict), up to 1080p | not stated | camera/motion controls (not verified) | n/a | Closed; "trained only on licensed data" (vendor claim) | No 2026 facts found: unverified | [moonvalley-search] |
| Pika | Pika | Pika 2.5 / "Pikaformance" (claims from weak 2026 reviews) | pika.art | n/a | n/a | n/a | n/a | Closed | Status unverified; no official 2026 source | [pika-search] |
| Sora 2 / Sora 2 Pro | OpenAI | Sora 2 (2025); DISCONTINUED | App closed 2026-04-26; API end 2026-09-24 | 4/8/12 s | yes | n/a | Last API pricing (secondary): sora-2 $0.10/s 720p; pro $0.30-0.70/s | Closed | Announced 2026-03-24; still resold in some aggregators/Adobe list (2026-07-18); Sora continues as world-model research | [decoder-sora], [engadget-sora], [sora-search] |
| MAGI-2 Preview | Sand AI | Aug-Sep 2026 | API "coming soon"; open weights on HF (AA flag) | n/a | n/a | n/a | n/a | Open weights (license unverified) | AA T2V rank 11-14 | [AA-T2V], [AA-I2V] |
| Agnes-Video-2.5 | Sapiens AI | Aug 2026 | API | n/a | yes (AA with-audio) | n/a | AA $2.40/min | Closed | Cheapest on AA board; little other info (unverified) | [AA-T2V] |
| **Open weights** | | | | | | | | | | |
| LTX-2.5 (Fast/Pro/Distilled) | Lightricks | 2026-08-11 | HF (gated), GitHub Lightricks/LTX-2, LTX API, ComfyUI, fal etc. | 6-20 s; 720p to 4K (API Fast tier 4K; Pro 720/1080p) | yes, joint (dual-stream video/audio DiT; 48 kHz vocoder per HF card) | T2V, I2V, V2V, audio tasks, IC-LoRA, latent upsampler, multi-shot | AA LTX-2.5 Fast $7.80/min, Pro $10.20/min (2026-10-17) | LTX-2.x Community License: free under USD 10M annual revenue, paid commercial agreement above (HF card); fine-tune transfer may need paid license | HF card says 19B (blog sources say 22B: conflict); VRAM min 16 GB claimed by blogs (not on card), practical 24-32 GB+, 4K HDR needs 141 GB+ GPUs (RunPod); GitHub LTX-2 9,773 stars (2026-10-17), LTX-Video 11,123 | [hf-ltx25], [github-api], [comfyui-wiki-ltx], [AA-T2V] |
| HunyuanVideo / 1.5 | Tencent | HunyuanVideo Dec 2024; 1.5 report arXiv 2511.18870 (Nov 2025) | HF/GitHub, ComfyUI | n/a | no native audio stated | T2V, I2V | n/a (local) | Tencent Hunyuan community license (not verified for territory limits) | 1.5 is 8.3B, ~14 GB VRAM (blog); GitHub HunyuanVideo 12,626 stars; HunyuanVideo-1.5 4,571 (2026-10-17) | [github-api], [arxiv-hy15], [oss-search] |
| Wan 2.2 / 2.1 | Alibaba | Wan2.2 2025-07-28 | HF/GitHub/ModelScope, ComfyUI native | 5 s class, 720p | no (Wan2.2 base); S2V variants exist | T2V, I2V, FLF2V, VACE, Animate | n/a | Apache-2.0 (GitHub API confirms for Wan2.2) | Newest downloadable Wan; GitHub Wan2.2 17,977 stars, Wan2.1 17,229 (2026-10-17); Wan 2.5/2.6/2.7/3.0 closed | [github-api], [howaiworks-wan] |
| CogVideoX | Zhipu / THUDM | 2024 (last push 2025-11-04) | GitHub/HF | 6 s class | no | T2V/I2V | n/a | Apache-2.0/CogVideoX license by size (unverified) | Dated; 13,084 stars | [github-api] |
| Mochi 1 | Genmo | 2024 | GitHub/HF | n/a | no | T2V | n/a | Apache-2.0 (unverified) | Reported as superseded; 3,749 stars | [github-api], [oss-search] |
| Open-Sora | HPC-AI | last push 2026-04-09 | GitHub | n/a | n/a | n/a | n/a | n/a | 29,871 stars; quality behind current leaders (unverified) | [github-api] |
| SkyReels V2 / V3 | Skywork | V2 repo last push 2026-01-29 | GitHub/HF | n/a | V3: audio-driven | ref-to-video, V2V | n/a | n/a | V3 14-19B (blog) unverified; V2 7,696 stars | [github-api], [oss-search] |
| Step-Video-T2V | StepFun | 2025 | GitHub | n/a | no | T2V | n/a | n/a | Last push 2025-03-17; 3,187 stars; stale | [github-api] |
| MAGI-1 | Sand AI | 2025 (arXiv 2505.13211) | GitHub | chunked autoregressive | no | long video / continuation | n/a | n/a | 3,795 stars; MAGI-2 preview now ranked on AA | [github-api], [arxiv-magi] |

## 3. Local workflow host: ComfyUI
- Comfy-Org/ComfyUI: 138,000 GitHub stars, last push 2026-10-17 (GitHub API, 2026-10-17).
- Runs open models locally (Wan 2.2, LTX-2.x, HunyuanVideo, MiniMax H3 native since PR #15224 on 2026-08-03 per ComfyUI Wiki).
- "Partner Nodes" call closed models via API billed in Comfy Credits (no provider key): v0.26.0 (2026-06-23) added Kling V3-Turbo, Luma Ray 3.2, HappyHorse 1.1; 0.26.1 added Seedance 2.0 4K; 0.26.2 Seedance 2.0 Mini; docs list Seedance 2.5 node (T2V, I2V, FLF2V, R2V, extend, draft mode).
- Graphs can mix local and partner nodes.

## 4. Architecture notes
- Dominant recipe: latent diffusion with a Diffusion Transformer (DiT) backbone over a 3D/causal video VAE latent, increasingly trained with flow matching / rectified flow. Foundation papers: DiT https://arxiv.org/abs/2212.09748 ; Flow Matching https://arxiv.org/abs/2210.02747.
- Wan (Alibaba): "open and advanced large-scale video generative models" https://arxiv.org/abs/2503.20314 (spatio-temporal VAE + DiT, per paper title/abstract; details not re-read).
- HunyuanVideo: https://arxiv.org/abs/2412.03603 ; HunyuanVideo 1.5 report https://arxiv.org/abs/2511.18870.
- LTX-Video: real-time latent diffusion with high-compression VAE https://arxiv.org/abs/2501.00103 ; LTX-2 joint audio-visual foundation model https://arxiv.org/abs/2601.03233 (HF card describes dual-stream video/audio DiT with cross-attention - blog source says "asymmetric").
- CogVideoX: expert transformer text-to-video diffusion https://arxiv.org/abs/2408.06072.
- Meta Movie Gen: cast of media foundation models (video + audio) https://arxiv.org/abs/2410.13720.
- MAGI-1: autoregressive chunk-by-chunk video generation at scale https://arxiv.org/abs/2505.13211 (contrast with whole-clip diffusion).
- Joint audio-video: Seedance 1.5 pro report https://arxiv.org/abs/2512.13507 (dual-branch DiT with cross-modal joint module, per search summary); Seedance 2.0 paper listed on ByteDance Seed (2026-04-15) https://seed.bytedance.com/en/public_papers/seedance-2-0-advancing-video-generation-for-world-complexity ; Seedance 2.5 builds on same architecture per ComfyUI docs, no report found.
- MiniMax H3: 33B dense single-stream "omni" transformer, Qwen3-VL-32B text encoder per a secondary source; model card: 33B dense H3-Omni-Transformer (HF card).
- Commercial closed models (Veo, Kling, Runway, Sora): no full architecture published in sources I read; Sora's public technical report described a diffusion transformer on spacetime patches (2024; not re-fetched this session - cite as unverified here).
- World models: Genie 3 (DeepMind, previewed Aug 2025), real-time interactive worlds; Project Genie prototype for US AI Ultra subscribers from 2026-01-29, 60-second sessions (Google blog). No Genie 4 found. OpenAI says Sora continues as world-model research.

## 5. API patterns
- Submit -> poll -> fetch is universal; most offer webhooks.
- fal.ai: `POST queue.fal.run/{model_id}` returns request_id; states IN_QUEUE / IN_PROGRESS / COMPLETED; status polling, SSE stream, result GET, cancel PUT, webhook via `fal_webhook` query param (retries possible - dedupe on request_id); `subscribe()` helper blocks (https://fal.ai/docs/model-endpoints/queue).
- Replicate: create prediction returns immediately (status `starting`); poll `urls.get` or webhook with `webhook_events_filter`; `Prefer: wait` (default 60 s) for sync; `Cancel-After` header 5 s-24 h (https://replicate.com/docs/topics/predictions/create-a-prediction).
- Google Gemini API / Veo: long-running operation object, poll until `done` (docs example every 10 s; latency 11 s-6 min peak); outputs stored 2 days; Omni: Interactions API, `delivery="uri"` for >4 MB output then poll Files API until ACTIVE; `store=false` blocks later edit turns.
- Runway API: credit-based (1 credit = $0.01), separate balance from web plans; resells third-party models.
- Together, Runware: host Seedance/Luma etc.; not fetched in detail - unverified patterns.
- Content restrictions: SynthID watermarks (Google); person-generation limits in EU/UK/CH/MENA (Veo); no uploaded-video editing in EEA/CH/UK (Omni); content-blocked outputs may still be billed (one Grok platform); MiniMax H3 license territory restrictions for US/EU/UK/South Korea users.

## 6. Disagreements and uncertainties
- Top-model ranking: AA says Wan 3.0 #1 (T2V with audio, Elo 1174); LLM-Stats says Kling v3 #1 (1934, 1,450 votes, updated 2026-10-17; different scale); Pixazo/other blogs rank Seedance 2.0 or Omni first; AA page for earlier snapshots showed Seedance 2.0 / HappyHorse 1.0 tied at 1211 (search snippet) - leaderboards change often. No snapshot dates on AA pages fetched.
- AA T2V "with audio" board vs "silent" board differ; I fetched only the with-audio view and the I2V/editing boards (audio tab not labeled).
- Wan 3.0 release date (08-06 vs 08-24) and whether it generates audio output; pricing includes a 30% discount.
- Seedance 2.5 release date (06-23 / 07-09 / 07-31); API availability and BytePlus pricing unclear; Runway API price ($0.30/s at 720p) differs from AA ($34.12/min ~ $0.57/s).
- Gemini API lists Veo 3.1 Std $0.40/s while fal shows $0.20 no-audio / $0.40 audio; fal Veo endpoint carries a 2026-11-17 deprecation notice (reason unverified; do not infer Veo 4).
- LTX-2.5 size: HF card 19B vs 22B in blog posts; VRAM claims vary 16 GB-32 GB+; license thresholds ($10M vs "$20M" for MiniMax) differ between pages.
- MiniMax H3 license details (revenue limit, attribution) are only in secondary sources; HF card confirms only territory-restricted application form.
- Kling 3.0 launch date (Jan 31 vs Feb 4); Kling 4.0 full model launch not confirmed as of 2026-10-17; spec data from reseller blog quoting Kling notes.
- Sora: API end date 2026-09-24 reported by secondary sources and The Decoder; OpenAI help page returned 403; Engadget says dates not yet announced at first report. Treat as discontinued.
- Not covered / unverified: Together and Runware API specifics, Midjourney/Pika/Moonvalley 2026 status, Hunyuan license text, precise GitHub licenses other than Wan2.2, Runway Gen-4.5/Aleph release dates, Veo 4 after May 2026.
- Many items come from aggregators/resellers (atlascloud, evolink, orcarouter, pixverse blog) that have commercial interests; flagged where used.

## 7. Sources (all accessed 2026-10-17 unless noted)
- [AA-T2V] https://artificialanalysis.ai/video/leaderboard/text-to-video
- [AA-I2V] https://artificialanalysis.ai/video/leaderboard/image-to-video
- [AA-edit] https://artificialanalysis.ai/video/leaderboard/video-editing
- [llmstats] https://llm-stats.com/leaderboards/best-ai-for-video-creation
- [runway-pricing] https://docs.dev.runwayml.com/guides/pricing/
- [gemini-pricing] https://ai.google.dev/gemini-api/docs/pricing
- [gemini-veo-docs] https://ai.google.dev/gemini-api/docs/veo
- [gemini-omni-docs] https://ai.google.dev/gemini-api/docs/omni
- [itbrief-omni] https://itbrief.co.uk/story/google-launches-gemini-omni-flash-for-video-editing
- [fal-veo] https://fal.ai/models/fal-ai/veo3.1
- fal queue docs https://fal.ai/docs/model-endpoints/queue
- Replicate docs https://replicate.com/docs/topics/predictions/create-a-prediction
- [datanorth] https://datanorth.ai/news/alibaba-launches-wan3-0-video-model
- [howaiworks-wan] https://howaiworks.ai/blog/alibaba-wan-open-weights-stopped-at-2-2
- [comfy-seedance25] https://docs.comfy.org/tutorials/partner-nodes/bytedance/seedance-2-5
- [atlas-seedance] https://www.atlascloud.ai/blog/guides/seedance-2.5-pricing-guide
- [seed-paper] https://seed.bytedance.com/en/public_papers/seedance-2-0-advancing-video-generation-for-world-complexity
- [atlas-kling4] https://www.atlascloud.ai/ja/blog/tips/kling-4-flash-vs-full
- [hf-h3] https://huggingface.co/MiniMaxAI/MiniMax-H3
- [dlai-h3] https://www.deeplearning.ai/the-batch/minimaxs-state-of-the-art-video-model-is-only-minimally-open
- [hf-ltx25] https://huggingface.co/Lightricks/LTX-2.5-Diffusers
- [comfyui-wiki-ltx] https://comfyui-wiki.com/ja/news/2026-08-11-ltx-2-5-open-weights-release
- [the-decoder-flux3] https://the-decoder.com/black-forest-labs-makes-flux-3-video-generally-available-and-claims-it-beats-seedance-2-0/
- [decoder-sora] https://the-decoder.com/openai-sets-two-stage-sora-shutdown-with-app-closing-april-2026-and-api-following-in-september/
- [engadget-sora] https://engadget.com/ai/openai-is-shutting-down-its-sora-video-generation-app-211023358.html
- [luma-pricing] https://docs.agents.lumalabs.ai/guides/pricing/ (via search result summary, page not fetched)
- [runware-luma] https://runware.ai/docs/models/luma-ray3-2.md (search result summary)
- [creatify-runway] https://creatify.ai/blog/runway-pricing-(2026)-plans-credits-and-what-you-ll-actually-pay
- [adobe-partner] https://helpx.adobe.com/firefly/get-set-up/learn-the-basics/non-adobe-models-in-adobe-products.html (search summary)
- [feisworld-adobe] https://www.feisworld.com/blog/adobe-firefly-video-generation-partner-models
- [mj-search] https://www.krea.ai/blog/is-midjourney-free-pricing-video-and-free-alternatives-in-2026 (search summary)
- [grok-search] https://www.krea.ai/docs/api-reference/video/grok-imagine-15.md ; https://wavespeed.ai/blog/cost-and-billing/grok-imagine-video-pricing/
- [vidu-search] https://technologymagazine.com/globenewswire/3376813 ; https://alphasignal.ai/news/shengshu-s-vidu-q4-preview-debuts-at-no-3-for-ai-video
- [pixverse-aa] https://pixverse.ai/blog/pixverse-v5-6-ranks-2-artificial-analysis-video-generation-leaderboard
- [moonvalley-search] https://www.businesswire.com/news/home/20250708099256/en/Moonvalley-Releases-First-Fully-Licensed-AI-Video-Model-for-Professional-Production
- [pika-search] https://resource.digen.ai/pika-labs-review-2026/
- [orcarouter-utopai] https://www.orcarouter.ai/it/blog/utopai-x-debut
- [oss-search] https://ltx.io/blog/best-open-source-video-generation-models ; https://insiderllm.com/guides/local-ai-video-generation/
- [comfy-search] https://docs.comfy.org/tutorials/api-nodes/overview ; https://www.creativeainews.com/blog/comfyui-v0-26-kling-v3-turbo-krea2-qwen3-vl-2026/
- Project Genie https://blog.google/innovation-and-ai/models-and-research/google-deepmind/project-genie/
- [github-api] https://api.github.com/repos/{owner}/{repo} for Wan-Video/Wan2.2, Wan2.1, Tencent-Hunyuan/HunyuanVideo, HunyuanVideo-1.5, Lightricks/LTX-Video, LTX-2, zai-org/CogVideo, genmoai/mochi, hpcaitech/Open-Sora, SkyworkAI/SkyReels-V2, stepfun-ai/Step-Video-T2V, Comfy-Org/ComfyUI, MiniMax-AI/MiniMax-H3, SandAI-org/MAGI-1 (stars read 2026-10-17)
- arXiv: https://arxiv.org/abs/2503.20314 , 2412.03603 , 2501.00103 , 2601.03233 , 2408.06072 , 2505.13211 , 2410.13720 , 2212.09748 , 2210.02747 , 2511.18870 , 2512.13507 (titles confirmed 2026-10-17 except 2512.13507 via search)
- [arxiv-hy15] https://arxiv.org/abs/2511.18870 ; [arxiv-magi] https://arxiv.org/abs/2505.13211
- General roundups: https://invideo.io/blog/best-ai-video-generation-models/ ; https://nerdbot.com/2026/10/13/best-image-to-video-ai-models-in-2026-6-powerful-options-for-creators/
