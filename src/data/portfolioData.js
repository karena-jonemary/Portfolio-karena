export const personalInfo = {
  name: "KARENA JONEMARY J",
  title: "Software Developer | Full Stack Development | Generative AI",
  shortTagline: "Building practical software solutions with Full Stack Development, AI, and Generative AI.",
  summary: "Motivated Computer Science and Engineering student with strong problem-solving, programming, and teamwork skills. Passionate about building efficient software solutions, exploring Generative AI, and delivering real-world impact through collaboration and continuous technical growth.",
  email: "karenajonemaryj@gmail.com",
  phone: "+91 6369972583",
  github: "https://github.com/karena-jonemary",
  githubUsername: "karena-jonemary",
  linkedin: "https://linkedin.com/in/karena-jonemary-j/",
  linkedinUsername: "karena-jonemary-j",
  resumePath: "/Karena_Jonemary_J_Resume.pdf",
  profilePhoto: "/profile.jpg"
};

export const areasOfInterest = [
  "Full Stack Development",
  "Generative AI"
];

export const education = [
  {
    id: "be-cse",
    degree: "Bachelor of Computer Science and Engineering",
    institution: "M. Kumarasamy College of Engineering",
    location: "Karur",
    period: "2023 – 2027",
    score: "CGPA: 7.8",
    scoreType: "CGPA",
    details: "Focusing on Core Computer Science, Software Engineering, Full Stack Development, and AI technologies."
  },
  {
    id: "higher-secondary",
    degree: "Higher Secondary Education",
    institution: "St. Joseph Matric Hr. Sec. School",
    location: "Dindigul",
    period: "2023",
    score: "Percentage: 78%",
    scoreType: "Percentage",
    details: "Completed Higher Secondary Certificate with strong foundation in Science & Mathematics."
  }
];

export const internships = [
  {
    id: "mita",
    role: "UI/UX Developer Intern",
    company: "MITA IT Automations Pvt. Ltd.",
    year: "2025",
    duration: "2nd July 2025 – 16th July 2025",
    certificateUrl: "/certificates/mita_uiux_certificate.jpg",
    responsibilities: [
      "Participated in the design and implementation of the Admin Management System, enabling product management, order tracking, customer management, and sales dashboard functionalities.",
      "Created user-friendly UI/UX designs, website layouts, banners, and promotional posters using Adobe Photoshop."
    ]
  },
  {
    id: "prodigy",
    role: "Data Science Intern",
    company: "Prodigy Infotech",
    year: "2024",
    duration: "1st August 2024 – 31st August 2024",
    certificateUrl: "/certificates/prodigy_datascience_certificate.jpg",
    responsibilities: [
      "Performed data preprocessing, cleaning, and exploratory data analysis on real-world datasets.",
      "Used Weka to visualize datasets, identify patterns, and analyze trends through various data mining techniques.",
      "Utilized NumPy, Pandas, and Matplotlib for data manipulation and machine learning tasks.",
      "Analyzed large datasets to uncover trends, patterns, and anomalies using statistical methods and visualization tools."
    ]
  }
];

export const publication = {
  title: "Voice and Vision-Enabled Grocery Helper: A Shopping Companion Utilizing AI Technology for Users with Visual Impairments",
  publisher: "IEEE Xplore",
  conference: "International Conference on Connected Intelligence for Industrial Applications (CI2A-2026)",
  year: "2026",
  url: "https://ieeexplore.ieee.org/document/11576909",
  description: "Developed and published research on an AI-powered assistive shopping system integrating computer vision, OCR, and voice technologies to enhance accessibility for visually impaired users.",
  highlights: [
    "Published on IEEE Xplore digital library",
    "Integrates Computer Vision, OCR, and Voice interaction",
    "Designed specifically for visually impaired accessibility"
  ]
};

export const projects = [
  {
    id: "grocery-assistant",
    title: "AI-Powered Grocery Assistant",
    isFeatured: true,
    connectedToPublication: true,
    tools: ["TensorFlow Lite", "OCR", "Text-to-Speech", "SQLite", "Java"],
    description: "An AI-powered Grocery Assistant designed for visually impaired users to shop for fruits and vegetables independently. The entire process is executed seamlessly through voice-based interaction.",
    highlights: [
      "AI-powered assistance",
      "Accessibility for visually impaired",
      "Voice-based interaction",
      "OCR (Optical Character Recognition)",
      "Computer vision / AI technologies"
    ],
    githubUrl: "https://github.com/karena-jonemary/Blind_assistant"
  },
  {
    id: "cctv-sketch",
    title: "CCTV Based Recognition and Sketch Generation System",
    isFeatured: false,
    tools: ["Python", "OpenCV", "Dlib", "MongoDB"],
    description: "System continuously processes video frames, detects faces, and retrieves identity information for recognized persons. If no match is found, it extracts facial landmarks to generate an approximate sketch of the unknown individual.",
    highlights: [
      "Continuous face detection",
      "Identity recognition pipeline",
      "Facial landmark extraction",
      "Unknown-person sketch generation",
      "MongoDB database integration"
    ],
    githubUrl: "https://github.com/karena-jonemary/Recognition-and-Sketch-generation-System"
  },
  {
    id: "retail-management",
    title: "Retail Management System (RetailPro)",
    isFeatured: false,
    tools: ["Vercel AI SDK", "Supabase"],
    description: "RetailPro is a full-stack web-based Retail Management System designed to provide users with a seamless and intelligent shopping experience. It integrates Supabase for authentication, real-time database management, and order processing.",
    highlights: [
      "Full-stack web architecture",
      "Intelligent retail management",
      "User authentication via Supabase",
      "Real-time database & order processing",
      "Vercel AI SDK integration"
    ],
    githubUrl: "https://github.com/karena-jonemary/RetailPro"
  }
];

export const professionalCertifications = [
  {
    title: "Azure AI Engineer Associate",
    issuer: "Microsoft Azure",
    year: "2026",
    badge: "Microsoft Certified",
    certificateUrl: "/certificates/azure_ai_engineer.jpg"
  },
  {
    title: "Azure AI Fundamentals",
    issuer: "Microsoft Azure",
    year: "2026",
    badge: "Microsoft Certified",
    certificateUrl: "/certificates/azure_ai_fundamentals.jpg"
  },
  {
    title: "Japanese N5 Certification Completed",
    issuer: "Japanese Language Proficiency Test (JLPT)",
    year: "2024",
    badge: "Language Proficiency",
    certificateUrl: "/certificates/jlpt_n5.jpg"
  }
];

export const generalCertifications = [
  {
    title: "Mastering the Art of Prompting",
    issuer: "IBM Cloud / SkillsBuild",
    year: "2026",
    certificateUrl: "/certificates/ibm_prompting.jpg"
  },
  {
    title: "Getting Started with Artificial Intelligence",
    issuer: "IBM Cloud / SkillsBuild",
    year: "2026",
    certificateUrl: "/certificates/ibm_ai.jpg"
  }
];

export const skillsData = {
  programming: [
    { name: "Python", level: "Intermediate" },
    { name: "Java", level: "Proficient" },
    { name: "SQL", level: "Proficient" },
    { name: "JavaScript", level: "Basic" }
  ],
  webDevelopment: [
    { name: "React", level: "Intermediate" },
    { name: "Bootstrap", level: "Basic" },
    { name: "HTML5 / CSS3", level: "Proficient" },
    { name: "UI/UX Design", level: "Proficient" }
  ],
  aiData: [
    { name: "TensorFlow Lite", level: "Hands-on" },
    { name: "OpenCV & Dlib", level: "Hands-on" },
    { name: "Vercel AI SDK", level: "Hands-on" },
    { name: "NumPy & Pandas", level: "Hands-on" },
    { name: "Matplotlib", level: "Hands-on" },
    { name: "Weka Data Mining", level: "Hands-on" },
    { name: "OCR & Voice AI", level: "Hands-on" }
  ],
  toolsTech: [
    { name: "Git & GitHub", category: "Version Control" },
    { name: "Supabase", category: "Backend/DB" },
    { name: "MongoDB", category: "Database" },
    { name: "SQLite", category: "Database" },
    { name: "n8n", category: "Automation" },
    { name: "Adobe Photoshop", category: "Design" },
    { name: "Trello", category: "Management" }
  ],
  softSkills: [
    "Problem-Solving",
    "Communication",
    "Decision Making",
    "Stress Management",
    "Teamwork & Collaboration"
  ]
};
