(function () {
  "use strict";

  const course = window.COURSE_DATA;
  if (!course) return;
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
    const fill = root.querySelector("[data-progress-fill]");
    const text = root.querySelector("[data-progress-text]");
    if (fill) fill.style.width = `${percent}%`;
    if (text) text.textContent = `${percent}% evidence entered`;
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
    return `<section class="plan-guidance" aria-labelledby="${id}"><p class="eyebrow">Verified project plans</p><h3 id="${id}">${esc(guidance.heading)}</h3>${guidance.paragraphs.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}<h4>Plan-reading takeaways</h4><ul>${guidance.takeaways.map((item) => `<li>${esc(item)}</li>`).join("")}</ul><div class="callout"><strong>Drawing source boundary:</strong> ${esc(guidance.boundary)}</div><div class="plan-sheet-gallery">${sheets}</div></section>`;
  }

  function theoryHtml(section, index, moduleNumber) {
    const visual = section.visual ? `<figure class="theory-visual${index % 2 ? " theory-visual--left" : ""}"><a class="theory-visual__link zoomable-infographic" href="${esc(section.visual.image)}" target="_blank" rel="noopener" aria-label="Open teaching visual in a new tab: ${esc(section.visual.alt)}"><div class="theory-visual__image" aria-hidden="true" style="background-image:url('${esc(section.visual.image)}')"><span class="infographic-open-label">Open larger <span aria-hidden="true">↗</span></span></div></a><figcaption>${esc(section.visual.caption)}</figcaption></figure>` : "";
    return `<section class="card theory-section" id="theory-${moduleNumber}-${index + 1}" tabindex="-1">
      <p class="eyebrow">Theory ${index + 1}</p><h2>${esc(section.title)}</h2>
      ${visual}
      <h3 class="theory-chunk-heading">Theory</h3>${section.theory.map((p) => `<p>${esc(p)}</p>`).join("")}
      ${planGuidanceHtml(section)}
      ${toolPhotosHtml(section)}
      <h3 class="theory-chunk-heading">Key takeaways</h3><ul>${section.takeaways.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
      <div class="callout"><strong>Source boundary:</strong> ${esc(section.boundary)}</div>
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
    host.innerHTML = `<section class="card progress-panel"><strong data-progress-text>0% evidence entered</strong><div class="progress-track"><div class="progress-fill" data-progress-fill></div></div><div class="student-grid"><label>Student name<input data-save data-required name="student-name" type="text" autocomplete="name"></label><label>Class<input data-save data-required name="student-class" type="text"></label></div><p class="save-state" data-save-state>Autosaves on this browser and device.</p></section>${module.sections.map((section, index) => theoryHtml(section, index, number)).join("")}${checksHtml(module, number)}${writtenHtml(module, number)}<section class="card theory-section completion-box"><h2>Module completion</h2><label class="option"><input data-save type="checkbox" name="module-complete"> I have completed the theory, checks and written evidence, then saved or printed it as directed.</label><button class="btn" type="button" onclick="window.print()">Print / Save PDF</button></section><nav class="module-nav" aria-label="Module navigation">${number > 1 ? `<a class="btn ghost" href="module.html?module=${number - 1}">← Previous module</a>` : `<a class="btn ghost" href="index.html">← Course home</a>`}${number < course.modules.length ? `<a class="btn" href="module.html?module=${number + 1}">Next module →</a>` : `<a class="btn" href="folio.html">Open folio →</a>`}</nav>`;
    module.checks.forEach((check, index) => host.querySelector(`[data-check-button="${index}"]`).addEventListener("click", () => { const selected = host.querySelector(`input[name="check-${index}"]:checked`); const feedback = host.querySelector(`[data-check-feedback="${index}"]`); if (!selected) { feedback.className = "feedback bad"; feedback.textContent = "Choose an answer first."; return; } const correct = Number(selected.value) === check.answerIndex; feedback.className = `feedback ${correct ? "good" : "bad"}`; feedback.textContent = `${correct ? "Correct. " + check.correctFeedback : "Not yet. " + check.incorrectFeedback}`; }));
    host.querySelectorAll("[data-toggle]").forEach((button) => button.addEventListener("click", () => { const panel = host.querySelector(`#${CSS.escape(button.dataset.toggle)}`); panel.hidden = !panel.hidden; button.setAttribute("aria-expanded", String(!panel.hidden)); }));
    host.querySelectorAll("[data-model-toggle]").forEach((button) => button.addEventListener("click", () => { const panel = host.querySelector(`#${CSS.escape(button.dataset.modelToggle)}`); panel.classList.toggle("open"); button.setAttribute("aria-expanded", String(panel.classList.contains("open"))); }));
    bindAutosave(`module-${number}`, host);
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
