/* 简体中文覆盖：类别名，以及每个工具的角色、说明、控制方式、部署、流行度证据、局限。
   普通全局脚本，无模块，file:// 可用。键与 data-tools.js 里 TOOLS[].n 完全一致。
   价格与来源 URL 仍只在英文数据里。 */
window.TOOL_CATS_ZH = {
  nv: "神经视频模型",
  host: "模型托管与聚合",
  img: "图像生成与编辑",
  cons: "一致性与控制（开源）",
  avatar: "虚拟人、口型同步、动作捕捉",
  enh: "增强、分割、抠像",
  d2: "代码驱动的二维 / 动态图形",
  d3: "三维套件与引擎",
  sim: "仿真与数据可视化",
  edit: "程序化剪辑与组装",
  nle: "剪辑应用（非线性剪辑）",
  tts: "语音：合成与音色",
  music: "音乐",
  sfx: "音效与拟音",
  asr: "语音识别与对齐",
  mix: "音频清理与响度",
  agent: "代理集成（技能、MCP）",
  qa: "视频理解与质检"
};
window.TOOL_ZH = {
  "Wan 3.0 (Alibaba)": {
    r: "封闭的文生视频 / 图生视频 / 编辑模型",
    d: "最长约 30 秒，最高 1080p；多模态提示（图像、视频、音频参考）；可延长和编辑。在 Artificial Analysis 文生视频榜（Elo 1174）和其视频编辑榜上排第 1。",
    ctl: "API（阿里云百炼 Model Studio；也可经 Runway API、fal）",
    dep: "云端",
    p: "AA 文生视频排行榜第 1（2026-10-17）",
    l: "权重封闭（阿里在 Wan 2.2 之后停止开源）；原生音频输出的报道并不一致"
  },
  "Seedance 2.5 / 2.0 (ByteDance)": {
    r: "封闭的文生视频 / 图生视频 / 参考生视频",
    d: "音视频一起生成，并带口型同步；单次最长 30 秒（2.5）；首帧/末帧；多张参考图、参考视频和参考音频；可延长。",
    ctl: "API（BytePlus、Runway API、ComfyUI 合作节点）；应用（即梦 Dreamina/Jimeng）",
    dep: "云端",
    p: "AA 文生视频排行榜第 3（2.5）、第 7（2.0）",
    l: "发布日期和各地区 API 是否可用不清楚；2.5 没有技术报告"
  },
  "MiniMax H3 (Hailuo)": {
    r: "视频模型，有 API，也有开放权重",
    d: "4–15 秒，768p（2K 靠再生成阶段），原生立体声。330 亿参数的稠密 Transformer；权重在 Hugging Face。",
    ctl: "API（MiniMax、fal、Runway）；本地权重（ComfyUI 原生）",
    dep: "云端或本地（多显卡）",
    p: "AA 文生视频排行榜第 4，AA 图生视频排行榜第 1；GitHub 约 10.1k 星标",
    l: "社区许可；美国/欧盟/英国/韩国用户要填申请表；硬件要求高"
  },
  "FLUX 3 Video (Black Forest Labs)": {
    r: "封闭的文生视频 / 图生视频",
    d: "最长 20 秒并带音频；关键帧、续写、多场景。",
    ctl: "API（BFL 及合作方）",
    dep: "云端",
    p: "AA 文生视频排行榜第 6",
    l: "开放的 dev 版只是宣布了；有报道称上线时分辨率有限制"
  },
  "Gemini Omni Flash 1.1 (Google)": {
    r: "封闭的多模态视频模型",
    d: "自 2026 年 5 月起 Google 的默认视频模型：文生视频、图生视频、首帧/末帧、主体参考、对话式多轮编辑、延长到 40 秒、原生音频、SynthID。",
    ctl: "Gemini API / AI Studio / Vertex；Flow 应用",
    dep: "云端",
    p: "AA 文生视频排行榜第 8；随 Gemini 应用和 YouTube 分发",
    l: "上传视频再编辑在欧洲经济区/瑞士/英国不可用；没有反向提示"
  },
  "Veo 3.1 / Fast / Lite (Google)": {
    r: "封闭的文生视频 / 图生视频",
    d: "4/6/8 秒片段，720p–4K，原生音频；最多 3 张参考图；首帧加末帧；可延长到大约 148 秒。",
    ctl: "Gemini API、Vertex AI、fal、Runway API",
    dep: "云端",
    p: "集成很广（Flow、Adobe、各聚合器）",
    l: "输出只保存 2 天；欧盟/英国/瑞士/中东北非对人物生成有限制"
  },
  "Kling 3.0 / O3 (Kuaishou)": {
    r: "封闭的文生视频 / 图生视频",
    d: "最长 15 秒，4K，原生多语言音频，多镜头分镜（最多 6 个镜头），起始/结束帧，角色参考。Kling 4.0 Flash 自 2026-09-28 起早期体验。",
    ctl: "Kling API、Runway API、fal、ComfyUI 合作节点",
    dep: "云端",
    p: "LLM-Stats 竞技场第 1（2026-10-17）；在 AA 上居中游",
    l: "4.0 的规格和价格未确认"
  },
  "Runway Gen-4.5 / Aleph 2.0 / Act-Two": {
    r: "封闭生成 + 视频生视频编辑",
    d: "Gen-4.5 做文生视频/图生视频（没有原生音频）；Aleph 按指令编辑已有视频；Act-Two 做表演迁移。Runway 的 API 也转售 Kling、Veo、Wan、Seedance、MiniMax。",
    ctl: "REST API（1 积分 = 0.01 美元）、网页应用",
    dep: "云端",
    p: "创意行业里用了很久的工具",
    l: "Gen-4.5 最高 720p，没有音频"
  },
  "Luma Ray 3.2": {
    r: "封闭的文生视频 / 图生视频 / 视频生视频",
    d: "5–10 秒，最高 1080p，可输出 HDR/EXR；最多 16 个关键帧；可延长、重构图。",
    ctl: "Luma Agents API、fal、Runware、ComfyUI",
    dep: "云端",
    p: "聚合器目录里常见",
    l: "价格只在综述里见过"
  },
  "Grok Imagine Video 1.5 (xAI)": {
    r: "封闭的文生视频 / 图生视频",
    d: "1–15 秒，最高 1080p，原生音频。",
    ctl: "xAI API、Runway API",
    dep: "云端",
    p: "AA 文生视频排行榜第 10",
    l: "没找到一手价格"
  },
  "Vidu Q3 / Q4 Preview (Shengshu)": {
    r: "封闭的图生视频 / 参考生视频",
    d: "Q3 有原生音频；Q4 Preview（2026-10-07）只有图生视频和参考生视频。",
    ctl: "Vidu API、转售商",
    dep: "云端",
    p: "AA 有收录",
    l: "Q4 的价格互相矛盾"
  },
  "Midjourney Video V1": {
    r: "消费级应用里的图生视频",
    d: "让 Midjourney 的图动起来；约 5 秒，可延长到约 21 秒；480–720p。",
    ctl: "仅网页 / Discord",
    dep: "云端",
    p: "消费用户基数很大",
    l: "没有官方 API；没有文生视频"
  },
  "Adobe Firefly Video (+ partner models)": {
    r: "Creative Cloud 里的生成",
    d: "Adobe 自己的模型，加上合作模型（Kling、Luma、Runway、Veo、Seedance 等），按生成积分计费。",
    ctl: "Firefly 应用、Creative Cloud 应用",
    dep: "云端",
    p: "随 Creative Cloud 分发",
    l: "合作模型自有条款；“商业安全”只适用于 Adobe 自己的模型"
  },
  "OpenAI Sora 2 — discontinued": {
    r: "已停用的文生视频模型 + 社交应用",
    d: "2026-03-24 宣布关停；应用和网页于 2026-04-26 关闭；API 计划于 2026-09-24 结束。列在这里，是因为很多 2025 年的教程还在引用它。",
    ctl: "—",
    dep: "—",
    p: "曾是 2025 年讨论最多的模型之一",
    l: "不要把它纳入计划"
  },
  "LTX-2.5 (Lightricks) — open weights": {
    r: "开放权重的音频+视频模型",
    d: "音视频联合的扩散 Transformer（模型卡记载约 190 亿参数）；6–20 秒；720p–4K；文生视频、图生视频、视频生视频、LoRA、多镜头。",
    ctl: "本地（diffusers、ComfyUI）、LTX API、fal",
    dep: "本地（24 GB+ 显卡较实用）或云端",
    p: "GitHub：LTX-2 约 9.8k 星标，LTX-Video 约 11.1k 星标",
    l: "许可按营收设门槛；高分辨率显存需求大"
  },
  "Wan 2.2 / 2.1 — open weights": {
    r: "开放的文生视频 / 图生视频 / 首末帧，以及动画、语音驱动视频变体",
    d: "大约 5 秒这一档的 720p 片段；用得最广的开源视频家族。Apache-2.0。",
    ctl: "Python、diffusers、ComfyUI",
    dep: "本地 GPU",
    p: "GitHub：Wan2.2 约 18.0k 星标，Wan2.1 约 17.2k 星标",
    l: "没有更新的开源 Wan；基础模型没有原生音频"
  },
  "HunyuanVideo / 1.5 (Tencent) — open weights": {
    r: "开放的文生视频 / 图生视频",
    d: "1.5 是 83 亿参数，跑起来更轻（有报告约 14 GB 显存）。",
    ctl: "Python、ComfyUI",
    dep: "本地 GPU",
    p: "GitHub 约 12.6k 星标（v1）",
    l: "许可文本写明不适用于欧盟、英国和韩国——不能用于以欧盟为基地的工作"
  },
  "CogVideoX / Mochi / Open-Sora / SkyReels": {
    r: "较早或研究向的开源模型",
    d: "2024–25 年重要的开源模型，现在落后于领先者；适合学习和研究。",
    ctl: "Python",
    dep: "本地 GPU",
    p: "Open-Sora 约 29.9k 星标，CogVideo 约 13.1k 星标",
    l: "质量落后于 2026 年的领先者"
  },
  "fal.ai": {
    r: "模型 API 聚合器",
    d: "用一个队列 API 托管数百个图像/视频/音频模型：提交，然后轮询、流式或回调。",
    ctl: "REST 队列 API，Python/JS SDK",
    dep: "云端",
    p: "代理教程里常见的默认选择",
    l: "模型一变，端点就会弃用"
  },
  "Replicate": {
    r: "模型 API 聚合器",
    d: "通过预测 API 跑社区模型和官方模型；可以同步等待，也可以用回调。",
    ctl: "REST API、SDK",
    dep: "云端",
    p: "开发者用户基数大",
    l: "用得少的模型会冷启动"
  },
  "Runway API (as reseller)": {
    r: "一个 API 接入许多封闭模型",
    d: "一份积分余额覆盖 Runway、Kling、Veo、Wan 3.0、Seedance、MiniMax、Grok 和 Omni。",
    ctl: "REST API",
    dep: "云端",
    p: "厂商文档",
    l: "和网页套餐的余额是分开的"
  },
  "ComfyUI": {
    r: "生成式媒体的节点图工作流引擎",
    d: "开源图像/视频流水线的事实标准；跑本地模型，也有调用封闭 API 的合作节点。工作流是 JSON；HTTP API 在 8188 端口。",
    ctl: "图形界面 + JSON 工作流 + HTTP API；社区 MCP 服务",
    dep: "本地或 Comfy 云端",
    p: "约 138k GitHub 星标；2026-10-15 发布 v0.41.0",
    l: "自定义节点一更新，工作流就容易坏"
  },
  "Hugging Face diffusers": {
    r: "开源扩散模型的 Python 库",
    d: "用一致的 Python API 加载并运行大多数开源图像/视频模型。",
    ctl: "Python",
    dep: "本地 / 云端 GPU",
    p: "约 34.7k 星标；v0.41.0（2026-10-06）",
    l: "显卡和显存要自己管"
  },
  "GPT Image 2.5 / 2 (OpenAI)": {
    r: "封闭的文生图 + 编辑",
    d: "在 Artificial Analysis 图像竞技场居前（2026 年 9 月的版本）。基于参考图编辑。",
    ctl: "OpenAI Images API",
    dep: "云端",
    p: "AA 图像竞技场第 1–第 3",
    l: "本研究没有确认官方的单张价格"
  },
  "Nano Banana 2.1 / 2 / Pro (Google Gemini image)": {
    r: "封闭的图像生成 + 对话式编辑",
    d: "多图参考和编辑很强；常用来做一致的关键帧。",
    ctl: "Gemini API / Vertex",
    dep: "云端",
    p: "AA 图像竞技场第 4（2.1）",
    l: "模型 ID 变得很快；最初的 Nano Banana 于 2026-10-02 关停"
  },
  "FLUX.2 / FLUX 3 Image (Black Forest Labs)": {
    r: "图像生成 + 多参考编辑",
    d: "FLUX.2 家族含小型开放的 klein 模型；FLUX 3 Image（2026）是封闭的。",
    ctl: "BFL API、合作方；klein/dev 可在本地跑",
    dep: "云端或本地",
    p: "FLUX.1 仓库约 26k 星标；AA 第 12（FLUX 3）",
    l: "各变体许可不同（klein 4B 为 Apache-2.0；dev 不可商用）"
  },
  "Qwen-Image-2.1 (Alibaba)": {
    r: "开放权重的图像生成 + 编辑",
    d: "AA 上开放权重的第一名；可输出 RGBA；最多 10 个参考。",
    ctl: "本地（Hugging Face / ModelScope）",
    dep: "本地",
    p: "AA 开放权重排行榜第 1",
    l: "有报道称仅限研究许可（更早的 Qwen-Image 是 Apache-2.0）——需要核实"
  },
  "Midjourney V8.x": {
    r: "消费级图像生成器",
    d: "审美很强；带风格参考。",
    ctl: "网页 / Discord",
    dep: "云端",
    p: "消费用户基数大",
    l: "没有官方 API"
  },
  "Seedream 5, Recraft V4, Ideogram 4": {
    r: "其他领先的图像模型",
    d: "Seedream（字节跳动）偏通用；Recraft 做矢量和品牌资产；Ideogram 做画面里的文字。",
    ctl: "API（含 OpenRouter）",
    dep: "云端",
    p: "排行榜上有收录",
    l: "价格因托管方而异"
  },
  "Stable Diffusion 3.5 / SDXL": {
    r: "开源图像模型（生态底座）",
    d: "质量落后于 2026 年的领先者，但是 LoRA/ControlNet 生态的底座。",
    ctl: "Python、ComfyUI",
    dep: "本地",
    p: "generative-models 约 27.3k 星标",
    l: "商用需要注册"
  },
  "ControlNet + preprocessors": {
    r: "结构条件控制",
    d: "用姿态、深度、边缘、分割来约束生成——例如从一块三维粗模出发。",
    ctl: "ComfyUI 节点、diffusers",
    dep: "本地",
    p: "约 34.1k 星标",
    l: "多为 Stable Diffusion 时代的模型"
  },
  "LoRA training (ai-toolkit, kohya sd-scripts)": {
    r: "角色/风格一致性",
    d: "用一个角色、产品或风格的 10–50 张图，微调一小块适配器；图像和部分视频模型都能用。",
    ctl: "命令行脚本",
    dep: "本地 GPU",
    p: "ai-toolkit 约 12.3k 星标，sd-scripts 约 7.2k 星标",
    l: "需要整理过的数据集和显卡时间"
  },
  "IP-Adapter": {
    r: "图像提示（身份/风格）条件",
    d: "用一张参考图当提示，约束身份或风格。",
    ctl: "ComfyUI、diffusers",
    dep: "本地",
    p: "约 6.7k 星标",
    l: "上游自 2024 年起停滞"
  },
  "HeyGen": {
    r: "虚拟人与翻译平台",
    d: "数字分身、照片虚拟人、Avatar IV、视频翻译、Video Agent。也是 HyperFrames 背后的公司。",
    ctl: "网页应用、REST API（单独的按量钱包）",
    dep: "云端",
    p: "主要商业玩家",
    l: "数字分身需要出镜同意声明"
  },
  "Synthesia": {
    r: "企业虚拟人视频平台",
    d: "库存虚拟人和本人虚拟人，用于培训和企业沟通；多种语言。",
    ctl: "网页应用、API",
    dep: "云端",
    p: "企业在用",
    l: "哪个套餐包含 API 不清楚；同意义务在客户一方"
  },
  "sync.so (Sync Labs)": {
    r: "口型同步 / 配音 API",
    d: "把已有视频里的嘴重新对上新的音频（sync-3、lipsync-2-pro）。",
    ctl: "REST API + SDK",
    dep: "云端",
    p: "常见的配音后端",
    l: "各套餐有时长上限"
  },
  "Tavus, D-ID, Hedra, OmniHuman, Kling Avatar": {
    r: "其他虚拟人 / 说话头服务",
    d: "对话式实时虚拟人（Tavus、D-ID）；图像加音频生成说话视频（Hedra、OmniHuman、Kling Avatar）。",
    ctl: "API、转售商",
    dep: "云端",
    p: "各有所用",
    l: "官方价格常常不公布；要核对肖像政策"
  },
  "Open talking-head models (Wan2.2-S2V, InfiniteTalk, LivePortrait, LatentSync, MuseTalk)": {
    r: "本地的音频驱动视频 / 口型同步",
    d: "图像或视频加音频，生成说话视频；也可以做表情重定向。",
    ctl: "Python 命令行、ComfyUI",
    dep: "本地 GPU",
    p: "LivePortrait 约 19.3k 星标，InfiniteTalk 约 8.1k，LatentSync 约 6.1k 星标",
    l: "许可不一（有的自定义，有的不清楚）；显存占用高"
  },
  "Video mocap: Autodesk Flow Studio, Move.ai, DeepMotion, Rokoko": {
    r: "从普通视频做动作捕捉",
    d: "从视频里抽出身体动画，驱动三维角色；Flow Studio 还能用 CG 角色替换演员。",
    ctl: "网页应用；可导出到 Blender/Maya/Unreal",
    dep: "云端",
    p: "在独立动画里已经站住",
    l: "没找到公开 API"
  },
  "SAM 2 / SAM 3 (Meta)": {
    r: "分割与跟踪",
    d: "从点击得到视频里逐个物体的遮罩；SAM 3 加上文字和概念提示，例如“把火箭遮出来”。",
    ctl: "Python",
    dep: "本地 GPU",
    p: "SAM 2 约 20k 星标，SAM 3 约 12k 星标",
    l: "SAM 3 的权重有门禁"
  },
  "rembg / BiRefNet / RobustVideoMatting": {
    r: "去背景与抠像",
    d: "不用绿幕就把主体抠出来。",
    ctl: "命令行、Python",
    dep: "本地",
    p: "rembg 约 25.1k 星标",
    l: "逐帧工具在视频上可能闪"
  },
  "Topaz Video AI / Topaz API": {
    r: "商业超分、插帧、修复",
    d: "基准级的超分辨率和修复；有桌面版，也有云 API。",
    ctl: "桌面图形界面/命令行、REST API",
    dep: "本地 + 云端",
    p: "增强领域的行业标准",
    l: "桌面版价格互相矛盾；API 里有没有视频模型尚未确认"
  },
  "Real-ESRGAN / SeedVR2 / Video2X": {
    r: "开源超分",
    d: "GAN 超分（快，可能闪）、扩散式视频修复（SeedVR2）、流水线封装（Video2X）。",
    ctl: "命令行、Python、ComfyUI",
    dep: "本地 GPU",
    p: "Real-ESRGAN 约 37.1k 星标，Video2X 约 22.3k 星标",
    l: "Real-ESRGAN 自 2024 年起停滞；Video2X 是 AGPL"
  },
  "RIFE / FILM / GIMM-VFI": {
    r: "帧插值",
    d: "合成中间帧，让运动更顺，或做慢动作。",
    ctl: "命令行、Python",
    dep: "本地",
    p: "RIFE 约 5.6k 星标",
    l: "大幅或快速运动上会有伪影"
  },
  "Remotion": {
    r: "React 到视频的框架",
    d: "把视频写成 React 组件；用命令行或 Node API 无界面渲染，也可以在 AWS Lambda 上规模化渲染。有给 Claude Code、Codex、Cursor 的官方 Agent Skills。",
    ctl: "TypeScript/React 代码、命令行、Node API",
    dep: "本地、Docker、AWS Lambda",
    p: "约 64.7k 星标；几乎每天发布（v4.0.536，2026-10-16）；skills 仓库约 5.3k 星标",
    l: "源码可得的许可（不是 OSI 开源）；需要无头 Chromium"
  },
  "HyperFrames (HeyGen)": {
    r: "HTML 到视频的框架，明确为代理而建",
    d: "普通 HTML/CSS，加上 GSAP、Lottie、Three.js，用数据属性标注；无头 Chrome 逐帧定位，FFmpeg 编码。自带代理技能和一个 Claude Code 插件。",
    ctl: "HTML、命令行、代理技能",
    dep: "本地、Docker、AWS Lambda",
    p: "自 2026-03-10 起约 65.7k 星标；v0.8.168（2026-10-17）",
    l: "1.0 之前 API 变动大；没有说明是否支持 Windows"
  },
  "Manim (Community / 3b1b)": {
    r: "Python 数学动画库",
    d: "3Blue1Brown 风格的公式、图表和几何动画。",
    ctl: "Python + 命令行",
    dep: "本地",
    p: "ManimCE 约 41.6k 星标（v0.22.0，2026-10-08）；manimgl 约 95.2k 星标",
    l: "依赖 LaTeX；观感是典型的数学讲解风格"
  },
  "Motion Canvas / Revideo": {
    r: "基于生成器的 TypeScript 动画",
    d: "代码优先的动画，带可视化编辑器（Motion Canvas）；Revideo 是无界面渲染的分支。",
    ctl: "TypeScript",
    dep: "本地",
    p: "Motion Canvas 约 19.4k 星标",
    l: "Motion Canvas 自 2024 年 12 月后再无发布"
  },
  "GSAP, Lottie, Three.js, D3, PixiJS": {
    r: "用在视频框架里的网页动画和图形库",
    d: "时间线（GSAP）、从 After Effects 导出的矢量动画（Lottie）、三维（Three.js）、数据可视化（D3）、二维 GPU（PixiJS）。",
    ctl: "JavaScript",
    dep: "浏览器 / 无头浏览器",
    p: "Three.js 约 116.5k、D3 约 113.8k、PixiJS 约 48.4k、Lottie 约 32.2k、GSAP 约 29.3k 星标",
    l: "它们自己不是渲染器，还需要逐帧抓取"
  },
  "After Effects (+ aerender, templates)": {
    r: "行业里的动态图形应用",
    d: "专业动态设计工具；可以用 ExtendScript 写脚本，也可以从命令行渲染；模板渲染服务（例如 Plainly）建在它上面。",
    ctl: "图形界面、ExtendScript、aerender 命令行",
    dep: "本地（Windows/macOS）",
    p: "行业标准",
    l: "很重；无界面时的许可有疑问"
  },
  "Blender": {
    r: "开源三维套件（建模、动画、仿真、渲染）",
    d: "一切都能用 Python（bpy）写脚本；用 blender -b 做无界面渲染；Cycles 路径追踪，EEVEE 实时。",
    ctl: "Python、命令行、图形界面；MCP 桥",
    dep: "本地（CPU/GPU）",
    p: "5.2.2 LTS（2026-09-15）；社区很大",
    l: "脚本可能在大版本之间坏掉；难的是做资产"
  },
  "Unreal Engine": {
    r: "用于电影和虚拟制片的实时引擎",
    d: "照片级实时渲染；Sequencer 加 Movie Render Queue；有 Python 和 Remote Control API。",
    ctl: "Python、MRQ 命令行、图形界面",
    dep: "本地 GPU",
    p: "虚拟制片的标准",
    l: "工程非常重；自动化很复杂"
  },
  "Unity / Godot": {
    r: "带录制器的游戏引擎",
    d: "Unity Recorder 加 Timeline（只在编辑器里）；Godot 的 Movie Maker 模式从命令行按固定帧率写帧。",
    ctl: "C# / GDScript、命令行（Godot）",
    dep: "本地",
    p: "Godot 约 118.5k 星标",
    l: "不是为电影输出而建的"
  },
  "Three.js / React Three Fiber / Babylon.js": {
    r: "网页三维",
    d: "浏览器里的三维，可以通过 Remotion 或 HyperFrames 渲染成视频。",
    ctl: "JavaScript",
    dep: "浏览器",
    p: "Three.js 约 116.5k 星标，R3F 约 33k 星标",
    l: "网页渲染的质量低于路径追踪"
  },
  "Houdini / Cinema 4D / Omniverse": {
    r: "专业的程序化、动态设计和仿真平台",
    d: "Houdini 做程序化视效和仿真；Cinema 4D 做动态设计；NVIDIA Omniverse（OpenUSD）做仿真级渲染。",
    ctl: "Python（全部都有）、图形界面",
    dep: "本地",
    p: "各自细分领域的行业标准",
    l: "无界面或自动化使用的许可需要核对"
  },
  "Gaussian splatting / NeRF (nerfstudio etc.)": {
    r: "从照片采集来的三维场景",
    d: "从照片重建真实的场所和物体，再渲染新的摄像机路径。",
    ctl: "Python",
    dep: "本地 CUDA GPU",
    p: "graphdeco 泼溅约 24.2k 星标，nerfstudio 约 12.1k 星标",
    l: "场景是静态的；很难再编辑"
  },
  "Matplotlib / Plotly": {
    r: "数据动画",
    d: "把动画图表导出成视频（Matplotlib 的 FuncAnimation 交到 FFmpeg）。",
    ctl: "Python",
    dep: "本地",
    p: "Matplotlib 约 23.4k 星标，Plotly 约 18.8k 星标",
    l: "要做成播出级样式得花功夫"
  },
  "Genesis / MuJoCo / Taichi / NVIDIA Warp": {
    r: "物理仿真",
    d: "算出物理上说得通的运动（刚体、机器人、粒子），再交给渲染。",
    ctl: "Python",
    dep: "本地（部分要 GPU）",
    p: "Genesis 约 30.1k 星标，Taichi 约 28.4k，MuJoCo 约 15.7k 星标",
    l: "自带渲染能用，但不是电影级"
  },
  "ParaView / VTK": {
    r: "科学可视化",
    d: "批量渲染场、网格和仿真结果（pvpython / pvbatch）。",
    ctl: "Python",
    dep: "本地 / HPC",
    p: "科学计算里的标准",
    l: "看起来是科学图，不是成片"
  },
  "FFmpeg": {
    r: "通用媒体引擎",
    d: "编码、解码、剪切、拼接、转场、叠加、字幕、响度、分析。几乎一切的后端。",
    ctl: "命令行（以及库）",
    dep: "本地",
    p: "9.0.2（2026-09-18）；到处都在用",
    l: "滤镜图的语法容易写错"
  },
  "MoviePy / PyAV": {
    r: "Python 视频剪辑",
    d: "MoviePy 是 Python 里的高层合成；PyAV 是底层的 FFmpeg 绑定。",
    ctl: "Python",
    dep: "本地",
    p: "MoviePy 约 15k 星标（v2.2.1，2025-05）",
    l: "MoviePy 比直接调用 FFmpeg 慢；发布也慢"
  },
  "OpenTimelineIO": {
    r: "时间线交换",
    d: "读写剪辑时间线，并在各种非线性剪辑格式之间转换。",
    ctl: "Python",
    dep: "本地",
    p: "Academy Software Foundation 的项目",
    l: "它不是渲染器"
  },
  "auto-editor / PySceneDetect": {
    r: "自动剪切与镜头检测",
    d: "切掉静音和空档；检测镜头边界。",
    ctl: "命令行、Python",
    dep: "本地",
    p: "约 5.5k 和约 5.3k 星标",
    l: "切得机械，不管叙事"
  },
  "MLT / melt": {
    r: "开源剪辑框架（Shotcut 和 Kdenlive 的底层）",
    d: "用 XML 时间线做无界面渲染。",
    ctl: "XML + 命令行",
    dep: "本地",
    p: "v7.42.0（2026-10-03）",
    l: "文档比 FFmpeg 少"
  },
  "Shotstack / Creatomate / JSON2Video": {
    r: "云端的 JSON 转视频渲染 API",
    d: "发一条 JSON 时间线，或填一个模板，拿回一个 MP4。",
    ctl: "REST API",
    dep: "云端",
    p: "已经站住的 SaaS",
    l: "模板格式锁在厂商那边"
  },
  "DaVinci Resolve (Studio)": {
    r: "专业剪辑、调色、音频（Fairlight）、视效（Fusion）",
    d: "行业标准的调色；Python/Lua 脚本从 21.1 起只有 Studio 才有。",
    ctl: "图形界面；Python/Lua（Studio）；社区 MCP 桥",
    dep: "本地",
    p: "用得非常广",
    l: "免费版 21.1 及以后没有脚本"
  },
  "Premiere Pro / Final Cut Pro": {
    r: "专业剪辑软件",
    d: "Premiere 正在把脚本迁到 UXP；Final Cut 可以导入 FCPXML 时间线，这是一条稳的交接路径。",
    ctl: "图形界面；UXP/ExtendScript；FCPXML",
    dep: "本地",
    p: "行业标准",
    l: "自动化 API 还在过渡（Premiere）"
  },
  "Descript / CapCut / Kdenlive / Shotcut": {
    r: "其他剪辑软件",
    d: "Descript 按文字剪辑（二手来源说公开 API 在测试）；CapCut 没有官方 API；Kdenlive 和 Shotcut 开源，工程文件基于 MLT。",
    ctl: "图形界面；工程文件",
    dep: "本地/云端",
    p: "用户基数大",
    l: "CapCut 对代理不安全（没有 API，服务条款也不允许）"
  },
  "ElevenLabs (TTS, voice design, cloning, dubbing)": {
    r: "领先的商业语音平台",
    d: "Eleven v4（2026-09-28）；有字符级时间戳端点；声音克隆带核验；配音；也做音乐和音效。",
    ctl: "REST API、SDK、MCP 服务",
    dep: "云端",
    p: "人工智能语音的市场领先者",
    l: "词级时间要从字符分组才能得到"
  },
  "Azure AI Speech": {
    r: "带 SSML 和视素的云端语音合成",
    d: "神经语音、SSML 控制、词边界事件，以及给口型同步用的视素和三维混合形状。",
    ctl: "Speech SDK、REST",
    dep: "云端（部分有容器）",
    p: "企业标准",
    l: "视素支持因语言区域而异"
  },
  "OpenAI TTS (gpt-4o-mini-tts)": {
    r: "可以用指令控制的语音合成",
    d: "用自然语言描述语气。",
    ctl: "REST API",
    dep: "云端",
    p: "用得很广",
    l: "文档里没有对齐输出"
  },
  "Google Cloud TTS (Chirp 3 HD, Gemini TTS)": {
    r: "云端语音合成",
    d: "高质量语音；Gemini TTS 可以用提示来控制。",
    ctl: "REST API",
    dep: "云端",
    p: "主要云厂商",
    l: "价格页写得含糊"
  },
  "Amazon Polly": {
    r: "带语音标记的云端语音合成",
    d: "词、句子和视素的 speech marks（语音标记）用来对时间；生成式语音上没有这项。",
    ctl: "AWS API",
    dep: "云端",
    p: "主要云厂商",
    l: "音色的表现力不如领先者"
  },
  "Cartesia, Hume, Murf, WellSaid, Resemble": {
    r: "其他商业语音合成",
    d: "低延迟（Cartesia）、带情绪（Hume）、棚录旁白（WellSaid、Murf）。",
    ctl: "API",
    dep: "云端",
    p: "各有所用",
    l: "PlayHT 在 2025 年关停——避开还在提它的旧教程"
  },
  "Open TTS: VibeVoice, Chatterbox, F5-TTS, CosyVoice, Kokoro, Dia": {
    r: "本地语音合成 / 零样本克隆",
    d: "在本地跑旁白；其中几个可以用几秒音频做克隆。",
    ctl: "Python",
    dep: "本地（有 GPU 更好）",
    p: "VibeVoice 约 54.9k 星标，Chatterbox 约 27k，CosyVoice 约 24k，F5-TTS 约 15.4k 星标",
    l: "许可不一（MIT/Apache，也有自定义或不可商用的权重）；没有原生的词级时间"
  },
  "ElevenLabs Music": {
    r: "音乐生成 API",
    d: "文字生成音乐，商用条款按套餐定。",
    ctl: "REST API",
    dep: "云端",
    p: "2025 年 8 月上线",
    l: "能不能出分轨还没确认"
  },
  "Google Lyria (3 / RealTime)": {
    r: "音乐生成 API",
    d: "生成歌曲和片段；还有实验性的实时流式音乐。",
    ctl: "Gemini API、Vertex",
    dep: "云端",
    p: "Google",
    l: "RealTime 仍是实验功能"
  },
  "Suno (v6)": {
    r: "消费级歌曲生成器",
    d: "带人声的完整歌曲；v6 家族（2026-09-09）。",
    ctl: "仅网页和移动应用",
    dep: "云端",
    p: "最流行的消费级音乐人工智能",
    l: "没有官方公开 API；和厂牌的诉讼还没了结（UMG、Sony）"
  },
  "Udio": {
    r: "消费级歌曲生成器（已受限）",
    d: "2025-10-29 和厂牌和解之后，下载被关掉；授权平台还没上线。",
    ctl: "网页",
    dep: "云端",
    p: "—",
    l: "不能拿来当素材来源"
  },
  "Stable Audio 3.0": {
    r: "音乐和音效模型（开放权重 + API）",
    d: "最长约 6 分钟的曲目；Small 和 Medium 有开放权重；用授权过的数据训练。",
    ctl: "本地权重；Stability API",
    dep: "本地或云端",
    p: "2026-05-20 发布",
    l: "大模型只有 API"
  },
  "ACE-Step / YuE / MusicGen": {
    r: "开源音乐模型",
    d: "在本地生成歌曲（ACE-Step 快，YuE 从歌词生歌）；MusicGen 做器乐。",
    ctl: "Python",
    dep: "本地 GPU",
    p: "YuE 约 12.1k 星标，MusicGen/AudioCraft 约 23.7k 星标",
    l: "质量落后于商业领先者"
  },
  "Epidemic Sound / Artlist APIs": {
    r: "已授权的音乐和音效库",
    d: "人做的曲库，有 API（合作方或企业才能访问）；带节拍数据，也有按时长裁好的版本。",
    ctl: "REST API（要有合作关系）",
    dep: "云端",
    p: "创作者用得很广",
    l: "用 API 得先谈成合作"
  },
  "ElevenLabs Sound Effects": {
    r: "文字生成音效的 API",
    d: "描述一个声音，得到一段音频。",
    ctl: "REST API",
    dep: "云端",
    p: "—",
    l: "—"
  },
  "MMAudio": {
    r: "开源的视频生音频（拟音）",
    d: "用视频加文字，给一段无声画面生成对得上的声音。",
    ctl: "Python",
    dep: "本地 GPU",
    p: "约 2.3k 星标",
    l: "片段偏短"
  },
  "Freesound API": {
    r: "社区音效库",
    d: "几十万条 Creative Commons 许可下的声音。",
    ctl: "REST API v2",
    dep: "云端",
    p: "已经存在很久",
    l: "必须按许可筛选，并给作者署名"
  },
  "Whisper / faster-whisper / whisper.cpp": {
    r: "开源语音识别",
    d: "转写带词级时间戳；在本地跑。",
    ctl: "Python、命令行",
    dep: "本地",
    p: "Whisper 约 110.7k 星标，whisper.cpp 约 54.4k，faster-whisper 约 25.9k 星标",
    l: "遇到静音或音乐会编出不存在的词"
  },
  "WhisperX": {
    r: "词对齐的语音识别，带说话人分离",
    d: "用强制对齐得到准确的词时间戳，并标出说话人。",
    ctl: "Python、命令行",
    dep: "本地",
    p: "约 24.6k 星标",
    l: "说话人分离模型另有许可和条款（pyannote）"
  },
  "Deepgram / AssemblyAI / ElevenLabs Scribe": {
    r: "云端语音识别",
    d: "又快又准的转写，带词级时间戳。",
    ctl: "REST API",
    dep: "云端",
    p: "主要厂商",
    l: "数据会离开你的机器"
  },
  "Montreal Forced Aligner / ctc-forced-aligner": {
    r: "强制对齐",
    d: "给定音频和逐字稿，返回词和音素的时间戳。",
    ctl: "命令行、Python",
    dep: "本地",
    p: "MFA 约 1.9k 星标",
    l: "稿子必须和音频完全一致"
  },
  "FFmpeg loudnorm / ebur128 / sidechaincompress": {
    r: "用代码做响度和压低",
    d: "按 EBU R128 测量并归一化响度；有人说话时把音乐压下去。",
    ctl: "命令行",
    dep: "本地",
    p: "标准做法",
    l: "要准，得跑两遍"
  },
  "Auphonic": {
    r: "自动音频后期的 API",
    d: "把电平、响度归一化和降噪做成一项服务。",
    ctl: "REST API",
    dep: "云端",
    p: "播客行业的标准",
    l: "—"
  },
  "Demucs / UVR / DeepFilterNet / pyloudnorm": {
    r: "开源的分离、降噪和响度测量",
    d: "把人声和音乐分成轨；给语音降噪；在 Python 里测 LUFS。",
    ctl: "Python、命令行、图形界面（UVR）",
    dep: "本地",
    p: "UVR 约 26.7k 星标，Demucs 约 10.4k 星标",
    l: "原来的 Demucs 仓库已归档（有人维护分支）"
  },
  "Remotion Agent Skills + Claude Code plugin": {
    r: "给编程代理的官方技能包",
    d: "一套做法技能（创建、标注、Studio、渲染、字幕、地图等），教 Claude Code、Codex、Cursor 怎么写和渲染 Remotion 视频。",
    ctl: "npx skills add remotion-dev/skills",
    dep: "本地",
    p: "约 5.3k 星标（创建于 2026-01-19）",
    l: "人在 Remotion Studio 里预览；风格是动态图形"
  },
  "HyperFrames skills / Claude Code plugin": {
    r: "代理优先的视频框架",
    d: "21 个已发布的技能，外加一个 Claude Code 插件；检查、预览，然后做确定性渲染。",
    ctl: "插件市场、npx skills",
    dep: "本地",
    p: "属于那个约 65.7k 星标的仓库",
    l: "还年轻，变得很快"
  },
  "browser-use/video-use": {
    r: "技能：用对话来剪真实素材",
    d: "先转写（ElevenLabs Scribe），再规划剪切、调色，用 HyperFrames、Remotion、Manim 在并行子代理里做叠加，烧上字幕；用胶片条加波形给每个剪点自评；用户先批准计划。",
    ctl: "Claude Code / Codex 技能",
    dep: "本地 + ElevenLabs API",
    p: "约 29.2k 星标（创建于 2026-04-12）",
    l: "要用你自己的素材；质量没有独立基准"
  },
  "Blender MCP (mcp-for-blender)": {
    r: "驱动 Blender 的 MCP 服务",
    d: "代理执行 Blender 的 Python，导入资产（Poly Haven、Sketchfab），并调用三维生成 API。",
    ctl: "MCP + Blender 插件",
    dep: "本地",
    p: "约 31.3k 星标",
    l: "会在 Blender 里跑任意代码——要放进沙箱"
  },
  "DaVinci Resolve MCP": {
    r: "建在 Resolve 脚本之上的 MCP 服务",
    d: "媒体池、时间线剪辑、调色、Fusion、Fairlight、渲染队列。",
    ctl: "MCP",
    dep: "本地（Resolve Studio）",
    p: "约 3.6k 星标",
    l: "从 21.1 起需要 Studio"
  },
  "ComfyUI MCP servers": {
    r: "建在 ComfyUI 上的 MCP",
    d: "让代理运行并编写 ComfyUI 工作流（图像、视频、音频）。",
    ctl: "MCP",
    dep: "本地 / 云端 ComfyUI",
    p: "artokun 约 0.8k 星标，joenorton 约 0.4k 星标",
    l: "社区维护；深浅不一"
  },
  "Vendor MCPs: MiniMax, Runway, ElevenLabs": {
    r: "做成 MCP 工具的生成 API",
    d: "MiniMax（语音、图像、视频）、Runway 托管的 MCP 插件、ElevenLabs 的语音工具。",
    ctl: "MCP",
    dep: "云端",
    p: "MiniMax MCP 约 1.6k 星标",
    l: "ElevenLabs 的 MCP GitHub 仓库已于 2026-10-17 归档——状态要再核对"
  },
  "FFmpeg / After Effects / Premiere / Manim MCPs": {
    r: "社区做的 MCP 封装",
    d: "把剪切、拼接、叠加，或各应用的脚本，暴露成工具。",
    ctl: "MCP",
    dep: "本地",
    p: "各自有几百星标",
    l: "都是小项目；对 FFmpeg，编程代理通常可以直接调命令行"
  },
  "claude-code-video-toolkit / product-launch-video / openfilm": {
    r: "开源的代理视频流水线",
    d: "脚本到人声、音乐、画面，再由 Remotion 渲染（toolkit）；简报加屏幕录制，交给 Remotion，并有 4 个并行的评论代理（EveryInc）；代理把影片写成 HTML，人来剪（openfilm）。",
    ctl: "Claude Code 的技能和命令",
    dep: "本地 + API",
    p: "约 2.3k / 62 / 约 0.8k 星标",
    l: "还年轻；质量没有做过基准"
  },
  "MoneyPrinterTurbo / ShortGPT": {
    r: "模板化的短视频自动化",
    d: "从主题到脚本，再到素材库画面、语音合成和字幕，最后出 MP4。这是组装，不是生成。",
    ctl: "Python 应用 / 命令行",
    dep: "本地 + API",
    p: "MoneyPrinterTurbo 约 132k 星标",
    l: "出来的是通用的无脸频道；素材库的许可仍然适用"
  },
  "Research systems: Code2Video, TheoremExplainAgent, ViMax, FilmAgent, MovieAgent": {
    r: "多智能体的视频研究框架",
    d: "给 Manim 讲解片用的规划、编码和评论（Code2Video、TheoremExplainAgent）；从想法到分镜、关键帧，再到生成镜头（ViMax）；虚拟的三维剧组（FilmAgent）。",
    ctl: "Python 仓库",
    dep: "本地 + 模型 API",
    p: "ViMax 约 12.7k 星标，Code2Video 约 2.1k 星标",
    l: "研究级；评测规模小"
  },
  "Gemini API video understanding": {
    r: "给大语言模型的原生视频输入",
    d: "上传一段视频；模型看到帧（默认每秒 1 帧，可改）以及带时间戳的音频。低分辨率大约每秒 100 个 token，高分辨率大约 300。",
    ctl: "Gemini API（File API）",
    dep: "云端",
    p: "代理“看这段视频”最常见的路径",
    l: "每秒 1 帧会漏掉很快的事件；时间推理仍然弱"
  },
  "Claude vision (frames as images)": {
    r: "图像输入；文档里没有视频输入",
    d: "代理送抽出来的帧、胶片条或联系表、波形图和转写。每张图的 token 大约是（宽/28）乘（高/28），并且有上限。",
    ctl: "Messages API；Claude Code 读取图像文件",
    dep: "云端",
    p: "video-use 和 product-launch-video 用的就是这种做法",
    l: "你没抽到的帧，它就看不见"
  },
  "VBench / VBench-2.0 / VideoScore": {
    r: "生成视频的自动质量指标",
    d: "多维基准（VBench），以及学出来的打分器（VideoScore：在它自己的测试集上，和人的 Spearman 相关是 77.1）。",
    ctl: "Python",
    dep: "本地 GPU",
    p: "研究论文里的标准",
    l: "用来比较模型，不是用来判断你这份具体简报"
  },
  "Deterministic checks (ffprobe, ebur128, blackdetect, freezedetect, ASR-WER)": {
    r: "可测量的质检",
    d: "时长、流、响度、黑场、冻帧、静音，以及字幕相对稿子的准确度。",
    ctl: "命令行、Python",
    dep: "本地",
    p: "标准做法",
    l: "口味好不好，这些数字说不了"
  }
};
