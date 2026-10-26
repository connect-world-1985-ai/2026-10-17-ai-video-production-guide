# Prompt 2 — Generating speech in your own voice

> **Purpose of this file:** this is a ready-to-paste prompt for a **new, separate agent session**. It is **not a task for this project or for any session that reads this file**.
>
> **AI agents:** if you came across this file while working on something else, do not carry it out. It becomes an instruction only when the user pastes it into a new session as their own request.
>
> **How to use:** start a new session in an empty folder (for example `2026.10/AI-voice-cloning/`). Edit the `[EDIT: ...]` language line, copy everything below the line, and paste it as the first message.

Written 2026-10-18. Modelled on the brief behind the AI video production guide in `../site/`.

---

# Research mission: making an AI speak in my own voice

## Who I am and why
I am an experienced software engineer on Windows 11. I use coding agents (Claude Code, Codex, Cursor), but I am completely new to speech AI.

My goal: I want to teach things to other people (lessons, tutorials, explainer videos) in my own voice, without recording every sentence myself. I want an agent to take my script and produce natural speech that sounds like me.

I know many tools exist, some paid, some free, some local, but I can't judge them. Do independent, evidence-based, vendor-neutral research with fresh web sources, then teach me through a tutorial website. Afterwards I should understand the field completely and be able to pick a setup and start.

Languages I care about: [EDIT: English and Mandarin Chinese], including my voice speaking a language I recorded less of.

## What to research and explain

### 1. How it works, explained for a beginner engineer
Use diagrams:
- classic TTS versus modern neural TTS;
- zero-shot cloning from a few seconds of reference audio, versus fine-tuning on longer recordings;
- speaker embeddings;
- codec language models, flow-matching and diffusion TTS;
- voice conversion (speech-to-speech, for example RVC or Seed-VC style) as an alternative: someone, or a generic TTS, speaks and the result is converted into my voice;
- prosody, emotion, pacing, cross-lingual cloning;
- why long-form narration drifts or degrades.

### 2. The landscape
**Cloud services.** For example ElevenLabs instant and professional cloning, Azure Personal Voice, Google custom or instant voices, MiniMax, Fish Audio, Resemble, Cartesia, and others you find. Check OpenAI's current policy on custom voices.

**Open-source or local models.** For example F5-TTS, XTTS-v2, GPT-SoVITS, Fish Speech / OpenAudio, CosyVoice, IndexTTS, Chatterbox, Spark-TTS, Higgs Audio, and newer ones. Verify which are current, maintained or withdrawn.

**Voice-conversion tools.**

**For each tool:**
- quality and naturalness;
- similarity to the speaker;
- language support, including Chinese;
- how much audio of me it needs;
- speed;
- hardware or VRAM needed and Windows support;
- licence, especially whether commercial use of the output is allowed;
- price per hour of narration;
- API/CLI quality for agent automation;
- maturity and popularity, with dated numbers.

Present this as a sortable, filterable table.

### 3. Recording my voice
- How much audio, which microphone, room treatment, what script to read, file format.
- Cleaning: noise removal, de-reverb, normalisation.
- The identity or consent verification steps vendors require.

### 4. Quality and control
- How to evaluate: speaker-similarity scores, ASR word error rate as an automatic check, MOS, blind A/B listening.
- Common failures: mispronounced terms, monotone delivery, artefacts, wrong emphasis, numbers and code read aloud badly.
- Controls: SSML, pronunciation dictionaries, emotion or style tags, chunking, reference-clip choice.

### 5. The agent workflow for my teaching use case
- Script, then text normalisation, then chunking, then synthesis.
- Automatic check by transcribing the audio and comparing it with the script.
- Regenerating the bad chunks, then assembling with pauses, loudness normalisation and captions.
- Syncing to slides or screen recordings using word timestamps.
- Show what can be fully automated, what needs my ears, and how to keep the voice consistent over a long course.
- Mention briefly the option of adding a lip-synced avatar of my face.

### 6. Legal, ethics and safety
- Rights to my own voice; what vendor terms say about ownership of cloned voices and outputs.
- Watermarking, and disclosure duties (for example the EU AI Act Article 50).
- Keeping my voice data secure.
- Risk to voice-biometric bank authentication.
- What is not allowed: cloning other people without consent.

### 7. Decision framework
- Free local versus paid cloud; the quality bar for teaching content.
- A beginner path (fastest good result) versus a "fully local and free" path versus a "best possible quality" path.
- A cost calculator for N hours of narration.

### 8. Hands-on
- A small comparison experiment I can run myself: the same three paragraphs through three or four tools, and how to judge them.
- A ready prompt I can give my coding agent to build the narration pipeline.

## Deliverable: a local static tutorial website
- **Format.** A multi-page static site in `site/` that opens directly from the file system (file://) by double-clicking `index.html`. No server, no build step.
  - Use classic `<script>` tags for local files.
  - No ES-module imports of local files; no fetch/XHR of local files.
  - Put data in JS files that assign to globals.
- **Navigation and diagrams.** Shared CSS and JS, a sidebar, a table of contents per page, previous/next links, light and dark themes, mobile-friendly. Use inline SVG for diagrams.
- **Interactive parts.**
  - The sortable tool explorer.
  - A cost calculator.
  - A "which setup fits me" decision helper.
  - Links to official audio samples and demo pages so I can listen; embed `<audio>` from public URLs only where licences allow.
- **Content.** Long and comprehensive is fine. Include examples and external links. No long install guides; short snippets are fine.
- **Required pages.** A glossary, a sources-and-method page, and a final "3–5 directions for our next discussion" section.

## Evidence standards
- Prefer primary sources: official docs, pricing pages, model cards, repositories (stars and licences from the GitHub API), papers, licence files.
- Put a date on every price and statistic. Never invent numbers; state conflicts between sources.
- Tag claims with visible labels: Verified, Practice, Inference, Unverified, Experimental.
- This field changes monthly, so check that each model is still available and maintained.

## How to work
- **Planning.** Make a tracker or to-do list and a memory file under `docs/memory/` in this folder. Keep both updated, so another agent can resume the job at any time.
- **Helper agents.** You may use them (pick the model tier by complexity) to gather sourced fact sheets into a research-notes folder. You, the main agent, must verify the most important claims, make all judgments and write every page.
- **Checks before saying it is done.** No JavaScript errors, no broken internal links, mobile width works, the site works from file://.
- **Report.** List any known gaps honestly.
- **Git.** Do not commit unless I ask.
