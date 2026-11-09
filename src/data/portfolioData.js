// ============================================================
// portfolioData.js — Real portfolio content
// ============================================================

export const personalInfo = {
  name: "Siddavatam Praveen Kumar Reddy",
  firstName: "Siddavatam Praveen Kumar Reddy",
  brandName: "Siddavatam Praveen Kumar Reddy", // shown in the preloader, navbar and footer
  title: "Data Analyst",
  location: "Bengaluru, India",
  phone: "+917780128923",
  emails: {
    primary: "siddavatampraveenreddy4@gmail.com",
    secondary: "",
  },
  summary: "Computer Science and Engineering (AI) graduate with hands-on experience in data cleaning, data transformation, exploratory data analysis and data visualization using Python. Proficient in Python, SQL, Pandas, NumPy, Matplotlib and Seaborn, with practical exposure to Microsoft Azure and AI/deep learning models. Strong written and verbal communication, with a record of clear technical documentation. Seeking an entry-level Data Analyst role.",
  resumeUrl: "/Praveen_kumar_Reddy_Data_Analyst2.pdf", // put the PDF inside /public
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/siddavatampraveenreddy4-oss",
  linkedin: "https://www.linkedin.com/in/praveen-reddy-siddavatam-509103361?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm Siddavatam Praveen Kumar Reddy",
  titleHighlight: "Data Analyst",
  subtitle: "Transforming raw data into actionable insights through exploratory data analysis, business intelligence, and predictive modeling.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:siddavatampraveenreddy4@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Praveen_kumar_Reddy_Data_Analyst2.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  // HTML is allowed here (it is rendered with dangerouslySetInnerHTML) — keep it YOUR OWN trusted text.
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Siddavatam Praveen Kumar Reddy</span>, a Computer Science & Engineering graduate specializing in AI and Data Analytics based in Bengaluru, India. I have hands-on experience in data cleaning, transformation, exploratory data analysis, and building impactful dashboards using Python, SQL, and PowerBI while sharpening my skills through the placement training program at TAP Academy. Passionate about turning complex datasets into clear, data-driven decisions, I am seeking an entry-level Data Analyst role where I can deliver measurable business value.`,
  techStack: ["Python", "SQL", "Pandas", "PowerBI", "AI/ML"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn complex datasets into actionable insights",
  description: "A structured, end-to-end analytical workflow from data collection to decision-making.",
  cards: [
    { number: "01", title: "Research & Data Collection", text: "Identifying key business questions and gathering raw data from databases, APIs, and flat files." },
    { number: "02", title: "Data Cleaning & Preparation", text: "Handling missing values, standardizing formats, and preprocessing raw records with Pandas and NumPy." },
    { number: "03", title: "Exploratory Analysis & Modeling", text: "Performing deep exploratory data analysis, statistical tests, and machine learning to uncover key patterns." },
    { number: "04", title: "Visualization & Insights", text: "Designing clear PowerBI dashboards and executive summaries to guide data-driven business decisions." },
  ],
  endText: "Ready to deliver data-driven impact!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming & Databases",
      skills: [{ name: "Python" }, { name: "SQL" }],
    },
    {
      title: "Data Analysis & Manipulation",
      skills: [{ name: "Pandas" }, { name: "NumPy" }, { name: "Statistics" }, { name: "Excel" }],
    },
    {
      title: "Visualization & BI",
      skills: [{ name: "PowerBI" }, { name: "Matplotlib" }, { name: "Seaborn" }],
    },
    {
      title: "AI, ML & Cloud",
      skills: [{ name: "AIML" }, { name: "Deep Learning" }, { name: "Microsoft Azure" }],
    },
  ],
};

export const leadershipList = [
  {
    title: "Data Analytics & AI Collaborative Training",
    description: "Collaborated with peers during placement training on end-to-end dataset handling, exploratory data analysis, and predictive model evaluation.",
    role: "Student Collaborator",
    badge: "TAP Academy",
  },
];

export const internshipsList = [
  {
    organization: "Cognifyz Technologies",
    role: "Python Developer Intern",
    duration: "Internship",
    skills: ["Data Cleaning", "Handling Missing Values", "Data Transformation", "Exploratory Analysis"],
    tech: ["Python", "NumPy", "Pandas"],
  },
];

export const softSkillsList = [
  { name: "Team Collaboration", icon: "🤝", desc: "Collaborating across cross-functional teams to align analytical outputs with business goals." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down ambiguous business challenges into structured, solvable analytical steps." },
  { name: "Analytical Thinking", icon: "📈", desc: "Evaluating data trends and patterns objectively to extract actionable strategic insights." },
  { name: "Adaptability", icon: "⚡", desc: "Quickly learning new analytical libraries, tools, and workflows in fast-evolving tech environments." },
];

export const projects = [
  {
    id: "project-one",
    number: "01",
    badge: "🚀 Flagship Project", // use null for no badge
    title: "Retail Sales & Customer Purchase Behavior Analysis Using Python",
    description: "Analyzed retail transactional data using Python and Pandas to uncover purchasing patterns, identify high-value customer segments, and optimize inventory management.",
    techTags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    links: { github: "https://github.com/siddavatampraveenreddy4-oss", demo: "" }, // demo "" shows "Demo Coming Soon"
    isFlagship: true,
  },
  {
    id: "project-two",
    number: "02",
    badge: null,
    title: "Exploratory Data Analysis & Churn Prediction",
    description: "Performed exploratory data analysis and built statistical models to predict customer churn, providing actionable recommendations to enhance retention.",
    techTags: ["Python", "SQL", "Pandas", "PowerBI"],
    links: { github: "https://github.com/siddavatampraveenreddy4-oss", demo: "" },
    isFlagship: false,
  },
];

// Used only by the optional Certificates component (bonus step)
export const certificates = {
  featured: [
    { name: "Data Analytics & AI Training", issuer: "TAP Academy", icon: "🏅" },
    { name: "Python Developer Internship", issuer: "Cognifyz Technologies", icon: "📜" },
  ],
  viewAllUrl: "https://www.linkedin.com/in/praveen-reddy-siddavatam-509103361?utm_source=share_via&utm_content=profile&utm_medium=member_android",
};

export const education = {
  degree: "BTech in Computer Science and Engineering (AI)",
  institution: "Om Sterling Global University",
  cgpa: "3 Years",
  graduation: "2024",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: ["Data Analyst", "Python · SQL · PowerBI", "Turning Data into Decisions"],
  credential: "BTech CSE (AI)",
  copyright: `© ${new Date().getFullYear()} Siddavatam Praveen Kumar Reddy | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
