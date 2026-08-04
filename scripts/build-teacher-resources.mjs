import fs from "node:fs";
import path from "node:path";

const repo = path.resolve(import.meta.dirname, "..");
const sourcePath = path.join(repo, "source-notes", "TEACHER-PROGRAMME-HANDOFF.json");
const outputPath = path.join(repo, "teacher-resources.html");
const data = JSON.parse(fs.readFileSync(sourcePath, "utf8"));

const esc = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");

const mark = (value = "") => esc(value)
  .replaceAll("Teacher to confirm", '<strong class="teacher-confirm">Teacher to confirm</strong>')
  .replaceAll("Not NESA approved", '<strong class="not-approved">Not NESA approved</strong>')
  .replaceAll("not NESA approved", '<strong class="not-approved">not NESA approved</strong>');

const list = (items, className = "") => `<ul${className ? ` class="${className}"` : ""}>${items.map((item) => `<li>${mark(item)}</li>`).join("")}</ul>`;
const rows = (records) => records.map(([label, value]) => `<tr><th scope="row">${esc(label)}</th><td>${mark(value)}</td></tr>`).join("");
const definitionList = (records) => `<dl class="record-list">${records.map(([label, value]) => `<div><dt>${esc(label)}</dt><dd>${mark(value)}</dd></div>`).join("")}</dl>`;
const section = (id, eyebrow, title, body) => `<section class="teacher-section" id="${id}"><p class="eyebrow">${esc(eyebrow)}</p><h2>${esc(title)}</h2>${body}</section>`;

const documentControl = definitionList([
  ["Programme type", data.course_identity.programme_type],
  ["Version", data.document_control.version],
  ["Prepared", data.document_control.prepared_date],
  ["Evidence cut-off", data.document_control.evidence_cutoff],
  ["Programme owner", data.document_control.programme_owner],
  ["School/faculty", data.document_control.school_faculty],
  ["Class/year group", data.document_control.class_year_group],
  ["Indicative duration", data.document_control.duration_boundary],
  ["Reviewed by", data.document_control.reviewed_by],
  ["Review date", data.document_control.review_date],
  ["Next review due", data.document_control.next_review_due],
  ["Approval status", data.document_control.approval_boundary]
]);

const courseIdentity = definitionList([
  ["Working course title", data.course_identity.working_course_title],
  ["Formal school course title", data.course_identity.formal_course_title],
  ["Supplied drawing title", data.course_identity.project_drawing_title],
  ["Stage", data.course_identity.stage],
  ["Syllabus frame", data.course_identity.syllabus_frame],
  ["Website structure", `${data.course_identity.website_structure.module_count} modules; ${data.course_identity.website_structure.theory_sections} theory sections; ${data.course_identity.website_structure.knowledge_checks} checks; ${data.course_identity.website_structure.written_responses} written responses; ${data.course_identity.website_structure.folio_cards} folio cards`],
  ["Status boundary", data.course_identity.status_boundary]
]);

const focusAreaCards = data.syllabus.focus_areas.map((item) => `<article class="mapping-record"><h3>${esc(item.name)}</h3><p><strong>Contribution evidenced here</strong><br>${mark(item.unit_contribution)}</p><p><strong>Status</strong><br>${mark(item.status)}</p></article>`).join("");
const outcomeCards = data.syllabus.outcomes.map((item) => `<article class="mapping-record"><span class="status-pill">${esc(item.code)}</span><h3>${mark(item.wording)}</h3><p><strong>Source-grounded opportunity</strong><br>${mark(item.opportunity)}</p><p><strong>Formal-status boundary</strong><br>${mark(item.formal_status)}</p></article>`).join("");

const moduleCards = data.modules.map((module) => {
  const evidence = module.evidence;
  return `<article class="teacher-module">
    <div class="teacher-module__heading"><span class="status-pill">Module ${module.module} · Weeks ${esc(module.website_weeks)}</span><h3>${esc(module.title)}</h3><p>${mark(module.source_status)}</p></div>
    <div class="teacher-module__grid">
      <div><h4>Learning focus</h4>${list(module.learning_focus)}</div>
      <div><h4>Named theory sections</h4><ol>${module.sections.map((item) => `<li><strong>${esc(item.id)}</strong> ${esc(item.title)}</li>`).join("")}</ol></div>
      <div><h4>Source-grounded content</h4>${list(module.content)}</div>
      <div><h4>Evidence available</h4><ul><li>${evidence.knowledge_checks} knowledge checks</li><li>${evidence.written_responses} scaffolded written responses</li><li>Folio Cards ${evidence.folio_cards.join(", ")}</li>${evidence.external_dependency ? `<li>${mark(evidence.external_dependency)}</li>` : ""}</ul></div>
      <div><h4>Outcome opportunities</h4><p>${module.outcome_opportunities.map(esc).join(", ")}</p><h4>Focus-area opportunities</h4><p>${module.focus_area_opportunities.map(esc).join("; ")}</p></div>
      <div><h4>Source IDs</h4><p class="source-id-list">${module.source_ids.map((id) => `<code>${esc(id)}</code>`).join(" ")}</p></div>
    </div>
    <div class="teacher-boundary"><strong>Boundaries and dependencies</strong>${list(module.boundaries)}</div>
  </article>`;
}).join("");

const resourceHref = (item) => {
  if (!item.id) return "";
  if (item.resource === "Authorised Drive root") return data.source_authority.authorised_drive_root.url;
  if (/Quiz/i.test(item.resource)) return `https://docs.google.com/forms/d/${item.id}/viewform`;
  return `https://drive.google.com/open?id=${item.id}`;
};

const resourceCards = data.resource_register.map((item) => {
  const href = resourceHref(item);
  const sourceCell = item.id ? `<code>${esc(item.id)}</code>${href ? `<br><a class="external-source" href="${esc(href)}" target="_blank" rel="noopener">Open Drive source ↗</a>` : ""}${item.local_route ? `<br><a class="external-source" href="${esc(item.local_route)}" target="_blank" rel="noopener">Open local course copy ↗</a>` : ""}` : "Not applicable";
  return `<article class="resource-record"><h3>${esc(item.resource)}</h3><p><strong>ID and route</strong><br>${sourceCell}</p><p><strong>Role</strong><br>${mark(item.role || "Source-supported course resource")}</p><p><strong>Boundary</strong><br>${mark(item.boundary)}</p></article>`;
}).join("");

const evidenceCards = data.assessment_and_evidence_status.map((item) => `<article class="mapping-record"><h3>${esc(item.item)}</h3><p><strong>Current status</strong><br>${mark(item.current_status)}</p><p><strong>Formal assessment boundary</strong><br>${mark(item.formal_boundary)}</p></article>`).join("");
const confirmCards = data.teacher_to_confirm_register.map((item) => `<article class="confirm-record"><div><span class="status-pill">${esc(item.id)}</span><h3>${mark(item.decision)}</h3></div><p><strong>Why it matters</strong><br>${mark(item.reason)}</p><p><strong>Current status</strong><br>${mark(item.status)}</p><p class="local-review-field"><strong>Local decision, source, owner, date and review</strong><br>${mark("Teacher to confirm")}</p></article>`).join("");
const changeCards = data.change_record.map((item) => `<article class="mapping-record"><span class="status-pill">Version ${esc(item.version)}</span><h3>${esc(item.date)} · ${mark(item.change)}</h3><p><strong>Authority/source</strong><br>${mark(item.authority)}</p><p><strong>Reviewer/result</strong><br>${mark(item.review_result)}</p></article>`).join("");

const html = `<!doctype html>
<html lang="en-AU">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Teacher-developed, source-mapped programme and scope-and-sequence record for the Programmable Light course.">
  <title>Teacher programme &amp; scope and sequence | Programmable Light</title>
  <link rel="stylesheet" href="guided/course.css?v=20260805c">
  <link rel="stylesheet" href="shared/sister-site.css" data-sister-site-styles>
  <script src="shared/hub-navigation.js" defer></script>
</head>
<body class="teacher-programme-page">
  <a class="skip-link" href="#teacher-programme-content">Skip to teacher programme</a>
  <header class="site-header"><div class="nav-wrap"><a class="brand" href="index.html">Programmable Light</a><nav class="nav-links" aria-label="Course navigation"><a href="index.html#pathway">Modules</a><a href="index.html#project-plan">Project plan</a><a href="folio.html">Folio</a><a href="index.html#outcomes">Outcomes</a><a href="teacher-resources.html" aria-current="page">Teacher programme</a></nav></div></header>

  <main id="teacher-programme-content" class="teacher-programme">
    <header class="teacher-title-block">
      <a class="back-link" href="index.html">← Back to course home</a>
      <p class="eyebrow">Teacher resources · source-mapped professional record</p>
      <h1>${esc(data.integration_recommendation.page_title)}</h1>
      <div class="teacher-status" role="note"><strong>Teacher-developed programme for local review.</strong> <strong>Not NESA approved.</strong> Confirm all local programme, assessment, practical and safety decisions before use.</div>
      <button class="btn teacher-print-button" type="button" onclick="window.print()">${esc(data.integration_recommendation.print_button_text)}</button>
      <p class="teacher-public-boundary">${mark(data.integration_recommendation.public_access_boundary)}</p>
    </header>

    ${section("document-control", "Programme status", "Document control and review status", `${documentControl}${list(data.audit_position, "teacher-audit-list")}`)}

    ${section("identity", "Authority", "Course identity and source hierarchy", `${courseIdentity}<div class="teacher-two-column"><article><h3>Source hierarchy</h3>${list(data.source_authority.hierarchy)}</article><article><h3>Exclusions</h3>${list(data.source_authority.exclusions)}</article></div><p><strong>Authorised Drive root:</strong> <a class="external-source" href="${esc(data.source_authority.authorised_drive_root.url)}" target="_blank" rel="noopener">${esc(data.source_authority.authorised_drive_root.title)} ↗</a> <code>${esc(data.source_authority.authorised_drive_root.id)}</code></p>`)}

    ${section("syllabus", "Current syllabus frame", `${data.syllabus.name} · implemented from ${data.syllabus.implementation_from}`, `<p>${mark(data.syllabus.whole_programme_boundary)}</p><h3>Course-requirement boundary</h3>${list(data.syllabus.course_requirements)}<h3>Focus-area contribution</h3><div class="mapping-grid">${focusAreaCards}</div><h3>Outcome opportunities</h3><p class="teacher-note">This is an opportunity map, not an assessed-outcome schedule.</p><div class="mapping-grid">${outcomeCards}</div><p class="official-links"><a class="external-source" href="${esc(data.syllabus.official_links.course_requirements)}" target="_blank" rel="noopener">Official course requirements ↗</a> <a class="external-source" href="${esc(data.syllabus.official_links.outcomes)}" target="_blank" rel="noopener">Official outcomes ↗</a> <a class="external-source" href="${esc(data.syllabus.official_links.organisation)}" target="_blank" rel="noopener">Official organisation and focus areas ↗</a></p>`)}

    ${section("module-programme", "Teacher-developed integration frame", "Five-module scope and sequence", `<div class="teacher-status compact"><strong>Important:</strong> Website Weeks 1–10 organise learning access only. They do not create or authorise a practical production sequence.</div>${moduleCards}<article class="teacher-module cross-module"><h3>${esc(data.cross_module_evidence.title)} · ${esc(data.cross_module_evidence.folio_card)}</h3><p>${mark(data.cross_module_evidence.programme_treatment)}</p><p><strong>Sequence boundary:</strong> ${mark(data.cross_module_evidence.sequence_boundary)}</p></article>`)}

    ${section("resource-register", "Plans and sources", "Plan and resource register", `<div class="resource-grid">${resourceCards}</div>`)}

    ${section("evidence-status", "Evidence status", "Student evidence and assessment boundary", `<div class="mapping-grid">${evidenceCards}</div><h3>Evidence workflow boundaries</h3>${list(data.evidence_workflow_boundaries)}`)}

    ${section("safety-boundaries", "Before practical delivery", "Safety and dependency boundaries", `<div class="teacher-status compact"><strong>This public page grants no equipment permission and supplies no local safe-work procedure.</strong></div><ol>${data.safety_and_dependency_boundaries.map((item) => `<li>${mark(item)}</li>`).join("")}</ol>`)}

    ${section("teacher-confirm", "Local decisions required", "Teacher to confirm register", `<p>Complete every item before local approval. Replace a status only when the decision, evidence, owner, date and review record are available.</p><div class="confirm-grid">${confirmCards}</div>`)}

    ${section("change-record", "Version control", "Review and change record", `<div class="mapping-grid">${changeCards}</div><p>For every later change, record the source, reason, affected outcome/evidence, test and result. Do not remove a <strong class="teacher-confirm">Teacher to confirm</strong> item until its local decision and evidence are recorded.</p>`)}
  </main>

  <footer>Teacher-developed Programmable Light programme for local review · Not NESA approved · <a href="index.html">Course home</a></footer>
</body>
</html>
`;

fs.writeFileSync(outputPath, html, "utf8");
console.log(`Built ${path.basename(outputPath)} from ${path.relative(repo, sourcePath)}.`);
