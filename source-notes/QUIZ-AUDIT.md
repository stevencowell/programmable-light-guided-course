# Programmable Light knowledge-check audit

Date: 5 August 2026

## Outcome

**Release blocker found and corrected in the staged handoff.** The current live/integration bank contains student-facing items that test curriculum codes, stage labels, teacher-controlled decisions, assessment language and source-package administration. The corrected package retains exactly 10 genuine learning checks in each of the 15 named theory sections.

- Current bank audited: 150 questions.
- Exact replacements: 66.
- Passed unchanged: 84.
- Corrected total: 150 questions, 600 unique answer options within their items.
- Repository edits: none. The integration checkout remains untouched.
- Release status: integration owner must apply the corrected module handoff, rebuild, validate and republish.

## Section result

| Section | Named theory section | Final checks | Replaced | Preserved |
|---|---|---:|---:|---:|
| 1.1 | What makes a programmable lamp? | 10 | 5 | 5 |
| 1.2 | Workshop safety: hazards, risk controls and responsibility | 10 | 10 | 0 |
| 1.3 | Measurement, scale and reading the supplied drawing | 10 | 2 | 8 |
| 2.1 | Image quality, resolution and design research | 10 | 4 | 6 |
| 2.2 | Vector design: outlines, layers and laser-ready simplicity | 10 | 7 | 3 |
| 2.3 | Iterating ideas and building success criteria | 10 | 3 | 7 |
| 3.1 | Hardwood, softwood and a reasoned material choice | 10 | 2 | 8 |
| 3.2 | Native forests, plantations and sustainable choices | 10 | 2 | 8 |
| 3.3 | Planning timber production from drawing to evidence | 10 | 5 | 5 |
| 4.1 | Coding language: algorithms, sequencing and syntax | 10 | 2 | 8 |
| 4.2 | Variables, loops and conditionals for light behaviour | 10 | 5 | 5 |
| 4.3 | Connecting code, controller and light as a system | 10 | 5 | 5 |
| 5.1 | Integrating design, materials, electronics and code | 10 | 3 | 7 |
| 5.2 | Testing, debugging and improving the solution | 10 | 6 | 4 |
| 5.3 | Evaluating quality, sustainability and learning | 10 | 5 | 5 |

## Replacement scope

The following item positions are replaced: 1.1.5, 1.1.7, 1.1.8, 1.1.9, 1.1.10, 1.2.1, 1.2.2, 1.2.3, 1.2.4, 1.2.5, 1.2.6, 1.2.7, 1.2.8, 1.2.9, 1.2.10, 1.3.3, 1.3.10, 2.1.6, 2.1.7, 2.1.9, 2.1.10, 2.2.4, 2.2.2, 2.2.5, 2.2.7, 2.2.8, 2.2.9, 2.2.10, 2.3.2, 2.3.3, 2.3.10, 3.1.7, 3.1.10, 3.2.9, 3.2.10, 3.3.4, 3.3.5, 3.3.6, 3.3.9, 3.3.10, 4.1.8, 4.1.9, 4.2.5, 4.2.7, 4.2.8, 4.2.9, 4.2.10, 4.3.5, 4.3.6, 4.3.7, 4.3.8, 4.3.10, 5.1.7, 5.1.9, 5.1.10, 5.2.2, 5.2.3, 5.2.6, 5.2.7, 5.2.8, 5.2.10, 5.3.1, 5.3.2, 5.3.6, 5.3.7, 5.3.9.

The replacements remove or rewrite:

- curriculum and outcome-code recall;
- stage/programme labels;
- who confirms, approves or administers a task;
- worksheet layout, blank-space counts and missing-file/source trivia;
- assessment marks, grades and results used as irrelevant distractors;
- source-boundary questions framed as teacher talk rather than an authentic student decision.

Legitimate safety learning is retained. Questions about training, permission, reporting faults, safe machine zones and stopping equipment are phrased around the action the student must take.

## Source and integration boundary

The correction changes only knowledge-check wording, options and feedback. Section titles, theory, written evidence, visual mappings and source metadata are preserved. No project dimensions, circuit, pins, voltage, code, machine settings, material specification or assessment fact has been invented. Each replacement retains its original source trace unless the original item cited only an outcome code; those two items now point to the supplied unit-introduction source.

The authoritative integration input is the five corrected module JSON files in `corrected-modules`. The full corrected question bank is supplied for audit and comparison; it should not be treated as the upstream authoring source because `scripts/build-data.mjs` regenerates it from the module JSON handoffs.

## Validation

Status: **PASS**

- IDs: continuous 1.1–5.3.
- Counts: 15 sections × 10 checks = 150.
- Structure: every check has 4 distinct options, one valid answer index, useful correct feedback, useful retry feedback and a source trace.
- Student-facing deny scan: no outcome codes, Stage 4 label, “Teacher to confirm”, assessment-mark/grade/result language, Drive IDs or file/folder-name prompts.
- Duplicate stems within a section: none.
- Answer-index distribution: A 37, B 38, C 37, D 38.

## Required integration steps

1. Replace the five TASK10B module handoffs with the corrected copies, or point the build step at this corrected-module directory.
2. Run `scripts/build-data.mjs` so both `guided/data.js` and `source-notes/QUESTION-BANK.json` are regenerated from the corrected upstream content.
3. Add a validator for the forbidden student-facing patterns while allowing genuine safety actions such as permission and fault reporting.
4. Run the full course validator and rendered checks for all 15 question groups, feedback behaviour, desktop and 390 px layouts.
5. Commit, push and verify the corrected live Pages build before removing the release hold.
