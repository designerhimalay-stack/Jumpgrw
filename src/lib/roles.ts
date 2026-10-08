/* Open roles for the Careers page. These are the roles the studio's service
   lines call for (web, mobile, AI, QA, DevOps, design, delivery, sales) and
   are placeholders until the owner confirms the live openings: edit, add or
   remove entries here and the page, its filter and its count follow.

   `area` must match an option of CAREER_AREAS in ContactForm.astro, because
   "Apply for this role" pre-selects it in the form. */

export type RoleArea =
  | "Engineering"
  | "QA & Testing"
  | "DevOps & Cloud"
  | "Product & Design"
  | "Sales & Business Development";

export interface Role {
  title: string;
  area: RoleArea;
  /** City names as written in src/lib/offices.ts. */
  locations: string[];
  type: "Full-time";
  experience: string;
  summary: string;
  does: string[];
  brings: string[];
  stack?: string[];
}

export const ROLES: Role[] = [
  {
    title: "Senior Full-Stack Engineer",
    area: "Engineering",
    locations: ["Dallas, TX", "Delhi NCR", "Pune"],
    type: "Full-time",
    experience: "5+ years",
    summary:
      "Take web products from discovery to release with a small senior team, owning features across the front end, the API and the data behind them.",
    does: [
      "Design and build web applications for startups and growing businesses",
      "Turn product briefs into scoped, estimated and shipped work",
      "Review code, mentor engineers and raise the team's engineering bar",
      "Work with clients directly on trade-offs, timelines and releases",
    ],
    brings: [
      "5+ years building production web applications end to end",
      "Strong React or Next.js and Node.js, with SQL and API design",
      "Clear written and spoken English for client-facing work",
      "Comfort working across time zones with US-based teams",
    ],
    stack: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    title: "Mobile Engineer, React Native & Flutter",
    area: "Engineering",
    locations: ["Pune", "Toronto"],
    type: "Full-time",
    experience: "4+ years",
    summary:
      "Build iOS and Android apps that real customers use every day, from first prototype through store release and the updates after it.",
    does: [
      "Build and ship cross-platform apps with React Native or Flutter",
      "Integrate payments, maps, notifications and third-party APIs",
      "Profile and tune performance on real devices",
      "Own the App Store and Google Play release process with the team",
    ],
    brings: [
      "4+ years of mobile development with at least two shipped apps",
      "Solid TypeScript or Dart, and native module experience a plus",
      "A habit of testing on devices, not only simulators",
      "An eye for interface detail and platform conventions",
    ],
    stack: ["React Native", "Flutter", "TypeScript", "Firebase"],
  },
  {
    title: "AI / ML Engineer",
    area: "Engineering",
    locations: ["Dallas, TX", "Delhi NCR"],
    type: "Full-time",
    experience: "4+ years",
    summary:
      "Help clients put AI into their products: assistants, search, document processing and prediction, built to run reliably in production.",
    does: [
      "Design and ship LLM-powered features, from prototype to production",
      "Build retrieval, evaluation and monitoring around model output",
      "Prepare data pipelines and train or tune models where they pay off",
      "Explain what AI can and cannot do to non-technical clients",
    ],
    brings: [
      "4+ years in software or ML engineering with Python",
      "Hands-on work with LLM APIs, embeddings and vector search",
      "Experience taking a model or AI feature to production",
      "Judgment about cost, latency and failure modes",
    ],
    stack: ["Python", "LLM APIs", "Vector search", "FastAPI"],
  },
  {
    title: "QA Automation Engineer",
    area: "QA & Testing",
    locations: ["Delhi NCR", "Pune"],
    type: "Full-time",
    experience: "3+ years",
    summary:
      "Keep releases calm. Build the automated checks that let our delivery teams ship web and mobile products with confidence.",
    does: [
      "Create and maintain automated UI and API test suites",
      "Plan test coverage with product and engineering from day one",
      "Wire tests into CI so every build is checked",
      "Report defects clearly and follow them to a fix",
    ],
    brings: [
      "3+ years in QA with real automation ownership",
      "Playwright, Cypress or Selenium, plus API testing tools",
      "Working knowledge of CI pipelines and Git",
      "Attention to detail and a calm way of raising problems",
    ],
    stack: ["Playwright", "Cypress", "Postman", "GitHub Actions"],
  },
  {
    title: "DevOps & Cloud Engineer",
    area: "DevOps & Cloud",
    locations: ["Pune", "Mexico City"],
    type: "Full-time",
    experience: "4+ years",
    summary:
      "Run the platforms behind our clients' products: reliable pipelines, secure cloud infrastructure and monitoring that tells us before users do.",
    does: [
      "Build and maintain CI/CD pipelines for web and mobile releases",
      "Provision and secure cloud infrastructure as code",
      "Set up logging, monitoring and alerting",
      "Help teams cut cloud cost without cutting reliability",
    ],
    brings: [
      "4+ years of DevOps or site reliability work",
      "AWS or Azure in production, with Terraform or similar",
      "Docker and Kubernetes experience",
      "Security habits: least privilege, secrets and patching",
    ],
    stack: ["AWS", "Azure", "Terraform", "Docker", "Kubernetes"],
  },
  {
    title: "Senior UI/UX Designer",
    area: "Product & Design",
    locations: ["Toronto", "Delhi NCR"],
    type: "Full-time",
    experience: "4+ years",
    summary:
      "Shape how our clients' products look and feel, from the first research conversation to the design system engineers build from.",
    does: [
      "Run discovery, flows and wireframes with clients and engineers",
      "Design web and mobile interfaces and keep them consistent",
      "Prototype and test ideas before they are built",
      "Hand over clean specs and review the build",
    ],
    brings: [
      "4+ years designing digital products, with a portfolio to show",
      "Fluent in Figma, design systems and accessibility basics",
      "Comfort presenting your thinking to clients",
      "Care for the details that make an interface feel finished",
    ],
    stack: ["Figma", "Design systems", "Prototyping"],
  },
  {
    title: "Technical Delivery Manager",
    area: "Product & Design",
    locations: ["Dallas, TX", "Pune"],
    type: "Full-time",
    experience: "6+ years",
    summary:
      "Keep client engagements on track. You are the steady point between the client, the team and the plan, across onshore, nearshore and offshore people.",
    does: [
      "Own scope, timelines, risks and communication for client engagements",
      "Run sprint planning, reviews and retrospectives",
      "Coordinate engineers, QA and designers across time zones",
      "Report progress to clients with honesty and clarity",
    ],
    brings: [
      "6+ years delivering software projects, ideally with distributed teams",
      "A technical background that earns engineers' respect",
      "Agile delivery experience and strong stakeholder skills",
      "Calm judgment when a plan has to change",
    ],
  },
  {
    title: "Business Development Manager",
    area: "Sales & Business Development",
    locations: ["Dallas, TX"],
    type: "Full-time",
    experience: "5+ years",
    summary:
      "Grow the studio by helping founders and product leaders find the right team and delivery model for what they are building.",
    does: [
      "Find and qualify opportunities with startups and growing businesses",
      "Run discovery calls and shape proposals with delivery leads",
      "Build lasting relationships with clients and partners",
      "Keep the pipeline and CRM accurate and current",
    ],
    brings: [
      "5+ years selling software services or technology to US buyers",
      "A consultative approach rather than a scripted one",
      "A track record of meeting and beating targets",
      "Enough technical understanding to talk to engineers",
    ],
  },
];

export const ROLE_AREAS: RoleArea[] = [
  "Engineering",
  "QA & Testing",
  "DevOps & Cloud",
  "Product & Design",
  "Sales & Business Development",
];
