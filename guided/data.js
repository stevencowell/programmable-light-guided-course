window.COURSE_DATA = {
  "shortTitle": "Programmable Light",
  "storagePrefix": "programmable-light",
  "modules": [
    {
      "project": "Programmable Light",
      "projectModule": 1,
      "weeks": "1-2",
      "title": "Brief, safety and project information",
      "summary": "Understand the project, work responsibly and read the supplied drawing without guessing missing detail.",
      "sections": [
        {
          "id": "1.1",
          "title": "What makes a programmable lamp?",
          "theory": [
            "A programmable lamp combines light, electronics, code and physical design to create an illuminated product whose behaviour can be controlled. It is more than a light attached to a base: its materials, components and programmed system must contribute to one complete solution. In Technology, you will investigate how these parts work together while developing, communicating and evaluating your design ideas.",
            "A successful solution must be considered from several viewpoints. Design concerns the purpose and arrangement of the idea. Function considers whether the solution performs as intended. Construction and build quality concern how accurately and carefully the physical product is made. Electronics and programming concern the controlled lighting system. Aesthetics include the lamp’s shape, size, materials, finish and light effects. The exact success criteria and project constraints will be agreed during class discussion.",
            "The Programmable Lamp project combines a timber base, clear acrylic and electronic components. The identified materials and components include radiata pine, wood screws, 3 mm clear acrylic, an Arduino Uno board, an RGB LED strip, jumper wires and a USB-A to USB 2.0 cable. Named tools and equipment include a tenon saw, tri-square, pencil, steel rule, soldering iron, helping-hands stand, solder and a ULS 4.0/4.6 laser cutter.",
            "This list tells you what must be recognised and investigated. It does not prove exactly how the components connect, operate or fit together. Each material, system and component should be considered according to what it contributes to the overall solution. This supports NESA outcome TE4-MSC-01. Communicating and judging ideas against the agreed criteria supports TE4-DES-01.",
            "Before practical work, identify the named materials, tools and components and describe their likely project role without guessing unsupported details. Record the class-agreed criteria for design, function, build quality, electronics and programming, and aesthetics. Exact dimensions, circuitry, connections, code, settings, procedures and requirements must come from the supplied drawing, teacher demonstrations and class-agreed criteria."
          ],
          "takeaways": [
            "A programmable lamp combines physical design, lighting, electronics and code as one solution.",
            "Materials, systems and components should be judged by how they contribute to the complete project.",
            "Exact practical details must be confirmed from authorised drawings, teacher demonstrations and class-agreed criteria."
          ],
          "boundary": "Supported information includes the project concept, named tools, materials and components, areas for class-agreed success criteria, and NESA outcomes TE4-MSC-01 and TE4-DES-01. Dimensions other than the stated 3 mm acrylic thickness, circuitry, pin assignments, software, settings, procedures, assessment details and final criteria are not specified here. Teacher to confirm all exact practical requirements through the supplied drawing, demonstrations and class-agreed criteria.",
          "visual": {
            "image": "assets/visuals/theory-1-1.png",
            "alt": "Workshop concept showing a clear acrylic light, timber base, Arduino-style controller and RGB LED strip",
            "caption": "AI-generated system overview. It identifies the project elements without specifying final geometry, wiring or settings."
          }
        },
        {
          "id": "1.2",
          "title": "Workshop safety: hazards, risk controls and responsibility",
          "theory": [
            "Workshop safety begins by identifying a hazard, explaining the risk it creates and following controls that reduce the chance of harm. A hazard is something unsafe or capable of causing harm. Risk considers what injury or harm could occur if that hazard is not controlled. For example, poor organisation can create unsafe conditions, while running, messing around or distracting others can place several people at risk.",
            "Safety is a shared responsibility, but each student is responsible for their own choices. Every lesson, students must follow teacher instructions, wear the required personal protective equipment, keep workspaces clean and tidy, and report faulty equipment or unsafe behaviour immediately. Students must never use equipment they have not been trained to use.",
            "The Programmable Lamp involves practical work with tools, materials, technologies and workshop equipment. NESA outcome TE4-SAF-01 requires students to select and safely use tools, materials, technologies and processes. Safe use does not begin simply because equipment is available.",
            "For the fixed disc sander, a student must not use the machine unless the teacher has demonstrated its safe operation, the student has passed the required safety test, the teacher has given permission and the teacher has observed safe use. Identified risks include eye injuries, abrasions, burns, entanglement and dust inhalation.",
            "Stage 4 controls include teacher permission, only one user and one student in the machine zone, correctly positioned guards, operating dust extraction and keeping the work flat on the table. Faults must be reported immediately. Before adjustments or cleaning, the machine must be switched off and brought to a complete stop. After use, it must be left safe, clean and tidy.",
            "Before practical work, identify hazards and explain their possible risks rather than merely listing unsafe objects. Know the rules for behaviour, organisation, reporting and permission. Confirm which PPE is required and locate the first-aid equipment and emergency-stop controls with the teacher. An SOP supports training but does not replace teacher demonstrations, permission or local procedures, and it may not identify every possible hazard."
          ],
          "takeaways": [
            "Identify what is unsafe, explain the possible harm and follow the required risk controls.",
            "Training, a passed safety test, teacher permission and observed safe use control access to equipment.",
            "Safe behaviour includes organisation, reporting hazards and taking personal responsibility every lesson."
          ],
          "boundary": "Supported information includes hazard and risk identification, core workshop behaviour, student responsibility, reporting requirements, and the stated Stage 4 fixed disc-sander risks and controls. This section does not specify project procedures, equipment settings, measurements, school-specific PPE or permission arrangements beyond the authorised sources. It does not provide permission to operate equipment. Teacher to confirm required PPE, the first-aid location, emergency-stop location and all local workshop procedures.",
          "visual": {
            "image": "assets/visuals/theory-1-2.png",
            "alt": "Teacher and student reviewing a fixed disc-sander safety checklist with PPE visible and the machine stopped",
            "caption": "AI-generated safety discussion prompt. The current SOP, teacher demonstration, permission and local procedure remain authoritative."
          }
        },
        {
          "id": "1.3",
          "title": "Measurement, scale and reading the supplied drawing",
          "theory": [
            "Accurate measurement begins with using the correct unit and reading the supplied drawing carefully. In this project, measurements may be shown in millimetres, centimetres or metres. The laser cutter uses millimetres for precision, workshop rulers commonly show centimetres and millimetres, and large sheet materials may be listed in millimetres or metres. Useful relationships are 10 mm = 1 cm = 0.01 m, 100 mm = 10 cm = 0.1 m, and 1000 mm = 100 cm = 1 m. Ruler measurements should be recorded in millimetres.",
            "A drawing’s written dimension represents the intended real size. The scale describes how large or small a view is printed compared with the real object. At 1:1, the view is intended to appear full size. At 1:2, the printed view is intended to be half the real size. However, screens, photocopiers and printers can resize a page. You must therefore follow the written dimensions rather than measuring a displayed or printed view.",
            "The authorised Programmable Lamp drawing is titled Programmable Lamp, names Josh McKenzie as author and is dated 24/02/2025. Its title block gives an overall scale of 1:2, while two detail views are labelled SCALE 1:1. The drawing also contains numbered dimensions and the sequence notes “1 - Cut First and Sand”, “2 - Cut Second and Sand” and “3 - Cut Third”.",
            "Each dimension must be associated with the correct view, extension lines, arrows and feature. A number extracted from the file must not be assigned to a feature without checking the visible full-resolution drawing and teacher guidance. Reading and recording this information supports project planning and production under TE4-PPM-01, while communicating an interpreted drawing supports TE4-DES-01.",
            "Confirm the title, date, view scale, units and sequence notes. Trace each dimension to its correct feature and convert units when required. Record uncertainty instead of guessing. Exact feature identification and interpretation are Teacher to confirm using the full drawing."
          ],
          "takeaways": [
            "Written dimensions show the intended real size; do not scale measurements from a resized screen or print.",
            "Convert units accurately and record workshop ruler measurements in millimetres.",
            "Match every dimension and note to the correct visible view or feature before using it."
          ],
          "boundary": "Supported information includes the verified unit relationships, recording measurements in millimetres, the drawing title, author, date, overall 1:2 scale, two 1:1 detail labels and the three written sequence notes. Extracted numbers have not been assigned to specific features unless their relationship is confirmed from the visible drawing. Tolerances, materials, machine settings and additional cutting or construction procedures are not specified here. Teacher to confirm every exact feature–dimension relationship and any unclear interpretation using the full-resolution authorised drawing.",
          "planGuidance": {
            "heading": "Read the supplied Programmable Lamp drawing before production",
            "paragraphs": [
              "The local plan route preserves the authorised root drawing master; the Week 02 delivery copy is textually identical. Its title block identifies Programmable Lamp, Josh McKenzie, 24/02/2025 and an overall scale of 1:2; two detail views are labelled 1:1.",
              "Read the printed labels and dimensions directly from the full PDF. Do not infer a unit, material assignment, tolerance, hidden feature or production setting that the drawing does not state. Record any missing information and ask the teacher before marking or cutting.",
              "The drawing labels a sequence: 1 Cut First and Sand, 2 Cut Second and Sand, then 3 Cut Third. This is plan-reading evidence only; the teacher demonstration and current workshop procedure control how any practical operation is completed."
            ],
            "takeaways": [
              "Check the title block, view and scale before reading a value.",
              "Transcribe stated dimensions faithfully and leave unstated units or assignments unclaimed.",
              "Follow the labelled cut order only through teacher-authorised workshop instruction."
            ],
            "boundary": "The drawing does not confirm units, material assignment, tolerances, machine settings or a complete production method. Those details remain Teacher to confirm.",
            "sheets": [
              {
                "title": "Programmable Lamp drawing",
                "preview": "assets/plans/programmable-lamp-drawing.png",
                "open": "assets/plans/programmable-lamp-drawing.pdf",
                "sourceUrl": "https://drive.google.com/file/d/1I5PiH8vw7PerhH0PgMeWYkltm6z1rVNZ/view",
                "alt": "Technical drawing titled Programmable Lamp with orthographic, detail and pictorial views, labelled scales, dimensions and three cut-order notes",
                "caption": "Byte-preserved authorised root drawing master. The Week 02 delivery copy is textually identical. Open the full PDF for plan reading; do not measure the screen preview."
              }
            ]
          },
          "visual": {
            "image": "assets/visuals/theory-1-3.png",
            "alt": "Verified supplied Programmable Lamp technical drawing with title block, scales, dimensions and three cut-order labels",
            "caption": "Verified drawing preview from the authorised master. Open the full PDF for plan reading and never measure this screen image."
          }
        }
      ],
      "checks": [
        {
          "theoryIndex": 0,
          "question": "Which description best explains a programmable lamp?",
          "options": [
            "A timber object that must have a painted surface",
            "A light, electronic system, code and physical design combined into one solution",
            "An acrylic decoration without electronic components",
            "A standard lamp that cannot be controlled"
          ],
          "answerIndex": 1,
          "correctFeedback": "The project brings together physical construction, lighting, electronics, code and design.",
          "incorrectFeedback": "Revisit the opening explanation and identify all four areas that contribute to the complete solution.",
          "source": "Drive file ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE; NESA TE4-MSC-01"
        },
        {
          "theoryIndex": 0,
          "question": "Which category considers whether the lamp performs as intended?",
          "options": [
            "Aesthetics",
            "Construction",
            "Function",
            "Materials identification"
          ],
          "answerIndex": 2,
          "correctFeedback": "Function considers whether the completed solution performs as intended.",
          "incorrectFeedback": "Distinguish what the lamp does from how it looks or how carefully it is constructed.",
          "source": "Drive file ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE"
        },
        {
          "theoryIndex": 0,
          "question": "Which feature belongs mainly to aesthetics?",
          "options": [
            "Shape and light effects",
            "Exact circuitry",
            "Workshop permission",
            "Pin assignments"
          ],
          "answerIndex": 0,
          "correctFeedback": "Shape, size, materials, finish and light effects contribute to the lamp’s aesthetics.",
          "incorrectFeedback": "Look for the features that affect the lamp’s visual appearance rather than its technical instructions.",
          "source": "Drive file ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE"
        },
        {
          "theoryIndex": 0,
          "question": "Which item is identified as an electronics component?",
          "options": [
            "Tri-square",
            "Radiata pine",
            "Tenon saw",
            "Arduino Uno board"
          ],
          "answerIndex": 3,
          "correctFeedback": "The Arduino Uno board is named in the electronics-components section of the worksheet.",
          "incorrectFeedback": "Separate electronic components from marking tools, cutting tools and construction materials.",
          "source": "Drive file ID 1UnXP8FYDHNQsgOaRS036CZhLTCW9UXeoZC56gJbL2Tg"
        },
        {
          "theoryIndex": 0,
          "question": "What does the supplied component list prove?",
          "options": [
            "Every exact electrical connection",
            "Which items students must identify and investigate",
            "The final laser settings",
            "The required pin assignments"
          ],
          "answerIndex": 1,
          "correctFeedback": "The list identifies project items, but it does not establish their exact connection or operation.",
          "incorrectFeedback": "Consider the difference between naming a component and providing verified technical instructions for using it.",
          "source": "Drive file ID 1UnXP8FYDHNQsgOaRS036CZhLTCW9UXeoZC56gJbL2Tg"
        },
        {
          "theoryIndex": 0,
          "question": "Which material is specified as 3 mm thick?",
          "options": [
            "Clear acrylic",
            "Radiata pine",
            "Solder",
            "Jumper wire"
          ],
          "answerIndex": 0,
          "correctFeedback": "The worksheet specifically identifies 3 mm clear acrylic.",
          "incorrectFeedback": "Review the manufactured-material entry and look for the only stated material thickness.",
          "source": "Drive file ID 1UnXP8FYDHNQsgOaRS036CZhLTCW9UXeoZC56gJbL2Tg"
        },
        {
          "theoryIndex": 0,
          "question": "Which NESA outcome focuses on how materials, systems and components contribute to solutions?",
          "options": [
            "TE4-DES-01",
            "TE4-SAF-01",
            "TE4-MSC-01",
            "TE4-DIG-01"
          ],
          "answerIndex": 2,
          "correctFeedback": "TE4-MSC-01 examines the contribution of materials, systems and components to solutions.",
          "incorrectFeedback": "Look for the outcome code connected to materials, systems and components rather than communication or safety.",
          "source": "NESA outcome TE4-MSC-01"
        },
        {
          "theoryIndex": 0,
          "question": "What supports achievement of TE4-DES-01 in this project?",
          "options": [
            "Guessing how the electronics connect",
            "Memorising every tool name only",
            "Using unconfirmed laser settings",
            "Communicating and evaluating ideas against agreed criteria"
          ],
          "answerIndex": 3,
          "correctFeedback": "TE4-DES-01 concerns communicating and evaluating design ideas and solutions.",
          "incorrectFeedback": "Focus on the outcome’s two key actions: communicating ideas and evaluating solutions.",
          "source": "NESA outcome TE4-DES-01"
        },
        {
          "theoryIndex": 0,
          "question": "Who establishes the exact success criteria for this project?",
          "options": [
            "The class through discussion with the teacher",
            "Each student without consultation",
            "The component manufacturer alone",
            "The laser cutter operator alone"
          ],
          "answerIndex": 0,
          "correctFeedback": "The worksheet requires class-agreed criteria developed through teacher-guided discussion.",
          "incorrectFeedback": "Review how the worksheet says the criteria and project constraints will be established.",
          "source": "Drive file ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE"
        },
        {
          "theoryIndex": 0,
          "question": "Where must students obtain exact circuitry, procedures and settings?",
          "options": [
            "From the appearance of example lamps",
            "From guesses based on the component list",
            "From authorised drawings, teacher demonstrations and class-agreed criteria",
            "From another student’s unfinished project"
          ],
          "answerIndex": 2,
          "correctFeedback": "These authorised sources control the project’s exact practical details.",
          "incorrectFeedback": "Do not treat examples or named components as technical instructions. Identify the authorised sources that control practical work.",
          "source": "Drive file IDs 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE and 1UnXP8FYDHNQsgOaRS036CZhLTCW9UXeoZC56gJbL2Tg"
        },
        {
          "theoryIndex": 1,
          "question": "What is the best description of a hazard?",
          "options": [
            "A completed safety test",
            "Something unsafe or capable of causing harm",
            "A teacher’s permission to begin",
            "A record of completed work"
          ],
          "answerIndex": 1,
          "correctFeedback": "A hazard is a source or situation that could cause injury or other harm.",
          "incorrectFeedback": "Revisit the difference between something that could cause harm and a control used to reduce harm.",
          "source": "Drive file ID 1FmKuNB8FrUgDZ-N572uJPaK5e3BITduHcYVzkGQLg0k"
        },
        {
          "theoryIndex": 1,
          "question": "When may a Stage 4 student use the fixed disc sander?",
          "options": [
            "When another student explains it",
            "Whenever the machine is available",
            "After reading the machine label",
            "After demonstration, a passed safety test, permission and observed safe use"
          ],
          "answerIndex": 3,
          "correctFeedback": "All four requirements must control student use of the fixed disc sander.",
          "incorrectFeedback": "Look for the complete authorisation process rather than one informal source of information.",
          "source": "Drive file ID 1pA-ABXOT5jXS1Wnr_6kougMTh69uxVZi; NESA TE4-SAF-01"
        },
        {
          "theoryIndex": 1,
          "question": "What should a student do after noticing faulty equipment?",
          "options": [
            "Report it to the teacher immediately",
            "Test it carefully before reporting it",
            "Leave it for the next class",
            "Ask another student to repair it"
          ],
          "answerIndex": 0,
          "correctFeedback": "Faulty or unsafe equipment must be reported immediately rather than tested or repaired by students.",
          "incorrectFeedback": "Focus on the required reporting response, not on investigating or correcting the fault yourself.",
          "source": "Drive file IDs 1FmKuNB8FrUgDZ-N572uJPaK5e3BITduHcYVzkGQLg0k and 1pA-ABXOT5jXS1Wnr_6kougMTh69uxVZi"
        },
        {
          "theoryIndex": 1,
          "question": "Which action is required before adjusting or cleaning the fixed disc sander?",
          "options": [
            "Remove the guard",
            "Ask another student to hold the machine",
            "Switch it off and bring it to a complete stop",
            "Increase the dust extraction"
          ],
          "answerIndex": 2,
          "correctFeedback": "The machine must be switched off and fully stopped before adjustments or cleaning begin.",
          "incorrectFeedback": "Identify the control that removes movement before anyone approaches the machine for another task.",
          "source": "Drive file ID 1pA-ABXOT5jXS1Wnr_6kougMTh69uxVZi"
        },
        {
          "theoryIndex": 1,
          "question": "Why does good workshop organisation matter?",
          "options": [
            "It replaces the need for PPE",
            "It helps prevent unsafe conditions and protects people",
            "It allows more students into a machine zone",
            "It removes the need for teacher instructions"
          ],
          "answerIndex": 1,
          "correctFeedback": "Clean, organised workspaces reduce hazards but do not replace other controls.",
          "incorrectFeedback": "Consider organisation as one part of safety, not as a substitute for PPE, training or instructions.",
          "source": "Drive file ID 1FmKuNB8FrUgDZ-N572uJPaK5e3BITduHcYVzkGQLg0k"
        },
        {
          "theoryIndex": 1,
          "question": "How many students may use the fixed disc sander at one time?",
          "options": [
            "One student",
            "Two students",
            "Three students with permission",
            "Any number who have passed the test"
          ],
          "answerIndex": 0,
          "correctFeedback": "The SOP allows only one student to operate the disc sander at a time.",
          "incorrectFeedback": "Revisit the Stage 4 machine-zone controls and separate the operator from nearby observers.",
          "source": "Drive file ID 1pA-ABXOT5jXS1Wnr_6kougMTh69uxVZi"
        },
        {
          "theoryIndex": 1,
          "question": "Which group contains only risks named for the fixed disc sander?",
          "options": [
            "Noise, electric shock and cuts",
            "Falls, collisions and chemical burns",
            "Crushing, glare and vibration",
            "Eye injuries, abrasions, burns, entanglement and dust inhalation"
          ],
          "answerIndex": 3,
          "correctFeedback": "These are the risks specifically listed in the authorised fixed disc-sander SOP.",
          "incorrectFeedback": "Return to the named machine risks rather than adding hazards from other workshop situations.",
          "source": "Drive file ID 1pA-ABXOT5jXS1Wnr_6kougMTh69uxVZi"
        },
        {
          "theoryIndex": 1,
          "question": "What should a student do if another student is behaving unsafely?",
          "options": [
            "Ignore it unless an injury occurs",
            "Copy the behaviour to show why it is unsafe",
            "Report the unsafe behaviour immediately",
            "Record it after the lesson only"
          ],
          "answerIndex": 2,
          "correctFeedback": "Immediate reporting allows the teacher to respond before the behaviour causes harm.",
          "incorrectFeedback": "Choose the response that addresses the risk promptly without joining in or delaying action.",
          "source": "Drive file ID 1FmKuNB8FrUgDZ-N572uJPaK5e3BITduHcYVzkGQLg0k"
        },
        {
          "theoryIndex": 1,
          "question": "Which statement correctly describes an SOP?",
          "options": [
            "It supports training but may not cover every possible hazard",
            "It replaces teacher demonstrations and permission",
            "It gives students automatic permission to operate equipment",
            "It applies without local workshop procedures"
          ],
          "answerIndex": 0,
          "correctFeedback": "The SOP complements training and other controls rather than replacing them.",
          "incorrectFeedback": "Look for the statement that recognises both the value and the limits of an SOP.",
          "source": "Drive file ID 1pA-ABXOT5jXS1Wnr_6kougMTh69uxVZi"
        },
        {
          "theoryIndex": 1,
          "question": "What does personal responsibility in the workshop include?",
          "options": [
            "Choosing which rules seem necessary",
            "Following instructions, staying organised and reporting hazards",
            "Operating equipment to gain experience",
            "Correcting faulty equipment without assistance"
          ],
          "answerIndex": 1,
          "correctFeedback": "Personal responsibility means making safe choices and responding properly to hazards every lesson.",
          "incorrectFeedback": "Consider the behaviours each student can control without taking on tasks reserved for the teacher.",
          "source": "Drive file ID 1FmKuNB8FrUgDZ-N572uJPaK5e3BITduHcYVzkGQLg0k; NESA TE4-SAF-01"
        },
        {
          "theoryIndex": 2,
          "question": "Why does the project commonly use millimetres?",
          "options": [
            "Millimetres remove the need for drawings",
            "The laser cutter uses millimetres for precision",
            "Workshop rulers show metres only",
            "Millimetres make every view full size"
          ],
          "answerIndex": 1,
          "correctFeedback": "The measurement worksheet identifies millimetres as the precision unit used by the laser cutter.",
          "incorrectFeedback": "Review which unit is linked specifically to precise digital fabrication in the measurement worksheet.",
          "source": "Drive file ID 11YSs1RBYTnC7FDGHhgTLyq6KgQyJDdErOZrAr5Lnl1k"
        },
        {
          "theoryIndex": 2,
          "question": "Which conversion is correct?",
          "options": [
            "10 mm = 10 cm",
            "100 mm = 1 m",
            "1000 mm = 100 cm",
            "1 mm = 0.1 m"
          ],
          "answerIndex": 2,
          "correctFeedback": "One thousand millimetres and one hundred centimetres both equal one metre.",
          "incorrectFeedback": "Compare the verified relationships between millimetres, centimetres and metres before selecting an equivalent value.",
          "source": "Drive file ID 11YSs1RBYTnC7FDGHhgTLyq6KgQyJDdErOZrAr5Lnl1k"
        },
        {
          "theoryIndex": 2,
          "question": "How should measurements taken with a workshop ruler be recorded for this activity?",
          "options": [
            "In millimetres",
            "Without a unit",
            "In metres only",
            "As a drawing scale"
          ],
          "answerIndex": 0,
          "correctFeedback": "The worksheet directs students to measure with a ruler and record each result in millimetres.",
          "incorrectFeedback": "Look for the required recording unit rather than every unit that may appear on a ruler.",
          "source": "Drive file ID 11YSs1RBYTnC7FDGHhgTLyq6KgQyJDdErOZrAr5Lnl1k"
        },
        {
          "theoryIndex": 2,
          "question": "What does a written dimension on a technical drawing represent?",
          "options": [
            "The size of the image on the current screen",
            "The distance measured from any photocopy",
            "The preferred printer setting",
            "The intended real size"
          ],
          "answerIndex": 3,
          "correctFeedback": "Written dimensions communicate the intended real measurement, regardless of how the page is displayed.",
          "incorrectFeedback": "Separate the designed size of the object from the temporary size of its printed or onscreen representation.",
          "source": "Drive file ID 1I5PiH8vw7PerhH0PgMeWYkltm6z1rVNZ"
        },
        {
          "theoryIndex": 2,
          "question": "What does a view scale of 1:2 mean?",
          "options": [
            "The intended printed view is half the real size",
            "The object must be made twice",
            "Every dimension must be divided by two",
            "The view is intended to be full size"
          ],
          "answerIndex": 0,
          "correctFeedback": "A 1:2 view represents the object at half its intended real size on the drawing.",
          "incorrectFeedback": "Think about the relationship between one unit on the view and two corresponding units on the real object.",
          "source": "Drive file ID 1I5PiH8vw7PerhH0PgMeWYkltm6z1rVNZ"
        },
        {
          "theoryIndex": 2,
          "question": "Why should students not measure a dimension directly from a computer screen?",
          "options": [
            "Screens cannot display technical drawings",
            "Every drawing number is shown in metres",
            "The displayed page may have been resized",
            "Scale applies only to handwritten sketches"
          ],
          "answerIndex": 2,
          "correctFeedback": "Screen zoom and page resizing can change the displayed size without changing the written dimension.",
          "incorrectFeedback": "Consider whether the visual size of a document remains fixed across different screens and zoom levels.",
          "source": "Drive file ID 1I5PiH8vw7PerhH0PgMeWYkltm6z1rVNZ"
        },
        {
          "theoryIndex": 2,
          "question": "Which scale is shown on the two detail views?",
          "options": [
            "2:1",
            "1:1",
            "1:2",
            "1:10"
          ],
          "answerIndex": 1,
          "correctFeedback": "Two detail views on the authorised drawing are explicitly labelled “SCALE 1:1”.",
          "incorrectFeedback": "Distinguish the scale beside the detail views from the overall scale shown in the title block.",
          "source": "Drive file ID 1I5PiH8vw7PerhH0PgMeWYkltm6z1rVNZ"
        },
        {
          "theoryIndex": 2,
          "question": "What is the correct order of the three written sequence notes?",
          "options": [
            "Cut first; cut second; sand third",
            "Sand first; cut second; cut third",
            "Cut first and sand; cut third; cut second and sand",
            "Cut first and sand; cut second and sand; cut third"
          ],
          "answerIndex": 3,
          "correctFeedback": "This matches the numbered sequence written on the authorised drawing.",
          "incorrectFeedback": "Follow the numbers from one to three and preserve the sanding words attached to each note.",
          "source": "Drive file ID 1I5PiH8vw7PerhH0PgMeWYkltm6z1rVNZ"
        },
        {
          "theoryIndex": 2,
          "question": "What should a student do before assigning a dimension to a feature?",
          "options": [
            "Follow its arrows and extension lines in the correct view",
            "Choose the nearest visible number",
            "Measure the feature from the screen",
            "Assume matching-looking features are identical"
          ],
          "answerIndex": 0,
          "correctFeedback": "Dimension lines and the relevant view help establish which feature the written value describes.",
          "incorrectFeedback": "Look for the drawing information that connects a number to a particular location rather than relying on proximity.",
          "source": "Drive file ID 1I5PiH8vw7PerhH0PgMeWYkltm6z1rVNZ"
        },
        {
          "theoryIndex": 2,
          "question": "What should a student do when a dimension or feature relationship remains unclear?",
          "options": [
            "Estimate it from the object’s appearance",
            "Select the most convenient interpretation",
            "Record the uncertainty and ask the teacher",
            "Ignore the dimension during planning"
          ],
          "answerIndex": 2,
          "correctFeedback": "Unclear drawing information must be confirmed rather than guessed or silently ignored.",
          "incorrectFeedback": "Choose the response that preserves accuracy and allows the interpretation to be verified before production.",
          "source": "Drive file ID 1I5PiH8vw7PerhH0PgMeWYkltm6z1rVNZ; NESA TE4-PPM-01"
        }
      ],
      "written": [
        {
          "theoryIndex": 0,
          "title": "What makes a programmable lamp? · Evidence 1",
          "prompt": "Explain what makes the Programmable Lamp a technological solution rather than only a decorative object.",
          "clarification": "The lamp combines … The physical parts contribute by … The electronics and code contribute by …",
          "model": "The lamp combines physical design, light, electronics and code. Its timber, acrylic and electronic components contribute to one complete solution. The exact operation must be confirmed through teacher instructions and the approved project information.",
          "source": "Drive file IDs 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE and 1UnXP8FYDHNQsgOaRS036CZhLTCW9UXeoZC56gJbL2Tg; NESA TE4-MSC-01"
        },
        {
          "theoryIndex": 0,
          "title": "What makes a programmable lamp? · Evidence 2",
          "prompt": "Describe two areas that should be considered when deciding whether a programmable lamp is successful.",
          "clarification": "One area is … This considers whether … Another area is …",
          "model": "One area is function, which considers whether the lamp performs as intended. Another area is aesthetics, which includes features such as shape, materials, finish and light effects. The final criteria will be agreed in class.",
          "source": "Drive file ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE; NESA TE4-DES-01"
        },
        {
          "theoryIndex": 1,
          "title": "Workshop safety: hazards, risk controls and responsibility · Evidence 1",
          "prompt": "Explain the difference between identifying a hazard and explaining its risk.",
          "clarification": "The hazard is … This is unsafe because … The possible harm is …",
          "model": "The hazard is an untidy workspace. This is unsafe because materials or tools may obstruct the work area. The possible harm is that someone could be injured if the hazard is ignored.",
          "source": "Drive file ID 1FmKuNB8FrUgDZ-N572uJPaK5e3BITduHcYVzkGQLg0k"
        },
        {
          "theoryIndex": 1,
          "title": "Workshop safety: hazards, risk controls and responsibility · Evidence 2",
          "prompt": "Explain what must happen before a student may use the fixed disc sander.",
          "clarification": "First, the teacher must … The student must then … Before use, the teacher must …",
          "model": "First, the teacher must demonstrate safe operation. The student must then pass the required safety test. Before use, the teacher must give permission and observe the student using the machine safely.",
          "source": "Drive file ID 1pA-ABXOT5jXS1Wnr_6kougMTh69uxVZi; NESA TE4-SAF-01"
        },
        {
          "theoryIndex": 2,
          "title": "Measurement, scale and reading the supplied drawing · Evidence 1",
          "prompt": "Explain why a written dimension should be used instead of measuring a 1:2 view from a screen.",
          "clarification": "The written dimension shows … A scale of 1:2 means … Measuring the screen is unreliable because …",
          "model": "The written dimension shows the intended real size. A scale of 1:2 means the view is intended to appear half size. Measuring the screen is unreliable because the page may have been resized or zoomed.",
          "source": "Drive file ID 1I5PiH8vw7PerhH0PgMeWYkltm6z1rVNZ; NESA TE4-DES-01"
        },
        {
          "theoryIndex": 2,
          "title": "Measurement, scale and reading the supplied drawing · Evidence 2",
          "prompt": "Describe how you would verify a dimension before recording it in your project planning.",
          "clarification": "First, I would identify … Next, I would trace … If it remained unclear, I would …",
          "model": "First, I would identify the correct drawing view and its scale. Next, I would trace the dimension arrows to the intended feature and check the unit. If it remained unclear, I would record the question and confirm it with the teacher.",
          "source": "Drive file IDs 11YSs1RBYTnC7FDGHhgTLyq6KgQyJDdErOZrAr5Lnl1k and 1I5PiH8vw7PerhH0PgMeWYkltm6z1rVNZ; NESA TE4-PPM-01"
        }
      ]
    },
    {
      "project": "Programmable Light",
      "projectModule": 2,
      "weeks": "3-4",
      "title": "Measurement, vector design and ideas",
      "summary": "Develop accurate digital-design habits, source-aware research and a justified design direction.",
      "sections": [
        {
          "id": "2.1",
          "title": "Image quality, resolution and design research",
          "theory": [
            "Design research helps you collect visual references, compare possibilities and explain why ideas may suit a project. A reference image can show shapes, symbols, layouts, details or visual styles that may influence your thinking. Research should not be treated as choosing the first image that looks interesting. Research records enough information to compare several ideas later.",
            "Resolution describes the pixel dimensions of a digital image, usually recorded as width by height. Pixel dimensions influence how much visible detail an image can show, particularly when it is enlarged. An image may appear sharp when displayed at a small size but become blurred, blocky or unclear when enlarged. Resolution is therefore useful evidence when comparing research images, but it does not automatically prove that an image will suit manufacturing.",
            "For each useful reference, record its source or location, title or subject, resolution and design relevance. Design relevance explains what the image contributes to your thinking, such as a recognisable outline, balanced shape or useful arrangement.",
            "The authorised image-search activity asks students to locate high-quality logos or images and record both the image and its resolution across 11 prompts. The Lamp Idea Iteration worksheet then provides six design-idea spaces with columns for an object, logo or item, a PNG photo and an explanation. Its Gold Coast Titans idea with blue and yellow lighting is only a student example, not a project requirement.",
            "A research image is an inspiration or reference. It is not automatically a finished design that can be manufactured. A final manufacturable vector design must be developed and checked separately. The two-layer key-tag task provides practice using a vector design program and preparing a simple laser-suitable design, but its key-tag requirements are not lamp specifications.",
            "This process supports TE4-PDP-01, TE4-DES-01 and TE4-DIG-01 by building design-process knowledge, communication and safe technological literacy.",
            "Collect several references, record their resolution and explain their relevance. Compare how clearly each image communicates its subject at the size being viewed. Do not assume that a sharp image, logo or downloaded file is approved for use. Permission, ownership, copyright, approved imagery and final selection criteria are Teacher to confirm."
          ],
          "takeaways": [
            "Image research provides references that help generate and compare design ideas.",
            "Resolution records pixel dimensions and affects how much detail remains visible when an image is enlarged.",
            "A reference image is not automatically an approved or manufacturable final vector design."
          ],
          "boundary": "Supported information includes researching multiple images, recording images and resolution, developing six explained lamp ideas and completing separate two-layer vector-software practice. Resolution is treated as pixel dimensions that influence visible detail when an image is enlarged. No pixel minimum, required lamp file format, approved website, copyright rule, licence condition or final image-selection rule is specified. The Gold Coast Titans idea and the key-tag requirements are examples or practice activities, not lamp specifications. Teacher to confirm permission, ownership and copyright requirements, approved imagery, suitable final designs and all final selection criteria.",
          "visual": {
            "image": "assets/visuals/theory-2-1.png",
            "alt": "Student comparing several lamp reference images and recording observations in a notebook",
            "caption": "AI-generated research prompt. Students must record real creator, source, resolution and reuse information for their own research."
          }
        },
        {
          "id": "2.2",
          "title": "Vector design: outlines, layers and laser-ready simplicity",
          "theory": [
            "A vector design describes shapes using editable lines and curves rather than a fixed grid of pixels. This means a shape can be resized or adjusted without relying on the same pixel structure as a photograph. Vector design is useful when students need to create clear outlines, organise parts of an idea and communicate what should be included in a digital design.",
            "Layers help separate different parts of the design. A base layer can hold the main outline, while another layer can contain added details such as text, symbols or smaller shapes. Keeping these parts organised makes the design easier to inspect, explain and edit. Simplicity matters because unnecessary detail can make paths harder to follow and the intended result less clear.",
            "The authorised 2D Design practice activity teaches vector-software skills through a two-layer key tag. Layer 1 is the base outline in a chosen shape. Layer 2 adds details such as buttons, text or a name. For this practice task only, the design must have two clear layers, remain within 80 mm × 50 mm, and be simple and suitable for laser cutting. Students export the design from 2D Design and upload it to the assignment section in Google Classroom. The activity is about learning the software, not producing a perfect result.",
            "The 80 mm × 50 mm limit applies only to the key-tag practice. It is not a Programmable Lamp dimension. The earlier image-search and lamp-iteration activities support reference research and six explained design ideas, but they do not establish lamp manufacturing requirements.",
            "In this section, laser-ready means prepared clearly enough for teacher checking. It does not mean that machine settings are approved, the file has been accepted or a student has permission to operate equipment.",
            "Before export, check that the base outline and added details are placed on clear layers. Inspect whether each outline is closed where intended, whether any open path is deliberate, and whether details remain readable. Confirm the practice-task size and remove unnecessary complexity. Exact export format, file name, imagery approval, laser workflow and machine settings are Teacher to confirm."
          ],
          "takeaways": [
            "Vector designs use editable lines and curves rather than a fixed pixel grid.",
            "Clear layers separate the base outline from added details and make the design easier to inspect.",
            "“Laser-ready” means ready for teacher checking, not approved for machine use."
          ],
          "boundary": "Supported information includes the two-layer key-tag software practice, the roles of the base and detail layers, the practice-only maximum size of 80 mm × 50 mm, simple laser-suitable design, export and Classroom upload, and the focus on learning rather than perfection. The image-search and lamp-iteration sources support reference research and six explained ideas only. The 80 mm × 50 mm limit is not a lamp dimension. No circuit details, lamp geometry, production sequence, export format, file-naming rule, Classroom URL, approved imagery, assessment status, laser settings or machine workflow are specified. “Laser-ready” means ready for teacher checking only. Teacher to confirm export requirements, file naming, approved imagery, upload location, final lamp criteria and all laser approval, settings and operating procedures.",
          "visual": {
            "image": "assets/visuals/theory-2-2.png",
            "alt": "Student creating a simple two-layer key-tag vector practice design beside two acrylic practice layers",
            "caption": "AI-generated vector-practice prompt. The 80 mm × 50 mm limit belongs only to the supplied key-tag activity, not the lamp."
          }
        },
        {
          "id": "2.3",
          "title": "Iterating ideas and building success criteria",
          "theory": [
            "Iteration means repeating a design process so that each cycle moves towards a more suitable result. It does not mean producing the same idea several times. A useful iteration changes, combines, refines or rejects features for a stated reason. Comparing several ideas helps a designer avoid choosing too early and provides evidence for later decisions.",
            "Each idea should communicate more than a picture. It should identify the object, logo or item being considered, include a reference image where required and explain how the idea might influence the lamp. Research images and recorded resolution information can support this process, but they do not decide which idea is best.",
            "The authorised Lamp Idea Iteration worksheet provides six spaces for design ideas. Each space includes an object, logo or item, a PNG photo and an explanation. The Gold Coast Titans example with blue and yellow light shows one student’s possible response only. It does not set a required logo, theme or colour choice.",
            "Ideas should be compared against the class-agreed success-criteria categories: Design, Function, Construction/Build Quality, Electronics & Programming, and Aesthetics. Observations of example lamps may include shape, size, materials, finish and light effects. These observations can help students discuss what successful work might look like, but the final criteria must be agreed by the class with the teacher.",
            "A useful criterion is observable and can be applied later when evaluating the finished solution. For example, a criterion should describe something that can be checked rather than using a vague statement such as “looks good”. Constraints involving materials, size, time, safety or assessment remain blank until class discussion confirms them.",
            "A personal goal is different from a project criterion. A personal goal identifies something one student wants to improve, while a project criterion applies to the solution being designed and evaluated.",
            "Check that several ideas have been explained, not merely collected. Compare features against each success-criteria category and record why a feature should be retained, refined, combined or rejected. Do not assume all six ideas will be manufactured. Final criteria, constraints and any selection decision are Teacher to confirm through class discussion."
          ],
          "takeaways": [
            "Iteration improves ideas through repeated comparison, refinement, combination or rejection.",
            "Success criteria should be observable and usable when evaluating the completed solution.",
            "A personal goal belongs to one student, while project criteria apply to the designed solution."
          ],
          "boundary": "Supported information includes six explained design-idea spaces, the single Gold Coast Titans student example, image-and-resolution research, observation of example lamps, class-agreed success-criteria categories, blank constraints for discussion and one personal goal. Iteration is treated as repeated development in which each cycle builds towards a desired result. No final design, colour, logo, dimension, material limit, time limit, safety constraint, assessment requirement or manufacturing decision is established here. The six ideas are development evidence and are not all required to be manufactured. Teacher to confirm the final criteria, constraints, personal-goal expectations and any decision about which idea proceeds.",
          "visual": {
            "image": "assets/visuals/theory-2-3.png",
            "alt": "Several different programmable-light sketches beside a selected concept and a small concept model",
            "caption": "AI-generated iteration prompt. The forms and light effects are examples, not final project requirements."
          }
        }
      ],
      "checks": [
        {
          "theoryIndex": 0,
          "question": "What is the main purpose of image research in design?",
          "options": [
            "To avoid developing original ideas",
            "To collect references and compare possible ideas",
            "To guarantee that an image can be manufactured",
            "To select the first image found"
          ],
          "answerIndex": 1,
          "correctFeedback": "Research provides visual evidence that can support idea generation, comparison and explanation.",
          "incorrectFeedback": "Focus on how research supports several possible ideas rather than immediately deciding on one final image.",
          "source": "Drive file ID 1VmOGpI0qTXPmWWKYMRD8ewtJcGRQB1kpf_zQNSFwppQ; NESA TE4-PDP-01"
        },
        {
          "theoryIndex": 0,
          "question": "What does image resolution describe?",
          "options": [
            "Whether an image is legally available",
            "The physical size of the lamp",
            "The pixel dimensions of the image",
            "The number of design ideas required"
          ],
          "answerIndex": 2,
          "correctFeedback": "Resolution is commonly recorded as an image’s pixel width by pixel height.",
          "incorrectFeedback": "Separate the digital detail information of an image from its ownership, design purpose or manufactured size.",
          "source": "Drive file ID 1VmOGpI0qTXPmWWKYMRD8ewtJcGRQB1kpf_zQNSFwppQ"
        },
        {
          "theoryIndex": 0,
          "question": "Why might an image look sharp when small but poor when enlarged?",
          "options": [
            "Its available pixel detail becomes more visible when enlarged",
            "Every enlarged image becomes a vector automatically",
            "Its title changes when resized",
            "Enlarging confirms its copyright status"
          ],
          "answerIndex": 0,
          "correctFeedback": "Enlarging an image can expose limited pixel detail as blur or blockiness.",
          "incorrectFeedback": "Think about what happens to the visible digital detail when the same pixels are spread across a larger display area.",
          "source": "Drive file ID 1VmOGpI0qTXPmWWKYMRD8ewtJcGRQB1kpf_zQNSFwppQ"
        },
        {
          "theoryIndex": 0,
          "question": "Which information should be recorded for a useful research image?",
          "options": [
            "Only its colour",
            "Only the website name",
            "Only its resolution",
            "Its source, title or subject, resolution and design relevance"
          ],
          "answerIndex": 3,
          "correctFeedback": "These details make the reference easier to identify, compare and explain later.",
          "incorrectFeedback": "Look for the option that records both where the image came from and why it may help the design process.",
          "source": "Drive file ID 1VmOGpI0qTXPmWWKYMRD8ewtJcGRQB1kpf_zQNSFwppQ; NESA TE4-DES-01"
        },
        {
          "theoryIndex": 0,
          "question": "What does design relevance explain?",
          "options": [
            "Whether the image has the highest pixel count",
            "What the image contributes to the student’s design thinking",
            "Which machine will manufacture the lamp",
            "Whether the image is automatically approved"
          ],
          "answerIndex": 1,
          "correctFeedback": "Design relevance links the reference to useful features such as shape, outline or arrangement.",
          "incorrectFeedback": "Focus on the reason the image is useful as a reference, not on technical approval or machine operation.",
          "source": "Drive file ID 1VmOGpI0qTXPmWWKYMRD8ewtJcGRQB1kpf_zQNSFwppQ; NESA TE4-DES-01"
        },
        {
          "theoryIndex": 0,
          "question": "How many design-idea spaces are provided in the Lamp Idea Iteration worksheet?",
          "options": [
            "Six",
            "Two",
            "Eleven",
            "One"
          ],
          "answerIndex": 0,
          "correctFeedback": "The worksheet includes spaces for six separate design ideas.",
          "incorrectFeedback": "Distinguish the number of idea-iteration spaces from the number of image-search prompts.",
          "source": "Drive file ID 1OmW9UvXZ44MtOGNVmq7THl65bglDtKBwJ4exdkAqWF8"
        },
        {
          "theoryIndex": 0,
          "question": "How should the Gold Coast Titans example be treated?",
          "options": [
            "As the required lamp design",
            "As the approved final image",
            "As student example content only",
            "As a rule requiring blue and yellow light"
          ],
          "answerIndex": 2,
          "correctFeedback": "The example demonstrates how one student might explain an idea, but it does not set a project requirement.",
          "incorrectFeedback": "Separate an example entered in one worksheet slot from a criterion that every student must follow.",
          "source": "Drive file ID 1OmW9UvXZ44MtOGNVmq7THl65bglDtKBwJ4exdkAqWF8"
        },
        {
          "theoryIndex": 0,
          "question": "What is the relationship between a research image and a final vector design?",
          "options": [
            "They are always identical",
            "Any research image is ready for laser cutting",
            "A vector design is unnecessary when resolution is high",
            "The reference informs thinking, while the final vector must be developed and checked separately"
          ],
          "answerIndex": 3,
          "correctFeedback": "Inspiration and manufacturing information serve different stages of the design process.",
          "incorrectFeedback": "Consider whether finding an image completes the work needed to prepare a controlled manufacturing design.",
          "source": "Drive file IDs 1VmOGpI0qTXPmWWKYMRD8ewtJcGRQB1kpf_zQNSFwppQ and 1xBOBGVdnWhorJVeTTqZPw5yRNeWkF249; NESA TE4-PDP-01"
        },
        {
          "theoryIndex": 0,
          "question": "What is the main purpose of the two-layer key-tag activity?",
          "options": [
            "To practise using a vector design program",
            "To establish the final lamp dimensions",
            "To approve lamp imagery",
            "To set the lamp’s required number of layers"
          ],
          "answerIndex": 0,
          "correctFeedback": "The task develops software skills through a separate key-tag exercise.",
          "incorrectFeedback": "Identify the activity’s learning purpose and avoid transferring its product requirements to the lamp.",
          "source": "Drive file ID 1xBOBGVdnWhorJVeTTqZPw5yRNeWkF249; NESA TE4-DIG-01"
        },
        {
          "theoryIndex": 0,
          "question": "What must be confirmed before treating an image as approved for the lamp?",
          "options": [
            "That it appears first in search results",
            "Permission, ownership or copyright, approved imagery and selection criteria",
            "That it has more pixels than every alternative",
            "That it is one of the worksheet examples"
          ],
          "answerIndex": 1,
          "correctFeedback": "These matters are not established by the worksheets and require teacher confirmation.",
          "incorrectFeedback": "Image quality alone does not establish whether an image may be used. Consider the approval and ownership questions that remain unresolved.",
          "source": "Drive file IDs 1VmOGpI0qTXPmWWKYMRD8ewtJcGRQB1kpf_zQNSFwppQ and 1OmW9UvXZ44MtOGNVmq7THl65bglDtKBwJ4exdkAqWF8; NESA TE4-DIG-01"
        },
        {
          "theoryIndex": 1,
          "question": "What does a vector design use to describe shapes?",
          "options": [
            "Editable lines and curves",
            "A fixed grid of timber dimensions",
            "Electronic pin assignments",
            "A photograph’s colour settings"
          ],
          "answerIndex": 0,
          "correctFeedback": "Vector designs are built from editable paths rather than relying on a fixed pixel grid.",
          "incorrectFeedback": "Focus on how the digital shape is constructed, not on project materials, circuitry or photographic settings.",
          "source": "Week 3 Drive PDF ID 1xBOBGVdnWhorJVeTTqZPw5yRNeWkF249; NESA TE4-DIG-02"
        },
        {
          "theoryIndex": 1,
          "question": "What is placed on Layer 1 in the key-tag practice?",
          "options": [
            "The exported file name",
            "The main base outline",
            "The laser settings",
            "The Classroom link"
          ],
          "answerIndex": 1,
          "correctFeedback": "Layer 1 contains the chosen base shape or main outline.",
          "incorrectFeedback": "Distinguish the design’s first visual layer from later export, upload and machine information.",
          "source": "Week 3 Drive PDF ID 1xBOBGVdnWhorJVeTTqZPw5yRNeWkF249"
        },
        {
          "theoryIndex": 1,
          "question": "What is the purpose of Layer 2 in the practice activity?",
          "options": [
            "To set the final lamp dimensions",
            "To approve the design for manufacture",
            "To add details such as text or smaller shapes",
            "To control the RGB LED strip"
          ],
          "answerIndex": 2,
          "correctFeedback": "The second layer holds added details that sit above or within the base design.",
          "incorrectFeedback": "Look for the layer used to organise visual details rather than project dimensions, approval or electronics.",
          "source": "Week 3 Drive PDF ID 1xBOBGVdnWhorJVeTTqZPw5yRNeWkF249"
        },
        {
          "theoryIndex": 1,
          "question": "Why is simplicity useful in a vector design?",
          "options": [
            "It guarantees permission to use the laser cutter",
            "It removes the need for teacher checking",
            "It proves the design is assessed",
            "It makes paths easier to inspect and the intent clearer"
          ],
          "answerIndex": 3,
          "correctFeedback": "Simpler designs are generally easier to check, edit and communicate.",
          "incorrectFeedback": "Consider how design complexity affects inspection and communication, not permission or assessment status.",
          "source": "Week 3 Drive PDF ID 1xBOBGVdnWhorJVeTTqZPw5yRNeWkF249; NESA TE4-DES-01"
        },
        {
          "theoryIndex": 1,
          "question": "What does the 80 mm × 50 mm limit apply to?",
          "options": [
            "The entire Programmable Lamp",
            "The two-layer key-tag practice only",
            "Every image found during research",
            "The acrylic sheet used in the lamp"
          ],
          "answerIndex": 1,
          "correctFeedback": "That size limit belongs only to the software-practice key tag.",
          "incorrectFeedback": "Keep practice-task requirements separate from dimensions that would control the actual lamp project.",
          "source": "Week 3 Drive PDF ID 1xBOBGVdnWhorJVeTTqZPw5yRNeWkF249"
        },
        {
          "theoryIndex": 1,
          "question": "What should be checked about an outline before export?",
          "options": [
            "Whether it is closed where intended",
            "Whether it matches the lamp circuitry",
            "Whether it uses the approved laser setting",
            "Whether it includes six colours"
          ],
          "answerIndex": 0,
          "correctFeedback": "Students should inspect whether outlines are complete and whether any open path is deliberate.",
          "incorrectFeedback": "Focus on path quality within the vector file rather than circuitry, machine settings or invented colour requirements.",
          "source": "Week 3 Drive PDF ID 1xBOBGVdnWhorJVeTTqZPw5yRNeWkF249; NESA TE4-PPM-01"
        },
        {
          "theoryIndex": 1,
          "question": "What does “laser-ready” mean in this section?",
          "options": [
            "The student may operate the machine independently",
            "The machine settings are confirmed",
            "The file has been approved for production",
            "The design is prepared for teacher checking"
          ],
          "answerIndex": 3,
          "correctFeedback": "The term describes the file’s readiness for review, not permission or approved machine operation.",
          "incorrectFeedback": "Separate a clear, inspectable design file from formal approval to manufacture or use equipment.",
          "source": "Week 3 Drive PDF ID 1xBOBGVdnWhorJVeTTqZPw5yRNeWkF249; NESA TE4-PPM-01"
        },
        {
          "theoryIndex": 1,
          "question": "What is the main purpose of the two-layer key-tag activity?",
          "options": [
            "To manufacture the final lamp panel",
            "To practise using vector-design software",
            "To establish the lamp’s production sequence",
            "To test the lamp electronics"
          ],
          "answerIndex": 1,
          "correctFeedback": "The activity focuses on learning the program rather than making a perfect final product.",
          "incorrectFeedback": "Identify the learning purpose of the exercise rather than transferring it into the lamp’s manufacture or electronics.",
          "source": "Week 3 Drive PDF ID 1xBOBGVdnWhorJVeTTqZPw5yRNeWkF249; NESA TE4-PDP-01"
        },
        {
          "theoryIndex": 1,
          "question": "What do the image-search and lamp-iteration worksheets support?",
          "options": [
            "Reference research and development of explained ideas",
            "Final laser settings",
            "Exact lamp geometry",
            "Permission to manufacture a logo"
          ],
          "answerIndex": 0,
          "correctFeedback": "These worksheets support research and idea generation, not final manufacturing requirements.",
          "incorrectFeedback": "Distinguish design-development evidence from technical instructions or approval to manufacture.",
          "source": "Drive IDs 1VmOGpI0qTXPmWWKYMRD8ewtJcGRQB1kpf_zQNSFwppQ and 1OmW9UvXZ44MtOGNVmq7THl65bglDtKBwJ4exdkAqWF8; NESA TE4-DES-01"
        },
        {
          "theoryIndex": 1,
          "question": "Which item is not supplied by the authorised practice task?",
          "options": [
            "A requirement for two clear layers",
            "A maximum practice size",
            "An exact export file format",
            "A direction to export and upload the design"
          ],
          "answerIndex": 2,
          "correctFeedback": "The source instructs students to export but does not specify the required format.",
          "incorrectFeedback": "Review which instructions are explicit and which technical details remain unstated and require confirmation.",
          "source": "Week 3 Drive PDF ID 1xBOBGVdnWhorJVeTTqZPw5yRNeWkF249"
        },
        {
          "theoryIndex": 2,
          "question": "What does iteration mean in the design process?",
          "options": [
            "Repeating a process so each cycle builds towards a desired result",
            "Manufacturing every idea that is generated",
            "Selecting the first idea that appears suitable",
            "Copying the same drawing without changes"
          ],
          "answerIndex": 0,
          "correctFeedback": "Iteration uses repeated cycles of development to move towards a more suitable design result.",
          "incorrectFeedback": "Focus on purposeful improvement between cycles rather than simple repetition or immediate manufacture.",
          "source": "NESA Technology 7–8 glossary; NESA TE4-PDP-01"
        },
        {
          "theoryIndex": 2,
          "question": "What should accompany each idea in the Lamp Idea Iteration worksheet?",
          "options": [
            "A completed manufacturing schedule",
            "An object, logo or item, a PNG photo and an explanation",
            "Confirmed laser settings",
            "A final assessment grade"
          ],
          "answerIndex": 1,
          "correctFeedback": "The worksheet asks students to identify and explain each idea, not merely insert an image.",
          "incorrectFeedback": "Look for the three worksheet columns used to communicate each design possibility.",
          "source": "Drive file ID 1OmW9UvXZ44MtOGNVmq7THl65bglDtKBwJ4exdkAqWF8"
        },
        {
          "theoryIndex": 2,
          "question": "How should the Gold Coast Titans example be treated?",
          "options": [
            "As the required final lamp design",
            "As a rule requiring blue and yellow lighting",
            "As one student example, not a project requirement",
            "As the class-agreed success criteria"
          ],
          "answerIndex": 2,
          "correctFeedback": "The example demonstrates one possible explanation but does not control another student’s design.",
          "incorrectFeedback": "Separate example content entered in one idea slot from requirements that apply to the whole class.",
          "source": "Drive file ID 1OmW9UvXZ44MtOGNVmq7THl65bglDtKBwJ4exdkAqWF8"
        },
        {
          "theoryIndex": 2,
          "question": "Why should students generate several explained ideas?",
          "options": [
            "To prove every idea can be manufactured",
            "To avoid evaluating design features",
            "To make all ideas look identical",
            "To compare possibilities before choosing or refining features"
          ],
          "answerIndex": 3,
          "correctFeedback": "Several explained ideas provide evidence for comparison and more deliberate design decisions.",
          "incorrectFeedback": "Consider how multiple alternatives reduce the risk of choosing too early without comparison.",
          "source": "Drive file ID 1OmW9UvXZ44MtOGNVmq7THl65bglDtKBwJ4exdkAqWF8; NESA TE4-PDP-01"
        },
        {
          "theoryIndex": 2,
          "question": "Which category considers whether the solution performs as intended?",
          "options": [
            "Function",
            "Aesthetics",
            "Personal goal",
            "Image resolution"
          ],
          "answerIndex": 0,
          "correctFeedback": "Function considers whether the designed solution carries out its intended purpose.",
          "incorrectFeedback": "Distinguish performance from appearance, individual improvement and research-image quality.",
          "source": "Drive file ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE"
        },
        {
          "theoryIndex": 2,
          "question": "Which statement is the most useful description of a success criterion?",
          "options": [
            "It names a favourite logo",
            "It describes something observable that can be checked later",
            "It records only a student’s personal preference",
            "It guarantees the design will be manufactured"
          ],
          "answerIndex": 1,
          "correctFeedback": "Observable criteria give students a practical basis for evaluating the completed solution.",
          "incorrectFeedback": "Look for wording that can guide later evaluation rather than preference, prediction or automatic approval.",
          "source": "Drive file ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE; NESA TE4-DES-01"
        },
        {
          "theoryIndex": 2,
          "question": "What may students do with a feature during iteration?",
          "options": [
            "Retain, refine, combine or reject it for a stated reason",
            "Use it without comparing it to any criteria",
            "Manufacture it before discussing constraints",
            "Treat it as compulsory because it appears in a reference image"
          ],
          "answerIndex": 0,
          "correctFeedback": "Iteration requires purposeful decisions supported by comparison and explanation.",
          "incorrectFeedback": "Focus on evidence-based design decisions rather than automatic acceptance or premature manufacture.",
          "source": "NESA glossary meaning of iteration; NESA TE4-PDP-01 and TE4-DES-01"
        },
        {
          "theoryIndex": 2,
          "question": "What is the relationship between a personal goal and a project criterion?",
          "options": [
            "They are always the same statement",
            "A personal goal automatically applies to the whole class",
            "A personal goal concerns one student, while a criterion applies to the solution",
            "Project criteria are optional once a personal goal is chosen"
          ],
          "answerIndex": 2,
          "correctFeedback": "The two statements serve different purposes within the project.",
          "incorrectFeedback": "Compare who or what each statement is intended to guide and evaluate.",
          "source": "Drive file ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE"
        },
        {
          "theoryIndex": 2,
          "question": "What do the image-search records contribute to idea iteration?",
          "options": [
            "Confirmed lamp manufacturing dimensions",
            "Reference images and resolution information for research",
            "Final class constraints",
            "Approved machine procedures"
          ],
          "answerIndex": 1,
          "correctFeedback": "The task supports research evidence, not final technical or manufacturing decisions.",
          "incorrectFeedback": "Distinguish visual research information from dimensions, constraints and workshop procedures.",
          "source": "Drive file ID 1VmOGpI0qTXPmWWKYMRD8ewtJcGRQB1kpf_zQNSFwppQ"
        },
        {
          "theoryIndex": 2,
          "question": "Who confirms the final success criteria and project constraints?",
          "options": [
            "Each student working alone",
            "The first completed design idea",
            "The image-search website",
            "The class through discussion with the teacher"
          ],
          "answerIndex": 3,
          "correctFeedback": "The worksheet leaves criteria and constraints open for class agreement with teacher guidance.",
          "incorrectFeedback": "Review how the authorised introduction worksheet says these project requirements will be established.",
          "source": "Drive file ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE"
        }
      ],
      "written": [
        {
          "theoryIndex": 0,
          "title": "Image quality, resolution and design research · Evidence 1",
          "prompt": "Explain why recording resolution and design relevance improves image research.",
          "clarification": "Resolution tells me … Design relevance explains … Together, these records help me …",
          "model": "Resolution tells me the pixel dimensions of an image and helps me judge its visible detail. Design relevance explains which parts of the image may influence my idea. Together, these records help me compare references rather than choosing only by appearance.",
          "source": "Drive file ID 1VmOGpI0qTXPmWWKYMRD8ewtJcGRQB1kpf_zQNSFwppQ; NESA TE4-DES-01"
        },
        {
          "theoryIndex": 0,
          "title": "Image quality, resolution and design research · Evidence 2",
          "prompt": "Explain the difference between an inspiration image and a final manufacturable vector design.",
          "clarification": "An inspiration image is … A final vector design must … Before selection, I need to confirm …",
          "model": "An inspiration image is a reference that can help generate an idea. A final vector design must be developed and checked separately for the project. Before selection, I need to confirm that the imagery and final criteria are approved by the teacher.",
          "source": "Drive file IDs 1OmW9UvXZ44MtOGNVmq7THl65bglDtKBwJ4exdkAqWF8 and 1xBOBGVdnWhorJVeTTqZPw5yRNeWkF249; NESA TE4-PDP-01"
        },
        {
          "theoryIndex": 1,
          "title": "Vector design: outlines, layers and laser-ready simplicity · Evidence 1",
          "prompt": "Explain how layers improve the organisation of a vector design.",
          "clarification": "Layer 1 contains … Layer 2 contains … Separating them helps because …",
          "model": "Layer 1 contains the main base outline. Layer 2 contains added details such as text or smaller shapes. Separating them helps because each part is easier to inspect, edit and explain.",
          "source": "Week 3 Drive PDF ID 1xBOBGVdnWhorJVeTTqZPw5yRNeWkF249; NESA TE4-DES-01"
        },
        {
          "theoryIndex": 1,
          "title": "Vector design: outlines, layers and laser-ready simplicity · Evidence 2",
          "prompt": "Describe the checks you should complete before exporting the key-tag practice file.",
          "clarification": "I would check the layers for … I would inspect the paths to confirm … I would confirm the practice design …",
          "model": "I would check that the base shape and details are on clear layers. I would inspect the paths to confirm that outlines are closed where intended and details remain readable. I would confirm the practice design stays within 80 mm × 50 mm before teacher checking.",
          "source": "Week 3 Drive PDF ID 1xBOBGVdnWhorJVeTTqZPw5yRNeWkF249; NESA TE4-PPM-01 and TE4-DIG-02"
        },
        {
          "theoryIndex": 2,
          "title": "Iterating ideas and building success criteria · Evidence 1",
          "prompt": "Explain how one design idea could be improved through iteration.",
          "clarification": "The original idea includes … I would refine or combine … This change may improve …",
          "model": "The original idea includes a simple recognisable shape. I would refine the outline and combine it with a clearer light-effect idea. This change may improve the design’s appearance and make the idea easier to communicate.",
          "source": "Drive file ID 1OmW9UvXZ44MtOGNVmq7THl65bglDtKBwJ4exdkAqWF8; NESA TE4-PDP-01 and TE4-DES-01"
        },
        {
          "theoryIndex": 2,
          "title": "Iterating ideas and building success criteria · Evidence 2",
          "prompt": "Write one example of an observable success criterion and explain why it is useful.",
          "clarification": "The criterion could state … This can be observed by … It would help evaluation because …",
          "model": "The criterion could state that the finished solution has a neat and consistent appearance. This can be observed by examining its visible finish and construction. It would help evaluation because students could compare the result with an agreed expectation.",
          "source": "Drive file ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE; NESA TE4-DES-01"
        }
      ]
    },
    {
      "project": "Programmable Light",
      "projectModule": 3,
      "weeks": "5-6",
      "title": "Materials, production and sustainability",
      "summary": "Explain material choices, production ideas and sustainability while keeping practical gaps teacher-controlled.",
      "sections": [
        {
          "id": "3.1",
          "title": "Hardwood, softwood and a reasoned material choice",
          "theory": [
            "Hardwood and softwood identify botanical timber groups; the names do not guarantee how physically hard or soft a particular piece will be. Softwood comes from conifers such as pine, regardless of the timber’s actual softness. Australian Government forestry information notes that the anatomical classification commonly, but not always, produces softer and lighter timber.",
            "Comparing timber requires more than memorising its group. The Timber Production worksheet asks students to investigate tree type, growth speed, grain pattern, examples, uses, cost and sustainability. Its comparison table is blank, so it does not establish one approved description or prove that hardwood or softwood is always better.",
            "A reasoned material choice should connect evidence to the intended function. Relevant considerations may include the timber’s confirmed properties, workability, appearance, availability and sustainability evidence. Claims about cost, grain or performance must come from verified information about the actual timber, not from the hardwood or softwood label alone.",
            "The authorised Tool and Materials Identification Worksheet names radiata pine as the timber for the Programmable Lamp project. Radiata pine is a pine and therefore a softwood. Australia’s commercial softwood plantations are mainly radiata pine, and plantation forests are intentionally established and managed stands used for wood production.\nNaming radiata pine does not provide its stock dimensions, grade, finish, specific properties or approved selection rationale. Students should not claim that it was selected simply because all softwoods are cheap, fast-growing, light or easy to work. Those generalisations are not established by the project sources.",
            "A justified choice might explain that the supplied project information identifies radiata pine and then state which additional evidence must be confirmed before judging its suitability. This supports TE4-MSC-01, which examines how materials contribute to solutions, and TE4-SDP-01, which examines relationships between sustainability, design and production.",
            "Identify the timber’s botanical group, then separate confirmed facts from assumptions. Compare possible materials using evidence connected to the lamp base’s intended function. Record any missing information rather than inventing it. The teacher-approved stock, specification and final material rationale are Teacher to confirm."
          ],
          "takeaways": [
            "Hardwood and softwood are botanical groups and do not guarantee actual hardness.",
            "Radiata pine is the project timber named in the worksheet and is classified as a softwood.",
            "A material choice needs verified evidence about function, properties, workability, appearance, availability and sustainability."
          ],
          "boundary": "The primary Drive sources support the blank hardwood–softwood research comparison, the requirement to justify a possible lamp-base choice and the naming of radiata pine as the project timber. Official DAFF and ABARES information fills only the classification and plantation gaps: softwood comes from conifers such as pine, the label does not guarantee physical softness, radiata pine is Australia’s main commercial softwood plantation species, and plantation forests are intentionally established and managed stands. NESA outcomes support examining material contributions and sustainability relationships. No density, strength, growth rate, grain description, cost, grade, finish, stock dimension or final approved material rationale is established. Teacher to confirm the supplied stock, specification, required evidence and final project material choice.",
          "visual": {
            "image": "assets/visuals/theory-3-1.png",
            "alt": "Student marking a radiata-pine workpiece beside other pine pieces, clear acrylic and a progress notebook",
            "caption": "AI-generated material-reasoning prompt. It does not establish stock size, grade, finish, method or selection rationale."
          }
        },
        {
          "id": "3.2",
          "title": "Native forests, plantations and sustainable choices",
          "theory": [
            "A native forest is dominated by native tree species naturally associated with that location and growing within their natural range. A plantation is a deliberately established and intensively managed stand created by regularly planting seedlings or seeds. Commercial plantations are managed to produce wood. These terms describe different forest types; they do not, by themselves, prove whether a particular harvesting or management decision is sustainable.",
            "Sustainability means considering environmental, social and production effects over time. Relevant questions include where timber came from, how the forest was managed, whether trees will regenerate or be replanted, and how soil, water, habitats and communities may be affected. Forests support ecosystems and biodiversity, protect soil and water, and contribute to climate resilience. Australian forest management also operates through government systems and environmental law.",
            "The Timber Production worksheet asks students to investigate native forest logging, plantation forestry, possible plantation benefits, concerns about native forest harvesting, and disadvantages of relying only on plantation timber. It does not provide approved answers or declare either source automatically sustainable.",
            "Plantations can supply wood from stands established and managed for production. However, a plantation should not be called sustainable without evidence about its establishment, management, harvesting and regeneration. Native forests contain important ecological values, but describing timber as native-forest timber does not prove that every harvesting operation is harmful. The effects depend on the location, management decisions, protections and evidence available.",
            "A sound material decision therefore separates forest type from management practice. Students should investigate origin, management and regeneration instead of relying on labels alone. This supports TE4-SDP-01, which considers sustainability in design and production, and TE4-MSC-01, which considers how materials contribute to solutions.",
            "Identify whether evidence refers to a native forest, plantation or particular harvesting practice. Look for reliable information about origin, management, protection and regeneration. Avoid automatic claims that one source is always better. The Programmable Lamp timber’s actual origin and preferred sourcing decision are Teacher to confirm."
          ],
          "takeaways": [
            "Native forests and plantations are different forest types, not automatic measures of sustainability.",
            "Sustainable choices consider environmental, social and production effects across time.",
            "Timber origin, management and regeneration need evidence before a sourcing claim can be justified."
          ],
          "boundary": "The primary Drive worksheet supports investigation of native forest logging, plantation forestry, their possible benefits and concerns, sustainability comparisons and possible disadvantages of relying on one source. It supplies questions rather than approved answers. Official DAFF and ABARES sources fill only the definitions of native forest and plantation and the commercial wood-production purpose of plantations. DCCEEW supports the stated ecological values of forests and the role of management systems and environmental law. The missing sawmill video and its sequence are not used. No claim is made that all native forest harvesting is harmful, all plantations are sustainable, or any timber has certification. The project timber’s origin, management history, regeneration evidence and preferred sourcing decision are Teacher to confirm.",
          "visual": {
            "image": "assets/visuals/theory-3-2.png",
            "alt": "Radiata-pine pieces at different preparation stages with a clear acrylic offcut and evidence notebook",
            "caption": "AI-generated production prompt. The image cannot prove forest origin, management, certification or sustainability."
          }
        },
        {
          "id": "3.3",
          "title": "Planning timber production from drawing to evidence",
          "theory": [
            "A production plan turns drawing information into an organised proposal for making and checking a product. It should begin with evidence from the supplied drawing, not assumptions about how the lamp base might normally be constructed.",
            "The Programmable Lamp drawing shows an overall scale of 1:2 and some detail views at 1:1. These scales describe how the views are presented, while written dimensions represent intended real sizes. Students should follow written drawing information rather than measuring from a screen or resized print. Units may need to be converted between millimetres, centimetres and metres, but the chosen unit must remain clear and consistent.",
            "The drawing provides only three explicit process labels: “1 Cut First and Sand”, “2 Cut Second and Sand” and “3 Cut Third”. A proposed production sequence must preserve this order. It must not add unconfirmed tools, settings, dimensions, procedures or extra stages as though they came from the drawing. Where geometry, measurements or process details are unclear, students should record the uncertainty and seek teacher confirmation before practical work begins.",
            "The tools and materials worksheet identifies radiata pine and several project tools and materials. However, naming an item does not prove that it is required for a particular cut or stage. Tool allocation, supplied stock, practical methods and safety controls must be confirmed by the teacher.",
            "Useful checkpoints can be planned without inventing project facts. Before work, students can check the drawing title, scale, relevant view, units and teacher-confirmed instructions. During production, they can pause after an authorised stage to compare the developing work with the drawing. Evidence might include dated photographs, annotated drawing references, recorded measurements, brief observations and teacher-confirmed corrections.",
            "A cautious plan is therefore a proposed sequence supported by evidence. It helps organise work under TE4-PPM-01, maintain authorised safe practice under TE4-SAF-01, and communicate and evaluate decisions under TE4-DES-01. It does not replace teacher demonstration, approval or the missing practical sequence."
          ],
          "takeaways": [
            "Build the proposed sequence from confirmed drawing notes, not assumed workshop methods.",
            "Preserve the three labelled stages and record uncertainties before practical work.",
            "Use checkpoints and evidence to show how work was planned, checked and confirmed."
          ],
          "boundary": "The supplied evidence supports the drawing title, the overall 1:2 scale, some 1:1 details, the three explicit process labels, radiata pine as a named project material, unit conversion, and cautious planning, safety and design communication under TE4-PPM-01, TE4-SAF-01 and TE4-DES-01. It does not establish complete geometry, stock sizes, tolerances, settings, stage-specific tool allocation, workshop procedures, additional safety rules, a sawmill order, assessment information or the absent Weeks 4–10 practical sequence. All unclear dimensions and geometry, supplied stock, tools, methods, checkpoints, evidence requirements and the final authorised production sequence remain Teacher to confirm.",
          "visual": {
            "image": "assets/visuals/theory-3-3.png",
            "alt": "Student using a steel rule, pencil and set square while reading a deliberately unreadable technical drawing",
            "caption": "AI-generated planning prompt. The verified Programmable Lamp PDF controls every visible drawing fact and teacher direction controls practical work."
          }
        }
      ],
      "checks": [
        {
          "theoryIndex": 0,
          "question": "What do the terms hardwood and softwood mainly describe?",
          "options": [
            "Guaranteed timber strength",
            "Botanical timber groups",
            "The price of the timber",
            "The required surface finish"
          ],
          "answerIndex": 1,
          "correctFeedback": "These terms classify timber by botanical origin rather than guaranteeing its physical hardness.",
          "incorrectFeedback": "Separate the timber’s classification from properties such as strength, cost and surface condition.",
          "source": "Australian Government DAFF forestry glossary"
        },
        {
          "theoryIndex": 0,
          "question": "Which statement about softwood is correct?",
          "options": [
            "It is wood from conifers such as pine",
            "It is always softer than every hardwood",
            "It must come from native forest",
            "It always has the same grain pattern"
          ],
          "answerIndex": 0,
          "correctFeedback": "Softwood is classified as wood from conifers, regardless of its actual physical softness.",
          "incorrectFeedback": "Look for the botanical definition rather than an unsupported claim about hardness, source or appearance.",
          "source": "Australian Government DAFF forestry glossary"
        },
        {
          "theoryIndex": 0,
          "question": "Why does the name “softwood” not prove actual softness?",
          "options": [
            "Timber names are selected by students",
            "Softwood refers only to timber colour",
            "The category is anatomical and exceptions occur",
            "Every softwood is manufactured material"
          ],
          "answerIndex": 2,
          "correctFeedback": "The classification commonly, but not always, corresponds with softer or lighter timber.",
          "incorrectFeedback": "Consider whether a botanical category can guarantee one physical property in every species and piece.",
          "source": "Australian Government DAFF forestry glossary"
        },
        {
          "theoryIndex": 0,
          "question": "Which timber is named for the Programmable Lamp project?",
          "options": [
            "Tasmanian oak",
            "Blackbutt",
            "Hoop pine",
            "Radiata pine"
          ],
          "answerIndex": 3,
          "correctFeedback": "Radiata pine appears in the authorised Tool and Materials Identification Worksheet.",
          "incorrectFeedback": "Return to the project material list rather than choosing another Australian timber example.",
          "source": "Drive file ID 1UnXP8FYDHNQsgOaRS036CZhLTCW9UXeoZC56gJbL2Tg"
        },
        {
          "theoryIndex": 0,
          "question": "How is radiata pine classified?",
          "options": [
            "As a softwood",
            "As a hardwood",
            "As an acrylic",
            "As a timber finish"
          ],
          "answerIndex": 0,
          "correctFeedback": "Radiata pine belongs to the pine group and is classified as a softwood.",
          "incorrectFeedback": "Apply the botanical definition of softwood to the named project timber.",
          "source": "Drive file ID 1UnXP8FYDHNQsgOaRS036CZhLTCW9UXeoZC56gJbL2Tg; Australian Government DAFF forestry glossary"
        },
        {
          "theoryIndex": 0,
          "question": "Which factor should contribute to a reasoned material choice?",
          "options": [
            "Whether the timber has the shortest name",
            "Whether another student prefers it",
            "Its intended function and verified properties",
            "Whether it is labelled hardwood"
          ],
          "answerIndex": 2,
          "correctFeedback": "Material selection should connect reliable evidence about the timber to the solution’s intended function.",
          "incorrectFeedback": "Choose the factor that links evidence about the material to what the product must do.",
          "source": "Drive file ID 1dTRa-pimCafVnV_V7H0I16M_8Wn32-b7C_4NIXbfmaM; NESA TE4-MSC-01"
        },
        {
          "theoryIndex": 0,
          "question": "What does the Timber Production worksheet establish about the better lamp-base timber group?",
          "options": [
            "Hardwood is always better",
            "It asks students to research and justify a decision",
            "Softwood is always better",
            "Both groups have identical properties"
          ],
          "answerIndex": 1,
          "correctFeedback": "The worksheet poses the comparison question but does not supply an approved answer.",
          "incorrectFeedback": "Distinguish a blank research question from a source that has already decided the result.",
          "source": "Drive file ID 1dTRa-pimCafVnV_V7H0I16M_8Wn32-b7C_4NIXbfmaM"
        },
        {
          "theoryIndex": 0,
          "question": "What is a plantation forest?",
          "options": [
            "Any group of trees beside a workshop",
            "Only a naturally occurring native forest",
            "A collection of timber stored for sale",
            "An intentionally established and managed stand of trees"
          ],
          "answerIndex": 3,
          "correctFeedback": "Plantation forests are deliberately established and managed, including for commercial wood production.",
          "incorrectFeedback": "Focus on how the forest stand is established and managed rather than where processed timber is stored.",
          "source": "ABARES/DAFF Indicator 2.1b (2024)"
        },
        {
          "theoryIndex": 0,
          "question": "Which claim should a student avoid without supporting evidence?",
          "options": [
            "Radiata pine is named in the project worksheet",
            "Pine is classified as softwood",
            "All softwoods are cheaper and easier to work",
            "Material choice should consider intended function"
          ],
          "answerIndex": 2,
          "correctFeedback": "The sources do not prove that every softwood shares the same cost or workability.",
          "incorrectFeedback": "Find the statement that turns a botanical category into an unsupported universal property claim.",
          "source": "Drive file IDs 1dTRa-pimCafVnV_V7H0I16M_8Wn32-b7C_4NIXbfmaM and 1UnXP8FYDHNQsgOaRS036CZhLTCW9UXeoZC56gJbL2Tg"
        },
        {
          "theoryIndex": 0,
          "question": "What remains to be confirmed for the project timber?",
          "options": [
            "Whether radiata pine is a pine",
            "The teacher-approved stock, specification and selection rationale",
            "Whether the project includes a lamp base",
            "Whether timber is a material"
          ],
          "answerIndex": 1,
          "correctFeedback": "The worksheet names radiata pine but does not provide these exact project details.",
          "incorrectFeedback": "Identify the practical selection information missing from the authorised material list.",
          "source": "Drive file ID 1UnXP8FYDHNQsgOaRS036CZhLTCW9UXeoZC56gJbL2Tg"
        },
        {
          "theoryIndex": 1,
          "question": "What best describes a native forest?",
          "options": [
            "A stand planted only for commercial timber",
            "A forest dominated by native species associated with that location",
            "Any forest containing one native tree",
            "A forest that can never be harvested"
          ],
          "answerIndex": 1,
          "correctFeedback": "Native forests are defined by native tree species occurring within their natural location and range.",
          "incorrectFeedback": "Focus on the species and their natural relationship to the location, not on one management decision.",
          "source": "DAFF/ABARES Indicator 1.1a.i"
        },
        {
          "theoryIndex": 1,
          "question": "What is a plantation?",
          "options": [
            "An intensively managed stand established by placing seedlings or seeds",
            "Any naturally regenerated native forest",
            "A timber storage area beside a sawmill",
            "A forest that contains only softwood trees"
          ],
          "answerIndex": 0,
          "correctFeedback": "Plantations are deliberately established stands and may contain native or exotic tree species.",
          "incorrectFeedback": "Look for the definition based on deliberate establishment and management rather than species type alone.",
          "source": "DAFF forestry glossary; ABARES Indicator 2.1b"
        },
        {
          "theoryIndex": 1,
          "question": "What are commercial plantations managed to produce?",
          "options": [
            "Only wildlife habitat",
            "Finished furniture",
            "Wood for commercial production",
            "Unmanaged natural regeneration"
          ],
          "answerIndex": 2,
          "correctFeedback": "Commercial plantations are managed to supply logs used in producing wood products.",
          "incorrectFeedback": "Distinguish growing and supplying timber from manufacturing a finished product.",
          "source": "DAFF forestry glossary; ABARES Indicator 2.1b"
        },
        {
          "theoryIndex": 1,
          "question": "Why does the label “plantation timber” not automatically prove sustainability?",
          "options": [
            "Plantations never contain trees",
            "All plantations use identical management",
            "Sustainability applies only to native forests",
            "Evidence about management, harvesting and regeneration is still required"
          ],
          "answerIndex": 3,
          "correctFeedback": "Forest type alone does not reveal all environmental, social and production effects.",
          "incorrectFeedback": "Consider what additional evidence is needed beyond knowing how the forest was established.",
          "source": "Drive file ID 1dTRa-pimCafVnV_V7H0I16M_8Wn32-b7C_4NIXbfmaM; NESA TE4-SDP-01"
        },
        {
          "theoryIndex": 1,
          "question": "Which information is useful when judging a timber source?",
          "options": [
            "Origin, management and regeneration evidence",
            "Whether its name sounds environmentally friendly",
            "Whether another student selected it",
            "The colour of the worksheet"
          ],
          "answerIndex": 0,
          "correctFeedback": "These details help evaluate how timber production may affect environments and future supply.",
          "incorrectFeedback": "Choose evidence that explains where the timber came from and what happens before and after harvesting.",
          "source": "Drive file ID 1dTRa-pimCafVnV_V7H0I16M_8Wn32-b7C_4NIXbfmaM; NESA TE4-SDP-01"
        },
        {
          "theoryIndex": 1,
          "question": "Which statement about native forest harvesting is supported?",
          "options": [
            "It is always environmentally harmless",
            "Its effects depend on location, management and protections",
            "It is automatically less sustainable than every plantation",
            "It occurs without environmental regulation"
          ],
          "answerIndex": 1,
          "correctFeedback": "A balanced judgement requires evidence about the particular operation and its management context.",
          "incorrectFeedback": "Avoid absolute claims and consider how the consequences may vary between locations and management systems.",
          "source": "DCCEEW Forests; Drive file ID 1dTRa-pimCafVnV_V7H0I16M_8Wn32-b7C_4NIXbfmaM"
        },
        {
          "theoryIndex": 1,
          "question": "Which is an ecological value supported by forests?",
          "options": [
            "Automatic product certification",
            "Guaranteed low timber prices",
            "Soil and water protection",
            "Identical timber properties"
          ],
          "answerIndex": 2,
          "correctFeedback": "Forests contribute to protecting soil and water as well as supporting ecosystems and biodiversity.",
          "incorrectFeedback": "Identify the environmental function rather than a commercial or material claim unsupported by forest type.",
          "source": "DCCEEW Forests"
        },
        {
          "theoryIndex": 1,
          "question": "What should students separate when comparing timber sources?",
          "options": [
            "Tree colour from timber length",
            "Project work from classroom discussion",
            "Sustainability from evidence",
            "Forest type from management and harvesting decisions"
          ],
          "answerIndex": 3,
          "correctFeedback": "A forest category does not fully explain how a particular area is managed or harvested.",
          "incorrectFeedback": "Think about the difference between what a forest is and what people decide to do within it.",
          "source": "DAFF/ABARES forest reporting; NESA TE4-SDP-01"
        },
        {
          "theoryIndex": 1,
          "question": "What does the Timber Production worksheet provide about the most sustainable method?",
          "options": [
            "A question for students to investigate and justify",
            "Proof that plantations are always best",
            "Proof that native forests should never be used",
            "A confirmed answer for the lamp project"
          ],
          "answerIndex": 0,
          "correctFeedback": "The worksheet raises research questions but leaves the comparison and conclusion blank.",
          "incorrectFeedback": "Distinguish an investigation prompt from an authorised conclusion or project decision.",
          "source": "Drive file ID 1dTRa-pimCafVnV_V7H0I16M_8Wn32-b7C_4NIXbfmaM"
        },
        {
          "theoryIndex": 1,
          "question": "What remains unconfirmed for the Programmable Lamp timber?",
          "options": [
            "Whether forests contain trees",
            "Whether commercial plantations produce wood",
            "Its actual source and the preferred sourcing decision",
            "Whether sustainability can involve environmental effects"
          ],
          "answerIndex": 2,
          "correctFeedback": "The authorised sources do not identify where the supplied project timber was grown or sourced.",
          "incorrectFeedback": "Identify the project-specific information that cannot be established from general forestry definitions.",
          "source": "Drive file ID 1dTRa-pimCafVnV_V7H0I16M_8Wn32-b7C_4NIXbfmaM; NESA TE4-MSC-01"
        },
        {
          "theoryIndex": 2,
          "question": "What should be the starting point for a timber production plan?",
          "options": [
            "A sequence remembered from another project",
            "Confirmed evidence from the supplied drawing",
            "The tools currently available on a bench",
            "An assumed method for making a lamp base"
          ],
          "answerIndex": 1,
          "correctFeedback": "A production plan should begin with verified drawing information rather than habits or assumptions from unrelated work.",
          "incorrectFeedback": "Identify which option comes directly from the authorised project information before any practical method is proposed.",
          "source": "Programmable Lamp drawing, Drive ID 1I5PiH8vw7PerhH0PgMeWYkltm6z1rVNZ; TE4-PPM-01"
        },
        {
          "theoryIndex": 2,
          "question": "What does the overall scale of 1:2 describe?",
          "options": [
            "The view is presented at half the intended real size",
            "Every written dimension must be divided by two",
            "Two identical lamp bases must be produced",
            "The timber is twice its required thickness"
          ],
          "answerIndex": 0,
          "correctFeedback": "Scale describes the relationship between the displayed view and the real object, not a change to written dimensions.",
          "incorrectFeedback": "Separate the printed size of the view from the real-size information communicated by written dimensions.",
          "source": "Programmable Lamp drawing, Drive ID 1I5PiH8vw7PerhH0PgMeWYkltm6z1rVNZ"
        },
        {
          "theoryIndex": 2,
          "question": "Which sequence preserves all three explicit process labels?",
          "options": [
            "Cut first, cut second, sand third",
            "Sand first, cut second, cut third",
            "Cut first and sand, cut second and sand, cut third",
            "Cut third, cut first and sand, cut second and sand"
          ],
          "answerIndex": 2,
          "correctFeedback": "This order reproduces the only three process labels explicitly supplied by the authorised drawing.",
          "incorrectFeedback": "Follow the numbering exactly and retain the sanding instruction attached to each labelled stage.",
          "source": "Programmable Lamp drawing, Drive ID 1I5PiH8vw7PerhH0PgMeWYkltm6z1rVNZ"
        },
        {
          "theoryIndex": 2,
          "question": "What should a student do when a feature or measurement is unclear?",
          "options": [
            "Choose the most convenient interpretation",
            "Copy another student’s planned dimension",
            "Measure the feature from the computer screen",
            "Record the uncertainty and seek teacher confirmation"
          ],
          "answerIndex": 3,
          "correctFeedback": "Recording uncertainty prevents an unsupported interpretation from becoming part of the practical plan.",
          "incorrectFeedback": "Select the response that protects accuracy without guessing, copying or measuring a potentially resized view.",
          "source": "Programmable Lamp drawing, Drive ID 1I5PiH8vw7PerhH0PgMeWYkltm6z1rVNZ; TE4-DES-01"
        },
        {
          "theoryIndex": 2,
          "question": "What does the tools and materials worksheet confirm about radiata pine?",
          "options": [
            "It is named as the project timber",
            "Its exact stock dimensions",
            "The tool required for every cut",
            "Its approved surface finish"
          ],
          "answerIndex": 0,
          "correctFeedback": "The worksheet identifies radiata pine but does not provide its stock size, finish or complete processing method.",
          "incorrectFeedback": "Distinguish the naming of a material from missing details about its specification and use.",
          "source": "Tool & Materials Identification Worksheet, Drive ID 1UnXP8FYDHNQsgOaRS036CZhLTCW9UXeoZC56gJbL2Tg"
        },
        {
          "theoryIndex": 2,
          "question": "Why must tools not be assigned automatically to individual cuts?",
          "options": [
            "Tools cannot be listed in production plans",
            "A named tool does not prove its use at a particular stage",
            "Every cut must use the same tool",
            "Students should select tools without teacher guidance"
          ],
          "answerIndex": 1,
          "correctFeedback": "Tool identification and tool allocation are different; the authorised source does not connect each tool to a specific cut.",
          "incorrectFeedback": "Consider whether a general equipment list provides enough evidence for a stage-specific practical decision.",
          "source": "Tool & Materials Identification Worksheet, Drive ID 1UnXP8FYDHNQsgOaRS036CZhLTCW9UXeoZC56gJbL2Tg; TE4-SAF-01"
        },
        {
          "theoryIndex": 2,
          "question": "Which action is an appropriate pre-production checkpoint?",
          "options": [
            "Inventing a tolerance for each dimension",
            "Selecting machine settings from memory",
            "Confirming the drawing title, scale, view and units",
            "Completing an unverified sawmill sequence"
          ],
          "answerIndex": 2,
          "correctFeedback": "These checks use available drawing and measurement evidence without adding unsupported manufacturing information.",
          "incorrectFeedback": "Choose the checkpoint that verifies supplied information rather than inventing missing technical details.",
          "source": "Programmable Lamp drawing, Drive ID 1I5PiH8vw7PerhH0PgMeWYkltm6z1rVNZ; Measurement Conversions, Drive ID 11YSs1RBYTnC7FDGHhgTLyq6KgQyJDdErOZrAr5Lnl1k"
        },
        {
          "theoryIndex": 2,
          "question": "Which item could provide useful production evidence?",
          "options": [
            "An undocumented change made during practical work",
            "A guessed dimension written after production",
            "A copied sequence from an unrelated project",
            "A dated photograph linked to a confirmed stage"
          ],
          "answerIndex": 3,
          "correctFeedback": "A dated, stage-linked photograph can show what was completed and when the checkpoint occurred.",
          "incorrectFeedback": "Look for evidence that records the authorised process clearly rather than disguising assumptions or changes.",
          "source": "Programmable Lamp drawing, Drive ID 1I5PiH8vw7PerhH0PgMeWYkltm6z1rVNZ; TE4-PPM-01 and TE4-DES-01"
        },
        {
          "theoryIndex": 2,
          "question": "Why is the sawmill-order activity unsuitable as a project production sequence?",
          "options": [
            "Its linked video and verified order are unavailable",
            "It contains too few timber terms",
            "It applies only to acrylic production",
            "It confirms every lamp construction stage"
          ],
          "answerIndex": 0,
          "correctFeedback": "Without the identified video or an approved order, the sawmill terms cannot support an invented sequence.",
          "incorrectFeedback": "Consider whether a list of terms alone establishes their order or connects them to lamp production.",
          "source": "Timber Production worksheet, Drive ID 1dTRa-pimCafVnV_V7H0I16M_8Wn32-b7C_4NIXbfmaM"
        },
        {
          "theoryIndex": 2,
          "question": "What is the correct status of a student production plan before teacher approval?",
          "options": [
            "A complete workshop procedure",
            "A proposed sequence supported by available evidence",
            "Permission to begin using equipment",
            "A replacement for teacher demonstration"
          ],
          "answerIndex": 1,
          "correctFeedback": "The plan organises confirmed information but remains subject to teacher checking, demonstration and authorisation.",
          "incorrectFeedback": "Distinguish planning evidence from practical permission and authorised workshop instruction.",
          "source": "Programmable Lamp drawing, Drive ID 1I5PiH8vw7PerhH0PgMeWYkltm6z1rVNZ; TE4-PPM-01 and TE4-SAF-01"
        }
      ],
      "written": [
        {
          "theoryIndex": 0,
          "title": "Hardwood, softwood and a reasoned material choice · Evidence 1",
          "prompt": "Explain why the term softwood does not guarantee that timber will be physically soft.",
          "clarification": "Softwood describes … It does not guarantee … Therefore, I should check …",
          "model": "Softwood describes timber from conifers such as pine. It does not guarantee that every piece will have the same physical hardness. Therefore, I should check verified properties of the actual timber before judging its suitability.",
          "source": "Australian Government DAFF forestry glossary; NESA TE4-MSC-01"
        },
        {
          "theoryIndex": 0,
          "title": "Hardwood, softwood and a reasoned material choice · Evidence 2",
          "prompt": "Give a source-grounded explanation of the project’s timber choice without inventing a rationale.",
          "clarification": "The project worksheet names … This timber is classified as … Before judging its suitability, I need …",
          "model": "The project worksheet names radiata pine for the lamp. This timber is classified as a softwood because it is a pine. Before judging its suitability, I need confirmed information about the supplied stock, its properties and the teacher-approved selection rationale.",
          "source": "Drive file IDs 1UnXP8FYDHNQsgOaRS036CZhLTCW9UXeoZC56gJbL2Tg and 1dTRa-pimCafVnV_V7H0I16M_8Wn32-b7C_4NIXbfmaM; Australian Government DAFF forestry glossary"
        },
        {
          "theoryIndex": 1,
          "title": "Native forests, plantations and sustainable choices · Evidence 1",
          "prompt": "Explain why plantation timber should not automatically be called sustainable.",
          "clarification": "A plantation is … Sustainability also depends on … Therefore, I would look for …",
          "model": "A plantation is a deliberately established and managed stand of trees. Sustainability also depends on environmental, social and production effects over time. Therefore, I would look for evidence about its origin, management, harvesting and regeneration.",
          "source": "DAFF forestry glossary; ABARES Indicator 2.1b; NESA TE4-SDP-01"
        },
        {
          "theoryIndex": 1,
          "title": "Native forests, plantations and sustainable choices · Evidence 2",
          "prompt": "Compare native forests and plantations without declaring one automatically better.",
          "clarification": "A native forest contains … A plantation is established by … A fair comparison requires …",
          "model": "A native forest contains native species naturally associated with its location. A plantation is deliberately established by planting seedlings or seeds. A fair comparison requires evidence about ecological values, management, timber production and regeneration.",
          "source": "DAFF/ABARES Indicator 1.1a.i and Indicator 2.1b; DCCEEW Forests"
        },
        {
          "theoryIndex": 2,
          "title": "Planning timber production from drawing to evidence · Evidence 1",
          "prompt": "Explain how you would create a cautious proposed sequence from the supplied drawing.",
          "clarification": "First, I would identify … I would preserve the order … Before practical work, I would confirm …",
          "model": "First, I would identify the drawing title, scales, units and written process notes. I would preserve the order “Cut First and Sand”, “Cut Second and Sand” and “Cut Third”. Before practical work, I would confirm unclear geometry, dimensions, tools and methods with the teacher.",
          "source": "Programmable Lamp drawing, Drive ID 1I5PiH8vw7PerhH0PgMeWYkltm6z1rVNZ; TE4-PPM-01"
        },
        {
          "theoryIndex": 2,
          "title": "Planning timber production from drawing to evidence · Evidence 2",
          "prompt": "Describe evidence that could show a production stage was checked rather than assumed.",
          "clarification": "My evidence could include … I would connect it to … Any uncertainty would be …",
          "model": "My evidence could include a dated photograph, a recorded measurement and an annotated observation. I would connect it to the relevant drawing view and confirmed stage. Any uncertainty would be recorded and referred to the teacher before further practical work.",
          "source": "Programmable Lamp drawing, Drive ID 1I5PiH8vw7PerhH0PgMeWYkltm6z1rVNZ; Measurement Conversions, Drive ID 11YSs1RBYTnC7FDGHhgTLyq6KgQyJDdErOZrAr5Lnl1k; TE4-DES-01"
        }
      ]
    },
    {
      "project": "Programmable Light",
      "projectModule": 4,
      "weeks": "7-8",
      "title": "Coding and digital systems",
      "summary": "Use coding concepts and system thinking before following teacher-authorised electronics instructions.",
      "sections": [
        {
          "id": "4.1",
          "title": "Coding language: algorithms, sequencing and syntax",
          "theory": [
            "Coding is the process of writing instructions in a programming language so that a digital system can carry out an intended behaviour. Before writing language-specific code, a designer needs to understand what the system should do and how the instructions should be organised.",
            "An algorithm is a clear set of steps for completing a task or producing a result. It can be written in ordinary human-readable language before any programming language is chosen. For the Programmable Lamp, an algorithm could describe the intended light behaviour as ordered actions without naming hardware connections, timings or code commands.",
            "Sequencing means arranging instructions in the correct order. Order matters because changing the sequence may change the result. A designer should identify what happens first, what follows and when the planned behaviour ends or repeats. This ordered explanation can then be reviewed before it is translated into code.",
            "Syntax means the rules for writing instructions correctly in a particular programming language. Different languages may use different words, symbols and structures. An algorithm can remain understandable to people even when the final programming language has not been confirmed, but actual code must follow the syntax of the selected language.",
            "The Programmable Lamp combines code, electronics, light and physical design. The supplied materials list names an Arduino Uno, USB cable, jumper wires and an RGB LED strip. However, these items do not establish the programming language, circuit, hardware configuration or instructions needed to control the light.",
            "A cautious coding process begins by deciding the intended behaviour, describing it as an algorithm and checking that the sequence is clear. Translation into code should occur only after the teacher confirms the programming language and hardware configuration. Students can then communicate and review whether the coded behaviour matches the intended design.",
            "This supports TE4-DIG-02, which develops technological literacy in digital environments, and TE4-DES-01, which involves communicating and evaluating design ideas and solutions. Variables, loops and conditionals are identified for later investigation, but their approved meanings and project use are not established by the blank worksheet."
          ],
          "takeaways": [
            "An algorithm describes clear steps before language-specific code is written.",
            "Sequencing places instructions in an order that supports the intended result.",
            "Syntax is specific to a programming language and must follow its writing rules."
          ],
          "boundary": "The supplied Drive evidence supports coding as instructions written in a programming language; investigation of algorithm, sequencing, syntax, variable, loop and conditional; and the integration of code, electronics, light and design in the Programmable Lamp. It also confirms that an Arduino Uno, USB cable, jumper wires and RGB LED strip are named components. The blank vocabulary spaces do not provide approved definitions beyond the concepts taught in this section, and the sources do not specify actual code, pseudocode settings, programming language, wiring, pins, voltage, libraries, RGB strip type, input devices, practical procedures, safety requirements or assessment information. The approved meanings and later use of variables, loops and conditionals, together with the programming language, hardware configuration and coding process, remain Teacher to confirm.",
          "visual": {
            "image": "assets/visuals/theory-4-1.png",
            "alt": "Student working beside a laptop, Arduino-style controller, glowing RGB LED strip and blank test table",
            "caption": "AI-generated coding-and-test prompt. No readable code, language, timing, pin or wiring value is supplied by the image."
          }
        },
        {
          "id": "4.2",
          "title": "Variables, loops and conditionals for light behaviour",
          "theory": [
            "A programmable system needs ways to represent information, repeat actions and choose between possible actions. Variables, loops and conditionals help organise these behaviours. The authorised coding worksheet identifies all three terms for investigation, but its blank spaces do not provide approved definitions or confirm how they will be used in the Programmable Lamp.",
            "A variable is a named place or value used to represent information that may change while a program operates. Conceptually, a lamp plan might use changing information to represent part of its intended light behaviour. However, the actual variable names, types and values depend on the teacher-confirmed programming language and project configuration.",
            "A loop repeats an instruction or group of instructions under an approved rule. Repetition can help describe a light behaviour that continues or occurs again rather than being written as many separate instructions. The number of repetitions, stopping rule and any timing must be confirmed before language-specific code is developed.",
            "A conditional selects an action depending on whether a stated condition is met. It allows a system to make a controlled choice between possible behaviours. For example, an algorithm might state conceptually that one light action occurs when an approved condition is met and another action occurs when it is not. The project sources do not identify the condition, input or device that would provide this information.",
            "The official Arduino Language Reference organises its language information into functions, values including variables and constants, and structure. This supports the general idea that stored values and program structures contribute to organised digital behaviour, but it does not establish the project’s exact code.",
            "For the Programmable Lamp, students should first communicate the intended behaviour in language-neutral terms. They can identify what information may change, what actions may repeat and what decisions may be required. Translation into code should occur only after the teacher confirms the language, hardware arrangement and control rules. This supports TE4-DIG-02, which involves using data and digital systems to code, design and produce projects, and TE4-DES-01, which involves communicating and evaluating design ideas and solutions."
          ],
          "takeaways": [
            "A variable represents named information that may change.",
            "A loop repeats instructions according to an approved rule.",
            "A conditional selects an action depending on whether a condition is met."
          ],
          "boundary": "The Drive sources support variable, loop and conditional as intended coding topics; the integration of code, electronics, light and design; and the naming of an Arduino Uno and RGB LED strip. They do not provide approved definitions, code or project-specific control rules. The official Arduino Language Reference fills only the broad organisation of Arduino language information into functions, values including variables and constants, and structure. The actual variable names, data types, values, repetitions, stopping rules, timings, conditions, sensor or input, language syntax, wiring, pins, voltage, libraries, RGB strip type and hardware configuration remain Teacher to confirm.",
          "visual": {
            "image": "assets/visuals/theory-4-2.png",
            "alt": "Programmable-light test setup with blurred code, controller, RGB output and an empty observation table",
            "caption": "AI-generated control-flow prompt. Variable names, loop rules, conditions and timing remain Teacher to confirm."
          }
        },
        {
          "id": "4.3",
          "title": "Connecting code, controller and light as a system",
          "theory": [
            "A system is a group of related components that work together for a purpose. In the Programmable Lamp, the confirmed project idea combines code, electronics, light and physical design. Each part has a different role, but the sources do not yet provide the exact configuration that connects them.",
            "The intended behaviour begins with instructions. These instructions may first be planned as an algorithm or ordered sequence, then translated into code using teacher-confirmed syntax. The instructions describe what the system is intended to do, but they are not a physical component.",
            "The Arduino Uno is the named controller. A controller processes instructions and helps coordinate the behaviour of a digital system. The RGB LED strip is the named light-producing output because it is the component intended to produce visible light. The USB cable and jumper wires are named supporting connection materials. Their presence confirms that connections are part of the project, but it does not show exactly how they are used.",
            "Information flow can be described cautiously as: planned instructions are processed by the controller, and the controller influences the light output. This explanation identifies system roles without inventing a circuit, signal type, input device or power arrangement.",
            "A block diagram can communicate this relationship using simple labelled boxes and arrows. A suitable conceptual diagram is:",
            "confirmed control/input — controller — light output",
            "The controller block can be labelled Arduino Uno, and the light-output block can be labelled RGB LED strip. The first block must remain Teacher to confirm because the sources do not identify a sensor, switch, user control or other input method.",
            "Students should distinguish between a role, a physical component and an unconfirmed configuration. “Controller” is a role; “Arduino Uno” is the named component filling that role; its exact wiring and operation remain unconfirmed. This supports TE4-MSC-01, TE4-DIG-02 and TE4-DES-01 by explaining component contributions, digital-system behaviour and clear communication of design ideas."
          ],
          "takeaways": [
            "A system contains related components working together for a purpose.",
            "Instructions are processed by the Arduino Uno to influence the RGB LED strip’s light output.",
            "Component roles are confirmed, but the exact configuration and control method are not."
          ],
          "boundary": "The Drive evidence supports the Programmable Lamp as a system integrating code, electronics, light and design; instructions as planned behaviour; the Arduino Uno as the named controller; the RGB LED strip as the named light-producing output; and the USB cable and jumper wires as named supporting connection materials. It also supports algorithm, sequence and related coding vocabulary as topics for investigation. The sources do not establish a sensor, switch, user input, circuit, pins, voltage, signal type, library, RGB strip type, power arrangement, wiring method, code, timing, light values, safety procedure, practical sequence or assessment information. The first block in any system diagram, the exact component configuration and all operating details remain Teacher to confirm.",
          "visual": {
            "image": "assets/visuals/theory-4-3.png",
            "alt": "Controller connected in a tidy low-voltage test scene to a glowing RGB strip and clear acrylic light",
            "caption": "AI-generated system prompt. It illustrates roles only and does not authorise or specify connections, pins, voltage or code."
          }
        }
      ],
      "checks": [
        {
          "theoryIndex": 0,
          "question": "What is coding?",
          "options": [
            "Measuring electronic components",
            "Writing instructions in a programming language",
            "Drawing the lamp base",
            "Connecting any available hardware"
          ],
          "answerIndex": 1,
          "correctFeedback": "Coding communicates instructions that a digital system can follow to produce an intended behaviour.",
          "incorrectFeedback": "Focus on the activity involving written digital instructions rather than construction or hardware assembly.",
          "source": "What is coding worksheet, Drive ID 1aEDElMGsxxIcAo-rCDUe49_leQwztNNdOh2PIEp_e2k"
        },
        {
          "theoryIndex": 0,
          "question": "What is an algorithm?",
          "options": [
            "A clear set of steps for completing a task",
            "A confirmed hardware circuit",
            "A type of USB cable",
            "A programming error"
          ],
          "answerIndex": 0,
          "correctFeedback": "An algorithm organises the actions needed to reach a result before language-specific coding begins.",
          "incorrectFeedback": "Look for the option describing an ordered method rather than equipment or a fault.",
          "source": "What is coding worksheet, Drive ID 1aEDElMGsxxIcAo-rCDUe49_leQwztNNdOh2PIEp_e2k; TE4-DIG-02"
        },
        {
          "theoryIndex": 0,
          "question": "Why can an algorithm be written before a programming language is confirmed?",
          "options": [
            "Algorithms contain approved pin numbers",
            "Every language uses identical syntax",
            "Algorithms can describe steps in human-readable language",
            "Algorithms automatically operate hardware"
          ],
          "answerIndex": 2,
          "correctFeedback": "A human-readable algorithm communicates the intended process without depending on one programming language.",
          "incorrectFeedback": "Separate a general explanation of steps from instructions written for a particular digital system.",
          "source": "What is coding worksheet, Drive ID 1aEDElMGsxxIcAo-rCDUe49_leQwztNNdOh2PIEp_e2k; TE4-DES-01"
        },
        {
          "theoryIndex": 0,
          "question": "What does sequencing involve?",
          "options": [
            "Selecting a timber species",
            "Naming electronic components",
            "Correcting the lamp drawing scale",
            "Arranging instructions in the intended order"
          ],
          "answerIndex": 3,
          "correctFeedback": "Sequencing establishes what occurs first, what follows and how the planned behaviour progresses.",
          "incorrectFeedback": "Identify the concept concerned with order rather than materials, hardware names or drawing information.",
          "source": "What is coding worksheet, Drive ID 1aEDElMGsxxIcAo-rCDUe49_leQwztNNdOh2PIEp_e2k"
        },
        {
          "theoryIndex": 0,
          "question": "Why can changing an instruction sequence affect the result?",
          "options": [
            "Instructions may occur at different stages or in the wrong order",
            "The Arduino Uno changes into another component",
            "The programming language becomes unnecessary",
            "The drawing scale changes automatically"
          ],
          "answerIndex": 0,
          "correctFeedback": "Digital behaviour depends on instructions being carried out in an order that matches the intended process.",
          "incorrectFeedback": "Consider how changing which action occurs first or next could alter the planned behaviour.",
          "source": "What is coding worksheet, Drive ID 1aEDElMGsxxIcAo-rCDUe49_leQwztNNdOh2PIEp_e2k; TE4-DIG-02"
        },
        {
          "theoryIndex": 0,
          "question": "What is syntax?",
          "options": [
            "The physical arrangement of jumper wires",
            "The rules for writing instructions in a particular programming language",
            "The visible colour of the lamp",
            "The order of timber production"
          ],
          "answerIndex": 1,
          "correctFeedback": "Syntax controls how words, symbols and structures must be written in the selected language.",
          "incorrectFeedback": "Look for rules governing written code rather than physical construction or design appearance.",
          "source": "What is coding worksheet, Drive ID 1aEDElMGsxxIcAo-rCDUe49_leQwztNNdOh2PIEp_e2k"
        },
        {
          "theoryIndex": 0,
          "question": "Which statement correctly distinguishes an algorithm from code?",
          "options": [
            "An algorithm must use the final programming syntax",
            "Code can be written without any language",
            "An algorithm describes steps, while code translates them into a programming language",
            "They are always identical documents"
          ],
          "answerIndex": 2,
          "correctFeedback": "The algorithm communicates the intended process, while code expresses it using language-specific rules.",
          "incorrectFeedback": "Compare the planning description with its later translation into instructions for a digital system.",
          "source": "What is coding worksheet, Drive ID 1aEDElMGsxxIcAo-rCDUe49_leQwztNNdOh2PIEp_e2k; TE4-DES-01"
        },
        {
          "theoryIndex": 0,
          "question": "What should happen before the lamp algorithm is translated into code?",
          "options": [
            "Students should select their own pin numbers",
            "The teacher should confirm the language and hardware configuration",
            "The RGB strip should be connected by trial and error",
            "A library should be chosen from memory"
          ],
          "answerIndex": 1,
          "correctFeedback": "Translation should follow confirmed project information rather than assumptions about code or hardware.",
          "incorrectFeedback": "Choose the step that verifies the technical basis before language-specific instructions are produced.",
          "source": "Unit Introduction and Success Criteria, Drive ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE; Tools and Materials worksheet, Drive ID 1UnXP8FYDHNQsgOaRS036CZhLTCW9UXeoZC56gJbL2Tg; TE4-DIG-02"
        },
        {
          "theoryIndex": 0,
          "question": "What does the tools and materials worksheet prove about the Arduino Uno and RGB LED strip?",
          "options": [
            "They are named project components",
            "Their exact circuit is supplied",
            "Their programming language is confirmed",
            "Their pin assignments are approved"
          ],
          "answerIndex": 0,
          "correctFeedback": "The worksheet identifies the components but does not establish how they connect or are programmed.",
          "incorrectFeedback": "Distinguish naming hardware from providing its complete technical configuration.",
          "source": "Tools and Materials worksheet, Drive ID 1UnXP8FYDHNQsgOaRS036CZhLTCW9UXeoZC56gJbL2Tg"
        },
        {
          "theoryIndex": 0,
          "question": "Which process best supports reviewing planned light behaviour?",
          "options": [
            "Write code before deciding what should happen",
            "Assume the hardware configuration from the component list",
            "Skip the algorithm and test random instructions",
            "Decide the behaviour, order the steps, then communicate and review them"
          ],
          "answerIndex": 3,
          "correctFeedback": "This process allows the intended behaviour and sequence to be checked before technical translation begins.",
          "incorrectFeedback": "Select the approach that plans and communicates the intended result before relying on unconfirmed technical details.",
          "source": "What is coding worksheet, Drive ID 1aEDElMGsxxIcAo-rCDUe49_leQwztNNdOh2PIEp_e2k; TE4-DES-01 and TE4-DIG-02"
        },
        {
          "theoryIndex": 1,
          "question": "What is a variable used to represent?",
          "options": [
            "A named value or piece of information that may change",
            "A physical connection between components",
            "A fixed drawing dimension",
            "A workshop safety procedure"
          ],
          "answerIndex": 0,
          "correctFeedback": "A variable allows changing information to be identified and used within an organised digital process.",
          "incorrectFeedback": "Focus on information handled by a program rather than physical construction or workshop instructions.",
          "source": "What is coding worksheet, Drive ID 1aEDElMGsxxIcAo-rCDUe49_leQwztNNdOh2PIEp_e2k; Official Arduino Language Reference"
        },
        {
          "theoryIndex": 1,
          "question": "What is the purpose of a loop?",
          "options": [
            "To identify the hardware voltage",
            "To select the project material",
            "To repeat an instruction or group of instructions",
            "To connect the RGB LED strip"
          ],
          "answerIndex": 2,
          "correctFeedback": "A loop organises repeated behaviour without requiring the same planned action to be stated separately each time.",
          "incorrectFeedback": "Look for the concept concerned with repetition rather than hardware or material selection.",
          "source": "What is coding worksheet, Drive ID 1aEDElMGsxxIcAo-rCDUe49_leQwztNNdOh2PIEp_e2k"
        },
        {
          "theoryIndex": 1,
          "question": "What does a conditional do?",
          "options": [
            "Repeats every instruction forever",
            "Selects an action depending on whether a condition is met",
            "Stores the project drawing",
            "Confirms the programming language"
          ],
          "answerIndex": 1,
          "correctFeedback": "A conditional supports controlled decision-making by linking possible actions to a stated condition.",
          "incorrectFeedback": "Distinguish choosing between actions from repeating instructions or storing information.",
          "source": "What is coding worksheet, Drive ID 1aEDElMGsxxIcAo-rCDUe49_leQwztNNdOh2PIEp_e2k"
        },
        {
          "theoryIndex": 1,
          "question": "Which statement best distinguishes a variable from a loop?",
          "options": [
            "A variable repeats actions, while a loop stores hardware",
            "Both terms refer only to wiring",
            "A loop stores changing values, while a variable selects actions",
            "A variable represents information, while a loop organises repetition"
          ],
          "answerIndex": 3,
          "correctFeedback": "The concepts have different roles: one represents information and the other controls repeated instructions.",
          "incorrectFeedback": "Compare what each concept handles rather than treating them as interchangeable coding terms.",
          "source": "What is coding worksheet, Drive ID 1aEDElMGsxxIcAo-rCDUe49_leQwztNNdOh2PIEp_e2k; Official Arduino Language Reference"
        },
        {
          "theoryIndex": 1,
          "question": "Which project detail is not confirmed by the supplied sources?",
          "options": [
            "The project integrates code, electronics, light and design",
            "An Arduino Uno is a named component",
            "The exact values to be stored in variables",
            "An RGB LED strip is a named component"
          ],
          "answerIndex": 2,
          "correctFeedback": "The sources establish the project context and named components but do not provide variable values or code settings.",
          "incorrectFeedback": "Identify which option moves beyond naming the project areas and components into unconfirmed programming detail.",
          "source": "Unit Introduction and Success Criteria, Drive ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE; Tools and Materials worksheet, Drive ID 1UnXP8FYDHNQsgOaRS036CZhLTCW9UXeoZC56gJbL2Tg"
        },
        {
          "theoryIndex": 1,
          "question": "When could a loop be useful in a conceptual light plan?",
          "options": [
            "When an intended action needs to occur again",
            "When stock dimensions need measuring",
            "When a circuit must be invented",
            "When the timber needs classifying"
          ],
          "answerIndex": 0,
          "correctFeedback": "Repeated behaviour can be described conceptually with a loop before exact code and settings are confirmed.",
          "incorrectFeedback": "Choose the situation involving repetition within digital behaviour rather than another project area.",
          "source": "What is coding worksheet, Drive ID 1aEDElMGsxxIcAo-rCDUe49_leQwztNNdOh2PIEp_e2k; TE4-DIG-02"
        },
        {
          "theoryIndex": 1,
          "question": "What must be confirmed before a conceptual conditional becomes project code?",
          "options": [
            "Only the lamp’s appearance",
            "The condition, input, language and hardware configuration",
            "The timber’s botanical group",
            "The drawing’s printed scale only"
          ],
          "answerIndex": 1,
          "correctFeedback": "A working conditional depends on confirmed technical information that is not provided by the current sources.",
          "incorrectFeedback": "Consider which missing details determine how a digital system receives information and makes a programmed choice.",
          "source": "Unit Introduction and Success Criteria, Drive ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE; Tools and Materials worksheet, Drive ID 1UnXP8FYDHNQsgOaRS036CZhLTCW9UXeoZC56gJbL2Tg; TE4-DIG-02"
        },
        {
          "theoryIndex": 1,
          "question": "How does the official Arduino reference broadly organise its language information?",
          "options": [
            "Drawings, materials and machines",
            "Circuits, voltages and sensors",
            "Functions, values, and structure",
            "Timber, acrylic and electronics"
          ],
          "answerIndex": 2,
          "correctFeedback": "The Arduino reference groups language information into functions, values including variables and constants, and structure.",
          "incorrectFeedback": "Look for the official language-reference categories rather than project components or unconfirmed circuit information.",
          "source": "Official Arduino Language Reference"
        },
        {
          "theoryIndex": 1,
          "question": "What should students do before translating planned light behaviour into code?",
          "options": [
            "Select values and timings independently",
            "Invent an input device",
            "Connect components by trial and error",
            "Describe the intended behaviour and obtain teacher confirmation"
          ],
          "answerIndex": 3,
          "correctFeedback": "Language-neutral planning allows the intended behaviour to be reviewed before technical details are added.",
          "incorrectFeedback": "Select the process that communicates the design clearly without relying on invented settings or hardware.",
          "source": "Unit Introduction and Success Criteria, Drive ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE; TE4-DES-01 and TE4-DIG-02"
        },
        {
          "theoryIndex": 1,
          "question": "Which statement correctly describes the coding worksheet evidence?",
          "options": [
            "It provides the project’s approved loop and conditional rules",
            "It confirms variable, loop and conditional as topics for investigation",
            "It supplies a complete Arduino program",
            "It identifies the RGB strip type and input device"
          ],
          "answerIndex": 1,
          "correctFeedback": "The worksheet names the concepts but leaves the research spaces blank and supplies no project-specific implementation.",
          "incorrectFeedback": "Distinguish topic intent from completed definitions, code or technical configuration.",
          "source": "What is coding worksheet, Drive ID 1aEDElMGsxxIcAo-rCDUe49_leQwztNNdOh2PIEp_e2k"
        },
        {
          "theoryIndex": 2,
          "question": "What is a system?",
          "options": [
            "One component operating without a purpose",
            "A group of related components working together",
            "A completed circuit diagram",
            "A list of workshop tools"
          ],
          "answerIndex": 1,
          "correctFeedback": "A system combines related parts so they contribute to a shared purpose or intended result.",
          "incorrectFeedback": "Focus on the relationship between several parts rather than one isolated item or an unconfirmed diagram.",
          "source": "Unit Introduction and Success Criteria, Drive ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE; TE4-MSC-01"
        },
        {
          "theoryIndex": 2,
          "question": "What role do instructions have in the system?",
          "options": [
            "They express the intended behaviour",
            "They physically produce light",
            "They replace the controller",
            "They confirm the wiring"
          ],
          "answerIndex": 0,
          "correctFeedback": "Instructions communicate what the digital system is intended to do before or during translation into code.",
          "incorrectFeedback": "Separate information that describes behaviour from the physical components that process or display it.",
          "source": "What is coding worksheet, Drive ID 1aEDElMGsxxIcAo-rCDUe49_leQwztNNdOh2PIEp_e2k; TE4-DIG-02"
        },
        {
          "theoryIndex": 2,
          "question": "Which named component has the controller role?",
          "options": [
            "RGB LED strip",
            "USB cable",
            "Arduino Uno",
            "Jumper wires"
          ],
          "answerIndex": 2,
          "correctFeedback": "The Arduino Uno is the named controller that processes instructions within the conceptual system.",
          "incorrectFeedback": "Identify the component associated with processing instructions rather than producing light or supporting connections.",
          "source": "Tools and Materials worksheet, Drive ID 1UnXP8FYDHNQsgOaRS036CZhLTCW9UXeoZC56gJbL2Tg; TE4-MSC-01"
        },
        {
          "theoryIndex": 2,
          "question": "Which component is the named light-producing output?",
          "options": [
            "USB cable",
            "Jumper wires",
            "Arduino Uno",
            "RGB LED strip"
          ],
          "answerIndex": 3,
          "correctFeedback": "The RGB LED strip is the named component intended to produce visible light in the system.",
          "incorrectFeedback": "Look for the component whose confirmed role is producing the system’s visible output.",
          "source": "Tools and Materials worksheet, Drive ID 1UnXP8FYDHNQsgOaRS036CZhLTCW9UXeoZC56gJbL2Tg"
        },
        {
          "theoryIndex": 2,
          "question": "How should information flow be described from the supplied evidence?",
          "options": [
            "Instructions are processed by the controller to influence the light output",
            "The light output writes the code",
            "The USB cable chooses the light behaviour",
            "Jumper wires act as the controller"
          ],
          "answerIndex": 0,
          "correctFeedback": "This description explains the confirmed system roles without inventing technical configuration details.",
          "incorrectFeedback": "Follow the conceptual path from planned behaviour to processing and then to visible output.",
          "source": "Unit Introduction and Success Criteria, Drive ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE; What is coding worksheet, Drive ID 1aEDElMGsxxIcAo-rCDUe49_leQwztNNdOh2PIEp_e2k; TE4-DIG-02"
        },
        {
          "theoryIndex": 2,
          "question": "What do the USB cable and jumper wires confirm?",
          "options": [
            "The exact pin arrangement",
            "That supporting connection materials are named",
            "The required voltage",
            "The approved power arrangement"
          ],
          "answerIndex": 1,
          "correctFeedback": "Their inclusion confirms project materials, but not their exact connection, electrical role or arrangement.",
          "incorrectFeedback": "Distinguish a component list from a complete circuit or technical specification.",
          "source": "Tools and Materials worksheet, Drive ID 1UnXP8FYDHNQsgOaRS036CZhLTCW9UXeoZC56gJbL2Tg"
        },
        {
          "theoryIndex": 2,
          "question": "Which block diagram is appropriate at this stage?",
          "options": [
            "Confirmed control/input — controller — light output",
            "Sensor — switch — exact pin — voltage",
            "Library — circuit — assessment result",
            "Timber — acrylic — laser setting"
          ],
          "answerIndex": 0,
          "correctFeedback": "This neutral diagram communicates system roles while leaving the unconfirmed control method open.",
          "incorrectFeedback": "Choose the diagram that avoids invented devices, electrical details and unrelated project information.",
          "source": "Unit Introduction and Success Criteria, Drive ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE; TE4-DES-01"
        },
        {
          "theoryIndex": 2,
          "question": "Why must the first block in the diagram remain Teacher to confirm?",
          "options": [
            "The controller is not named",
            "The light output is not named",
            "No control or input method is supplied",
            "The project does not include code"
          ],
          "answerIndex": 2,
          "correctFeedback": "The sources do not identify a sensor, switch, user input or other confirmed control method.",
          "incorrectFeedback": "Look for the system role that remains unsupported by the supplied project evidence.",
          "source": "Unit Introduction and Success Criteria, Drive ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE; Tools and Materials worksheet, Drive ID 1UnXP8FYDHNQsgOaRS036CZhLTCW9UXeoZC56gJbL2Tg"
        },
        {
          "theoryIndex": 2,
          "question": "Which statement correctly separates role and component?",
          "options": [
            "Controller is the role; Arduino Uno is the named component",
            "Arduino Uno is the role; controller is the wire",
            "Light output is the component; RGB is the circuit",
            "USB cable is the role; connection is the controller"
          ],
          "answerIndex": 0,
          "correctFeedback": "A role explains what a part does, while a component names the physical item that may perform it.",
          "incorrectFeedback": "Compare the general function within the system with the named physical item filling that function.",
          "source": "Tools and Materials worksheet, Drive ID 1UnXP8FYDHNQsgOaRS036CZhLTCW9UXeoZC56gJbL2Tg; TE4-MSC-01"
        },
        {
          "theoryIndex": 2,
          "question": "Which project detail remains unconfirmed?",
          "options": [
            "The project integrates code, electronics, light and design",
            "An Arduino Uno is named",
            "An RGB LED strip is named",
            "The exact circuit and control configuration"
          ],
          "answerIndex": 3,
          "correctFeedback": "The sources identify the system idea and components but do not provide their technical arrangement.",
          "incorrectFeedback": "Identify which option moves beyond confirmed project roles and materials into missing configuration details.",
          "source": "Unit Introduction and Success Criteria, Drive ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE; Tools and Materials worksheet, Drive ID 1UnXP8FYDHNQsgOaRS036CZhLTCW9UXeoZC56gJbL2Tg"
        }
      ],
      "written": [
        {
          "theoryIndex": 0,
          "title": "Coding language: algorithms, sequencing and syntax · Evidence 1",
          "prompt": "Explain the difference between an algorithm and language-specific code.",
          "clarification": "An algorithm describes … Language-specific code uses … The algorithm should be checked before …",
          "model": "An algorithm describes the ordered steps needed to produce an intended behaviour. Language-specific code uses the words, symbols and syntax of a confirmed programming language. The algorithm should be checked before it is translated into code.",
          "source": "What is coding worksheet, Drive ID 1aEDElMGsxxIcAo-rCDUe49_leQwztNNdOh2PIEp_e2k; TE4-DIG-02"
        },
        {
          "theoryIndex": 0,
          "title": "Coding language: algorithms, sequencing and syntax · Evidence 2",
          "prompt": "Describe a conceptual algorithm for planning a lamp’s light behaviour without inventing technical settings.",
          "clarification": "First, the lamp should … Next, the intended light behaviour should … Finally, the sequence should …",
          "model": "First, the lamp should begin its intended light behaviour. Next, the planned light appearance should change in the selected order. Finally, the sequence should finish or continue only as confirmed by the teacher-approved design.",
          "source": "Unit Introduction and Success Criteria, Drive ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE; What is coding worksheet, Drive ID 1aEDElMGsxxIcAo-rCDUe49_leQwztNNdOh2PIEp_e2k; TE4-DES-01"
        },
        {
          "theoryIndex": 1,
          "title": "Variables, loops and conditionals for light behaviour · Evidence 1",
          "prompt": "Explain the different roles of a variable, loop and conditional.",
          "clarification": "A variable can represent … A loop can repeat … A conditional can select …",
          "model": "A variable can represent information that may change. A loop can repeat an intended action under an approved rule. A conditional can select one action or another depending on whether a confirmed condition is met.",
          "source": "What is coding worksheet, Drive ID 1aEDElMGsxxIcAo-rCDUe49_leQwztNNdOh2PIEp_e2k; Official Arduino Language Reference"
        },
        {
          "theoryIndex": 1,
          "title": "Variables, loops and conditionals for light behaviour · Evidence 2",
          "prompt": "Describe how these concepts could help plan light behaviour without inventing settings.",
          "clarification": "Changing information could be represented by … Repeated behaviour could be organised using … A choice between behaviours could use …",
          "model": "Changing information could be represented by a variable. Repeated behaviour could be organised using a loop. A choice between behaviours could use a conditional, but the actual values, repetition rule and condition would need teacher confirmation.",
          "source": "Unit Introduction and Success Criteria, Drive ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE; What is coding worksheet, Drive ID 1aEDElMGsxxIcAo-rCDUe49_leQwztNNdOh2PIEp_e2k; TE4-DES-01"
        },
        {
          "theoryIndex": 2,
          "title": "Connecting code, controller and light as a system · Evidence 1",
          "prompt": "Explain the confirmed role of each main system component.",
          "clarification": "The instructions describe … The Arduino Uno acts as … The RGB LED strip provides …",
          "model": "The instructions describe the intended behaviour of the system. The Arduino Uno acts as the named controller that processes the instructions. The RGB LED strip provides the named light output, while the exact configuration remains unconfirmed.",
          "source": "Unit Introduction and Success Criteria, Drive ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE; Tools and Materials worksheet, Drive ID 1UnXP8FYDHNQsgOaRS036CZhLTCW9UXeoZC56gJbL2Tg; TE4-MSC-01"
        },
        {
          "theoryIndex": 2,
          "title": "Connecting code, controller and light as a system · Evidence 2",
          "prompt": "Describe a cautious block diagram for the Programmable Lamp system.",
          "clarification": "The first block should be labelled … The middle and final blocks are … The unconfirmed part is …",
          "model": "The first block should be labelled “confirmed control/input — Teacher to confirm”. The middle and final blocks are “Arduino Uno controller” and “RGB LED strip light output”. The unconfirmed part is the actual control method and the physical configuration connecting the system.",
          "source": "Unit Introduction and Success Criteria, Drive ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE; Tools and Materials worksheet, Drive ID 1UnXP8FYDHNQsgOaRS036CZhLTCW9UXeoZC56gJbL2Tg; TE4-DES-01"
        }
      ]
    },
    {
      "project": "Programmable Light",
      "projectModule": 5,
      "weeks": "9-10",
      "title": "Testing, evidence and evaluation",
      "summary": "Test against confirmed criteria, communicate evidence and evaluate the final solution honestly.",
      "sections": [
        {
          "id": "5.1",
          "title": "Integrating design, materials, electronics and code",
          "theory": [
            "Integration means making different parts of a solution work together rather than treating each part as a separate task. In the Programmable Lamp, the confirmed areas are design intent, timber and acrylic structure, electronics, light and code. Each area has a role, but the sources do not yet provide a complete specification showing every connection or practical detail.",
            "The design intent explains what the solution is meant to communicate or achieve. The named structural materials are radiata pine and clear acrylic. The Arduino Uno is the named controller, while the RGB LED strip is the named light output. Code or instructions describe the intended digital behaviour. Jumper wires and a USB cable are named connection materials, but their exact use is not confirmed.",
            "These parts form an integration map:",
            "design intent — timber/acrylic structure — Arduino Uno controller — RGB LED strip output — code/instructions",
            "The map shows relationships, not a construction order. Connections, fit and the exact arrangement between parts remain Teacher to confirm.",
            "Integration decisions interact. A change to the design idea may affect the structure. A structural change may affect where electronic components can fit. A change to the intended light behaviour may affect the required code or controller configuration. Students should therefore avoid changing one part without considering the others.",
            "An interface is the point where two parts of the solution meet or interact. Interfaces may include the relationship between timber and acrylic, the controller and light output, or code and intended behaviour. A useful integration checkpoint asks whether the two confirmed parts can work together as intended and identifies any missing information before proceeding.",
            "Traceable design communication records where each decision came from. Students can refer to the drawing, idea-development worksheet, named components and class-agreed success categories. Notes, labelled diagrams and checkpoint records should separate confirmed evidence from assumptions.",
            "This supports TE4-MSC-01 by explaining component contributions, TE4-PPM-01 through planning and checking, and TE4-DES-01 through communicating and evaluating integrated design decisions."
          ],
          "takeaways": [
            "Integration connects design, structure, electronics, light and code as one solution.",
            "Changes in one part may affect the roles, fit or operation of other parts.",
            "Interface checkpoints should separate confirmed evidence from details still requiring teacher approval."
          ],
          "boundary": "The Drive evidence supports the integration of design, radiata pine, clear acrylic, electronics, light and code; the Arduino Uno as the named controller; the RGB LED strip as the named light output; jumper wires and a USB cable as named connection materials; design iteration; the drawing title and scales; and coding concepts as investigation topics. It does not establish dimensions, joints, enclosure layout, stock sizes, material properties beyond supplied names, circuit details, pins, voltage, strip type, power arrangement, wiring, code, light behaviour, tolerances, settings, safety procedures, construction order, final design, success thresholds or assessment information. All exact interfaces, fit, placement, connections, configuration and final integration decisions remain Teacher to confirm.",
          "visual": {
            "image": "assets/visuals/theory-5-1.png",
            "alt": "Clear acrylic light and timber base shown with an Arduino-style controller and RGB LED strip on a workshop bench",
            "caption": "AI-generated integration overview. Exact build geometry, component placement, circuit and settings remain Teacher to confirm."
          }
        },
        {
          "id": "5.2",
          "title": "Testing, debugging and improving the solution",
          "theory": [
            "Testing is the process of comparing an observed result with a confirmed criterion. A criterion describes what the solution should achieve or demonstrate. Testing is useful only when the criterion is known, the observation is recorded and the comparison is clear. The Programmable Lamp sources identify broad categories such as design, function, construction quality, electronics and programming, and aesthetics, but they do not provide completed criteria or pass thresholds.",
            "Debugging is a systematic process used to locate, explain and correct a fault in a digital system or plan. It should not involve random changes. A controlled debugging cycle begins by stating the confirmed criterion and predicting what should happen. Students then test one aspect, record what they observe and compare the evidence with the prediction.",
            "If the result does not match the criterion, the next step is to identify a likely cause. Diagnostic headings may help organise thinking:",
            "Design or material",
            "Connection or component",
            "Code or logic",
            "These headings identify areas to investigate; they do not prove what caused a problem in this lamp. The supplied sources do not provide a fault table, circuit, code or confirmed symptoms.",
            "After teacher approval, students should change one controlled element. Changing one element helps show whether that change affected the result. The same aspect should then be retested under the confirmed procedure. Evidence may include observations, dated photographs, labelled notes, comparison statements or teacher-confirmed corrections.",
            "Improvement is demonstrated when recorded evidence shows that the revised result more closely meets the confirmed criterion. A change should not be described as an improvement simply because something was altered or because the result looks different.",
            "A suitable cycle is: state the criterion; predict; test one aspect; record evidence; compare; identify a likely cause; approve and change one element; retest; document the result. This supports TE4-PPM-01 through planned testing, TE4-DES-01 through evaluation and communication, and TE4-DIG-02 through systematic work with digital systems. Exact criteria, safe testing procedures and technical settings remain teacher controlled."
          ],
          "takeaways": [
            "Testing compares recorded observations with a confirmed criterion.",
            "Debugging locates and corrects faults through a systematic, controlled process.",
            "Change one approved element, retest the same aspect and document the evidence."
          ],
          "boundary": "The Drive evidence supports broad success-criteria categories, evaluation of a solution integrating design, materials, electronics, light and code, refinement of ideas, coding concepts as investigation topics and the naming of project components. It supports a general evidence-based cycle of predicting, observing, comparing, revising and documenting, but it does not provide completed criteria, pass thresholds, dimensions, tolerances, circuits, pins, voltage, strip type, power arrangements, wiring, code, light behaviour, timing or colour values, fault symptoms, repair methods, tool settings, safety procedures, practical sequences or assessment information. The exact criteria, approved test aspect, safe testing method, likely-cause investigation, controlled change, technical settings and evidence requirements remain Teacher to confirm.",
          "visual": {
            "image": "assets/visuals/theory-5-2.png",
            "alt": "Student observing a programmable-light prototype with a blank test table ready for results",
            "caption": "AI-generated test prompt. Students must record observed results and authorised changes rather than infer hidden causes."
          }
        },
        {
          "id": "5.3",
          "title": "Evaluating quality, sustainability and learning",
          "theory": [
            "Evaluation is a reasoned judgement based on confirmed criteria and evidence. It is more than saying that a solution is good, bad or finished. A strong evaluation explains the claim being made, identifies the evidence supporting it and gives reasoning that connects the evidence to the criterion.",
            "The first evaluation lens is quality and fitness for purpose. Students compare observations, test records, photographs, measurements or design notes with teacher-confirmed criteria. The broad project categories include design, function, construction or build quality, electronics and programming, and aesthetics. However, the authorised worksheet does not provide completed criteria or performance thresholds. A judgement about quality must therefore wait until the relevant criterion and evidence are confirmed.",
            "The second lens is sustainability. Students should consider environmental, social and production effects over time. Timber may come from native forests or plantations, but these labels do not prove whether a source is sustainable. Native forests have ecological values that require management and protection, while plantations are deliberately established and managed stands that can supply wood. A balanced evaluation considers origin, management, regeneration, resource use and available evidence. The project sources do not identify the supplied timber’s origin, certification or life-cycle impacts.",
            "The third lens is learning. Students can compare their work with the personal goal recorded at the beginning of the project. They should identify what evidence shows progress, what still needs improvement and one realistic next step. A personal learning judgement is not the same as evaluating the product against class criteria.",
            "A useful structure is claim, evidence and reasoning. The claim states the judgement. The evidence identifies what was observed or recorded. The reasoning explains why that evidence supports the judgement. Limitations should also be acknowledged, especially where criteria, sourcing information or final test results are missing.",
            "This supports TE4-DES-01 through evidence-based evaluation and TE4-SDP-01 through consideration of sustainability in design and production."
          ],
          "takeaways": [
            "Evaluation uses confirmed criteria, recorded evidence and clear reasoning.",
            "Sustainability judgements must consider impacts and limitations rather than relying on labels.",
            "Learning evaluation compares evidence with a personal goal and identifies a next step."
          ],
          "boundary": "The Drive evidence supports broad project success categories, a personal learning goal, design iteration, investigation of native forests and plantations, and the naming of radiata pine, acrylic and electronic components. The limited DAFF and ABARES gap-fill supports only general definitions of native forests and plantations and does not establish a project sourcing decision. This section does not claim that the lamp is finished, successful or unsuccessful, and it does not establish completed criteria, thresholds, sourcing, certification, life-cycle impacts, dimensions, settings, faults, safety procedures, construction sequence, marks, rubrics, due dates or assessment metadata. The final criteria, evidence requirements, product performance, learning judgement, timber origin, sustainability conclusions and next steps remain Teacher to confirm.",
          "visual": {
            "image": "assets/visuals/theory-5-3.png",
            "alt": "Student checking a completed illuminated acrylic-and-timber light against an evaluation sheet",
            "caption": "AI-generated evaluation prompt. The visible concept is not the formal standard; class-agreed criteria and actual evidence control the judgement."
          }
        }
      ],
      "checks": [
        {
          "theoryIndex": 0,
          "question": "What does integration mean in this project?",
          "options": [
            "Completing each part without considering the others",
            "Making different parts work together as one solution",
            "Following a complete supplied build sequence",
            "Using only electronic components"
          ],
          "answerIndex": 1,
          "correctFeedback": "Integration considers how design, materials, electronics and code contribute to the same intended solution.",
          "incorrectFeedback": "Focus on the relationship between project areas rather than treating them as isolated activities.",
          "source": "Unit Introduction and Success Criteria, Drive ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE; TE4-MSC-01"
        },
        {
          "theoryIndex": 0,
          "question": "Which pair contains the confirmed structural materials?",
          "options": [
            "Radiata pine and clear acrylic",
            "Arduino Uno and jumper wires",
            "RGB LED strip and USB cable",
            "Code and light behaviour"
          ],
          "answerIndex": 0,
          "correctFeedback": "These are the named timber and manufactured material used within the project structure.",
          "incorrectFeedback": "Separate structural materials from electronic components, connection materials and digital instructions.",
          "source": "Tools and Materials worksheet, Drive ID 1UnXP8FYDHNQsgOaRS036CZhLTCW9UXeoZC56gJbL2Tg"
        },
        {
          "theoryIndex": 0,
          "question": "What is the confirmed role of the Arduino Uno?",
          "options": [
            "Structural base material",
            "Light-producing output",
            "Named controller",
            "Final design specification"
          ],
          "answerIndex": 2,
          "correctFeedback": "The Arduino Uno is identified as the controller within the source-bound system description.",
          "incorrectFeedback": "Look for the component associated with processing instructions rather than structure or visible light.",
          "source": "Tools and Materials worksheet, Drive ID 1UnXP8FYDHNQsgOaRS036CZhLTCW9UXeoZC56gJbL2Tg; TE4-MSC-01"
        },
        {
          "theoryIndex": 0,
          "question": "What is the confirmed role of the RGB LED strip?",
          "options": [
            "Drawing tool",
            "Light-producing output",
            "Timber connection",
            "Programming language"
          ],
          "answerIndex": 1,
          "correctFeedback": "The RGB LED strip is the named component intended to provide visible light in the system.",
          "incorrectFeedback": "Identify the component that produces the visible output rather than controlling or supporting the system.",
          "source": "Tools and Materials worksheet, Drive ID 1UnXP8FYDHNQsgOaRS036CZhLTCW9UXeoZC56gJbL2Tg"
        },
        {
          "theoryIndex": 0,
          "question": "What does the integration map communicate?",
          "options": [
            "A confirmed construction order",
            "Exact dimensions and tolerances",
            "Relationships between confirmed project areas",
            "Approved wiring instructions"
          ],
          "answerIndex": 2,
          "correctFeedback": "The map communicates how system areas relate without claiming an authorised production sequence.",
          "incorrectFeedback": "Distinguish a relationship diagram from a practical procedure or technical specification.",
          "source": "Unit Introduction and Success Criteria, Drive ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE; TE4-DES-01"
        },
        {
          "theoryIndex": 0,
          "question": "Why should a change to one project area be reviewed against the others?",
          "options": [
            "Each change may affect fit, roles or intended operation",
            "Every change automatically improves the project",
            "The drawing contains a complete specification",
            "All project parts are identical"
          ],
          "answerIndex": 0,
          "correctFeedback": "Integrated solutions require students to consider how one decision may create consequences elsewhere.",
          "incorrectFeedback": "Think about how connected parts can be affected when one design decision changes.",
          "source": "Lamp Idea Iteration, Drive ID 1OmW9UvXZ44MtOGNVmq7THl65bglDtKBwJ4exdkAqWF8; TE4-PPM-01 and TE4-DES-01"
        },
        {
          "theoryIndex": 0,
          "question": "What is an interface?",
          "options": [
            "A final assessment result",
            "A named programming language",
            "A complete production schedule",
            "A point where two parts meet or interact"
          ],
          "answerIndex": 3,
          "correctFeedback": "Interfaces are relationships between parts that need checking during integration.",
          "incorrectFeedback": "Look for the concept describing interaction between parts rather than a document, language or schedule.",
          "source": "TE4-MSC-01 and TE4-DES-01; Unit Introduction and Success Criteria, Drive ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE"
        },
        {
          "theoryIndex": 0,
          "question": "Which is an appropriate integration checkpoint?",
          "options": [
            "Inventing the exact wiring arrangement",
            "Checking whether two confirmed parts can work together as intended",
            "Choosing dimensions from an unclear view",
            "Assigning unconfirmed tools to every stage"
          ],
          "answerIndex": 1,
          "correctFeedback": "A checkpoint reviews a relationship while identifying any information still needed before proceeding.",
          "incorrectFeedback": "Choose the action that checks compatibility without inventing missing technical details.",
          "source": "Programmable Lamp drawing, Drive ID 1I5PiH8vw7PerhH0PgMeWYkltm6z1rVNZ; TE4-PPM-01"
        },
        {
          "theoryIndex": 0,
          "question": "What makes design communication traceable?",
          "options": [
            "Linking decisions to drawings, worksheets and confirmed components",
            "Recording only the final idea",
            "Removing all notes about uncertainty",
            "Treating assumptions as approved facts"
          ],
          "answerIndex": 0,
          "correctFeedback": "Traceable communication shows where a decision came from and which evidence supports it.",
          "incorrectFeedback": "Focus on recording the evidence behind a decision rather than presenting unsupported certainty.",
          "source": "Lamp Idea Iteration, Drive ID 1OmW9UvXZ44MtOGNVmq7THl65bglDtKBwJ4exdkAqWF8; Programmable Lamp drawing, Drive ID 1I5PiH8vw7PerhH0PgMeWYkltm6z1rVNZ; TE4-DES-01"
        },
        {
          "theoryIndex": 0,
          "question": "Which detail remains unconfirmed?",
          "options": [
            "Radiata pine is named",
            "Clear acrylic is named",
            "The Arduino Uno and RGB LED strip are named",
            "The exact connections, fit and component arrangement"
          ],
          "answerIndex": 3,
          "correctFeedback": "The sources name the main areas and components but do not provide their complete physical or electronic configuration.",
          "incorrectFeedback": "Identify which option moves beyond confirmed component names into missing integration details.",
          "source": "Tools and Materials worksheet, Drive ID 1UnXP8FYDHNQsgOaRS036CZhLTCW9UXeoZC56gJbL2Tg; Programmable Lamp drawing, Drive ID 1I5PiH8vw7PerhH0PgMeWYkltm6z1rVNZ"
        },
        {
          "theoryIndex": 1,
          "question": "What is testing?",
          "options": [
            "Changing several parts until the result looks better",
            "Comparing an observed result with a confirmed criterion",
            "Copying another student’s solution",
            "Assuming the system works because it starts"
          ],
          "answerIndex": 1,
          "correctFeedback": "Testing requires a known expectation, an observed result and a clear comparison between them.",
          "incorrectFeedback": "Look for the process that uses evidence to judge a result against an agreed expectation.",
          "source": "Unit Introduction and Success Criteria, Drive ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE; TE4-DES-01"
        },
        {
          "theoryIndex": 1,
          "question": "What is debugging?",
          "options": [
            "A systematic process of locating, explaining and correcting a fault",
            "Replacing every component at once",
            "Writing a final assessment judgement",
            "Selecting the lamp’s materials"
          ],
          "answerIndex": 0,
          "correctFeedback": "Debugging uses an organised investigation rather than random changes or unsupported conclusions.",
          "incorrectFeedback": "Focus on the process used to investigate why a digital system or plan does not match expectations.",
          "source": "What is coding worksheet, Drive ID 1aEDElMGsxxIcAo-rCDUe49_leQwztNNdOh2PIEp_e2k; TE4-DIG-02"
        },
        {
          "theoryIndex": 1,
          "question": "What should be stated before beginning a test?",
          "options": [
            "An invented fault symptom",
            "A preferred repair method",
            "The confirmed criterion",
            "The final assessment grade"
          ],
          "answerIndex": 2,
          "correctFeedback": "A confirmed criterion provides the standard against which the observed result will be compared.",
          "incorrectFeedback": "Identify the information needed to decide whether an observed result is acceptable or requires further investigation.",
          "source": "Unit Introduction and Success Criteria, Drive ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE; TE4-PPM-01"
        },
        {
          "theoryIndex": 1,
          "question": "Why should students predict the expected result?",
          "options": [
            "To replace the need for observation",
            "To guarantee that the test will pass",
            "To select an unconfirmed circuit",
            "To create a clear expectation for later comparison"
          ],
          "answerIndex": 3,
          "correctFeedback": "A prediction helps students compare what they expected with what was actually observed.",
          "incorrectFeedback": "Think about how an expected result helps organise the evidence collected after testing.",
          "source": "TE4-PPM-01 and TE4-DES-01"
        },
        {
          "theoryIndex": 1,
          "question": "Which action produces useful test evidence?",
          "options": [
            "Recording the observed result",
            "Relying on memory after several changes",
            "Ignoring an unexpected result",
            "Describing the outcome only as “good”"
          ],
          "answerIndex": 0,
          "correctFeedback": "Recorded observations make the test traceable and allow later comparison with the criterion and prediction.",
          "incorrectFeedback": "Choose the action that preserves specific evidence rather than relying on memory or vague judgement.",
          "source": "Unit Introduction and Success Criteria, Drive ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE; TE4-DES-01"
        },
        {
          "theoryIndex": 1,
          "question": "What is the purpose of the diagnostic headings?",
          "options": [
            "To confirm the exact fault immediately",
            "To organise possible areas for investigation",
            "To provide the approved repair procedure",
            "To identify the project’s circuit settings"
          ],
          "answerIndex": 1,
          "correctFeedback": "The headings help structure investigation but do not prove which area caused the unexpected result.",
          "incorrectFeedback": "Separate a way of organising possible causes from evidence that confirms one particular fault.",
          "source": "Tools and Materials worksheet, Drive ID 1UnXP8FYDHNQsgOaRS036CZhLTCW9UXeoZC56gJbL2Tg; What is coding worksheet, Drive ID 1aEDElMGsxxIcAo-rCDUe49_leQwztNNdOh2PIEp_e2k"
        },
        {
          "theoryIndex": 1,
          "question": "Why should only one controlled element be changed at a time?",
          "options": [
            "It helps show whether that change affected the result",
            "It guarantees that every fault is fixed",
            "It removes the need for teacher approval",
            "It confirms all technical settings"
          ],
          "answerIndex": 0,
          "correctFeedback": "Controlling the change makes the relationship between the adjustment and the new result easier to evaluate.",
          "incorrectFeedback": "Consider what happens to cause-and-effect evidence when several elements are altered together.",
          "source": "Lamp Idea Iteration, Drive ID 1OmW9UvXZ44MtOGNVmq7THl65bglDtKBwJ4exdkAqWF8; TE4-PPM-01"
        },
        {
          "theoryIndex": 1,
          "question": "What should happen after an approved controlled change?",
          "options": [
            "The test record should be discarded",
            "A different criterion should be invented",
            "The same aspect should be retested",
            "Several more elements should be changed immediately"
          ],
          "answerIndex": 2,
          "correctFeedback": "Retesting the same aspect allows the revised result to be compared fairly with the earlier evidence.",
          "incorrectFeedback": "Choose the step that checks whether the approved change affected the original result.",
          "source": "TE4-PPM-01 and TE4-DES-01"
        },
        {
          "theoryIndex": 1,
          "question": "When can a change be described as an improvement?",
          "options": [
            "Whenever the solution looks different",
            "When evidence shows the result more closely meets the criterion",
            "When the student prefers the change",
            "Whenever a component is replaced"
          ],
          "answerIndex": 1,
          "correctFeedback": "Improvement must be supported by comparison evidence rather than preference or the fact that a change occurred.",
          "incorrectFeedback": "Focus on whether the revised result performs better against the confirmed expectation.",
          "source": "Unit Introduction and Success Criteria, Drive ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE; Lamp Idea Iteration, Drive ID 1OmW9UvXZ44MtOGNVmq7THl65bglDtKBwJ4exdkAqWF8; TE4-DES-01"
        },
        {
          "theoryIndex": 1,
          "question": "Which detail remains Teacher to confirm?",
          "options": [
            "Testing involves comparing evidence with criteria",
            "Debugging should be systematic",
            "Changes should be documented",
            "Exact criteria, safe procedures and technical settings"
          ],
          "answerIndex": 3,
          "correctFeedback": "The sources support the general testing process but do not provide these project-specific requirements.",
          "incorrectFeedback": "Identify the option involving practical and technical details absent from the authorised evidence.",
          "source": "Unit Introduction and Success Criteria, Drive ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE; Tools and Materials worksheet, Drive ID 1UnXP8FYDHNQsgOaRS036CZhLTCW9UXeoZC56gJbL2Tg"
        },
        {
          "theoryIndex": 2,
          "question": "What is evaluation?",
          "options": [
            "A reasoned judgement based on criteria and evidence",
            "A statement that the project is complete",
            "A list of all named materials",
            "A final assessment mark"
          ],
          "answerIndex": 0,
          "correctFeedback": "Evaluation explains a judgement by connecting recorded evidence with a confirmed expectation.",
          "incorrectFeedback": "Look for the option that requires both a standard for comparison and evidence supporting the judgement.",
          "source": "Unit Introduction and Success Criteria, Drive ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE; TE4-DES-01"
        },
        {
          "theoryIndex": 2,
          "question": "What does fitness for purpose consider?",
          "options": [
            "Whether the product receives a high mark",
            "Whether evidence shows the solution meets its confirmed purpose and criteria",
            "Whether plantation timber was used",
            "Whether every design idea was manufactured"
          ],
          "answerIndex": 1,
          "correctFeedback": "Fitness for purpose is judged by comparing the solution’s performance with confirmed expectations.",
          "incorrectFeedback": "Focus on whether the solution performs as intended rather than on marks, sourcing or idea quantity.",
          "source": "Unit Introduction and Success Criteria, Drive ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE; TE4-DES-01"
        },
        {
          "theoryIndex": 2,
          "question": "Which information is needed before making a reliable quality judgement?",
          "options": [
            "A preferred design theme",
            "A guessed performance threshold",
            "Confirmed criteria and relevant evidence",
            "Another student’s opinion"
          ],
          "answerIndex": 2,
          "correctFeedback": "A valid judgement requires both an agreed expectation and evidence showing how the solution compares.",
          "incorrectFeedback": "Identify the combination that allows a result to be checked fairly rather than assumed.",
          "source": "Unit Introduction and Success Criteria, Drive ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE"
        },
        {
          "theoryIndex": 2,
          "question": "Why should a sustainability judgement not rely only on the label “plantation”?",
          "options": [
            "Plantations cannot produce timber",
            "Plantation timber is always unsustainable",
            "Labels are unrelated to forestry",
            "Evidence about management, regeneration and impacts is still required"
          ],
          "answerIndex": 3,
          "correctFeedback": "A forest category alone does not establish the full environmental, social and production effects.",
          "incorrectFeedback": "Consider what additional evidence is needed before describing a timber source as sustainable.",
          "source": "Timber Production worksheet, Drive ID 1dTRa-pimCafVnV_V7H0I16M_8Wn32-b7C_4NIXbfmaM; DAFF forestry glossary; ABARES Indicator 2.1b; TE4-SDP-01"
        },
        {
          "theoryIndex": 2,
          "question": "Which statement about native forests is supported?",
          "options": [
            "They have ecological values requiring management and protection",
            "All harvesting from them is harmful",
            "They cannot provide any timber",
            "Their products are always uncertified"
          ],
          "answerIndex": 0,
          "correctFeedback": "Native forests support ecological systems, but their management effects must be judged from specific evidence.",
          "incorrectFeedback": "Avoid absolute claims and identify the statement that recognises ecological value without assuming every outcome.",
          "source": "Timber Production worksheet, Drive ID 1dTRa-pimCafVnV_V7H0I16M_8Wn32-b7C_4NIXbfmaM; ABARES Indicator 1.1a.i; TE4-SDP-01"
        },
        {
          "theoryIndex": 2,
          "question": "What does the project evidence confirm about the supplied timber’s sourcing?",
          "options": [
            "It is certified plantation timber",
            "Its actual origin and certification are not supplied",
            "It comes from a native forest",
            "It has no environmental impacts"
          ],
          "answerIndex": 1,
          "correctFeedback": "The sources name radiata pine but do not identify its origin, certification or full life-cycle evidence.",
          "incorrectFeedback": "Separate the named timber species from missing information about where and how it was produced.",
          "source": "Tools and Materials worksheet, Drive ID 1UnXP8FYDHNQsgOaRS036CZhLTCW9UXeoZC56gJbL2Tg; Timber Production worksheet, Drive ID 1dTRa-pimCafVnV_V7H0I16M_8Wn32-b7C_4NIXbfmaM"
        },
        {
          "theoryIndex": 2,
          "question": "What should a learning evaluation compare?",
          "options": [
            "The student’s evidence with their personal goal",
            "The lamp with an unrelated product",
            "The timber source with a coding algorithm",
            "The final mark with another student’s mark"
          ],
          "answerIndex": 0,
          "correctFeedback": "A learning evaluation examines progress, improvement needs and a next step against the student’s own goal.",
          "incorrectFeedback": "Look for the comparison focused on the student’s development rather than unrelated products or marks.",
          "source": "Unit Introduction and Success Criteria, Drive ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE"
        },
        {
          "theoryIndex": 2,
          "question": "How is a personal goal different from a project criterion?",
          "options": [
            "A personal goal applies to every student’s product",
            "A project criterion records one student’s improvement",
            "A personal goal guides individual learning, while a criterion judges the solution",
            "They must always use identical wording"
          ],
          "answerIndex": 2,
          "correctFeedback": "These forms of evaluation have different subjects: student development and product performance.",
          "incorrectFeedback": "Consider whether the statement is judging the learner or the designed solution.",
          "source": "Unit Introduction and Success Criteria, Drive ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE; TE4-DES-01"
        },
        {
          "theoryIndex": 2,
          "question": "What does the reasoning part of claim-evidence-reasoning do?",
          "options": [
            "Lists every material in the project",
            "Explains why the evidence supports the claim",
            "Replaces the need for evidence",
            "Provides an assessment mark"
          ],
          "answerIndex": 1,
          "correctFeedback": "Reasoning makes the connection between the recorded evidence and the judgement being presented.",
          "incorrectFeedback": "Identify the part that explains the link rather than stating the judgement or listing observations.",
          "source": "Unit Introduction and Success Criteria, Drive ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE; TE4-DES-01"
        },
        {
          "theoryIndex": 2,
          "question": "Why should limitations be included in an evaluation?",
          "options": [
            "To hide weaknesses in the evidence",
            "To prove the project has failed",
            "To avoid making any judgement",
            "To show which conclusions cannot yet be fully supported"
          ],
          "answerIndex": 3,
          "correctFeedback": "Acknowledging missing criteria or evidence makes the evaluation more accurate and trustworthy.",
          "incorrectFeedback": "Focus on how identifying uncertainty prevents an evaluation from claiming more than the evidence supports.",
          "source": "Unit Introduction and Success Criteria, Drive ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE; Timber Production worksheet, Drive ID 1dTRa-pimCafVnV_V7H0I16M_8Wn32-b7C_4NIXbfmaM; TE4-DES-01"
        }
      ],
      "written": [
        {
          "theoryIndex": 0,
          "title": "Integrating design, materials, electronics and code · Evidence 1",
          "prompt": "Create a source-bound integration map for the Programmable Lamp.",
          "clarification": "The design intent connects to … The named controller and output are … The unconfirmed relationships include …",
          "model": "The design intent connects to the timber and acrylic structure, electronics and code. The named controller and output are the Arduino Uno and RGB LED strip. The unconfirmed relationships include the exact connections, fit and component arrangement.",
          "source": "Unit Introduction and Success Criteria, Drive ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE; Tools and Materials worksheet, Drive ID 1UnXP8FYDHNQsgOaRS036CZhLTCW9UXeoZC56gJbL2Tg; TE4-MSC-01"
        },
        {
          "theoryIndex": 0,
          "title": "Integrating design, materials, electronics and code · Evidence 2",
          "prompt": "Explain an interface checkpoint without inventing practical details.",
          "clarification": "The interface I would check is … The confirmed evidence shows … Before proceeding, I would confirm …",
          "model": "The interface I would check is the relationship between the structure and the named electronic components. The confirmed evidence shows which materials and components are included. Before proceeding, I would confirm their exact fit, placement and connections with the teacher.",
          "source": "Tools and Materials worksheet, Drive ID 1UnXP8FYDHNQsgOaRS036CZhLTCW9UXeoZC56gJbL2Tg; Programmable Lamp drawing, Drive ID 1I5PiH8vw7PerhH0PgMeWYkltm6z1rVNZ; TE4-PPM-01 and TE4-DES-01"
        },
        {
          "theoryIndex": 1,
          "title": "Testing, debugging and improving the solution · Evidence 1",
          "prompt": "Plan a source-bound test record for one confirmed criterion.",
          "clarification": "The confirmed criterion is … I predict that … I will record …",
          "model": "The confirmed criterion is the class-agreed expectation selected for testing. I predict that the observed result will match that expectation. I will record the test aspect, observation, comparison and any uncertainty requiring teacher review.",
          "source": "Unit Introduction and Success Criteria, Drive ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE; TE4-PPM-01 and TE4-DES-01"
        },
        {
          "theoryIndex": 1,
          "title": "Testing, debugging and improving the solution · Evidence 2",
          "prompt": "Explain a controlled debugging cycle without assuming a particular fault.",
          "clarification": "First, I would compare … I would then identify … After approval, I would change …",
          "model": "First, I would compare the observed evidence with the confirmed criterion and prediction. I would then identify one likely area for investigation without claiming it is proven. After approval, I would change one controlled element, retest the same aspect and document the result.",
          "source": "What is coding worksheet, Drive ID 1aEDElMGsxxIcAo-rCDUe49_leQwztNNdOh2PIEp_e2k; Lamp Idea Iteration, Drive ID 1OmW9UvXZ44MtOGNVmq7THl65bglDtKBwJ4exdkAqWF8; TE4-DIG-02 and TE4-DES-01"
        },
        {
          "theoryIndex": 2,
          "title": "Evaluating quality, sustainability and learning · Evidence 1",
          "prompt": "Write a criteria-based quality and learning evaluation without assuming the final result.",
          "clarification": "The confirmed criterion or personal goal is … The evidence I would use is … I could make a judgement after …",
          "model": "The confirmed criterion or personal goal is the teacher-approved expectation selected for evaluation. The evidence I would use is recorded observations, photographs, test notes or design records. I could make a judgement after comparing that evidence with the criterion and identifying one improvement and next step.",
          "source": "Unit Introduction and Success Criteria, Drive ID 1jABRQJb5uYOOPLWW-AG-mXDa3QEmGsUhoexCptn2aPE; Lamp Idea Iteration, Drive ID 1OmW9UvXZ44MtOGNVmq7THl65bglDtKBwJ4exdkAqWF8; TE4-DES-01"
        },
        {
          "theoryIndex": 2,
          "title": "Evaluating quality, sustainability and learning · Evidence 2",
          "prompt": "Write a balanced sustainability evaluation that identifies missing project evidence.",
          "clarification": "One sustainability consideration is … The available evidence shows … A limitation is that …",
          "model": "One sustainability consideration is how the timber was sourced and managed over time. The available evidence shows that radiata pine is named and that native forests and plantations are different forest types. A limitation is that the project timber’s actual origin, certification, management and life-cycle impacts are not supplied.",
          "source": "Timber Production worksheet, Drive ID 1dTRa-pimCafVnV_V7H0I16M_8Wn32-b7C_4NIXbfmaM; Tools and Materials worksheet, Drive ID 1UnXP8FYDHNQsgOaRS036CZhLTCW9UXeoZC56gJbL2Tg; DAFF forestry glossary; ABARES Indicators 1.1a.i and 2.1b; TE4-SDP-01"
        }
      ]
    }
  ]
};
