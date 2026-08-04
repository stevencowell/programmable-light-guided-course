# Programmable Light guided course

A Stage 4 guided-learning website governed by the NSW **Technology 7-8 Syllabus (2023)**, implemented from 2026.

The authorised `Programmable Light` Drive folder is the primary project authority. It supplies early-week activities, the Programmable Lamp drawing, named tools/materials/components, timber-production theory and coding theory. Missing practical, circuit, settings, criteria, assessment and submission values remain **Teacher to confirm**.

## Student routes

- `index.html` — course landing page and five-module pathway
- `module.html?module=1` through `module.html?module=5` — three named theory sections, exactly ten source-grounded checks per section, and six written-evidence prompts per module
- `folio.html` — exactly 12 locally autosaving evidence records, JSON backup/restore and 12-page Print / Save PDF

## Local build and checks

```powershell
node scripts/build-data.mjs
node scripts/validate-course.mjs
node scripts/serve.mjs
```

The content build reads the bounded Module 1-5 handoffs authored in signed-in ChatGPT one named theory section at a time. The release validator checks counts, source coverage, stale scaffold content, outcome mapping, visual records, plan integration and local links.

Browser storage is specific to the current browser, profile and device. It is evidence preparation, not cloud submission.
