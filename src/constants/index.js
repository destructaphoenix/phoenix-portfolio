const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Writing",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

// TODO: replace placeholders with real metrics before going live
const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 0, suffix: "", label: "Placeholder metric 2" },
  { value: 0, suffix: "", label: "Placeholder metric 3" },
  { value: 0, suffix: "", label: "Placeholder metric 4" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Built to Hold Up",
    desc: "Pipelines and systems that survive contact with real data, not just the happy path.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Plain-English Updates",
    desc: "No jargon walls, no status theatre — you hear what's working, what's not, and what's next.",
  },
  {
    imgPath: "/images/time.png",
    title: "Ships When It Should",
    desc: "Scoped honestly up front and delivered on time. Slipping deadlines is a planning failure.",
  },
];

const techStackImgs = [
  {
    name: "Python",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "SQL & dbt",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "React",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Cloud (AWS / GCP)",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Git & Workflow",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Claude",
    modelPath: "/models/claude-transformed.glb",
    scale: 2,
    rotation: [0, 0, 0],
  },
  {
    name: "Google Cloud",
    modelPath: "/models/google-cloud-transformed.glb",
    scale: 0.03,
    rotation: [0, 0, 0],
  },
  {
    name: "Git & Workflow",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

// TODO: replace with real roles, dates, and responsibilities before going live
const expCards = [
  {
    review: "Two years in. Builds things that work, explains them clearly, gets promoted.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Consultant — Deloitte",
    date: "2024 — Present",
    responsibilities: [
      "Built and maintained ETL pipelines across cloud and on-prem environments, progressing from execution to leading workstreams",
      "Worked across SQL, Python, and dbt to support analytics, reporting, and data modeling needs",
      "Delivered data engineering solutions on client engagements across multiple domains",
    ],
  },
  {
    review: "Building in public. Slow at first, then all at once.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Founder — the Re:Build",
    date: "2026 — Present",
    responsibilities: [
      "Building an audience through the Re:Build, a Substack newsletter on indie products and engineering",
      "Shipping small data and AI products every few weeks",
      "Taking on freelance engineering work across data pipelines, AI tooling, and analytics",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

// Repurposed as excerpts from "the rebuild" on Substack.
// Card structure unchanged: name -> post title, mentions -> date/status.
const testimonials = [
  {
    name: "Why I started the rebuild",
    mentions: "the rebuild · intro",
    review:
      "I have a stable job building data pipelines. That's exactly why I'm starting this — to figure out what gets built when nobody's paying you to ship it.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Audience before product",
    mentions: "the rebuild · draft",
    review:
      "Everyone says build in public. Nobody mentions that the first six months are mostly you writing into a void. That's the part I want to document honestly.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Notes on freelancing as an engineer",
    mentions: "the rebuild · upcoming",
    review:
      "Freelance work is its own product. Scoping, pricing, saying no — none of that gets taught in the pipeline you spent a decade learning.",
    imgPath: "/images/client2.png",
  },
  {
    name: "What 'indie data product' even means",
    mentions: "the rebuild · upcoming",
    review:
      "Indie usually means SaaS for developers. I want to see what falls out when you point the same energy at analytics, ETL, and the unglamorous middle of the stack.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Tools I'm actually using",
    mentions: "the rebuild · upcoming",
    review:
      "Python, SQL, dbt, an embarrassing number of LLM tabs open. Less stack-flexing, more honest accounting of what does the work.",
    imgPath: "/images/client4.png",
  },
  {
    name: "The plan, such as it is",
    mentions: "the rebuild · upcoming",
    review:
      "Ship small things, write about each one, get less wrong over time. That's the entire strategy. Subscribe if that sounds useful.",
    imgPath: "/images/client6.png",
  },
];

// TODO: replace icon images with platform-appropriate ones
// (currently reusing existing template PNGs as placeholders)
const socialImgs = [
  {
    name: "X / Twitter",
    imgPath: "/images/x.png",
    href: "https://x.com/Destructa_P",
  },
  {
    name: "Substack",
    imgPath: "/images/fb.png",
    href: "https://substack.com/@destructaphoenix",
  },
  {
    name: "GitHub",
    imgPath: "/images/linkedin.png",
    href: "https://github.com/destructaphoenix",
  },
  {
    name: "Email",
    imgPath: "/images/insta.png",
    href: "mailto:hello@destructaphoenix.dev",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
