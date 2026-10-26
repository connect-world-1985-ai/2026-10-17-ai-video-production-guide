# R6 - Copyright, licensing, consent and provenance for AI video/audio (as of 2026-10-17)

Not legal advice. Factual landscape only. Reader context: software engineer, Germany/EU, making educational/business/marketing videos.

**Evidence quality note:** The research tool returned summaries of web pages. Primary texts were fetched directly only for: Wan (Apache-2.0 LICENSE), FLUX.1 [dev] license (BFL GitHub), Stability Community License page, EU Commission Code-of-Practice page, Goodwin Article 50 alert. Everything else is secondary (law-firm notes, news, vendor/third-party blogs). Items are tagged **[P]** = primary text read, **[S]** = secondary only, **[?]** = conflicting or unverified. Verify every [S]/[?] item against the primary text before relying on it.

---

## 1. Copyrightability of AI output

| Jurisdiction | Position | Source / date |
|---|---|---|
| US | Human authorship required. Thaler v. Perlmutter: D.C. Cir. affirmed 18 Mar 2025; Supreme Court denied cert 2 Mar 2026 (No. 25-449), so the D.C. Cir. ruling stands. Covers works generated entirely by AI. [S] | Baker Donelson, Mayer Brown (Mar 2026) |
| US Copyright Office | Part 2 (Copyrightability) published 29 Jan 2025: human authorship fundamental; protection possible where a human adds perceptible creative elements (selection, arrangement, substantial modification), case by case. Commentary says prompts alone are not enough (not confirmed in the Part 2 text by me). Part 3 (training) released as pre-publication 9 May 2025; final version pending as far as found. [S] | copyright.gov/ai; Jenner; BananaIP |
| EU | No specific EU rule. CJEU case law requires "author's own intellectual creation", so fully AI-generated output is unlikely protected; the threshold of human input in AI-assisted work is unclear. EP-commissioned study (Jul 2025) and EPRS briefing (Dec 2025) say this; neither is an official position. [S] | cadeproject.org; Jones Day (Aug 2025) |
| EU, pending CJEU | Case C-250/25 Like Company v Google Ireland: asks whether LLM training/output is reproduction/communication to the public and how TDM exception (Art. 4 DSM) and press publishers' right apply. Grand Chamber hearing 10 Mar 2026; AG opinion was announced for 3 Sep 2026; I did not find the opinion or judgment. [S][?] | Stephenson Harwood; William Fry |
| Germany, training/TDM | Kneschke v LAION: LG Hamburg 27 Sep 2024 (310 O 227/23); OLG Hamburg 10 Dec 2025 (5 U 104/24) dismissed appeal. LAION could rely on sec. 60d UrhG (scientific TDM); opt-out reservation must be machine-interpretable; court expressly left open whether later generative training is covered by TDM. Reports differ on onward appeal (BGH leave allowed per heise; one source says CJEU). [S][?] | heise.de; DLA Piper; HLC tracker |
| Germany, memorization | GEMA v OpenAI, LG Muenchen I, 11 Nov 2025 (42 O 14139/24): memorized lyrics in model = reproduction; outside TDM exceptions; OpenAI liable, injunction, damages, information; personality-rights claims dismissed. First instance; appeal status not found. [S] | Bird & Bird; Taylor Wessing; medialaws.eu |
| UK | Govt report 18 Mar 2026 (Data (Use and Access) Act 2025 deadline) dropped the preferred TDM-exception-with-opt-out model but chose no replacement; law unchanged (s.29A CDPA research exception stays). Proposal to remove s.9(3) CDPA (computer-generated works) reported by a lower-quality source [?]. A consultation on digital replicas / personality right was flagged for summer 2026 (not verified whether it ran). [S] | DLA Piper (19 Mar 2026); Osborne Clarke; Reed Smith |

**Practical takeaway for the pipeline:** do not assume you can enforce copyright in purely AI-generated clips. Human contributions (script, selection, editing, compositing, own footage/voice) are what are protectable; record them. Contract terms (below) still decide who may *use* the output.

## 2. Training-data litigation relevant to video/music tools

| Case | Status found | Implication for commercial users | Source |
|---|---|---|---|
| Disney & Universal v Midjourney (C.D. Cal., 2:25-cv-05275, filed Jun 2025); Warner Bros. Discovery filed Sep 2025, consolidated Nov 2025 | Discovery disputes in 2026 (Midjourney motion to compel; magistrate ruling of 15 Jun limiting discovery). No merits ruling, settlement, or PI decision found. [S][?] dates | Risk concentrated on tools that output studio characters; avoid prompting for protected characters/styles. | aiweekly.co; graphicpolicy.com (28 Mar 2026) |
| Getty v Stability AI (UK High Court, trial Jun 2025, Joanna Smith J) | Stability won most issues: model weights not an "infringing copy" (s.22 CDPA); Getty won narrowly on trade marks (old watermark reproductions). Permission to appeal secondary infringement granted 17 Dec 2025; no appeal outcome found. [S] | No UK finding that using a model infringes; but unsettled. | CMS case tracker |
| Labels v Suno / Udio | UMG-Udio settled Oct 2025 (licensing deal, Udio to launch licensed platform 2026); Warner-Udio settled; Warner-Suno settled 26 Nov 2025 (Suno to move to licensed models, download limits). Universal and Sony v Suno and Sony v Udio: no settlement found. Whether licensed models/platform launched: sources conflict (one report on a "v6" Warner/BMG-licensed Suno launch). [S][?] | Output of pre-settlement models carries the same unresolved training claims; licensed models should lower (not eliminate) risk. | MBW; Hollywood Reporter; Dubspot (May 2026); TheNextWeb |
| GEMA v OpenAI (above) | Munich first instance win for GEMA | EU courts may treat memorization as reproduction; relevant to text/lyrics output and by analogy to near-copies in video/audio. | see section 1 |

Not covered in depth (searched only broadly): Sora/other video-model suits, Anthropic/other text settlements; check separately if needed.

## 3. Vendor commercial-use terms and indemnities

Vendor terms change frequently. All rows below are [S] unless marked; re-read the live terms and **save a dated copy** per project.

| Vendor | Commercial use / ownership | Free vs paid | Indemnity | Source |
|---|---|---|---|---|
| Adobe Firefly | Marketed "commercially safe". IP indemnity reportedly only on enterprise contracts/qualifying plans; reportedly excludes standard/individual CC plans and possibly partner models (Runway, Google, ElevenLabs routed inside Firefly) [?]. A reported ~$10k per-output cap is unverified [?]. | n/a | Enterprise only (per secondary sources). Ask Adobe for written terms. | Computerworld (2023); ki-syndikat.de; redresscompliance |
| Google (Vertex AI / Veo) | Two-part generative AI indemnity announced Oct 2023: (1) training data use, (2) generated output; applies to a named list of services; customer must not intentionally infringe. I could not load the current "indemnified services" list, so whether Veo is listed is **unverified**. | n/a | Check cloud.google.com/terms/generative-ai-indemnified-services | Google Cloud blog; itbrief |
| OpenAI | Terms assign output rights to user (to extent permitted by law); outputs may not be unique. Copyright Shield (DevDay Nov 2023) covered ChatGPT Enterprise and API, not free/Plus; carve-outs apply. Sora coverage not confirmed. Sora has a visible watermark; C2PA presence in downloads is disputed (see section 6). | Free Sora access reported ended; watermark-free by tier is disputed [?] | Not confirmed for Sora | Proskauer; Magnusson; licenseorg; EA forum |
| Runway | Help center: content from any plan incl. Free may be used commercially; user retains ownership. Third-party sites disagree [?]. Free output watermarked. | Watermark removal from Standard | None found | help.runwayml.com |
| Luma Dream Machine | Free and Lite: watermarked, non-commercial. Plus/Unlimited/Enterprise: commercial rights, no watermark. User retains ownership, but free users grant Luma broader rights than paid. | Strong free/paid difference | None found | lumalabs.ai/learning-hub/licensing |
| Kling (Kuaishou) | Free tier reported non-commercial and watermarked; paid tiers include commercial rights (third-party sources only) [?] | Yes | None found | segmind, atlascloud blogs |
| ElevenLabs | Free plan: no commercial license; must credit "elevenlabs.io" or "11.ai" in title when publishing. Paid plans include commercial license (not for Beta services). Voice cloning: IVC and PVC both have voice verification (voice-captcha); you cannot clone someone else's voice even with consent: owner must create/verify clone and share it. PVC needs Creator plan or above. [S, from official help pages via search] | Yes | None found | elevenlabs.io help center |
| Suno | Free-plan songs: personal non-commercial; subscribing later does not retroactively license them. Pro/Premier songs made while subscribed carry commercial rights, but Suno now says subscribers are "generally not considered the owner". Download caps announced from 3 Sep (Pro 20/month, Premier 60/month, free limited); not confirmed in effect. | Yes | None | help.suno.com; MBW; musicinafrica |
| Udio | Only a third-party summary: terms revised 12 Nov 2025, personal non-commercial default, ownership assigned to Udio/licensors [?]. Check live terms. | - | None | musicmake.ai (low quality) |
| Synthesia | Customer must obtain consent from anyone whose likeness/voice is used for a custom avatar. Stock avatars: written permission needed for paid social ads; may not imply the actor holds opinions. [S, third-party analysis of ToS/AUP] | Plan dependent | n/a | help.synthesia.io avatar policy; conductatlas |
| HeyGen | Policy puts consent burden on user; Digital Twin needs on-camera consent statement; commercial use gated by plan. | Yes | n/a | heygen.com moderation policy and blog |
| Stock libraries | Not researched in depth. See section 8 for license-type basics. | | | |

**Pattern:** indemnities are an enterprise-contract feature; free tiers are the main place where commercial use is forbidden or where the vendor takes broader rights. Output ownership clauses ("you own it") do not create copyright (section 1) and do not remove third-party claims.

## 4. Voice and likeness

| Topic | Status | Source |
|---|---|---|
| Germany | Right to one's image (sec. 22 KUG: publication needs consent, exceptions sec. 23 KUG) and general personality right (Art. 2(1) with 1(1) GG) apply to deepfakes/voice; GDPR applies to biometric/personal data. **Not re-verified in this run** (stated from general knowledge); verify with a German source. | general knowledge [?] |
| EU AI Act Art. 50 | Deepfake disclosure by deployers (section 5). | see section 5 |
| Tennessee ELVIS Act | Signed 21 Mar 2024, effective 1 Jul 2024; adds voice (incl. AI simulation) to personal-rights statute; civil and criminal (Class A misdemeanor). [S] | MBW; Alston & Bird |
| California AB 2602 / AB 1836 | Signed 17 Sep 2024, effective 1 Jan 2025. AB 2602: contract clauses allowing digital replicas unenforceable without specific description / representation. AB 1836: deceased personalities, greater of $10,000 or actual damages. Scope/retroactivity of AB 2602 described inconsistently [?]. | Manatt; Skadden |
| NO FAKES Act (US federal) | Reintroduced 20 May 2026 (S. 4591 / H.R. 8915), added DMCA-style counter-notice; passed Senate Judiciary Committee ~18 Jun 2026; Daily Journal 7 Oct 2026 reports stalled ("dead for now", Cruz objected to unanimous consent). Paywalled; verify. [S][?] | Manatt; Blackburn press release; Daily Journal |
| Denmark | Bill L 49 introduced to Folketing 8 Oct 2026 (Euronews), target start 1 Jan 2027 if passed. Would add a neighbouring-right-like protection for face/voice to the Copyright Act, 50 years post-mortem, parody/satire carve-outs. Earlier predicted dates (early 2026, 31 Mar 2026) were wrong. Not law yet. [S] | Euronews 8 Oct 2026; EU IP Helpdesk; Verfassungsblog |
| Vendor consent checks | ElevenLabs: voice-captcha verification, cannot guarantee identity, responsibility on creator. HeyGen: on-camera consent statement for twins. Synthesia: customer-side consent. Verification is vendor-side and partial; keep your own signed release. | section 3 |

## 5. Transparency and labeling

**EU AI Act Art. 50**
- Applies from **2 Aug 2026**. [P: Commission page; S: Goodwin]
- Providers of generative systems must mark outputs (audio, image, video, text) in a machine-readable, detectable format; deployers must disclose deepfakes (real persons/places/events) and certain AI-generated text on public-interest matters. [P/S]
- Legacy systems placed on the market before 2 Aug 2026 reportedly have until **2 Dec 2026** for the marking duty (Goodwin; Jones Day). [S]
- Digital Omnibus on AI: adopted by Council 29 Jun 2026, in force 27 Jul 2026; main effect was moving high-risk (Annex III) obligations to 2 Dec 2027, not Art. 50 dates. One source cites Regulation (EU) 2026/1744 (unverified). One Goodwin passage appears internally inconsistent [?]. [S]
- **Code of Practice on marking and labelling AI-generated content:** final published 10 Jun 2026; Commission and AI Board confirmed it as an adequate voluntary tool; ~190 signatories by end of Jul 2026 (Commission page dated 12 Oct 2026). Section 1 for providers (marking/detection), Section 2 for deployers (labelling deepfakes/text). Multi-layer marking recommended (at least two layers, e.g. metadata plus watermark). EU icon set for labels. [P for status; S for multi-layer detail]
- For a small company making videos: you are mostly a **deployer** (label deepfakes) while the video tool vendor is the **provider** (must mark). If you fine-tune/host a model yourself and offer it, you may be a provider. Role classification is a legal question.

**China:** Measures for Labeling AI-Generated Synthetic Content (CAC et al.), effective 1 Sep 2025, with mandatory standard GB 45438-2025: explicit (visible/audible) labels and implicit labels (metadata incl. provider name, content ID); platforms must check implicit labels. [S: Loeb, HSF Kramer] Relevant only if distributing in China.

**Platforms**
- YouTube: creators must disclose realistic altered/synthetic content (Creator Studio tool since Mar 2024); not required for clearly unrealistic/animation/production assistance; more prominent label for sensitive topics. From 15 Jul 2025 YPP "inauthentic content" (mass-produced/repetitive) is ineligible for monetization. [S]
- Meta: "AI info" label (renamed from "Made with AI", Jul 2024). [S]
- TikTok: reads C2PA Content Credentials to auto-label (since May 2024). [S]
- Policies dated 2024-2025 here; check current help pages.

## 6. Provenance technology

| Item | Facts | Source |
|---|---|---|
| C2PA spec | v2.2 (May 2025); 2.3 dated Jan 2026 (adds live-video segment signing); a glossary claims 2.4 (Apr 2026), unverified [?]. Conformance program: 54 products from 31 companies passed as of 14 May 2026. Criticism from UMBC researchers; a reported Oct 2026 signer-exclusion weakness (single source) [?]. | spec.c2pa.org; opensource.contentauthenticity.org; Wikipedia; creativeainews |
| c2patool | Open-source CLI (Rust, Apache-2.0 per source) from contentauth: read manifest reports, add a manifest; binaries for macOS/Windows/Linux. | contentauth GitHub; rust-digger |
| Who signs | Adobe, Google Pixel 10, TikTok reads; OpenAI Sora status disputed; Leica (camera). I did not retrieve a verified list of signers in this run [?]. | softwareseni; EA forum |
| Survival under ffmpeg | A 2026 test (34 export operations) found none preserved a valid credential: 27 stripped, 7 broken; FFmpeg 7.0.2 stripped in all 5 cases. Practical rule: re-encode first, then sign the final file. AWS MediaConvert generates a new manifest instead of preserving the input one. | creativeainews.com; AWS docs |
| SynthID | Google invisible watermark for image/video/audio/text. SynthID Detector portal opened to everyone (English) 7 Oct 2026; detects Google and partners (OpenAI, NVIDIA, Kakao; Apple to follow) only; "not a general AI detector"; absence is not proof of human origin. Gemini app can check uploaded video (up to 100 MB / 90 s). | blog.google; aiidelist; gigazine (Dec 2025) [S] |
| Meta Video Seal | Open-source neural video watermark (Dec 2024), MIT license (code + model), claims robustness to compression/cropping; robustness claims are Meta's own. | the-decoder; maginative |
| Visible watermarks | Sora: moving visible watermark on app/web downloads; free tiers of Runway/Luma/Kling are watermarked. Removing a vendor watermark to bypass tier terms is itself a terms violation and conflicts with Art. 50 intent; do not build pipeline steps that strip them. | section 3 |

## 7. Model licenses relevant to commercial use

| Model | License | Commercial use? | Restrictions to note | Verified |
|---|---|---|---|---|
| Wan 2.1 (Wan-Video) | Apache-2.0 | Yes | Standard Apache terms; patent-retaliation clause; no trademark rights. (Check each Wan version; 2.2/2.5 not individually checked.) | [P] LICENSE.txt fetched |
| HunyuanVideo (Tencent) | Tencent Hunyuan Community License | Within licensed Territory only | Territory **excludes EU, UK and South Korea** (UK/KR added in a later license revision, EU-only originally). A guide mentions a 100M MAU threshold needing separate license (unverified). Could not fetch license text this run. **For an EU company this means no license grant: treat as unusable commercially, and arguably for any use in the EU.** | [S][?] |
| LTX-Video (Lightricks) | "other"; per-version open-weights license files (0.9.6+ one file; earlier 2B files differ). LTX-2 Community License: free below ~US$10M annual revenue, above needs paid license (secondary + HF discussion quote) | Conditional | Revenue threshold wording ("at least $10M") and treatment of non-profits unclear; version-specific. | [S][?] |
| FLUX.1 [dev] | FLUX.1 [dev] Non-Commercial License | Weights: no (non-commercial only; revenue-generating or end-user-facing use is not "Non-Commercial Purpose"). **Outputs:** "You may use Output for any purpose (including for commercial purposes), except as expressly prohibited" and BFL claims no ownership | Cannot use output to train/distill a model competitive with FLUX.1 [dev]. Running dev weights in a commercial service/pipeline is the grey zone; get BFL's written view or use a commercial license/API. | [P] BFL GitHub license |
| FLUX.1 [schnell] | Apache-2.0 | Yes | Distilled (quality trade-off) | [S] model card quote via search |
| Stable Diffusion family | Stability AI Community License | Free for commercial use up to US$1M annual revenue (user plus affiliates); above that, license terminates and enterprise license needed; commercial users must register; user owns outputs "to the extent permitted by law" | Revenue threshold; registration | [P] stability.ai page |
| MusicGen / AudioCraft | Code MIT; **weights CC-BY-NC 4.0** | No (weights non-commercial) | Code license does not cover weights | [S] consistent across HF/GitHub/PyPI mirrors |
| Coqui XTTS-v2 | Coqui Public Model License (CPML) 1.0.0 | No (non-commercial); Coqui shut down (~Dec 2023/Jan 2024) so nobody can sell a commercial license | Toolkit code is MPL-2.0 (separate). Forks do not change model license. | [S] |

Rule of thumb for the pipeline: license check is per **model version**, per **artifact** (code vs weights vs output), and per **jurisdiction**. Pin the license file hash next to the weights hash.

## 8. Music and asset licensing basics

- **Royalty-free** = one-time fee, scope-limited, not "copyright-free". **Rights-managed** = priced per territory/duration/platform/media. Check that the license covers online/YouTube and monetized use. A song has two rights (composition/publishing and master); "sync" needs both unless the license says all-in. [S: Soundstripe, Artlist, StockMusic.net; vendor blogs]
- **YouTube Content ID** is fingerprint matching, not AI detection. AI music can be matched via sample/voice similarity; a claim is not a takedown. Keep generation evidence (export, prompts, plan, timestamps, stems) for disputes. Vendor-blog guidance, not YouTube's official procedure. [S][?]
- Suno/Udio paid-plan commercial permission does not prove copyright or exclusivity, so registering such tracks into Content ID is risky (section 3).
- **NASA:** imagery, audio, video generally not copyrighted in the US; may be used for educational/informational purposes. NASA insignia ("meatball"), former "worm" logo and seal need explicit permission; no implied endorsement in commercial use; identifiable people raise privacy/publicity issues; some items carry third-party copyright; NFT use refused. [S: nasa.gov guidelines via search]
- **ESA:** only some content is CC BY-SA 3.0 IGO (credit, link license, flag changes, share-alike). ESA terms also state website images/videos shall not be used commercially (entertainment, advertisement, merchandising) without written authorization. Conflict between the two: get written clarification before commercial use. [S: esa.int]
- **SpaceX:** 2015 announcement of Flickr photos under Creative Commons; sources disagree whether CC BY 2.0, CC BY-NC 2.0, or public domain/CC0 (SpaceX later switched some to public domain). Not like NASA (not automatically public domain). Check licence per Flickr photo; livestream/video footage on YouTube is not covered by the Flickr statement. Current status not verified. [S][?]
- For the rocket-documentary worked example: use NASA (non-logo) and per-item-verified SpaceX Flickr material; treat ESA as non-commercial unless authorised; do not let a generative model depict real, branded vehicles/logos as if factual (trademark and Art. 50 deepfake exposure).

---

## Provenance manifest: what an agent pipeline should record per asset

Per generated or sourced asset, write a JSON sidecar (and keep it with the project, hashed):

1. `asset_id`, `sha256` of the file, `created_at` (UTC), `pipeline_run_id`, `step_name`.
2. `origin_type`: generated | stock | public-agency | own-footage | commissioned.
3. Tool: `vendor`, `product`, `model_name_and_version`, `api_or_ui`, request/job id, seed if available.
4. Account: `plan_tier` and date (tier at generation time matters, e.g. Suno, ElevenLabs), `terms_url`, `terms_snapshot_hash` and capture date.
5. Open-weights: `license_id`, `license_file_hash`, territory check (EU/UK exclusion), revenue-threshold check, weights hash, code vs weights vs output license.
6. Inputs: prompt text, negative prompt, reference images/audio (with their own source and license), LoRAs/voice-clone ids.
7. Rights status: commercial use allowed (yes/no/conditional + why), attribution string required, indemnity available (yes/no, contract id), restrictions (no endorsement, no paid ads, etc.).
8. People: real person depicted or voiced (yes/no), consent record id (signed release, scope: channels, duration, revocation), vendor verification result, age confirmation for custom avatars.
9. Third-party content: third-party marks/logos/characters detected (manual or tool), clearance note.
10. Human contribution log: what a human wrote/selected/edited (supports copyrightability).
11. Provenance/marking: C2PA manifest present on input (read result), watermark present (SynthID/vendor/visible), whether the pipeline strips or preserves it, final signing step and signer identity.
12. Disclosure: Art. 50 role (provider/deployer), label required (deepfake? public-interest text?), label text/icon used, platform disclosure flags set (YouTube altered/synthetic, TikTok, Meta).
13. Review: reviewer, date, status, expiry date for re-checking terms.

Pipeline rules implied: re-encode with ffmpeg first, then sign final export (c2patool/C2PA SDK); never strip vendor watermarks or Content Credentials; fail the build when `license_id`, `plan_tier`, or consent record is missing.

## Disagreements and uncertainties

- Sora downloads: C2PA present on all outputs vs only on Pro/watermark-free downloads (conflicting sources); free/Plus watermark rules conflict.
- Art. 50 grace period: broad reading (2 Dec 2026 for legacy systems only) vs sources implying wider delay; Goodwin text inconsistent. Check EUR-Lex for the Omnibus wording.
- Adobe indemnity: enterprise-only, whether it covers partner models and video, reported $10k cap all unverified.
- Google indemnity: whether Veo is on the current indemnified-services list not checked.
- Runway free tier: official help says commercial use allowed; third-party sites say no.
- Suno: ownership wording changed; download-cap effective date and licensed-model launch status unconfirmed; Universal-Suno and Sony cases open.
- HunyuanVideo: license text not retrieved this run; MAU threshold unverified; territory exclusion confirmed by multiple secondary sources only.
- FLUX [dev]: weights non-commercial but outputs usable commercially per the license text; commercial-service use of the weights remains legally grey.
- LTX-2 license: threshold and version mapping from secondary sources.
- OLG Hamburg LAION: next instance (BGH vs CJEU) reported inconsistently.
- C2PA: 2.3 vs 2.4 current version; reported Oct 2026 vulnerability single-sourced.
- Germany KUG/personality-right section was not researched with sources.
- Denmark L 49: introduced, not passed; penalties unclear.
- NO FAKES Act: "stalled" status relies on a paywalled headline.
- Not researched: stock-video library AI terms (Shutterstock/Adobe Stock), Kling/Luma indemnity details, Veo/Imagen terms of service, GDPR for voice data, Sora-specific suits.

## Sources (all accessed 2026-10-17; "[fetched]" = page opened directly, others via search results)

- https://www.jonesday.com/en/insights/2026/06/european-commission-publishes-final-code-of-practice-on-marking-and-labelling-aigenerated-content
- https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content [fetched]
- https://www.goodwinlaw.com/en/insights/publications/2026/08/alerts-technology-dpc-eu-ai-act-transparency-obligations-now-in-force [fetched]
- https://www.iubenda.com/en/blog/ai-omnibus-adopted-august-2-obligations-july-2026/
- https://www.bakerdonelson.com/supreme-court-denies-certiorari-in-thaler-v-perlmutter-ai-cannot-be-an-author-under-the-copyright-act
- https://www.mayerbrown.com/en/insights/publications/2026/03/supreme-court-denies-review-in-ai-authorship-case
- https://copyright.gov/ai/
- https://www.jenner.com/print/v2/content/95114/us-copyright-office-releases-pre-publication-version-of-report-on-copyright-issues-in-generative-ai-training.pdf
- https://cm.twobirds.com/en/insights/2025/landmark-ruling-of-the-munich-regional-court-(gema-v-openai)-on-copyright-and-ai-training
- https://www.taylorwessing.com/de/insights-and-events/insights/2025/11/gema-v-openai
- https://heise.de/-11111575 (OLG Hamburg LAION)
- https://www.dlapiper.com/insights/blogs/mse-today/2025/robert-kneschke-v-laion
- https://www.dlapiper.com/insights/publications/2026/03/tdm-and-training-ai-models-uk-government-publishes-report-and-impact-assessment
- https://www.osborneclarke.com/insights/opted-out-uk-government-moves-away-preferred-position-ai-and-copyright-following-report
- https://www.stephensonharwood.com/insights/cjeu-to-rule-on-ai-and-copyright-in-a-landmark-case-against-google/
- https://www.jonesday.com/en/insights/2025/08/european-parliaments-new-study-on-generative-ai-and-copyright-calls-for-overhaul-of-optout-regime
- https://cadeproject.org/?p=153286
- https://cms.law/en/int/publication/artificial-intelligence-and-copyright-case-tracker/united-kingdom-getty-images-us-inc-ors-v-stability-ai-ltd
- https://graphicpolicy.com/2026/03/28/midjourney-files-a-motion-to-compel-against-disney-and-warner-bros-in-ai-fight
- https://aiweekly.co/alerts/midjourney-motion-would-force-disney-universal-and-warner-bros-to-disclose
- https://www.musicbusinessworldwide.com/universal-music-settles-udio-lawsuit-strikes-deal-for-licensed-ai-music-platform
- https://www.hollywoodreporter.com/music/music-industry-news/warner-music-group-settles-lawsuit-udio-1236431207/
- https://blog.dubspot.com/suno-udio-ai-music-lawsuits-2026
- https://thenextweb.com/news/suno-v6-warner-bmg-believe-licensed-models
- https://www.musicbusinessworldwide.com/suno-limits-pro-subscribers-to-20-song-downloads-per-month
- https://www.musicinafrica.net/magazine/suno-adjusts-ai-music-ownership-terms-after-warner-music-partnership
- https://help.suno.com/en/categories/550145-ownership
- https://help.runwayml.com/hc/articles/18927776141715-Usage-rights
- https://lumalabs.ai/learning-hub/licensing
- https://blog.segmind.com/kling-ai-pricing-complete-breakdown-and-comparison/
- https://elevenlabs.io/docs/help-center/legal/can-i-publish-the-content-i-generate-on-the-platform
- https://elevenlabs.io/docs/help-center/product/voices/voice-cloning/can-i-create-a-professional-voice-clone-of-someone-elses-voice.md
- https://help.synthesia.io/en/articles/15453102-avatar-policy-foundation
- https://www.heygen.com/moderation-policy
- https://www.heygen.com/blog/ai-avatar-consent-brand-controls
- https://www.computerworld.com/article/1628682/adobe-offers-copyright-indemnification-for-firefly-ai-based-image-app-users.html
- https://www.ki-syndikat.de/tools/adobe-firefly/
- https://cloud.google.com/blog/products/ai-machine-learning/protecting-customers-with-generative-ai-indemnification
- https://cloud.google.com/terms/generative-ai-indemnified-services [fetch returned no content]
- https://www.proskauer.com/blog/openais-copyright-shield-broadens-user-ip-indemnities-for-ai-created-content
- https://www.magnussonlaw.com/publications/openais-copyright-shield-peace-of-mind-for-some-from-something/
- https://licenseorg.com/blog/sora-licensing-guide-2026
- https://www.lesswrong.com/posts/kSvrmiyyN7CDyh3NN/openai-does-not-appear-to-be-applying-watermarks-honestly
- https://manatt.com/insights/newsletters/client-alert/congress-reintroduces-the-no-fakes-act-what-s-new-in-the-2026-bill
- https://www.dailyjournal.com/article/395055-no-fakes-act-dead-for-now-as-cruz-objects-to-unanimous-consent-request
- https://www.blackburn.senate.gov/2026/6/blackburn-coons-bipartisan-bill-to-protect-individuals-and-creators-from-deepfakes-passes-senate-judiciary-committee
- https://www.musicbusinessworldwide.com/elvis-act-signed-into-law-in-tennessee-to-protect-artists-voice-and-likeness-from-the-misuse-of-ai
- https://www.manatt.com/insights/newsletters/client-alert/california-enacts-a-host-of-new-ai-and-digital-rep
- https://www.skadden.com/insights/publications/2024/09/california-enacts-host-of-ai-related-bills
- https://www.euronews.com/2026/10/08/denmark-introduces-a-bill-protecting-peoples-faces-and-voices-from-deepfakes
- https://intellectual-property-helpdesk.ec.europa.eu/news-events/news/denmarks-proposed-copyright-rules-deepfakes-2026-06-01_en
- https://verfassungsblog.de/copyrighting-voice-and-image/
- https://www.loeb.com/en/insights/publications/2025/03/chinas-ai-labeling-measures-and-mandatory-national-standards-take-effect-september-1
- https://www.hsfkramer.com/notes/tmt/2025-posts/China-Releases-Laws-to-Mandate-Labelling-of-AIGC
- https://www.socialsamosa.com/news-2/youtube-mandates-disclosure-ai-videos-4369213
- https://www.eweek.com/news/youtube-responds-to-ai-concerns/
- https://www.nbcnews.com/tech/tech-news/tiktok-will-automatically-label-ai-generated-content-rcna151446
- https://techcrunch.com/2024/07/01/meta-changes-its-label-from-made-with-ai-to-ai-info-to-indicate-use-of-ai-in-photos
- https://spec.c2pa.org/specifications/specifications/2.3/specs/_attachments/C2PA_Specification.pdf
- https://opensource.contentauthenticity.org/docs/conformance/
- https://www.creativeainews.com/articles/content-credentials-export-survival-test-2026/
- https://docs.aws.amazon.com/mediaconvert/latest/ug/c2pa-manifest-structure.html
- https://rust-digger.code-maven.com/crates/c2patool
- https://blog.google/technology/ai/google-synthid-ai-content-detector/
- https://gigazine.net/gsc_news/en/20251219-google-ai-video-gemini-synth-id
- https://the-decoder.com/meta-releases-ai-video-watermarking-model-that-survives-common-edits
- https://raw.githubusercontent.com/Wan-Video/Wan2.1/main/LICENSE.txt [fetched]
- https://github.com/black-forest-labs/flux/blob/main/model_licenses/LICENSE-FLUX1-dev [fetched]
- https://stability.ai/community-license-agreement [fetched]
- https://huggingface.co/Lightricks/LTX-Video [fetched]
- https://huggingface.co/Lightricks/LTX-2.3/discussions/66
- https://forum.comfy.org/t/hunyuan-license/974
- https://huggingface.co/tencent/HunyuanVideo/commit/a4ed25a99d7eb9cf21e12f5fd8052d266f2105fc
- https://pypi.org/project/audiocraft
- https://github.com/coqui-ai/TTS/discussions/4145
- https://www.nasa.gov/multimedia/guidelines/index.html
- https://www.esa.int/ESA_Multimedia/Terms_and_Conditions
- https://www.esa.int/Newsroom/Press_Releases/ESA_affirms_Open_Access_policy_for_images_videos_and_data
- https://imaging-resource.com/news/2015/03/20/spacex-announces-its-publishing-photographs-under-creative-commons
- https://sunowatermark.com/youtube-content-id-ai-music/
- https://www.soundstripe.com/blogs/music-licensing-terms-decoded
