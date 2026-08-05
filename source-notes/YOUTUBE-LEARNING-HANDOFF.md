# Programmable Light YouTube learning handoff

**Checked:** 5 August 2026
**Scope:** supplementary theory support only

## Scoped course contract

| Field | Release record |
|---|---|
| Course and year | Programmable Light · Stage 4 Technology · `stevencowell/programmable-light-guided-course` |
| Authoritative sources | Technology 7–8 Syllabus (2023), supplied Programmable Lamp drawing, authorised Timber Production and What is coding theory, current disc-sander SOP and teacher/local procedures |
| Outcomes and evidence | Videos support the existing adjacent theory and its mapped design, sustainability and digital-systems evidence; they add no assessment claim or new formal evidence requirement |
| Project constraints | The drawing, teacher instructions, SOP and local procedures control exact work; all unsupported practical detail remains `Teacher to confirm` |
| Exclusions | No wiring, RGB-strip connection, pin assignment, copied code, soldering tutorial, laser operation, laser settings, dimensions or construction sequence |
| Sister-site standard | Project-specific topic mapping, click-to-load privacy-enhanced embed, visible direct fallback, keyboard focus return and stacked mobile cards |
| Release checks | Six current clip IDs/titles/channels, six thumbnails, five topics, six adjacent theory links, six fallbacks, local and live desktop/390 px rendering, modal close/reset/focus, route/assets HTTP 200 and clean console |

Six clips were retained because they support named course theory without supplying an unofficial Programmable Light build method. Public YouTube metadata was checked through oEmbed and direct extraction; all six were public, age-unrestricted and embeddable when checked.

The library intentionally excludes Arduino wiring, RGB-strip connection, pin assignment, copied code, soldering tutorials, laser-machine operation and laser settings. The supplied drawing, teacher demonstration, current disc-sander SOP and local workshop procedure remain controlling. The AFPA clip is labelled as an industry perspective, and students are told to separate claims from evidence.

| ID | Exact title | Channel | Adjacent theory |
|---|---|---|---|
| `W1NA0CIo_FI` | Scales Explained! (For EGD Students) | Nicole EGD | 1.3 Measurement, scale and reading the supplied drawing |
| `1SGr6uSPaLI` | raster vs vector | FAB[in]FIVE | 2.2 Vector design: outlines, layers and laser-ready simplicity |
| `1zlZuUznxbg` | South Aussie with Cosi - Forestry (Sawmill) | Department of Primary Industries and Regions | 3.3 Planning timber production from drawing to evidence |
| `ewVYf1wZwaY` | Understanding Sustainable Forestry - It's Child's Play! | Australian Forest Products Association (AFPA) | 3.2 Native forests, plantations and sustainable choices |
| `kM9ASKAni_s` | Computer Science Basics: Algorithms | LearnFree | 4.1 Coding language: algorithms, sequencing and syntax |
| `eSYeHlwDCNA` | Computer Science Basics: Sequences, Selections, and Loops | LearnFree | 4.2 Variables, loops and conditionals for light behaviour |

Each card has a theory deep-link, watch-for prompt, source/suitability rationale, click-to-load privacy-enhanced embed and visible non-embed fallback.

## QA

- Mobile 390 × 844 passed with six cards, five topic links, six theory links, six fallback links, a single-column layout, no horizontal overflow and actions of at least 44 px.
- All six lazy-loaded thumbnails resolved at 480 px source width after scrolling through the page.
- The privacy-enhanced player opened with the correct clip and direct fallback, then closed, cleared the iframe and returned focus to the triggering control. The browser console reported no errors.
- Regression: run `node scripts/validate-course.mjs` and confirm the five module routes, plan and folio remain unchanged.
- Before publication: recheck title/channel, public availability, age restriction and embed permission; do not publish if any source boundary has changed.
