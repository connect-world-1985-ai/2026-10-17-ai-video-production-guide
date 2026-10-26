"""Spoken script for the tutorial. Sentences are written to be heard.

Numbers and vendor claims follow the field guide's October 2026 research.
The through-line (sample, compile, link, build, test, review) is teaching
glue added so the pages connect in one sitting.
"""

# mode: "still" captures one finished frame. "anim" captures a frame sequence
# driven by local progress, so diagrams arrive with the narration.
# fps is ignored for stills.

SEGMENTS = [
    dict(
        id="s01",
        chapter="Opening",
        mode="still",
        pad_start=0.6,
        text=(
            "This is a field guide you can watch. "
            "It is for a software engineer who wants to direct video with a coding agent, "
            "and who would rather see the whole machine than read eighteen web pages first. "
            "By the end, you will be able to take a finished video apart: "
            "where the pixels came from, where the motion came from, "
            "why the beautiful parts fail, and how an agent actually steers the work."
        ),
    ),
    dict(
        id="s02",
        chapter="The one idea",
        mode="still",
        text=(
            "Start with the idea that makes the rest of the subject simple. "
            "There is no single technology called AI video. A finished film is assembled, on a timeline. "
            "Some shots are imagined, pixel by pixel, by a neural network. "
            "Some shots are computed by a renderer, from a scene written in code. "
            "Some shots are real footage, or stills, or a screen capture. "
            "The voice, the music, and the effects come from their own machines. "
            "Those pieces meet in the edit."
        ),
    ),
    dict(
        id="s03",
        chapter="The one idea",
        mode="still",
        text=(
            "If you write software, you already have the right instincts. "
            "Imagining a shot is like asking a language model to sample an answer. "
            "It is fast, often impressive, and it needs a test. "
            "Computing a shot is like compiling a program. Same source, same version, same result. "
            "Assembling the timeline is linking. "
            "The agent is the build script. Inspection is the test suite. Your taste is code review. "
            "Keep that picture. We are going to walk through each stage of it."
        ),
    ),
    dict(
        id="s04",
        chapter="Two questions",
        mode="still",
        text=(
            "Two questions classify any shot, and they are the questions worth asking before you pick a tool. "
            "Where do the pixels come from? "
            "They are synthesised by a network, rendered from a description, captured by a camera, "
            "or composited from pieces you already have. "
            "Where does the motion come from? "
            "It is learned, authored with keyframes, simulated, captured, "
            "or created at edit time, like a slow pan across a still photograph. "
            "A thumbnail cannot answer these. "
            "A three-D-looking product spin might be a video model guessing the motion, "
            "or a mesh in Blender on a camera path. "
            "Change the logo colour, and only one of those two still matches the brand."
        ),
    ),
    dict(
        id="s05",
        chapter="Neural synthesis",
        mode="still",
        text=(
            "Family A is neural synthesis. The model imagines pixels. "
            "There is no booster object inside it, no label layer, no camera you can keyframe. "
            "There is a learned sense of how scenes like this tend to look, and how they tend to move. "
            "That is its gift. Atmosphere, weather, crowds, cinematic filler, cameras that could not physically fly. "
            "It is also the source of the famous failures. "
            "Exact words. Exact numbers. A mechanism you could check. "
            "A product that must look identical in shot twelve and in shot forty. "
            "Those need a different machine."
        ),
    ),
    dict(
        id="s06",
        chapter="Neural synthesis",
        mode="anim",
        fps=10,
        text=(
            "Here is the inside of that machine, with only as much mechanism as you need to predict the failures. "
            "Picture a block of television static. Not one frame. A stack of frames. A cube, with width, height, and time. "
            "Training taught the model a single question. "
            "Given this noisy cube, and this text, what would it look like with a little less noise? "
            "Ask that question a few dozen times, and the static resolves into a clip. "
            "Three engineering choices make it practical. "
            "The model does not denoise raw pixels. An autoencoder compresses the clip into a small latent, "
            "and a decoder restores the frames at the end. "
            "A transformer cuts that latent into spacetime patches, tokens, "
            "the way a language model cuts text into tokens, and attention runs across space and time together. "
            "Newer systems train with flow matching, a straighter path from noise to picture, so they need fewer steps. "
            "Hold onto the consequence. Every frame of the clip is denoised together. "
            "Motion inside a short clip holds. The length of the clip is what runs out of budget."
        ),
    ),
    dict(
        id="s07",
        chapter="Neural synthesis",
        mode="anim",
        fps=8,
        text=(
            "The budget is attention. "
            "In the open Wan two point one design, about five seconds of seven-twenty p "
            "becomes on the order of seventy-five thousand tokens. "
            "Full attention compares every token with every other token, at every step. "
            "Double the duration, and the token count roughly doubles, but the attention cost roughly quadruples. "
            "That single fact is why generated shots are short, "
            "why a long film is stitched from segments, "
            "and why a four-K master is usually an upscaler sitting on top of a smaller generation. "
            "You are not waiting for a longer prompt. You are paying a quadratic bill."
        ),
    ),
    dict(
        id="s08",
        chapter="Neural synthesis",
        mode="still",
        text=(
            "Two more consequences, and then Family A will make sense for good. "
            "The model never placed the letter A. Letters are textures that often looked like words in the training data. "
            "So a title comes out almost right, which is the dangerous kind of wrong, because a glance will accept it. "
            "And the model has no object identity. "
            "The same prompt, a red booster over the ocean, is a fresh sample every time. "
            "A different fin, a different colour, a different horizon. "
            "A reference image helps, because the denoiser can attend to it. A seed helps on some models. "
            "What you still do not have is a file you can diff. "
            "When identity matters, you promote the object to an asset, and you render it."
        ),
    ),
    dict(
        id="s09",
        chapter="Rendered scenes",
        mode="still",
        text=(
            "Family B is that render. "
            "Code describes shapes, text, meshes, lights, a camera, and keyframes over time. "
            "A renderer computes each frame. "
            "It feels like software, because it is software. "
            "You pay in build time. You get exact type, exact data, "
            "and a vehicle that cannot accidentally redesign itself between shots. "
            "This is the family coding agents are best at, "
            "because the scene is a program they can write, run, read, and patch."
        ),
    ),
    dict(
        id="s10",
        chapter="Rendered scenes",
        mode="still",
        text=(
            "Every code-driven animation tool, from a math library to a film renderer, is the same loop. "
            "For each frame, time equals the frame number divided by the frame rate. "
            "Evaluate the scene at that time. Render an image. Write it. Then encode. "
            "The rule that keeps this sane is small and absolute. "
            "The picture at a given frame depends only on that frame number, and on inputs you froze. "
            "It does not depend on the wall clock, on how long the last frame took, "
            "or on a random number you forgot to seed. "
            "Renderers draw frames out of order, and in parallel. A timer-based animation flickers. "
            "Remotion centres its whole design on the current frame for this reason. "
            "HyperFrames seeks the timeline to the frame it is about to capture. "
            "When an agent writes a scene, this is the invariant you ask it to protect."
        ),
    ),
    dict(
        id="s11",
        chapter="Rendered scenes",
        mode="still",
        text=(
            "The scene itself is a tree, the way the document object model is a tree. "
            "A booster group contains a body, a set of legs, and a plume. "
            "Move the group, and the children follow. "
            "Change the camera path, and the vehicle is untouched. "
            "Put the altitude readout on a separate two-D overlay, and a wording fix does not re-render the lighting. "
            "That separation is what makes a revision cheap. One keyframe, one node, not a reshoot. "
            "Manim, the math animation library, is the usual home for equations. "
            "Remotion and HyperFrames are the usual home for web-style motion graphics. "
            "Blender, running headless, is the usual home for a real camera in a lit set. "
            "They are different tools in one family. The agent picks among them the way it picks among libraries."
        ),
    ),
    dict(
        id="s12",
        chapter="Assembly",
        mode="still",
        text=(
            "Family C does not invent pictures. It arranges them. "
            "A timeline says which asset plays when, at what size, with what transition, "
            "and which audio sits underneath. "
            "Clips, stills, voice, music, captions. "
            "Real footage enters the film here, and so does stock, and so does a screen recording. "
            "The feeling is a linker. The output is only as honest as the inputs, plus the timing. "
            "FFmpeg, a JSON timeline, a template API, or a scripted editor can all be that linker. "
            "The agent is good at this, because a timeline is data."
        ),
    ),
    dict(
        id="s13",
        chapter="Assembly",
        mode="anim",
        fps=8,
        text=(
            "Family D is what a professional piece actually is. A mix, per shot, and often per layer. "
            "Generate a dusk sky, because the sky only needs to be plausible. "
            "Render the booster, because the booster must be the same booster. "
            "Draw the arrows and the numbers in code, on top, because they must be exact. "
            "Sometimes you go further. You render a layout you fully control, "
            "then restyle that render with a video-to-video model, "
            "so the motion stays authored and the texture becomes photographic. "
            "The timeline is the place these families meet. "
            "If you remember one design habit, remember this. "
            "Exact things in code. Plausible things in a model. Join them in the edit."
        ),
    ),
    dict(
        id="s14",
        chapter="Assembly",
        mode="anim",
        fps=8,
        text=(
            "So retire the picture of a video as one file a model emits. "
            "A two-minute film is a stack of tracks. "
            "Shots on the first track, and those shots may change family in the middle of the film. "
            "Graphics on the next. Titles, diagrams, lower thirds. "
            "Captions, usually from the word timings of the narration. "
            "Then the voice. Then music, lowered whenever the voice is present, which is called ducking. "
            "Then effects, short and specific, on the hits. "
            "Each track can come from a different machine. Alignment is the editor's job. "
            "Human or agent, the job is the same. "
            "This is why the honest name for the field is AI-assisted assembly."
        ),
    ),
    dict(
        id="s15",
        chapter="Sound",
        mode="still",
        text=(
            "Sound is the spine, and engineers routinely schedule it last. "
            "Viewers will forgive a diagram that is a little plain. "
            "They will not forgive a voice that fights the music, a level that jumps, or a caption that drifts. "
            "In an explainer, you lock the voice first. "
            "Write the script. Synthesise the narration, or record it. Read the word timestamps back. "
            "Then cut the pictures to those words, place the effects on the stressed beats, "
            "and build the captions from the same timestamps. "
            "Change one sentence, and the build graph tells you which shots and which mix depend on it. "
            "You rebuild those. The rest stays. "
            "There are four layers to plan for. Narration, music, effects, and ambience, "
            "the room tone that makes a cut feel continuous. "
            "A practical loudness target for online video is about minus fourteen luffs, "
            "a standard loudness measure. That number is measurable, so an agent can fail the build when the mix misses it. "
            "The classic speech bug in a technical film is pronunciation. Acronyms, units, vehicle names. "
            "Keep a lexicon in the project, then run speech recognition on the finished voice and diff it against the script. "
            "Anything the recogniser cannot match, a viewer will stumble on too."
        ),
    ),
    dict(
        id="s16",
        chapter="Sound",
        mode="still",
        text=(
            "Three habits cause most of the early wrecks. "
            "First, expecting one model to make the whole video. "
            "Generated clips are short, and they will not protect your diagram. "
            "An explainer is mostly rendered graphics and assembly, with neural shots used as atmosphere. "
            "Second, assuming the agent watches the video the way you do. "
            "Often it sees a handful of frames, plus text. "
            "Models that accept real video commonly sample about one frame a second. "
            "A benchmark called TOMATO, reported in this guide, put people near ninety-five percent on temporal reasoning "
            "and the best model under forty. "
            "Flicker, a one-frame glitch, lip-sync drift. That gap is where they hide. "
            "Write measurement code for the failures that matter. "
            "Third, treating audio as a coat of paint. Audio is the clock."
        ),
    ),
    dict(
        id="s17",
        chapter="The agent",
        mode="still",
        text=(
            "Now put the agent in the chair. "
            "A coding agent does not see, and it does not draw, until a tool lets it. "
            "It can do four things, and the demos that look like magic are these four, plus good tools. "
            "It writes. Scene code, a timeline, a prompt, a test. "
            "It calls. A command line, an S D K, an H T T P API, an M C P server. "
            "It reads results back in a form it can reason about. "
            "A still frame as an image. A transcript as text. A loudness figure as a number. "
            "It remembers, in files. The brief, the research, the script, the shot list, the style notes, "
            "the asset manifest, the decisions, the cost ledger. "
            "If it is not in a file, the next session cannot resume it. That file tree is the production."
        ),
    ),
    dict(
        id="s18",
        chapter="The agent",
        mode="anim",
        fps=8,
        text=(
            "The loop is the actual product. "
            "Plan. Brief, script, shot list, and acceptance checks written as tests. "
            "Make the assets. Generate, render, synthesise speech, pull a licensed clip. "
            "Assemble the timeline. Inspect. "
            "Then deliver, with captions and a provenance note. "
            "Inspection has two doors back. "
            "A small miss, a prompt, a keyframe, a timing, a volume, and you rebuild one shot. "
            "A large miss, the story is wrong, or the technology was the wrong family, and you return to the plan. "
            "Put a human at three gates. After the plan. After the rough cut. Before you publish. "
            "The agent can propose taste. You still own it."
        ),
    ),
    dict(
        id="s19",
        chapter="The agent",
        mode="still",
        text=(
            "Be precise about what the research supports. "
            "A crowd of specialist agents is a popular demo, "
            "and the published evidence that the crowd beats one well-grounded agent is thin. "
            "What does show up, including in ablations of code-to-video systems, is decomposition. "
            "A planner that turns the job into shots outperforms a single pass that tries to hold the whole film in its head. "
            "And the critic that earns its keep is mostly not another model with opinions. It is probes. "
            "Loudness. A speech-to-script diff. Optical character recognition on titles. "
            "Black-frame and freeze detection. "
            "A vision model aimed at frames you chose on purpose, at cuts and at cue words, not at a random sample. "
            "Taste review is the human gate. Everything you can turn into a number should be a number."
        ),
    ),
    dict(
        id="s20",
        chapter="One documentary",
        mode="still",
        text=(
            "Let us direct one film, on paper, so the routing stops being abstract. "
            "The brief. A two-minute documentary on how a reusable booster returns from space and lands vertically. "
            "Animated three-D. Technical diagrams. Cinematic scenes. Realistic effects. "
            "Professional narration. Music. Accurate subtitles. "
            "The decision is made before any pixel exists. "
            "The words accurate, and diagram, and how it works, mean the backbone is rendered. Family B. "
            "Generative video is allowed wherever a shot makes no technical claim. The cold open. An ocean. A wide sky. "
            "Archive footage is the proof shot, if the licence is actually clean. "
            "Narration will set every duration. "
            "You do not guess the timing in the shot list and then hope the voice fits."
        ),
    ),
    dict(
        id="s21",
        chapter="One documentary",
        mode="anim",
        fps=8,
        text=(
            "Walk the shots. "
            "The opening eight seconds. A booster descending through dusk cloud, over the ocean. "
            "No claim a physicist could falsify. Design a still, approve the still, then image-to-video. "
            "Stills are cheap to inspect. Motion is not. "
            "Next, the title, and the question, how does it stop. That is type, so it is code. "
            "Then a chart. Why throwing a stage away costs what it costs. "
            "Every number needs a source, so the chart is code too. "
            "Then the vehicle. Separation, grid fins, the landing burn. "
            "One three-D model, rendered many times, so the booster cannot drift. "
            "The trajectory diagram is not a drawing of a curve. It is a small physics model, plotted. Correct by construction. "
            "When you want atmosphere and precision together, generate the sky plate and draw the force arrows on top. "
            "The hero touchdown is the same three-D vehicle again. "
            "If you want it photographic, restyle the render. "
            "Do not ask a fresh sample to invent a new rocket at the climax. "
            "Then, rights permitting, one real landing. Credibility that a generator should not be asked to counterfeit. "
            "The end card is type, plus the sources, on screen."
        ),
    ),
    dict(
        id="s22",
        chapter="One documentary",
        mode="still",
        text=(
            "Underneath the shots is a build graph, the same shape as incremental compilation. "
            "The brief feeds research, and research feeds the script. "
            "The script feeds the narration file. The narration file feeds word timings. "
            "The timings feed the real shot durations. "
            "The shot list then fans out into keyframes, Blender renders, diagrams, music, and effects. "
            "Those outputs fan back into a timeline, a caption file, a preview, and a Q A report. "
            "Only then, masters. A landscape cut and a vertical cut, if you need both. "
            "Change a line of narration, and you rebuild the shots and the mix that depend on that line. "
            "You do not re-render the ocean. "
            "This is the engineering advantage of treating a film as a project, instead of as a chat."
        ),
    ),
    dict(
        id="s23",
        chapter="Routing and reality",
        mode="still",
        text=(
            "You can route the next shot with three rules, and they cover more cases than a catalogue of brand names. "
            "If the shot must be exactly right, text, data, a mechanism, a logo, render it. "
            "If the shot only needs to be plausible and beautiful, generate it. "
            "If it must be both, render the exact layer and generate the plate, or restyle a render you already control. "
            "A recurring character, or a recurring product, is an asset, not a prompt. "
            "Generate narration as its own track whenever the words must be exact. "
            "Sound that is born inside a video model is a good fit for a short standalone clip, "
            "and a poor fit for a script you intend to caption and revise. "
            "Use a professional editing application for a human finishing pass. Hand over a timeline. "
            "The agent's everyday engine is code, unless that application has a scripting API you can actually pin."
        ),
    ),
    dict(
        id="s24",
        chapter="Routing and reality",
        mode="still",
        text=(
            "Set your expectations to October twenty twenty-six, and then re-check them, "
            "because this layer of the industry moves every quarter. "
            "Numbers in this film come from the written field guide, checked that month. "
            "Vendor facts expire. The mental model does not. "
            "Reliable to automate, as of that check: a script grounded in sources you fetched, "
            "code-driven two-D, headless renders, timeline assembly, "
            "speech synthesis with timestamps, captions, loudness, encoding, and objective Q A. "
            "Supervise closely: generative video, identity across a long film, music choices, "
            "and anything that depicts a real person. "
            "Do not build on a model you have not confirmed is still being sold. "
            "This guide records that Sora was discontinued in twenty twenty-six. "
            "Leaderboards disagree with each other about who is first. "
            "Prices are per second, and they change. "
            "The skill that lasts is the routing, not the brand on the API key."
        ),
    ),
    dict(
        id="s25",
        chapter="Routing and reality",
        mode="still",
        text=(
            "Two constraints belong in the pipeline, beside the shot list. This is a map, rather than legal advice. "
            "In the European Union, the transparency duties in Article fifty of the AI Act "
            "have applied since August twenty twenty-six, for the kinds of synthetic media those duties cover. "
            "Plan to disclose what was generated, in the film and in the metadata, "
            "and have a person confirm the duty that applies to your release. "
            "Second, provenance manifests. If you sign one, sign the final export. "
            "A later FFmpeg re-encode strips the manifest, "
            "and a signature on an intermediate file is a signature on the wrong artefact. "
            "Next to those, keep a register. Which asset, which licence, which voice consent, "
            "which shot used a real person's likeness. "
            "The agent can maintain the register. You decide what it is allowed to include."
        ),
    ),
    dict(
        id="s26",
        chapter="Learn it",
        mode="still",
        text=(
            "If you want the skill in your hands, do not start by prompting a video model. "
            "Take an ordinary file apart with F F probe. Frames, sample rate, streams. "
            "Then ask an agent to build a thirty-second explainer in one code framework, "
            "and make it revise a single frame-based scene until the type is right. "
            "Then add narration, timestamps, captions, and a music bed sitting at a loudness target. "
            "Then make the agent inspect its own output and write a Q A report you can read. "
            "Only after that loop feels boring, spend money on two or three generative inserts, from approved stills, "
            "and composite exact labels on top. "
            "Then turn the project into a build. Shot list as data, partial re-renders, a cost ledger. "
            "Three-D is the step after that. One headless Blender shot, with a camera move and a light. "
            "The two-minute documentary is the exam. It is not the first exercise."
        ),
    ),
    dict(
        id="s27",
        chapter="Learn it",
        mode="still",
        text=(
            "You have the inside view. "
            "Pixels come from four families, and motion has its own source, and you ask both questions of every shot. "
            "A neural model sculpts a short clip out of a cube of noise. "
            "That is why it is beautiful, why the frames agree with each other for a few seconds, "
            "and why it cannot be your source of truth for a word, a number, or a machine. "
            "Code computes the frames that must be right. "
            "A timeline assembles everything, on a clock set by the voice. "
            "A coding agent directs by writing the plan into files, calling tools, measuring the output, "
            "and changing one thing at a time. "
            "The studies we have say the plan matters more than a crowd of agents. "
            "The taste, and the decision to publish, stay yours."
        ),
    ),
    dict(
        id="s28",
        chapter="Learn it",
        mode="still",
        pad_end=1.3,
        text=(
            "One last demonstration, so the method is not only a diagram. "
            "This tutorial was produced the way the guide describes. "
            "The pictures are code, drawn in a browser and captured frame by frame. Family B. "
            "The voice is neural speech synthesis, with timestamps that became the captions. "
            "The music bed is a simple rendered tone, kept quiet enough to leave the words alone. "
            "The timeline is FFmpeg. Family C. "
            "No text-to-video model emitted this film, "
            "because a model would have been the wrong machine for type, for numbers, "
            "and for a lesson that has to stay still long enough to learn. "
            "When you make your own, start by naming the machine for each shot. Then let the loop run."
        ),
    ),
]
