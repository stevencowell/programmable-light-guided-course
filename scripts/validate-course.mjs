import fs from "node:fs";
import crypto from "node:crypto";
import path from "node:path";
import vm from "node:vm";

const repo = path.resolve(import.meta.dirname, "..");
const read = (file) => fs.readFileSync(path.join(repo, file), "utf8");
const must = (condition, message) => { if (!condition) throw new Error(message); };

const textExtensions = new Set([".html", ".js", ".mjs", ".css", ".md", ".json", ".txt"]);
const stalePatterns = [
  /Year 10 Metal(?:work)?/i,
  /BBQ(?: and Case)?/i,
  /Folding Camping Shovel/i,
  /assessment-task-[123]\.html/i,
  /\bexam\.html\b/i,
  /year-10-metal/i,
  /stevencowell\.github\.io\/Yr-10-Metal/i,
  /practical\/theory examination/i
];

function walk(folder) {
  return fs.readdirSync(folder, { withFileTypes: true }).flatMap((entry) => {
    if (entry.name === ".git") return [];
    const full = path.join(folder, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

for (const file of walk(repo).filter((file) => textExtensions.has(path.extname(file).toLowerCase()))) {
  if (path.resolve(file) === path.resolve(import.meta.filename)) continue;
  const content = fs.readFileSync(file, "utf8");
  stalePatterns.forEach((pattern) => must(!pattern.test(content), `Stale Year 10 Metal content found in ${path.relative(repo, file)}: ${pattern}`));
}

const requiredFiles = [
  "index.html",
  "module.html",
  "folio.html",
  "guided/data.js",
  "guided/course.js",
  "guided/course.css",
  "assets/programmable-light-hero.png",
  "assets/plans/programmable-lamp-drawing.pdf",
  "assets/plans/programmable-lamp-drawing.png",
  "source-notes/QUESTION-BANK.json",
  "source-notes/SOURCE-MAP.md",
  "source-notes/SOURCE-COVERAGE.md",
  "source-notes/OUTCOME-MAP.md",
  "source-notes/EVIDENCE-CONTRACT.md",
  "source-notes/THEORY-HANDOFF-MANIFEST.md",
  "source-notes/THEORY-HANDOFF-SHA256.txt",
  "source-notes/VISUAL-HANDOFF.md",
  "source-notes/VISUAL-UPSTREAM-SEMANTIC-AUDIT.md",
  "source-notes/VISUAL-MANIFEST.json",
  "source-notes/VISUAL-MANIFEST.csv",
  "source-notes/VISUAL-SEMANTIC-AUDIT.md",
  "assets/resources/high-quality-image-search-task.pdf",
  "assets/resources/timber-production.pdf",
  "assets/resources/what-is-coding.pdf",
  "assets/resources/disc-sander-sop.pdf",
  "assets/resources/2d-design-practice.pdf",
  ...Array.from({ length: 5 }, (_, moduleIndex) => Array.from({ length: 3 }, (_, sectionIndex) => `assets/visuals/theory-${moduleIndex + 1}-${sectionIndex + 1}.png`)).flat(),
  ...Array.from({ length: 12 }, (_, index) => `assets/visuals/folio-card-${String(index + 1).padStart(2, "0")}.png`)
];
requiredFiles.forEach((file) => must(fs.existsSync(path.join(repo, file)), `Missing ${file}`));

const visualManifest = JSON.parse(read("source-notes/VISUAL-MANIFEST.json"));
must(visualManifest.asset_count === 39 && visualManifest.assets?.length === 39, "Visual manifest must contain exactly 39 audited records.");
visualManifest.assets.forEach((record) => {
  must(record.semantic_status === "PASS", `Visual manifest record ${record.asset_id} is not a semantic PASS.`);
  const assetFile = path.join(repo, record.asset_path);
  must(fs.existsSync(assetFile), `Visual manifest asset is missing: ${record.asset_path}`);
  const actualHash = crypto.createHash("sha256").update(fs.readFileSync(assetFile)).digest("hex");
  must(actualHash.toLowerCase() === record.sha256.toLowerCase(), `Visual manifest SHA-256 mismatch: ${record.asset_path}`);
  if (record.open_larger_path && !/^https?:/i.test(record.open_larger_path)) {
    must(fs.existsSync(path.join(repo, record.open_larger_path)), `Open larger target is missing: ${record.open_larger_path}`);
  }
});

const sourceMap = read("source-notes/SOURCE-MAP.md");
const sourceCoverage = read("source-notes/SOURCE-COVERAGE.md");
const outcomeMap = read("source-notes/OUTCOME-MAP.md");
const sourceAuthorities = [
  "1KIGdTkwOtKBGXfO6qAfzaHNx3WFpHvZC",
  "1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE",
  "1FmKuNB8FrUgDZ-N572uJPaK5e3BITduHcYVzkGQLg0k",
  "1pA-ABXOT5jXS1Wnr_6kougMTh69uxVZi",
  "1UnXP8FYDHNQsgOaRS036CZhLTCW9UXeoZC56gJbL2Tg",
  "11YSs1RBYTnC7FDGHhgTLyq6KgQyJDdErOZrAr5Lnl1k",
  "1I5PiH8vw7PerhH0PgMeWYkltm6z1rVNZ",
  "1oORhoz0nkpXrgbNX-nbw1Id0zqUCciLL",
  "1xBOBGVdnWhorJVeTTqZPw5yRNeWkF249",
  "1VmOGpI0qTXPmWWKYMRD8ewtJcGRQB1kpf_zQNSFwppQ",
  "1OmW9UvXZ44MtOGNVmq7THl65bglDtKBwJ4exdkAqWF8",
  "1dTRa-pimCafVnV_V7H0I16M_8Wn32-b7C_4NIXbfmaM",
  "1aEDElMGsxxIcAo-rCDUe49_leQwztNNdOh2PIEp_e2k"
];
sourceAuthorities.forEach((id) => {
  must(sourceMap.includes(id), `Authorised Drive source ${id} is missing from SOURCE-MAP.md.`);
  must(sourceCoverage.includes(id), `Authorised Drive source ${id} is missing from SOURCE-COVERAGE.md.`);
});
must(sourceCoverage.includes("Technology 7-8 Syllabus (2023)") && sourceCoverage.includes("implemented from 2026"), "Current NESA 2023 syllabus authority is missing from the source-coverage gate.");
must(sourceCoverage.includes("80 × 50 mm") && sourceCoverage.includes("only to the key-tag practice, never the lamp"), "The key-tag-only 80 × 50 mm boundary is missing.");
const requiredOutcomes = ["TE4-SDP-01", "TE4-PDP-01", "TE4-MSC-01", "TE4-PPM-01", "TE4-DES-01", "TE4-SAF-01", "TE4-DIG-01", "TE4-DIG-02"];
requiredOutcomes.forEach((outcome) => must(outcomeMap.includes(outcome), `Outcome ${outcome} is missing from OUTCOME-MAP.md.`));

const sandbox = { window: {} };
vm.runInNewContext(read("guided/data.js"), sandbox);
const course = sandbox.window.COURSE_DATA;
must(course && Array.isArray(course.modules), "Course data did not load.");
must(course.modules.length === 5, "Course must contain five two-week modules.");
must(course.modules.every((module) => module.sections.length === 3), "Every module must contain exactly three theory sections.");
must(course.modules.every((module) => module.checks.length === 30), "Every module must contain 30 knowledge checks.");
must(course.modules.every((module) => module.sections.every((_, theoryIndex) => module.checks.filter((check) => check.theoryIndex === theoryIndex).length === 10)), "Every named theory section must contain exactly 10 knowledge checks.");
must(course.modules.flatMap((module) => module.checks).length === 150, "Course must contain exactly 150 knowledge checks.");
must(course.modules.every((module) => module.written.length === 6), "Every module must preserve six ChatGPT-authored written-evidence tasks.");
must(course.modules.flatMap((module) => module.sections).length === 15, "Course must contain exactly 15 named theory sections.");
must(course.modules.flatMap((module) => module.sections).map((section) => section.id).join(",") === ["1.1","1.2","1.3","2.1","2.2","2.3","3.1","3.2","3.3","4.1","4.2","4.3","5.1","5.2","5.3"].join(","), "Theory section IDs must run continuously from 1.1 to 5.3.");
must(course.modules.flatMap((module) => module.sections).every((section) => {
  const words = section.theory.join(" ").trim().split(/\s+/).length;
  return words >= 250 && words <= 420;
}), "Every theory section must contain a substantive 250-420 word theory block.");
must(course.modules.flatMap((module) => module.sections).every((section) => section.takeaways.length === 3), "Every theory section must contain exactly three key takeaways.");
must(course.modules.flatMap((module) => module.sections).every((section) => section.visual?.image && section.visual?.alt && section.visual?.caption), "Every theory section must have a complete visual record.");
course.modules.flatMap((module) => module.sections).forEach((section) => must(fs.existsSync(path.join(repo, section.visual.image)), `Theory ${section.id} links to missing visual ${section.visual.image}.`));
must(course.modules.flatMap((module) => module.sections).every((section) => section.boundary?.trim()), "Every theory section must retain a source boundary.");

const allChecks = course.modules.flatMap((module) => module.checks);
must(allChecks.every((check) => check.options.length === 4 && check.answerIndex >= 0 && check.answerIndex < 4), "Every knowledge check must contain four options and a valid answer index.");
must(allChecks.reduce((total, check) => total + check.options.length, 0) === 600, "Course must contain exactly 600 knowledge-check options.");
must(allChecks.every((check) => check.question.trim() && check.correctFeedback.trim() && check.incorrectFeedback.trim()), "Every knowledge check must contain a question and useful correct/incorrect feedback.");
must(course.modules.every((module) => module.sections.every((_, theoryIndex) => {
  const questions = module.checks.filter((check) => check.theoryIndex === theoryIndex).map((check) => check.question.trim().toLowerCase());
  return new Set(questions).size === 10;
})), "Each named theory section must contain 10 distinct question texts.");

const questionBank = JSON.parse(read("source-notes/QUESTION-BANK.json"));
must(questionBank.authoredVia === "Signed-in ChatGPT in the in-app browser, one named theory section at a time", "Question-bank authoring provenance is missing.");
must(questionBank.sections?.length === 15, "Question bank must contain 15 named sections.");
must(questionBank.sections.every((section) => section.questions?.length === 10), "Every question-bank section must contain exactly 10 questions.");
must(questionBank.sections.reduce((total, section) => total + section.questions.length, 0) === 150, "Question bank must contain exactly 150 questions.");
must(!/PICAXE/i.test(read("guided/data.js")) && !/PICAXE/i.test(read("source-notes/QUESTION-BANK.json")), "Student course data or question bank contains excluded PICAXE material.");
must(course.modules.flatMap((module) => module.written).every((item) => item.prompt?.trim() && item.model?.trim()), "All 30 written tasks must include a prompt and Appropriate response example.");

const renderedSections = course.modules.flatMap((module) => module.sections);
questionBank.sections.forEach((bankSection, index) => {
  must(bankSection.id === renderedSections[index].id, `Question-bank order mismatch at ${bankSection.id}.`);
  must(bankSection.title === renderedSections[index].title, `Question-bank title mismatch at ${bankSection.id}.`);
});

const planSections = renderedSections.filter((section) => section.planGuidance);
must(planSections.length >= 1, "At least one theory section must include project-plan-specific guidance.");
must(planSections.some((section) => section.planGuidance.sheets?.some((sheet) => sheet.open === "assets/plans/programmable-lamp-drawing.pdf" || sheet.open === "../assets/plans/programmable-lamp-drawing.pdf")), "The verified project drawing must be integrated into plan guidance.");

const folio = read("folio.html");
must((folio.match(/class="card folio-card"/g) || []).length === 12, "Folio must contain exactly 12 evidence cards.");
must((folio.match(/class="folio-visual"/g) || []).length === 12, "Every folio card must include one visual hook.");
for (let index = 1; index <= 12; index += 1) must(folio.includes(`id="folio-card-${String(index).padStart(2, "0")}"`), `Missing sequential folio-card-${String(index).padStart(2, "0")} record.`);
must(folio.includes("80 mm × 50 mm") && folio.includes("only to the key-tag practice"), "The folio must confine 80 mm × 50 mm to the key-tag practice.");

const courseScript = read("guided/course.js");
must(courseScript.includes("zoomable-infographic"), "Teaching visuals must provide enlarged-image links.");
must(courseScript.includes('target="_blank"') && courseScript.includes('visualLink.target = "_blank"'), "Module and folio visuals must open their full-resolution source in a new tab.");
must(courseScript.includes("Print / Save PDF"), "Modules must include Print / Save PDF.");
must(courseScript.includes("localStorage"), "Course evidence must autosave in browser storage.");

const audit = read("source-notes/VISUAL-SEMANTIC-AUDIT.md");
must(!/\b(?:PENDING|REPLACE|REMOVE)\b/.test(audit), "Visual semantic audit contains an unresolved item.");
must((audit.match(/^\| PASS \|/gm) || []).length >= 14, "Visual semantic audit must record at least the hero, plan preview and 12 folio cards as PASS.");

for (const file of ["index.html", "module.html", "folio.html"]) {
  const html = read(file);
  must((html.match(/<h1\b/g) || []).length === 1, `${file} must contain exactly one H1.`);
  for (const match of html.matchAll(/(?:href|src)="([^"#?]+)"/g)) {
    const target = match[1];
    if (/^(?:https?:|mailto:|data:)/.test(target)) continue;
    must(fs.existsSync(path.resolve(repo, path.dirname(file), target)), `${file} links to missing ${target}`);
  }
}

const studentSurface = [read("index.html"), read("module.html"), read("folio.html"), read("guided/data.js")].join("\n");
must(!/Technology Mandatory 7-8 Syllabus \(2017\)/i.test(studentSurface), "Student UI must use the governing Technology 7-8 Syllabus (2023), not the legacy syllabus.");
must(!/\b(?:task number|weighting|due date|total marks?)\b/i.test(studentSurface), "Student UI contains unsupported formal assessment metadata.");

console.log("Course validation passed: 5 modules, 15 theory sections, 150 knowledge checks, 30 written tasks and 12 folio cards.");
