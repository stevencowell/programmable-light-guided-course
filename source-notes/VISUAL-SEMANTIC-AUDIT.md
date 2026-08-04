# Programmable Light visual semantic audit

Audit boundary: the real Week 02 drawing remains authoritative. The hero and photographic learning prompts were generated one at a time in signed-in ChatGPT after the supplied Drive images, drawing, SOP and worksheets were inspected. Generated photographs illustrate learning actions only; they are not specifications, proof of completed student work, or authority for geometry, wiring, PPE, settings or practical sequence.

## Asset integrity and acceptance

| Status | Asset | SHA-256 | Semantic check and boundary |
|---|---|---|---|
| PASS | `assets/programmable-light-hero.png` | `DD38855FC71ED87F29F106CA939A22D29B85985F1910DB0BD622351EAA021C03` | Coherent timber/acrylic/controller/RGB overview; caption states that exact geometry, wiring and settings are not supplied. |
| PASS | `assets/plans/programmable-lamp-drawing.png` | `43315B435F59E288B77ACF8DA04B24A7B5698A70AD08489155CE7EB536EC1131` | High-resolution render of the verified drawing; title block, scales, dimensions and cut labels remain visible; the Week 02 PDF is the student reading route. |
| PASS | `assets/visuals/folio-card-01.png` | `1B00CCAC28FBB8B4F299C8B3213B7C408021E2F0E67B0DFF0C93FA17BD10B209` | Student goal/evidence context with no readable invented criteria. |
| PASS | `assets/visuals/folio-card-02.png` | `D0722CEB3CF7116A815297017B831CE5EE117D329543BE0131A3C80132F01E84` | Checklist/criteria discussion context; no readable rubric or formal assessment metadata. |
| PASS | `assets/visuals/folio-card-03.png` | `34385D39CA22645E2669F25760EBD7B0D52F4DBA0CEB5FB6A4456BC7A819889A` | Recognisable project tools/materials/components; no claim about their final allocation or use. |
| PASS | `assets/visuals/folio-card-04.png` | `3AC046B1CFE3CBEAF72C4A25EC0ED40F12173EE131CFE6E7C4B21D018462D4BA` | Stopped disc-sander safety discussion with PPE/checklist context; current SOP and teacher permission remain authoritative. |
| PASS | `assets/visuals/folio-card-05.png` | `C551361F08B241C36902B6975C97829AE5AC4897917AF4714343FDCCF4B4B299` | Design-research prompt; displayed examples carry no readable brand, requirement or reuse claim. |
| PASS | `assets/visuals/folio-card-06.png` | `5382A83DE28E6DAB92F37DB2A454C96550791B1FB027EECAE5FCFC7AF436946A` | Six clearly separated lamp-idea sketches with no dimensions or technical claims; retained as a reviewed spare because the final UI uses visual 07 for iteration. |
| PASS | `assets/visuals/folio-card-07.png` | `90C34BB5C9434FF9839B6201EA031EF71AF14A593FA54D13D387C87FA601AC92` | Multiple sketches and a selected concept support iteration; no dimensions or final requirements are asserted. |
| PASS | `assets/visuals/folio-card-08.png` | `19321D17E4DDE40FA81564E57E7CF2D221B8BF0EE3FA55152A1C44AAE227C270` | Plan-reading/marking prompt deliberately keeps the drawing unreadable so it cannot contradict the supplied PDF. |
| PASS | `assets/visuals/folio-card-09.png` | `CD96D35EBD1D27C1B1140332A896243A9A63483A2DEA5758EA0B432CE693CBD6` | Two-layer key-tag vector practice is clear; no readable software, export rule or lamp dimension is asserted. |
| PASS | `assets/visuals/folio-card-10.png` | `B0D595C2F9745F388D7489CE63910D529581A59FC3445EC40862D16D7DEC99B8` | Radiata-pine marking/production evidence prompt; no stock dimension, tool allocation, method or sustainability claim. |
| PASS | `assets/visuals/folio-card-11.png` | `9C9FDD711B1F5F8972563F615017056C4C5D48F03ADF262D7E4D6DC3D0EE63D6` | Tidy low-voltage coding/test scene; code is unreadable and no pins, values, library, circuit or timing are specified. |
| PASS | `assets/visuals/folio-card-12.png` | `A663FC8222B6564312A5BBFCB30FF37249013788611A89134467DFFD4B781338` | Evaluation evidence context with blank checklist; no score, rubric, date or submission claim. |

## Final displayed folio mapping

The final evidence contract superseded the filenames used during initial generation. The UI applies this reviewed semantic mapping and uses the real plan for card 04.

| Final record | Displayed visual | Open-larger route |
|---|---|---|
| 01 Project purpose and success criteria | `folio-card-01.png` | same full-resolution PNG |
| 02 Tools, materials and components | `folio-card-03.png` | same full-resolution PNG |
| 03 Workshop safety and risk control | `folio-card-04.png` | same full-resolution PNG |
| 04 Read the Programmable Lamp drawing | verified plan preview | `assets/plans/programmable-lamp-drawing.pdf` |
| 05 Two-layer vector-design practice | `folio-card-09.png` | same full-resolution PNG |
| 06 Visual research with source attribution | `folio-card-05.png` | same full-resolution PNG |
| 07 Six lamp ideas | `folio-card-07.png` | same full-resolution PNG |
| 08 Selected design and justification | `folio-card-02.png` | same full-resolution PNG |
| 09 Materials and sustainability decision | `folio-card-10.png` | same full-resolution PNG |
| 10 Algorithm and digital-system plan | `folio-card-11.png` | same full-resolution PNG |
| 11 Production, problem-solving and test record | `folio-card-08.png` | same full-resolution PNG |
| 12 Final evaluation and evidence hand-in | `folio-card-12.png` | same full-resolution PNG |

## Fifteen-section theory coverage

Every named section has a visible figure, alt text, boundary-aware caption and full-resolution Open larger link. Reuse is intentional where one visual teaches several related concepts: plan, coding/test and materials/production. Section-to-file mapping is generated in `scripts/build-data.mjs` and validated from `guided/data.js`.
