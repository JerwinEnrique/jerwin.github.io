/**
 * portfolio-data.js
 * ----------------------------------------------------------------------
 * Single source of truth for Experience, Certifications, and Skills.
 * Both experience.html and skills-matrix.html render FROM this file,
 * so editing your résumé content means editing THIS file only.
 *
 * INTEGRATION FOR YOUR AI ASSISTANT:
 * This file exposes `window.PORTFOLIO_DATA`. If your site has a chat/AI
 * assistant widget (e.g. on index.html), include this script before the
 * assistant's own script, then feed it into the assistant's system
 * context, for example:
 *
 *   const context = JSON.stringify(window.PORTFOLIO_DATA);
 *   // prepend to your system prompt: "Here is the candidate's verified
 *   // experience, certifications, and skills data: " + context
 *
 * This lets the assistant answer things like "What certifications do
 * you hold?" or "Where did you get your experience?" using the exact
 * same data rendered on these pages — no drift between chat answers
 * and the visible site.
 * ---------------------------------------------------------------------- */

window.PORTFOLIO_DATA = {

  timeline: [
    {
      id: "exp-05",
      type: "internship",
      dateStart: "2026",
      dateEnd: "Present",
      role: "Embedded Systems Engineering Intern",
      org: "Nexora Robotics",
      location: "Hybrid",
      summary: "Building the sensor-fusion firmware for a warehouse-navigation robot fleet.",
      achievements: [
        "Rewrote the IMU/encoder sensor-fusion loop on an STM32H7, cutting localization drift by 34% over 10-minute runs.",
        "Designed a custom I2C watchdog circuit to auto-recover three motor controllers after brownout events in the field.",
        "Introduced a HIL (hardware-in-the-loop) test rig that cut firmware regression time from 2 days to 40 minutes."
      ],
      tags: ["STM32", "RTOS", "C", "I2C", "HIL Testing"]
    },
    {
      id: "exp-04",
      type: "freelance",
      dateStart: "2025",
      dateEnd: "2026",
      role: "Freelance Firmware & PCB Consultant",
      org: "Self-Employed",
      location: "Remote",
      summary: "Delivered custom embedded boards and firmware for two early-stage hardware startups.",
      achievements: [
        "Designed a 4-layer PCB in KiCad for a battery-management module, passing EMI review on the first submission.",
        "Wrote a lightweight RTOS task scheduler for a client's ESP32 product, reducing idle power draw by 22%.",
        "Delivered full datasheets, schematics, and bring-up documentation for 3 client hardware revisions."
      ],
      tags: ["KiCad", "PCB Design", "ESP32", "Power Optimization"]
    },
    {
      id: "exp-03",
      type: "hackathon",
      dateStart: "2024",
      dateEnd: "2024",
      role: "1st Place — Autonomous Systems Track",
      org: "HackCE 2024",
      location: "36-hour hackathon",
      summary: "Led a 4-person team building an FPGA-accelerated line-following rover from scratch.",
      achievements: [
        "Implemented a real-time image-thresholding pipeline on a Basys 3 FPGA in Verilog, hitting 60 FPS at under 4W.",
        "Coordinated hardware/firmware/software integration across the team under a hard 36-hour deadline.",
        "Presented the final demo to a panel of industry judges, winning Best Use of Hardware."
      ],
      tags: ["Verilog", "FPGA", "Computer Vision", "Team Leadership"]
    },
    {
      id: "exp-02",
      type: "ta",
      dateStart: "2023",
      dateEnd: "2024",
      role: "Teaching Assistant — Digital Logic Design",
      org: "University Department of Electrical & Computer Engineering",
      location: "On campus",
      summary: "Ran weekly labs and office hours for 90+ sophomore engineering students.",
      achievements: [
        "Graded and gave feedback on Verilog lab submissions for combinational and sequential circuit design.",
        "Held office hours that raised the average lab-practical pass rate from 78% to 91% over two semesters.",
        "Wrote supplementary lab guides on FSM design that were adopted into the official course materials."
      ],
      tags: ["Verilog", "Digital Logic", "Mentorship"]
    },
    {
      id: "exp-01",
      type: "education",
      dateStart: "2022",
      dateEnd: "2026",
      role: "B.S. Computer Engineering",
      org: "State University College of Engineering",
      location: "On campus",
      summary: "Focus: embedded systems, computer architecture, and digital design. Dean's List x5.",
      achievements: [
        "Relevant coursework: Computer Architecture, Digital Logic Design, Operating Systems, Signals & Systems, Embedded Systems, Data Structures & Algorithms.",
        "Senior capstone: designed a RISC-V-based microcontroller subset on FPGA with a custom 5-stage pipeline.",
        "Vice President, IEEE Student Chapter — organized 6 workshops on PCB design and Linux internals."
      ],
      tags: ["Computer Architecture", "RISC-V", "Signals & Systems", "Leadership"]
    }
  ],

  certifications: [
    {
      id: "cert-01",
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2026",
      credentialId: "AWS-CCP-7731X",
      verifyUrl: "#",
      icon: "cloud"
    },
    {
      id: "cert-02",
      title: "CCNA: Introduction to Networks",
      issuer: "Cisco Networking Academy",
      date: "2025",
      credentialId: "CCNA-ITN-2025-0442",
      verifyUrl: "#",
      icon: "network"
    },
    {
      id: "cert-03",
      title: "CompTIA A+ (Core 1 & 2)",
      issuer: "CompTIA",
      date: "2024",
      credentialId: "COMP001021748442",
      verifyUrl: "#",
      icon: "cpu"
    },
    {
      id: "cert-04",
      title: "Fundamentals of Deep Learning",
      issuer: "NVIDIA Deep Learning Institute",
      date: "2025",
      credentialId: "NVDLI-FX-88213",
      verifyUrl: "#",
      icon: "brain-circuit"
    },
    {
      id: "cert-05",
      title: "Embedded Linux Development",
      issuer: "The Linux Foundation",
      date: "2026",
      credentialId: "LF-ELD-556210",
      verifyUrl: "#",
      icon: "terminal"
    },
    {
      id: "cert-06",
      title: "FPGA Design with Verilog",
      issuer: "Xilinx / AMD University Program",
      date: "2024",
      credentialId: "XUP-FPGA-330891",
      verifyUrl: "#",
      icon: "chip"
    }
  ],

  /* Skill domains: hardware | firmware | software (used by the filter toggle) */
  skillCategories: [
    {
      id: "hardware",
      label: "Hardware & Embedded Systems",
      accent: "green",
      skills: [
        { name: "Verilog / VHDL",              level: 5, domain: "hardware" },
        { name: "FPGA (Xilinx / Basys 3)",      level: 4, domain: "hardware" },
        { name: "STM32 / ARM Microcontrollers",  level: 5, domain: "hardware" },
        { name: "Arduino Prototyping",           level: 5, domain: "hardware" },
        { name: "PCB Design (KiCad, Altium)",    level: 4, domain: "hardware" },
        { name: "Oscilloscopes & Logic Analyzers", level: 4, domain: "hardware" },
        { name: "I2C / SPI / UART Protocols",    level: 5, domain: "hardware" }
      ]
    },
    {
      id: "firmware",
      label: "Low-Level & Systems Software",
      accent: "cyan",
      skills: [
        { name: "C",                       level: 5, domain: "firmware" },
        { name: "C++",                     level: 4, domain: "firmware" },
        { name: "ARM Assembly",            level: 3, domain: "firmware" },
        { name: "RTOS (FreeRTOS / Zephyr)", level: 4, domain: "firmware" },
        { name: "Linux Kernel Basics",      level: 3, domain: "firmware" },
        { name: "Device Drivers",          level: 3, domain: "firmware" },
        { name: "Bootloaders",             level: 3, domain: "firmware" }
      ]
    },
    {
      id: "software",
      label: "High-Level Software & AI",
      accent: "green",
      skills: [
        { name: "Python",                  level: 5, domain: "software" },
        { name: "Data Structures & Algorithms", level: 5, domain: "software" },
        { name: "Git / Version Control",   level: 5, domain: "software" },
        { name: "TensorFlow / PyTorch",    level: 3, domain: "software" },
        { name: "REST APIs",               level: 4, domain: "software" },
        { name: "SQL",                     level: 3, domain: "software" },
        { name: "Bash Scripting",          level: 4, domain: "software" }
      ]
    }
  ]
};
