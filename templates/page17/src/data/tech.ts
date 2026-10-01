import type { TechProfile } from "@/types/hire";
import hero from "@/assets/pages/p17-hero.jpg";
import ways from "@/assets/pages/p17-ways.jpg";
import notebook from "@/assets/pages/p17-notebook.jpg";
import toolkit from "@/assets/pages/p17-toolkit.jpg";
import r1 from "@/assets/pages/p17-r1.jpg";
import r2 from "@/assets/pages/p17-r2.jpg";
import r3 from "@/assets/pages/p17-r3.jpg";
import r4 from "@/assets/pages/p17-r4.jpg";
import steps from "@/assets/pages/p17-steps.jpg";
import faq from "@/assets/pages/p17-faq.jpg";

/* Python developers: everything on this page that is about Python. The rest
   of the words come from src/lib/hire-copy.ts, shared with every
   Technologies page. The examples and the skills answer are drafts; have
   them checked before launch. Photo sources are in docs/sections.md. */

export const TECH: TechProfile = {
  group: "Backend",
  skill: "Python",
  Skill: "Python",
  one: "Python developer",
  many: "Python developers",
  people: "Engineers",
  kit: "stack",
  products: "Python products",

  hero: {
    lede: "Python developers fluent in Django, FastAPI and the data stack, who take work from notebook to production, inside your product team.",
    photo: { image: hero, alt: "A developer writes Python on a laptop at a desk." },
  },

  core: [
    { name: "Python", logo: "python", note: "Core language" },
    { name: "Django", logo: "django", note: "Web framework" },
    { name: "FastAPI", logo: "fastapi", note: "Async APIs" },
    { name: "Flask", logo: "flask", note: "Light services" },
    { name: "pandas", logo: "pandas", note: "Data analysis" },
    { name: "PostgreSQL", logo: "postgresql", note: "Relational data" },
  ],
  ecosystem: ["SQLAlchemy", "Pydantic", "Celery", "Redis", "NumPy", "PyTorch", "Airflow", "pytest", "Docker"],

  benefits: [
    {
      title: "Web backends and APIs",
      body: "Django, FastAPI or Flask, chosen for your product, with typed models and API docs generated as you go.",
      work: ["API development", "Admin and back office", "Feature development"],
      tools: ["Django", "FastAPI", "Pydantic", "PostgreSQL"],
    },
    {
      title: "Notebook to production",
      body: "Exploratory notebooks turned into tested, packaged code with scheduled jobs and monitoring around it.",
      work: ["Data pipelines", "Scheduled jobs", "Model serving"],
      tools: ["pandas", "Jupyter", "Airflow", "FastAPI"],
    },
    {
      title: "Background work that keeps up",
      body: "Queues and workers for the slow jobs, so requests stay quick and nothing gets dropped along the way.",
      work: ["Task queues", "Integrations", "Performance tuning"],
      tools: ["Celery", "Redis", "SQLAlchemy", "Docker"],
    },
    {
      title: "Typed, tested code",
      body: "Type hints, linting and tests on every change, so a growing Python codebase stays safe to change.",
      work: ["Test coverage", "Version upgrades", "Refactoring"],
      tools: ["pytest", "Ruff", "mypy", "uv"],
    },
  ],

  roles: [
    {
      title: "Backend Architect",
      body: "Sets the shape of your Python services: frameworks, data models, boundaries and the standards the team builds to.",
      skills: ["Python", "Django", "FastAPI", "PostgreSQL"],
      part: "Architecture",
      photo: { image: r1, alt: "A smiling developer holds up a sticky note that reads “Python“ in front of his screens." },
    },
    {
      title: "Python Specialist",
      body: "Ships features end to end in your codebase, from the data model to the endpoint, with the tests alongside.",
      skills: ["Django", "FastAPI", "SQLAlchemy", "pytest"],
      part: "Core delivery",
      photo: { image: r2, alt: "A woman in a plaid shirt smiles while working on a laptop on a blue sofa." },
    },
    {
      title: "Data Engineer",
      body: "Builds the pipelines and scheduled jobs that move and clean the data your product runs on.",
      skills: ["pandas", "Airflow", "Polars", "PostgreSQL"],
      part: "Data",
      photo: { image: r3, alt: "A young developer thinks through code at his monitor in a busy office." },
    },
    {
      title: "ML Engineer",
      body: "Takes models from the notebook to a tested, monitored service your product can call.",
      skills: ["PyTorch", "scikit-learn", "FastAPI", "Docker"],
      part: "Models",
      photo: { image: r4, alt: "Two women work through something together on a laptop at a cafe table." },
    },
  ],

  capabilities: [
    {
      label: "Build",
      icon: "layout",
      title: "Build Python applications",
      body: "Python developers who build robust web backends, APIs and data services.",
      chips: ["Django", "FastAPI", "Flask"],
    },
    {
      label: "Integrate",
      icon: "plug",
      title: "Connect your systems",
      body: "Specialists who connect your services to databases, queues, data pipelines and third-party APIs.",
      chips: ["REST and GraphQL", "Celery", "Airflow"],
    },
    {
      label: "Platform",
      icon: "cloud",
      title: "Deploy securely",
      body: "Engineers who package, ship and monitor Python services safely through your pipeline.",
      chips: ["Docker", "CI/CD", "Security"],
    },
  ],

  examples: [
    {
      client: "US product company",
      model: "Dedicated product pod",
      title: "Python product team",
      body: "We provided Python developers to build the backend for a critical product launch and set up reliable delivery workflows.",
      roles: ["Backend Architect", "Python Specialist", "Delivery Lead"],
      stack: ["Python", "Django", "PostgreSQL", "Celery"],
      outcomes: [
        { value: "Faster", label: "feature release cycles" },
        { value: "Reliable", label: "production deployments" },
      ],
    },
    {
      client: "US enterprise platform",
      model: "Architecture and delivery",
      title: "Python platform upgrade",
      body: "We added specialists to move an older platform to current Python, put tests around it and pay down its technical debt.",
      roles: ["Python Specialist", "Platform Engineer", "QA Engineer"],
      stack: ["Python", "FastAPI", "pytest", "Docker"],
      outcomes: [
        { value: "Current", label: "Python runtime" },
        { value: "Reduced", label: "technical debt" },
      ],
    },
    {
      client: "US financial services",
      model: "Augmented squad",
      title: "Secure data services",
      body: "We placed Python developers inside the client’s strict security and compliance workflow to ship new reporting services.",
      roles: ["Backend Architect", "Security Engineer", "Data Engineer"],
      stack: ["Python", "FastAPI", "pandas", "Airflow"],
      outcomes: [
        { value: "Compliant", label: "service releases" },
        { value: "Auditable", label: "data pipelines" },
      ],
    },
  ],

  skillsAnswer:
    "Backend architecture, Django, FastAPI and Flask, REST APIs, data work with pandas and Airflow, task queues, model serving, typing, testing and Python upgrades.",

  /* Questions about this skill, asked first in the FAQ. Drafts, to be
     reworked; the four about how hiring works are shared (hire-copy.ts). */
  faqs: [
    {
      q: "Do your developers do data work as well as web backends?",
      a: "Yes. Most of the team works on both sides: APIs and services, and the pipelines and models behind them.",
    },
    {
      q: "Can you take our notebooks into production?",
      a: "Yes. We turn exploratory notebooks into tested, packaged code with scheduled jobs and monitoring around it.",
    },
    {
      q: "Which Python versions do you work with?",
      a: "Current releases by default. On older code we plan the upgrade in steps, with tests in place first.",
    },
    {
      q: "Will they fit our tooling?",
      a: "They work in your repository, your CI and your conventions, whether that is Poetry, uv or plain pip.",
    },
  ],

  photos: {
    ways: [
      { image: ways, alt: "A developer in a black t-shirt smiles as he works on a laptop at a white desk." },
      { image: notebook, alt: "An engineer works at a desktop computer in a bright office.", focus: "68% 50%" },
      { image: toolkit, alt: "A developer works late across three monitors of code.", focus: "60% 50%" },
    ],
    steps: { image: steps, alt: "Two women talk across a table beside an open laptop." },
    faq: { image: faq, alt: "Four colleagues discuss work on a monitor in a studio office.", focus: "50% 45%" },
  },
};
