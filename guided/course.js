(function () {
  "use strict";

  const course = window.COURSE_DATA;
  if (!course) return;
  const moduleSupport = [
    { deck: "presentations/programmable-light-module-1.pptx", videos: [
      { id: "eSYeHlwDCNA", title: "Computer Science Basics: Sequences, Selections, and Loops", channel: "LearnFree", watchFor: "Notice how ordered instructions and choices can control light behaviour. The clip supports the coding part of the lamp system; exact hardware and wiring remain teacher-confirmed." },
      { id: "XOkPcLD5Soo", title: "The Hierarchy of Controls", channel: "Healthier Workforce Center", watchFor: "Identify why stronger controls come before personal protective equipment, then connect that order to your local workshop rules and teacher demonstrations." },
      { id: "W1NA0CIo_FI", title: "Scales Explained! (For EGD Students)", channel: "Nicole EGD", watchFor: "Watch how a scale relationship is interpreted. Keep using written dimensions and the verified supplied drawing rather than measuring a resized screen." }
    ] },
    { deck: "presentations/programmable-light-module-2.pptx", videos: [
      { id: "1SGr6uSPaLI", title: "raster vs vector", channel: "FAB[in]FIVE", watchFor: "Compare pixels with editable paths and connect that difference to resolution, enlargement and the quality of design research images." },
      { id: "1SGr6uSPaLI", title: "raster vs vector", channel: "FAB[in]FIVE", watchFor: "Focus on why editable vector paths suit clear outlines and layers. Machine readiness still requires teacher checking and the authorised production process." },
      { id: "1SGr6uSPaLI", title: "raster vs vector", channel: "FAB[in]FIVE", watchFor: "Notice how editable vector information can be revised. Use that capability to refine ideas against criteria rather than treating the first drawing as final." }
    ] },
    { deck: "presentations/programmable-light-module-3.pptx", videos: [
      { id: "oZkYLVrTYe4", title: "The Way Wood Works — What Every Woodworker Needs to Know About Wood", channel: "Workshop Companion", watchFor: "Look for evidence that timber direction and natural variation affect behaviour. Keep your material decision tied to the approved project source and observed samples." },
      { id: "ewVYf1wZwaY", title: "Understanding Sustainable Forestry — It's Child's Play!", channel: "Australian Forest Products Association", watchFor: "Identify the claims made about managed forests, then test them against origin, management, regeneration and other evidence before making a sustainability judgement." },
      { id: "1zlZuUznxbg", title: "South Aussie with Cosi — Forestry (Sawmill)", channel: "Department of Primary Industries and Regions", watchFor: "Observe the broad production stages and how evidence can be recorded. Your practical sequence must still come from confirmed drawing notes and teacher instruction." }
    ] },
    { deck: "presentations/programmable-light-module-4.pptx", videos: [
      { id: "kM9ASKAni_s", title: "Computer Science Basics: Algorithms", channel: "LearnFree", watchFor: "Identify how a clear algorithm describes steps before language-specific syntax is written." },
      { id: "eSYeHlwDCNA", title: "Computer Science Basics: Sequences, Selections, and Loops", channel: "LearnFree", watchFor: "Distinguish sequence, selection and repetition, then connect those structures to variables, loops and conditionals in light behaviour." },
      { id: "eSYeHlwDCNA", title: "Computer Science Basics: Sequences, Selections, and Loops", channel: "LearnFree", watchFor: "Track how instructions are processed to influence an output. The clip supports system thinking, not an assumed controller configuration or wiring method." }
    ] },
    { deck: "presentations/programmable-light-module-5.pptx", videos: [
      { id: "eSYeHlwDCNA", title: "Computer Science Basics: Sequences, Selections, and Loops", channel: "LearnFree", watchFor: "Use the control structures as one part of an integrated solution. Record where design, structure, electronics, light and code affect one another." },
      { id: "auv10y-dN4s", title: "How To Debug", channel: "CodeAI", watchFor: "Identify the controlled debugging steps: describe the fault, isolate a cause, change one approved element and retest the same criterion." },
      { id: "auv10y-dN4s", title: "How To Debug", channel: "CodeAI", watchFor: "Notice the importance of recorded before-and-after evidence. Use that evidence with confirmed criteria when evaluating quality, sustainability and learning." }
    ] }
  ];
  const esc = (value) => String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
  const folioRecordPointerKey = `${course.storagePrefix}:folio-record:v1`;
  const newRecordId = () => globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const folioRecordId = (() => {
    const existing = localStorage.getItem(folioRecordPointerKey);
    if (existing) return existing;
    const created = newRecordId();
    localStorage.setItem(folioRecordPointerKey, created);
    return created;
  })();
  const key = (scope) => scope === "folio" ? `${course.storagePrefix}:${folioRecordId}:folio:v1` : `${course.storagePrefix}:${scope}:v1`;
  const load = (scope) => { try { return JSON.parse(localStorage.getItem(key(scope)) || "{}"); } catch (_) { return {}; } };
  const save = (scope, data) => {
    localStorage.setItem(key(scope), JSON.stringify(data));
    document.querySelectorAll("[data-save-state]").forEach((node) => { node.textContent = `Saved on this device at ${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`; });
  };

  function fieldValue(field) {
    if (field.type === "radio") return field.checked ? field.value : undefined;
    if (field.type === "checkbox") return field.checked;
    return field.value;
  }

  function bindAutosave(scope, root = document) {
    const state = load(scope);
    const fields = [...root.querySelectorAll("[data-save]")];
    fields.forEach((field) => {
      if (Object.prototype.hasOwnProperty.call(state, field.name)) {
        if (field.type === "radio") field.checked = state[field.name] === field.value;
        else if (field.type === "checkbox") field.checked = Boolean(state[field.name]);
        else field.value = state[field.name];
      }
      field.addEventListener("input", collect);
      field.addEventListener("change", collect);
    });
    function collect() {
      const next = {};
      fields.forEach((field) => { const value = fieldValue(field); if (value !== undefined) next[field.name] = value; });
      save(scope, next);
      updateProgress(root);
    }
    updateProgress(root);
  }

  function updateProgress(root = document) {
    const required = [...new Set([...root.querySelectorAll("[data-required]")].map((field) => field.name))];
    if (!required.length) return;
    const complete = required.filter((name) => {
      const fields = [...root.querySelectorAll(`[name="${CSS.escape(name)}"]`)];
      return fields.some((field) => field.type === "radio" ? field.checked : String(fieldValue(field) || "").trim());
    }).length;
    const percent = Math.round((complete / required.length) * 100);
    root.querySelectorAll("[data-progress-fill]").forEach((fill) => { fill.style.width = `${percent}%`; });
    root.querySelectorAll("[data-progress-text]").forEach((text) => { text.textContent = `${percent}% evidence entered`; });
  }

  function toolPhotosHtml(section) {
    if (!section.photos?.length) return "";
    return `<div class="tool-photo-gallery" aria-label="Workshop tool identification references">${section.photos.map((photo) => `<figure class="tool-photo-card"><a class="tool-photo-link zoomable-infographic" href="${esc(photo.image)}" target="_blank" rel="noopener" aria-label="Open full-size tool photograph in a new tab: ${esc(photo.alt)}"><img src="${esc(photo.image)}" alt="${esc(photo.alt)}"><span class="infographic-open-label">Open larger <span aria-hidden="true">↗</span></span></a><figcaption>${esc(photo.caption)} <span class="tool-photo-credit">${photo.source ? `<a href="${esc(photo.source)}" target="_blank" rel="noopener">${esc(photo.credit)}</a>` : esc(photo.credit)}</span></figcaption></figure>`).join("")}</div>`;
  }

  function planGuidanceHtml(section) {
    const guidance = section.planGuidance;
    if (!guidance) return "";
    const id = `plan-guidance-${section.id.replace(".", "-")}`;
    const sheets = guidance.sheets.map((sheet) => `<figure class="plan-sheet-card"><a class="plan-preview-link zoomable-infographic" href="${esc(sheet.open)}" target="_blank" rel="noopener" aria-label="Open larger original sheet in a new tab: ${esc(sheet.title)}"><img src="${esc(sheet.preview)}" alt="${esc(sheet.alt)}"><span class="infographic-open-label">Open larger <span aria-hidden="true">↗</span></span></a><figcaption><strong>${esc(sheet.title)}</strong><span>${esc(sheet.caption)}</span>${sheet.sourceUrl ? `<span><a href="${esc(sheet.sourceUrl)}" target="_blank" rel="noopener">Authorised Drive source ↗</a></span>` : ""}<span class="plan-actions"><a class="plan-open-link" href="${esc(sheet.open)}" target="_blank" rel="noopener">Open larger original sheet <span aria-hidden="true">↗</span></a>${sheet.original ? `<a class="plan-download-link" href="${esc(sheet.original)}" download>Download original DWG</a>` : ""}</span></figcaption></figure>`).join("");
    return `<section class="plan-guidance" aria-labelledby="${id}"><p class="eyebrow">Verified project plans</p><h3 id="${id}">${esc(guidance.heading)}</h3>${guidance.paragraphs.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}<h4>Plan-reading takeaways</h4><ul>${guidance.takeaways.map((item) => `<li>${esc(item)}</li>`).join("")}</ul><div class="plan-sheet-gallery">${sheets}</div></section>`;
  }

  function sectionVideoHtml(moduleNumber, sectionIndex) {
    const video = moduleSupport[moduleNumber - 1]?.videos[sectionIndex];
    if (!video) return "";
    return `<section class="topic-video" aria-labelledby="video-title-${moduleNumber}-${sectionIndex + 1}">
      <div class="topic-video__copy"><p class="eyebrow">Watch beside the theory</p><h3 id="video-title-${moduleNumber}-${sectionIndex + 1}">${esc(video.title)}</h3><p><strong>${esc(video.channel)}</strong></p><p>${esc(video.watchFor)}</p><button class="btn topic-video__play" type="button" data-play-video="${esc(video.id)}" data-video-title="${esc(video.title)}">Play video</button> <a class="topic-video__external" href="https://www.youtube.com/watch?v=${esc(video.id)}" target="_blank" rel="noopener">Open on YouTube ↗</a></div>
      <div class="topic-video__player" data-video-player aria-label="Video player loads only after Play video is selected"><img src="https://i.ytimg.com/vi/${esc(video.id)}/hqdefault.jpg" alt="Thumbnail for ${esc(video.title)}"><span>Video loads after you choose Play video.</span></div>
    </section>`;
  }

  function moduleSupportHtml(moduleNumber) {
    const support = moduleSupport[moduleNumber - 1];
    return `<section class="card module-preview-card" aria-labelledby="module-preview-title"><div><p class="eyebrow">Module learning pack</p><h2 id="module-preview-title">Preview, learn and save evidence</h2><p>Work through the theory, knowledge checks and written responses in order. Your evidence autosaves on this browser and device.</p></div></section><section class="card module-presentation-card" aria-labelledby="module-presentation-title"><div><p class="eyebrow">Module presentation</p><h2 id="module-presentation-title">Learn with the slides</h2><p>Use the presentation to preview the three theory sections before you begin the module.</p></div><a class="btn" href="${esc(support.deck)}" download>Download presentation</a></section>`;
  }

  function studentEvidenceHtml() {
    return `<section class="student-evidence" aria-labelledby="student-evidence-title"><p class="eyebrow">Student evidence</p><h2 id="student-evidence-title">Your details</h2><div class="student-grid"><label>Student name<input data-save data-required name="student-name" type="text" autocomplete="name"></label><label>Class<input data-save data-required name="student-class" type="text"></label></div><p class="save-state" data-save-state>Autosaves on this browser and device.</p></section>`;
  }

  function guidedPracticeHtml(module) {
    return `<section class="card guided-practice-panel" aria-labelledby="guided-practice-title"><div><p class="eyebrow">Guided practice <span class="practice-now">Do now</span></p><h2 id="guided-practice-title">${esc(module.project)} knowledge checks</h2><p>Use the hints and feedback to strengthen your understanding before saving written evidence.</p></div><div class="practice-progress" aria-label="0 of 30 knowledge checks mastered"><strong>0/30</strong><span>mastered</span></div></section>`;
  }

  function theoryHtml(section, index, moduleNumber) {
    const visual = section.visual ? `<figure class="theory-visual${index % 2 ? " theory-visual--left" : ""}"><a class="theory-visual__link zoomable-infographic" href="${esc(section.visual.image)}" target="_blank" rel="noopener" aria-label="Open teaching visual in a new tab: ${esc(section.visual.alt)}"><div class="theory-visual__image" aria-hidden="true" style="background-image:url('${esc(section.visual.image)}')"><span class="infographic-open-label">Open larger <span aria-hidden="true">↗</span></span></div></a><figcaption>${esc(section.visual.caption)}</figcaption></figure>` : "";
    return `<section class="card theory-section" id="theory-${moduleNumber}-${index + 1}" tabindex="-1">
      <p class="eyebrow">Theory ${index + 1}</p><h2>${esc(section.title)}</h2>
      ${visual}
      <h3 class="theory-chunk-heading">Theory</h3>${section.theory.map((item) => Array.isArray(item) ? `<ul class="diagnostic-list">${item.map((entry) => `<li>${esc(entry)}</li>`).join("")}</ul>` : `<p>${esc(item)}</p>`).join("")}
      ${planGuidanceHtml(section)}
      ${toolPhotosHtml(section)}
      <h3 class="theory-chunk-heading">Key takeaways</h3><ul>${section.takeaways.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
      ${sectionVideoHtml(moduleNumber, index)}
    </section>${checksHtml(course.modules[moduleNumber - 1], moduleNumber, index)}${writtenHtml(course.modules[moduleNumber - 1], moduleNumber, index)}`;
  }

  function helpHtml(id, sectionIndex, module, moduleNumber) {
    const section = module.sections[sectionIndex];
    return `<div class="question-help"><button class="hint-toggle" type="button" aria-expanded="false" aria-controls="${id}-hint" data-toggle="${id}-hint">Need a hint?</button><div class="theory-direction" id="${id}-hint" hidden><a href="#theory-${moduleNumber}-${sectionIndex + 1}">Revisit ${esc(section.title)}</a><p>${esc(section.takeaways[0])}</p></div></div>`;
  }

  function checksHtml(module, moduleNumber, theoryIndex) {
    if (!Number.isInteger(theoryIndex)) return "";
    const indexedChecks = module.checks.map((check, index) => ({ check, index }));
    const section = module.sections[theoryIndex];
    const questions = indexedChecks.filter(({ check }) => check.theoryIndex === theoryIndex);
    const group = `<section class="check-group" id="check-group-${moduleNumber}-${theoryIndex}" aria-labelledby="check-group-title-${moduleNumber}-${theoryIndex}"><p class="eyebrow">Theory ${theoryIndex + 1} · 10 questions</p><h3 id="check-group-title-${moduleNumber}-${theoryIndex}">${esc(section.title)}</h3>${questions.map(({ check, index }, questionIndex) => `<div class="check"><h4>${questionIndex + 1}. ${esc(check.question)}</h4>${check.options.map((option, optionIndex) => `<label class="option"><input data-save data-required type="radio" name="check-${index}" value="${optionIndex}"> ${esc(option)}</label>`).join("")}${helpHtml(`check-${moduleNumber}-${index}`, check.theoryIndex, module, moduleNumber)}<button class="btn ghost" type="button" data-check-button="${index}">Check answer</button><div class="feedback" aria-live="polite" data-check-feedback="${index}"></div></div>`).join("")}</section>`;
    const id = theoryIndex === 0 ? "knowledge-checks" : `knowledge-checks-${moduleNumber}-${theoryIndex + 1}`;
    return `<section class="card theory-section" id="${id}"><p class="eyebrow">Knowledge checks</p><h2>Ten questions for every theory section</h2><p>Complete each source-grounded set, use the hints when needed, and check your feedback before moving to the written evidence.</p>${group}</section>`;
  }

  function writtenHtml(module, moduleNumber, theoryIndex) {
    if (!Number.isInteger(theoryIndex)) return "";
    return module.written.map((item, index) => ({ item, index })).filter(({ item }) => item.theoryIndex === theoryIndex).map(({ item, index }) => `<section class="card theory-section written-evidence"><p class="eyebrow">Written evidence ${index + 1}</p><h2>${esc(item.title)}</h2><p>${esc(item.prompt)}</p><button class="clarification-button" type="button" data-toggle="written-${moduleNumber}-${index}-plain" aria-expanded="false">What is this asking?</button><div class="clarification-panel" id="written-${moduleNumber}-${index}-plain" hidden>${esc(item.clarification)}</div>${helpHtml(`written-${moduleNumber}-${index}`, item.theoryIndex, module, moduleNumber)}<textarea data-save data-required name="written-${index}" aria-label="${esc(item.title)} response"></textarea><button class="btn ghost" type="button" data-model-toggle="model-${moduleNumber}-${index}" aria-expanded="false">Appropriate response example</button><div class="model-feedback" id="model-${moduleNumber}-${index}"><strong>Appropriate response example:</strong> ${esc(item.model)}</div></section>`).join("");
  }

  function renderModule() {
    const host = document.querySelector("[data-module-host]");
    if (!host) return;
    const number = Math.max(1, Math.min(course.modules.length, Number(new URLSearchParams(location.search).get("module")) || 1));
    const module = course.modules[number - 1];
    document.title = `${module.title} | ${course.shortTitle}`;
    document.querySelector("[data-module-kicker]").textContent = `${module.project} · Module ${module.projectModule} · Weeks ${module.weeks}`;
    document.querySelector("[data-module-title]").textContent = module.title;
    document.querySelector("[data-module-summary]").textContent = module.summary;
    document.querySelector(".module-hero")?.classList.add("module-aligned-hero");
    const aside = document.querySelector("[data-module-aside]");
    const layout = document.querySelector(".module-layout");
    if (aside) aside.hidden = true;
    layout?.classList.add("module-aligned-layout");
    host.innerHTML = `${moduleSupportHtml(number)}${studentEvidenceHtml()}${guidedPracticeHtml(module)}${module.sections.map((section, index) => theoryHtml(section, index, number)).join("")}<section class="card theory-section completion-box"><h2>Module completion</h2><label class="option"><input data-save type="checkbox" name="module-complete"> I have completed the theory, checks and written evidence, then saved or printed it as directed.</label><button class="btn" type="button" onclick="window.print()">Print / Save PDF</button></section><nav class="module-nav" aria-label="Module navigation">${number > 1 ? `<a class="btn ghost" href="module.html?module=${number - 1}">← Previous module</a>` : `<a class="btn ghost" href="index.html">← Course home</a>`}${number < course.modules.length ? `<a class="btn" href="module.html?module=${number + 1}">Next module →</a>` : `<a class="btn" href="folio.html">Open folio →</a>`}</nav>`;
    module.checks.forEach((check, index) => host.querySelector(`[data-check-button="${index}"]`).addEventListener("click", () => { const selected = host.querySelector(`input[name="check-${index}"]:checked`); const feedback = host.querySelector(`[data-check-feedback="${index}"]`); if (!selected) { feedback.className = "feedback bad"; feedback.textContent = "Choose an answer first."; return; } const correct = Number(selected.value) === check.answerIndex; feedback.className = `feedback ${correct ? "good" : "bad"}`; feedback.textContent = `${correct ? "Correct. " + check.correctFeedback : "Not yet. " + check.incorrectFeedback}`; }));
    host.querySelectorAll("[data-toggle]").forEach((button) => button.addEventListener("click", () => { const panel = host.querySelector(`#${CSS.escape(button.dataset.toggle)}`); panel.hidden = !panel.hidden; button.setAttribute("aria-expanded", String(!panel.hidden)); }));
    host.querySelectorAll("[data-model-toggle]").forEach((button) => button.addEventListener("click", () => { const panel = host.querySelector(`#${CSS.escape(button.dataset.modelToggle)}`); panel.classList.toggle("open"); button.setAttribute("aria-expanded", String(panel.classList.contains("open"))); }));
    host.querySelectorAll("[data-play-video]").forEach((button) => button.addEventListener("click", () => {
      const card = button.closest(".topic-video");
      const player = card.querySelector("[data-video-player]");
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube-nocookie.com/embed/${button.dataset.playVideo}?autoplay=1&rel=0`;
      iframe.title = button.dataset.videoTitle;
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      player.replaceChildren(iframe);
      button.disabled = true;
      button.textContent = "Video playing";
    }));
    bindAutosave(`module-${number}`, host.closest(".module-layout") || host);
  }

  function bindFolio() {
    const root = document.querySelector("[data-folio]");
    if (!root) return;
    const cards = [...root.querySelectorAll(".folio-card")];
    const folioMeta = [
      { module: 1, outcomes: "TE4-PPM-01 · TE4-DES-01" },
      { module: 1, outcomes: "TE4-MSC-01 · TE4-SAF-01" },
      { module: 1, outcomes: "TE4-SAF-01" },
      { module: 1, outcomes: "TE4-DES-01 · TE4-PPM-01 · TE4-MSC-01" },
      { module: 2, outcomes: "TE4-DIG-02 · TE4-DES-01" },
      { module: 2, outcomes: "TE4-DIG-01 · TE4-PDP-01 · TE4-DES-01" },
      { module: 2, outcomes: "TE4-PDP-01 · TE4-DES-01" },
      { module: 2, outcomes: "TE4-DES-01 · TE4-PPM-01" },
      { module: 3, outcomes: "TE4-SDP-01 · TE4-MSC-01" },
      { module: 4, outcomes: "TE4-DIG-02 · TE4-MSC-01" },
      { module: 5, outcomes: "TE4-PPM-01 · TE4-SAF-01 · TE4-DIG-02" },
      { module: 5, outcomes: "TE4-DES-01 · TE4-SDP-01 · TE4-MSC-01" }
    ];
    const folioVisualFiles = ["01", "03", "04", null, "09", "05", "07", "02", "10", "11", "08", "12"];
    root.querySelectorAll("[data-record-id]").forEach((node) => { node.textContent = folioRecordId.slice(0, 8); });
    cards.forEach((card, index) => {
      const visual = card.querySelector(".folio-visual");
      const visualLink = document.createElement("a");
      const visualPath = index === 3 ? "assets/plans/programmable-lamp-drawing.pdf" : `assets/visuals/folio-card-${folioVisualFiles[index]}.png`;
      visualLink.className = `${visual.className} zoomable-infographic`;
      visualLink.href = visualPath;
      visualLink.target = "_blank";
      visualLink.rel = "noopener";
      visualLink.setAttribute("aria-label", `Open infographic in a new tab: ${visual.getAttribute("aria-label")}`);
      visualLink.innerHTML = '<span class="infographic-open-label">Open larger <span aria-hidden="true">↗</span></span>';
      if (index === 3) {
        visualLink.style.backgroundImage = 'url("assets/plans/programmable-lamp-drawing.png")';
        visualLink.style.backgroundSize = "contain";
        visualLink.style.backgroundColor = "white";
      } else {
        visualLink.style.backgroundImage = `url("assets/visuals/folio-card-${folioVisualFiles[index]}.png")`;
      }
      visual.replaceWith(visualLink);
      visualLink.insertAdjacentHTML("afterend", `<p class="folio-visual-caption">${index === 3 ? "Verified supplied Week 02 drawing preview. Open the full PDF for accurate plan reading." : "AI-generated evidence prompt. It illustrates a learning action and is not a project specification."}</p>`);
      card.insertAdjacentHTML("afterbegin", '<p class="print-identity" data-print-identity></p>');
      card.insertAdjacentHTML("beforeend", `<p class="folio-meta"><a href="module.html?module=${folioMeta[index].module}">Related learning: Module ${folioMeta[index].module}</a><span>Outcome opportunities: ${folioMeta[index].outcomes}</span></p>`);
      card.querySelectorAll("textarea[data-save]").forEach((field) => { field.dataset.folioField = ""; field.setAttribute("aria-label", `${card.querySelector("h2").textContent.trim()} response`); });
      card.insertAdjacentHTML("beforeend", `<label>Evidence caption<textarea data-folio-field data-required name="folio-${index + 1}-caption" placeholder="This evidence shows…"></textarea></label><label>Source or teacher checkpoint<textarea data-folio-field data-required name="folio-${index + 1}-source" placeholder="Drawing, brief, SOP, demonstration or feedback used…"></textarea></label><label class="option"><input data-folio-field type="checkbox" name="folio-${index + 1}-complete"> Evidence checked and ready</label><label>Optional authorised photo<input type="file" accept="image/*" data-photo></label><div class="photo-preview" data-photo-preview hidden></div>`);
    });
    cards.forEach((card, index) => {
      card.querySelectorAll("[data-folio-field]").forEach((field) => { field.dataset.save = ""; });
      card.querySelector("[data-photo]").addEventListener("change", (event) => { const file = event.target.files?.[0]; const preview = card.querySelector("[data-photo-preview]"); if (!file) { preview.hidden = true; preview.innerHTML = ""; return; } const reader = new FileReader(); reader.onload = () => { preview.innerHTML = `<img src="${reader.result}" alt="Authorised student evidence preview"><p>This preview prints but is not retained after the page closes. Keep the original file.</p>`; preview.hidden = false; }; reader.readAsDataURL(file); });
    });
    bindAutosave("folio", root);
    const updatePrintIdentity = () => {
      const name = root.querySelector('[name="student-name"]')?.value.trim() || "Student name not entered";
      const studentClass = root.querySelector('[name="student-class"]')?.value.trim() || "Class not entered";
      cards.forEach((card, index) => {
        const identity = card.querySelector("[data-print-identity]");
        if (identity) identity.textContent = `${name} · ${studentClass} · Local record ${folioRecordId.slice(0, 8)} · Card ${String(index + 1).padStart(2, "0")}`;
      });
    };
    const updateFolioSummary = () => {
      const saved = load("folio");
      let complete = 0;
      let started = 0;
      cards.forEach((card, index) => {
        if (saved[`folio-${index + 1}-complete`] === true) {
          complete += 1;
          return;
        }
        if ([...card.querySelectorAll("textarea")].some((field) => String(field.value || "").trim())) started += 1;
      });
      const summary = root.querySelector("[data-folio-summary]");
      if (summary) summary.textContent = `${complete} complete · ${started} started · ${cards.length - complete - started} blank.`;
    };
    root.addEventListener("input", updateFolioSummary);
    root.addEventListener("change", updateFolioSummary);
    root.addEventListener("input", updatePrintIdentity);
    root.addEventListener("change", updatePrintIdentity);
    updateFolioSummary();
    updatePrintIdentity();
    addEventListener("beforeprint", updatePrintIdentity);
    root.querySelector("[data-export]")?.addEventListener("click", () => { const payload = { course: course.shortTitle, version: 1, recordId: folioRecordId, savedAt: new Date().toISOString(), data: load("folio") }; const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" }); const link = document.createElement("a"); link.href = URL.createObjectURL(blob); link.download = "programmable-light-folio-backup.json"; link.click(); URL.revokeObjectURL(link.href); });
    root.querySelector("[data-import]")?.addEventListener("change", async (event) => { const file = event.target.files?.[0]; if (!file) return; try { const payload = JSON.parse(await file.text()); if (payload.course !== course.shortTitle || payload.version !== 1 || !payload.data || typeof payload.data !== "object") throw new Error(); const replace = confirm(`Restore this backup into local record ${folioRecordId.slice(0, 8)}? Select Cancel to keep this record and restore the backup into a new local record.`); if (replace) { localStorage.setItem(key("folio"), JSON.stringify(payload.data)); } else { const nextRecord = newRecordId(); localStorage.setItem(folioRecordPointerKey, nextRecord); localStorage.setItem(`${course.storagePrefix}:${nextRecord}:folio:v1`, JSON.stringify(payload.data)); } location.reload(); } catch (_) { alert("That file is not a valid Programmable Light folio backup."); } });
    root.querySelector("[data-reset]")?.addEventListener("click", () => {
      if (!confirm(`Reset all saved Programmable Light folio responses in local record ${folioRecordId.slice(0, 8)}? Download a backup first if you need one.`)) return;
      localStorage.removeItem(key("folio"));
      location.reload();
    });
  }

  renderModule();
  bindFolio();
})();
