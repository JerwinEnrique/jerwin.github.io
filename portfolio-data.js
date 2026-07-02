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
      id: "exp-03",
      type: "education",
      dateStart: "2023",
      dateEnd: "2027",
      role: "B.S. Computer Engineering (Undergraduate)",
      org: "Jose Rizal University",
      location: "On campus",
      summary: "Currently in the 4-year Computer Engineering program. Thesis: an IoT-based Balance and Tremor Exercise Board for Parkinson's, with integrated blood pressure monitoring and a companion Android application.",
      achievements: [
        "Major in Computer Engineering.",
        "Thesis: \"IoT-based Balance and Tremor Exercise Board for Parkinson's with Blood Pressure Monitoring and Android Application.\""
      ],
      tags: ["Computer Engineering", "IoT", "Android", "Thesis"]
    },
    {
      id: "exp-02",
      type: "internship",
      dateStart: "Nov 2022",
      dateEnd: "Jan 2023",
      role: "OJT – IT (Computer Systems Servicing Student)",
      org: "On-the-Job Training Placement (employer name TBD)",
      location: "On site",
      summary: "Work-immersion placement installing, configuring, and troubleshooting computer hardware, software, and network connections.",
      achievements: [
        "Assisted in installing, configuring, and troubleshooting computer hardware, software, and network connections.",
        "Performed preventive maintenance, including system cleaning, software updates, and antivirus scans.",
        "Provided technical support for computer-related issues, helping ensure minimal downtime and improved system performance."
      ],
      tags: ["Hardware Troubleshooting", "Preventive Maintenance", "Networking", "Technical Support"]
    },
    {
      id: "exp-01",
      type: "education",
      dateStart: "2019",
      dateEnd: "2023",
      role: "Senior High School — ICT (Computer System Servicing)",
      org: "Fort Bonifacio High School",
      location: "On campus",
      summary: "Senior High School graduate, ICT strand with a focus on Computer System Servicing.",
      achievements: [],
      tags: ["ICT Strand", "Computer System Servicing"]
    }
  ],

  certifications: [
    {
      id: "cert-01",
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2025",
      credentialId: "",
      verifyUrl: "#",
      icon: "cloud"
    },
    {
      id: "cert-02",
      title: "Wadhwani Entrepreneurship",
      issuer: "Wadhwani Foundation",
      date: "2026",
      credentialId: "",
      verifyUrl: "#",
      icon: "award"
    },
    {
      id: "cert-03",
      title: "Wadhwani Skilling",
      issuer: "Wadhwani Foundation",
      date: "2025",
      credentialId: "",
      verifyUrl: "#",
      icon: "award"
    },
    {
      id: "cert-04",
      title: "CompTIA IT Fundamentals+ (ITF+)",
      issuer: "CompTIA",
      date: "2024",
      credentialId: "",
      verifyUrl: "#",
      icon: "cpu"
    }
  ],

  /* Skill domains: hardware | software | soft (used by the filter toggle) */
  skillCategories: [
    {
      id: "hardware",
      label: "Hardware & Technical Support",
      accent: "green",
      skills: [
        { name: "Computer Hardware Troubleshooting", level: 3, domain: "hardware" },
        { name: "Operating System Installation",      level: 3, domain: "hardware" },
        { name: "Network Configuration",               level: 3, domain: "hardware" },
        { name: "Preventive Maintenance",              level: 3, domain: "hardware" }
      ]
    },
    {
      id: "software",
      label: "Software & Productivity",
      accent: "cyan",
      skills: [
        { name: "Python Programming",              level: 2, domain: "software" },
        { name: "Microsoft Office",                  level: 4, domain: "software" },
        { name: "Basic Cloud Computing (AWS)",      level: 2, domain: "software" }
      ]
    },
    {
      id: "soft",
      label: "Professional & Soft Skills",
      accent: "green",
      skills: [
        { name: "Communication Skills",   level: 4, domain: "soft" },
        { name: "Teamwork",               level: 4, domain: "soft" },
        { name: "Hardworking Attitude",   level: 4, domain: "soft" },
        { name: "Fast Learner",           level: 4, domain: "soft" },
        { name: "Customer Service",       level: 4, domain: "soft" }
      ]
    }
  ]
};
