import type { TechProfile } from "@/types/hire";
import hero from "@/assets/pages/p26-hero.jpg";
import ways from "@/assets/pages/p26-ways.jpg";
import rag from "@/assets/pages/p26-rag.jpg";
import evals from "@/assets/pages/p26-evals.jpg";
import r1 from "@/assets/pages/p26-r1.jpg";
import r2 from "@/assets/pages/p26-r2.jpg";
import r3 from "@/assets/pages/p26-r3.jpg";
import r4 from "@/assets/pages/p26-r4.jpg";
import steps from "@/assets/pages/p26-steps.jpg";
import faq from "@/assets/pages/p26-faq.jpg";

/* Generative AI engineers: everything on this page that is about generative
   AI. The rest of the words come from src/lib/hire-copy.ts, shared with
   every Technologies page. The examples and the skills answer are drafts;
   have them checked before launch. Photo sources are in docs/sections.md. */

export const TECH: TechProfile = {
  group: "AI & data",
  crumb: "Generative AI",
  skill: "generative AI",
  Skill: "Generative AI",
  one: "generative AI engineer",
  many: "generative AI engineers",
  people: "Engineers",
  kit: "stack",
  products: "AI products",

  hero: {
    lede: "Engineers who ship LLM features that hold up in production, with grounded answers, the right model for each request and evals before every release.",
    photo: { image: hero, alt: "An engineer in headphones works through code on a laptop at night." },
  },

  core: [
    { name: "LangChain", logo: "langchain", note: "LLM framework" },
    { name: "LangGraph", logo: "langgraph", note: "Agent workflows" },
    { name: "Hugging Face", logo: "huggingface", note: "Open models" },
    { name: "Qdrant", logo: "qdrant", note: "Vector search" },
    { name: "pgvector", note: "Vectors in Postgres" },
    { name: "Python", logo: "python", note: "Language" },
  ],
  ecosystem: ["Anthropic", "OpenAI", "Google Gemini", "Mistral AI", "Llama", "Ollama", "vLLM", "FastAPI", "Redis"],

  benefits: [
    {
      title: "Grounded answers",
      body: "Retrieval over your own documents and data, with every answer citing its sources so people can check it.",
      work: ["RAG pipelines", "Document ingestion", "Search tuning"],
      tools: ["LangChain", "Qdrant", "pgvector", "Python"],
    },
    {
      title: "Agents that finish the job",
      body: "Assistants that use your tools and APIs step by step, with clear limits and a person in the loop where it matters.",
      work: ["Agent workflows", "Tool integration", "Human review"],
      tools: ["LangGraph", "LangChain", "FastAPI", "Python"],
    },
    {
      title: "Evals before every release",
      body: "Test suites for accuracy, groundedness and safety that run on every prompt or model change, so each release is measured.",
      work: ["Eval suites", "Guardrails", "Regression testing"],
      tools: ["Python", "LangChain", "Hugging Face", "GitHub Actions"],
    },
    {
      title: "The right model for the job",
      body: "Requests routed to the model that fits them, hosted or open, so you don’t pay flagship prices for simple work.",
      work: ["Model routing", "Cost control", "Fine-tuning"],
      tools: ["Hugging Face", "Ollama", "vLLM", "Anthropic"],
    },
  ],

  roles: [
    {
      title: "AI Solutions Architect",
      body: "Sets the shape of your AI features: retrieval, models, data boundaries and the standards the team builds to.",
      skills: ["LangChain", "LangGraph", "Qdrant", "Python"],
      part: "Architecture",
      photo: { image: r1, alt: "A woman in a denim shirt smiles as she works on her laptop at a home desk." },
    },
    {
      title: "LLM Engineer",
      body: "Builds AI features end to end in your product, from the prompt and retrieval to the API and the interface.",
      skills: ["LangChain", "Python", "FastAPI", "pgvector"],
      part: "Core delivery",
      photo: { image: r2, alt: "Two engineers discuss a robot arm they are testing in a bright lab." },
    },
    {
      title: "AI Evaluation Engineer",
      body: "Builds the evals and guardrails that show whether a change made answers better or worse before it ships.",
      skills: ["Python", "Eval suites", "Guardrails", "LangChain"],
      part: "Quality",
      photo: { image: r3, alt: "Two women smile as they work together on a sticker-covered laptop." },
    },
    {
      title: "LLMOps Engineer",
      body: "Runs models and pipelines in production, with hosting, routing, cost and latency watched every day.",
      skills: ["vLLM", "Ollama", "Docker", "Kubernetes"],
      part: "Platform",
      photo: { image: r4, alt: "An engineer in glasses is lit by the glow of a screen in a dark lab." },
    },
  ],

  capabilities: [
    {
      label: "Build",
      icon: "zap",
      title: "Build AI features",
      body: "Generative AI engineers who build assistants, copilots and agents that hold up in production.",
      chips: ["RAG", "Agents", "Copilots"],
    },
    {
      label: "Integrate",
      icon: "plug",
      title: "Connect your data",
      body: "Specialists who connect models to your documents, databases, APIs and access controls.",
      chips: ["Vector search", "Tool calling", "LangChain"],
    },
    {
      label: "Platform",
      icon: "cloud",
      title: "Run it securely",
      body: "Engineers who host, route and monitor models inside your cloud and under your security rules.",
      chips: ["Model hosting", "Evals", "Security"],
    },
  ],

  help: [
    {
      icon: "layout",
      title: "Build AI into your product",
      body: "Assistants, copilots and AI features that fit your product and the workflows your users already have.",
      covers: "Features, assistants and agents",
    },
    {
      icon: "document",
      title: "Ground it in your data",
      body: "Retrieval over your own documents and systems, with sources cited, so answers stay current and easy to check.",
      covers: "Retrieval, embeddings and context",
    },
    {
      icon: "shield",
      title: "Evaluate and release",
      body: "Evals on every prompt and model change, guardrails, and a release process that ships only what clears the bar.",
      covers: "Evals, guardrails and release",
    },
    {
      icon: "sync",
      title: "Operate and improve",
      body: "Quality, cost and latency watched in production, with routing and prompts tuned as usage grows.",
      covers: "Monitoring, cost and evolution",
    },
  ],

  examples: [
    {
      client: "US product company",
      model: "Dedicated product pod",
      title: "AI assistant team",
      body: "We provided generative AI engineers to take an in-product assistant from demo to launch, with evals in place before the first release.",
      roles: ["AI Solutions Architect", "LLM Engineer", "Delivery Lead"],
      stack: ["LangChain", "LangGraph", "Qdrant", "Python"],
      outcomes: [
        { value: "Faster", label: "path to launch" },
        { value: "Measured", label: "answer quality" },
      ],
    },
    {
      client: "US enterprise platform",
      model: "Architecture and delivery",
      title: "Enterprise knowledge search",
      body: "We added specialists to bring cited answers over the platform’s own documents into its product, inside existing access controls.",
      roles: ["AI Solutions Architect", "LLM Engineer", "Platform Engineer"],
      stack: ["LangChain", "pgvector", "FastAPI", "Python"],
      outcomes: [
        { value: "Grounded", label: "answers with sources" },
        { value: "Secure", label: "data boundaries" },
      ],
    },
    {
      client: "US financial services",
      model: "Augmented squad",
      title: "Compliant AI features",
      body: "We placed generative AI engineers inside the client’s strict security and compliance workflow to ship AI features on self-hosted models.",
      roles: ["LLM Engineer", "AI Evaluation Engineer", "Security Engineer"],
      stack: ["LangGraph", "Hugging Face", "vLLM", "Python"],
      outcomes: [
        { value: "Compliant", label: "AI releases" },
        { value: "Lower", label: "model costs" },
      ],
    },
  ],

  skillsAnswer:
    "AI architecture, retrieval-augmented generation, agents and tool use, LangChain and LangGraph, vector search, evals and guardrails, model routing, fine-tuning and self-hosted models.",

  /* Questions about this skill, asked first in the FAQ. Drafts, to be
     reworked; the four about how hiring works are shared (hire-copy.ts). */
  faqs: [
    {
      q: "Do you fine-tune, or use retrieval?",
      a: "Retrieval first: it keeps answers current and citable. We fine-tune when evals show a smaller tuned model beats it on cost or quality.",
    },
    {
      q: "Which models do you work with?",
      a: "Anthropic, Google, OpenAI, Mistral and open-weight models you host yourself. The router keeps you free to switch.",
    },
    {
      q: "How do you stop the model making things up?",
      a: "Answers must cite retrieved sources, groundedness is scored on every run, and a release can’t ship below its threshold.",
    },
    {
      q: "Where does our data go?",
      a: "Where you decide. We can keep embeddings in your own database and run open models inside your cloud account.",
    },
  ],

  photos: {
    ways: [
      { image: ways, alt: "A developer in a navy sweater works on a laptop at a desk in a dark office." },
      { image: rag, alt: "An engineer works on a laptop on a window ledge high above a city.", focus: "60% 50%" },
      { image: evals, alt: "Engineers review results on their laptops around a meeting table.", focus: "50% 40%" },
    ],
    steps: { image: steps, alt: "Two women review a website together on a laptop by a large window." },
    faq: { image: faq, alt: "Two engineers talk through a result on a laptop in a bright office.", focus: "55% 40%" },
  },
};
