import fs from "node:fs";
import path from "node:path";

const repo = path.resolve(import.meta.dirname, "..");
const handoff = path.resolve(repo, "..", "..", "..", "task-10b-programmable-light-theory", "outputs");
const metadata = [
  { file: "PROGRAMMABLE-LIGHT-MODULE-1.json", projectModule: 1, weeks: "1-2", title: "Brief, safety and project information", summary: "Understand the project, work responsibly and read the supplied drawing without guessing missing detail." },
  { file: "PROGRAMMABLE-LIGHT-MODULE-2.json", projectModule: 2, weeks: "3-4", title: "Measurement, vector design and ideas", summary: "Develop accurate digital-design habits, source-aware research and a justified design direction." },
  { file: "PROGRAMMABLE-LIGHT-MODULE-3.json", projectModule: 3, weeks: "5-6", title: "Materials, production and sustainability", summary: "Explain material choices, production ideas and sustainability while keeping practical gaps teacher-controlled." },
  { file: "PROGRAMMABLE-LIGHT-MODULE-4.json", projectModule: 4, weeks: "7-8", title: "Coding and digital systems", summary: "Use coding concepts and system thinking before following teacher-authorised electronics instructions." },
  { file: "PROGRAMMABLE-LIGHT-MODULE-5.json", projectModule: 5, weeks: "9-10", title: "Testing, evidence and evaluation", summary: "Test against confirmed criteria, communicate evidence and evaluate the final solution honestly." }
];

const between = (text, start, end) => {
  const a = text.indexOf(start);
  const b = text.indexOf(end, a + start.length);
  if (a < 0 || b < 0) throw new Error(`Missing ${start} or ${end}`);
  return text.slice(a + start.length, b).trim();
};

function parseSection(section) {
  const content = section.content.replace(/\r/g, "");
  const theoryMarker = content.indexOf("\nTheory\n");
  const titleMarker = content.indexOf(section.title);
  const theoryStart = theoryMarker >= 0 ? theoryMarker + "\nTheory\n".length : titleMarker + section.title.length;
  const theoryEnd = content.indexOf("\nKey takeaways\n", theoryStart);
  if (theoryStart < 0 || theoryEnd < 0) throw new Error(`Missing theory or key takeaways in ${section.id}`);
  const theoryRaw = content.slice(theoryStart, theoryEnd).trim();
  const theory = theoryRaw.split(/\n\s*\n/).map((part) => part.trim().replace(/\s+NSW Curriculum$/, "")).filter((part) => part && !["Understand the idea", "Apply it to the project", "Check before moving on", "Measurement Conversions", "Programmable Lamp Drawing", "NSW Curriculum"].includes(part));
  const knowledgeHeading = content.includes("\nKnowledge check\n") ? "\nKnowledge check\n" : "\nKnowledge checks\n";
  const takeaways = between(content, "\nKey takeaways\n", knowledgeHeading).split(/\n\s*\n/).map((part) => part.trim()).filter(Boolean);
  const checksRaw = between(content, knowledgeHeading, "\nWritten evidence\n");
  const checks = [];
  const checkPattern = /([^\n]+)\n\s*A\. ([^\n]+)\n\s*B\. ([^\n]+)\n\s*C\. ([^\n]+)\n\s*D\. ([^\n]+)\n\s*Answer: ([A-D])\. ([^\n]+)\n\s*Correct feedback: ([^\n]+)\n\s*Incorrect feedback: ([^\n]+)\n\s*Source: ([^\n]+)/g;
  for (const match of checksRaw.matchAll(checkPattern)) {
    checks.push({ question: match[1].trim(), options: match.slice(2, 6).map((value) => value.trim()), answerIndex: "ABCD".indexOf(match[6]), answer: match[7].trim(), feedback: match[8].trim(), incorrectFeedback: match[9].trim(), source: match[10].trim() });
  }
  const writtenRaw = between(content, "\nWritten evidence\n", "\nSource boundary\n");
  const written = [];
  const writtenPattern = /Prompt: ([^\n]+)\n\s*Scaffold:\n([\s\S]*?)\nAppropriate response example: ([^\n]+)\nSource: ([^\n]+)/g;
  for (const match of writtenRaw.matchAll(writtenPattern)) {
    written.push({ prompt: match[1].trim(), scaffold: match[2].split(/\n\s*\n/).map((value) => value.trim()).filter(Boolean), model: match[3].trim(), source: match[4].trim() });
  }
  const boundary = content.split("\nSource boundary\n")[1]?.split("\nSources")[0]?.trim() || "Teacher to confirm unresolved practical details.";
  if (theory.length < 3 || takeaways.length !== 3 || checks.length !== 10 || written.length !== 2) throw new Error(`Could not parse ${section.id}: theory=${theory.length}, takeaways=${takeaways.length}, checks=${checks.length}, written=${written.length}`);
  return { id: section.id, title: section.title, theory, takeaways, boundary, checks, written };
}

const modules = metadata.filter((item) => fs.existsSync(path.join(handoff, item.file))).map((item) => {
  const source = JSON.parse(fs.readFileSync(path.join(handoff, item.file), "utf8"));
  const sections = source.sections.map(parseSection);
  return {
    project: "Programmable Light",
    projectModule: item.projectModule,
    weeks: item.weeks,
    title: item.title,
    summary: item.summary,
    sections: sections.map(({ checks, written, ...section }) => section),
    checks: sections.flatMap((section, theoryIndex) => section.checks.map((check) => ({ theoryIndex, question: check.question, options: check.options, answerIndex: check.answerIndex, correctFeedback: check.feedback.replace(/^Correct\.\s*/, ""), incorrectFeedback: check.incorrectFeedback, source: check.source }))),
    written: sections.flatMap((section, theoryIndex) => section.written.map((item, writtenIndex) => ({ theoryIndex, title: `${section.title} · Evidence ${writtenIndex + 1}`, prompt: item.prompt, clarification: item.scaffold.join(" "), model: item.model, source: item.source })))
  };
});

const planSection = modules.flatMap((module) => module.sections).find((section) => section.id === "1.3");
if (planSection) {
  planSection.planGuidance = {
    heading: "Read the supplied Programmable Lamp drawing before production",
    paragraphs: [
      "The local plan route preserves the authorised root drawing master; the Week 02 delivery copy is textually identical. Its title block identifies Programmable Lamp, Josh McKenzie, 24/02/2025 and an overall scale of 1:2; two detail views are labelled 1:1.",
      "Read the printed labels and dimensions directly from the full PDF. Do not infer a unit, material assignment, tolerance, hidden feature or production setting that the drawing does not state. Record any missing information and ask the teacher before marking or cutting.",
      "The drawing labels a sequence: 1 Cut First and Sand, 2 Cut Second and Sand, then 3 Cut Third. This is plan-reading evidence only; the teacher demonstration and current workshop procedure control how any practical operation is completed."
    ],
    takeaways: [
      "Check the title block, view and scale before reading a value.",
      "Transcribe stated dimensions faithfully and leave unstated units or assignments unclaimed.",
      "Follow the labelled cut order only through teacher-authorised workshop instruction."
    ],
    boundary: "The drawing does not confirm units, material assignment, tolerances, machine settings or a complete production method. Those details remain Teacher to confirm.",
    sheets: [{
      title: "Programmable Lamp drawing",
      preview: "assets/plans/programmable-lamp-drawing.png",
      open: "assets/plans/programmable-lamp-drawing.pdf",
      sourceUrl: "https://drive.google.com/file/d/1I5PiH8vw7PerhH0PgMeWYkltm6z1rVNZ/view",
      alt: "Technical drawing titled Programmable Lamp with orthographic, detail and pictorial views, labelled scales, dimensions and three cut-order notes",
      caption: "Byte-preserved authorised root drawing master. The Week 02 delivery copy is textually identical. Open the full PDF for plan reading; do not measure the screen preview."
    }]
  };
}

const theoryVisuals = {
  "1.1": { image: "assets/programmable-light-hero.png", alt: "Workshop concept showing a clear acrylic light, timber base, Arduino-style controller and RGB LED strip", caption: "AI-generated system overview. It identifies the project elements without specifying final geometry, wiring or settings." },
  "1.2": { image: "assets/visuals/folio-card-04.png", alt: "Teacher and student reviewing a fixed disc-sander safety checklist with PPE visible and the machine stopped", caption: "AI-generated safety discussion prompt. The current SOP, teacher demonstration, permission and local procedure remain authoritative." },
  "1.3": { image: "assets/plans/programmable-lamp-drawing.png", alt: "Verified supplied Programmable Lamp technical drawing with title block, scales, dimensions and three cut-order labels", caption: "Verified drawing preview from the authorised master. Open the full PDF for plan reading and never measure this screen image." },
  "2.1": { image: "assets/visuals/folio-card-05.png", alt: "Student comparing several lamp reference images and recording observations in a notebook", caption: "AI-generated research prompt. Students must record real creator, source, resolution and reuse information for their own research." },
  "2.2": { image: "assets/visuals/folio-card-09.png", alt: "Student creating a simple two-layer key-tag vector practice design beside two acrylic practice layers", caption: "AI-generated vector-practice prompt. The 80 mm × 50 mm limit belongs only to the supplied key-tag activity, not the lamp." },
  "2.3": { image: "assets/visuals/folio-card-07.png", alt: "Several different programmable-light sketches beside a selected concept and a small concept model", caption: "AI-generated iteration prompt. The forms and light effects are examples, not final project requirements." },
  "3.1": { image: "assets/visuals/folio-card-10.png", alt: "Student marking a radiata-pine workpiece beside other pine pieces, clear acrylic and a progress notebook", caption: "AI-generated material-reasoning prompt. It does not establish stock size, grade, finish, method or selection rationale." },
  "3.2": { image: "assets/visuals/folio-card-10.png", alt: "Radiata-pine pieces at different preparation stages with a clear acrylic offcut and evidence notebook", caption: "AI-generated production prompt. The image cannot prove forest origin, management, certification or sustainability." },
  "3.3": { image: "assets/visuals/folio-card-08.png", alt: "Student using a steel rule, pencil and set square while reading a deliberately unreadable technical drawing", caption: "AI-generated planning prompt. The verified Programmable Lamp PDF controls every visible drawing fact and teacher direction controls practical work." },
  "4.1": { image: "assets/visuals/folio-card-11.png", alt: "Student working beside a laptop, Arduino-style controller, glowing RGB LED strip and blank test table", caption: "AI-generated coding-and-test prompt. No readable code, language, timing, pin or wiring value is supplied by the image." },
  "4.2": { image: "assets/visuals/folio-card-11.png", alt: "Programmable-light test setup with blurred code, controller, RGB output and an empty observation table", caption: "AI-generated control-flow prompt. Variable names, loop rules, conditions and timing remain Teacher to confirm." },
  "4.3": { image: "assets/visuals/folio-card-11.png", alt: "Controller connected in a tidy low-voltage test scene to a glowing RGB strip and clear acrylic light", caption: "AI-generated system prompt. It illustrates roles only and does not authorise or specify connections, pins, voltage or code." },
  "5.1": { image: "assets/programmable-light-hero.png", alt: "Clear acrylic light and timber base shown with an Arduino-style controller and RGB LED strip on a workshop bench", caption: "AI-generated integration overview. Exact build geometry, component placement, circuit and settings remain Teacher to confirm." },
  "5.2": { image: "assets/visuals/folio-card-11.png", alt: "Student observing a programmable-light prototype with a blank test table ready for results", caption: "AI-generated test prompt. Students must record observed results and authorised changes rather than infer hidden causes." },
  "5.3": { image: "assets/visuals/folio-card-12.png", alt: "Student checking a completed illuminated acrylic-and-timber light against an evaluation sheet", caption: "AI-generated evaluation prompt. The visible concept is not the formal standard; class-agreed criteria and actual evidence control the judgement." }
};
Object.entries(theoryVisuals).forEach(([id, visual]) => { visual.image = `assets/visuals/theory-${id.replace(".", "-")}.png`; });
modules.flatMap((module) => module.sections).forEach((section) => { section.visual = theoryVisuals[section.id]; });

if (!modules.length) throw new Error(`No module handoffs found in ${handoff}`);
const data = { shortTitle: "Programmable Light", storagePrefix: "programmable-light", modules };
fs.writeFileSync(path.join(repo, "guided", "data.js"), `window.COURSE_DATA = ${JSON.stringify(data, null, 2)};\n`, "utf8");
const questionBank = {
  authoredVia: "Signed-in ChatGPT in the in-app browser, one named theory section at a time",
  generatedAt: new Date().toISOString(),
  sections: modules.flatMap((module) => module.sections.map((section, theoryIndex) => ({ id: section.id, title: section.title, questions: module.checks.filter((check) => check.theoryIndex === theoryIndex).map((check) => ({ question: check.question, options: check.options, answerIndex: check.answerIndex, correctFeedback: check.correctFeedback, incorrectFeedback: check.incorrectFeedback, source: check.source })) })))
};
fs.writeFileSync(path.join(repo, "source-notes", "QUESTION-BANK.json"), `${JSON.stringify(questionBank, null, 2)}\n`, "utf8");
console.log(`Built ${modules.length} module(s), ${modules.flatMap((module) => module.sections).length} sections and ${modules.flatMap((module) => module.checks).length} checks.`);
