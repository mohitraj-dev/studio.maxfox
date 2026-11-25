export interface TeamMember {
  number: string;
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  image?: string;
  monogram: string;
  accentTone: string;
}

export interface PipelinePhase {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const NAV_LINKS = [
  { label: "Services", href: "services" },
  { label: "Team", href: "team" },
  { label: "Film Pipeline", href: "pipeline" },
  { label: "Founder Story", href: "founder" },
  { label: "FAQ", href: "faq" },
];

export const CAPABILITIES = [
  "Brand Films",
  "Commercials",
  "Reels & Shorts",
  "Color Grading",
  "Sound Design",
  "Visual Identity",
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    number: "01",
    name: "Mohit Raj",
    role: "Founder & Creative Director",
    bio: "Indie filmmaker shaping emotional tension, visual restraint, and narrative clarity across every commercial and film frame.",
    specialties: [
      "Indie Filmmaker",
      "Cinematic Storytelling",
      "Creative Direction",
      "Visual Concept Development",
      "Production Leadership",
    ],
    image: "/assets/team-mohit.png",
    monogram: "MR",
    accentTone: "from-[#D44816]/35 via-amber-700/15 to-transparent",
  },
  {
    number: "02",
    name: "Shital Tiwari",
    role: "Content Writer & Actor",
    bio: "Translates brand emotion into crisp scripts, voice, on-camera presence, and retention-driven digital storytelling.",
    specialties: [
      "Content Strategy",
      "Brand Communication",
      "Social Media Planning",
      "Digital Branding",
    ],
    image: "/assets/team-shital.jpg",
    monogram: "ST",
    accentTone: "from-orange-500/30 via-[#D44816]/15 to-transparent",
  },
  {
    number: "03",
    name: "Ayush Choudhary",
    role: "Cinematographer & Editor",
    bio: "Crafts kinetic camera movement, deliberate light shaping, and rhythmic editorial flow built for modern screens.",
    specialties: [
      "Cinematographic Camera Work",
      "Editing & Visual Flow",
      "Reel Cinematography",
      "Creative Shot Execution",
    ],
    image: "/assets/team-ayush.jpg",
    monogram: "AC",
    accentTone: "from-amber-600/30 via-[#D44816]/15 to-transparent",
  },
  {
    number: "04",
    name: "Sahil Sinha",
    role: "Creative Team Member",
    bio: "Keeps sets agile and focused—aligning logistics, lighting prep, and creative support from call time to wrap.",
    specialties: [
      "Production Coordination",
      "Creative Assistance",
      "Visual Support",
    ],
    monogram: "SS",
    accentTone: "from-[#D44816]/25 via-rose-800/15 to-transparent",
  },
];

export const PIPELINE_PHASES: PipelinePhase[] = [
  {
    id: "pre",
    number: "01",
    title: "Pre-Production",
    subtitle: "Blueprint & Visual Architecture",
    description:
      "Every frame is engineered before a single lens leaves the case—translating raw themes into tight scripts, moodboards, and shot lists.",
    deliverables: [
      "Concept Development",
      "Script Writing",
      "Storyboarding",
      "Shot Planning",
      "Visual Research & Moodboards",
      "Casting & Production Planning",
    ],
  },
  {
    id: "mid",
    number: "02",
    title: "Production (Mid)",
    subtitle: "Direction & Principal Photography",
    description:
      "Disciplined on-set execution uniting purposeful camera choreography, atmospheric lighting, and grounded performance direction.",
    deliverables: [
      "Cinematic Direction",
      "Professional Cinematography",
      "Creative Camera Movement",
      "Lighting Design",
      "Atmosphere Creation",
      "Performance & Scene Execution",
    ],
  },
  {
    id: "post",
    number: "03",
    title: "Post-Production",
    subtitle: "Cut, Grade & Sonic Immersion",
    description:
      "Precision pacing meets theatrical finishing—layered sound design, orchestral scoring, and filmic color pipelines built for impact.",
    deliverables: [
      "Cinematic Editing",
      "Hollywood-Style Narrative Flow",
      "Color Grading",
      "Sound Design & Audio Layering",
      "Orchestral Score",
      "Trailer-Style Impact Sequences & Final Delivery",
    ],
  },
];

export const EXPLORED_GENRES = [
  "Psychological Thriller",
  "Sci-Fi",
  "Drama",
  "Action",
  "Experimental Cinema",
  "Mystery",
  "Dark Narrative Films",
];

export const FAQS: FaqItem[] = [
  {
    question: "What services does MAXFOX STUDIO currently offer?",
    answer:
      "We partner with ambitious brands, creators, and founders on Cinematic Video & Social Content (brand films, commercials, product videos, Instagram Reels, YouTube Shorts, and viral hook editing), Post-Production & Audio (color grading, trailer-style mixing, sound design, and motion graphics), and Minimal Branding & Visual Identity systems.",
  },
  {
    question:
      "When is the full Film Production (Pre, Mid, Post) pipeline launching?",
    answer:
      "Our dedicated Film Division (Phase II)—covering end-to-end narrative development from scriptwriting and storyboarding to principal photography and theatrical post-production—is currently in active development. Join the early-access list in our Cinema Slate section to receive priority updates when commissioning opens.",
  },
  {
    question: "Can you shoot on-location or remotely outside Ranchi?",
    answer:
      "Yes. While MAXFOX STUDIO is anchored in Ranchi, Jharkhand, our portable 4K mirrorless, audio, and bi-color lighting workflow is engineered to travel anywhere on-location across India. We also handle remote post-production, color grading, sound design, and brand identity systems globally.",
  },
  {
    question:
      "How does your creative process work from concept to final delivery?",
    answer:
      "We start with a focused discovery call to lock your objective, audience, and tone. From there, we deliver a visual treatment and shot plan, execute lean field-ready production, and finish in our post suite with calibrated color grading, layered audio, and multi-aspect exports tailored for cinema, web, and social feeds.",
  },
];

export const STUDIO_CONTACT = {
  phone: "+91 8210090970",
  email: "maxfoxstudio@gmail.com",
  location: "Ranchi, Jharkhand, India",
  instagram: "@maxfoxstudio",
  instagramUrl: "https://instagram.com/maxfoxstudio",
  portfolioUrl: "https://your-portfolio-link.com",
};
