/* The questions and answers shown by FaqSection (home page and /faq/), and
   read by the /faq/ page's FAQPage structured data, so the two never differ.

   Questions are the brief's. The answers are drafts written from what the
   site already says (the stats, the team models, X-Shore); have them checked
   before launch. */

export interface Faq {
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  {
    q: "Can JumpGrowth provide individual developers or a complete team?",
    a: "Both. You can add individual developers through team extension, or bring in a complete team: an MVP team for a first release, or a production team for a product already in market.",
  },
  {
    q: "What is included in an MVP team?",
    a: "A compact, cross-functional team sized for a first release: product and technical leadership, design, and full-stack engineers who work with AI tools every day, with QA and DevOps brought in as the build needs them.",
  },
  {
    q: "How quickly can a team start?",
    a: "Teams typically make their first commit within two weeks of kickoff.",
  },
  {
    q: "How does AI assistance change delivery?",
    a: "AI tools speed up work across the delivery cycle, from first draft to review, while experienced engineers make the decisions and own the result. AI adds speed; people own the outcome.",
  },
  {
    q: "What is the X-shore delivery model?",
    a: "Choose one region or combine all three: onshore in the United States, nearshore in Mexico and Canada, and offshore in India. We design the team around collaboration, capability, continuity, and the work.",
  },
  {
    q: "Can developers work within our existing process and tools?",
    a: "Yes. Developers join your rituals, work in your tools and follow your roadmap, so the team extends the way you already work.",
  },
  {
    q: "Is JumpGrowth based in the US?",
    a: "Yes. JumpGrowth is headquartered in Dallas, with teammates across the United States, Mexico, Canada, and India.",
  },
];

/** The FAQPage structured data for a page that shows these questions. */
export const faqSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
});
