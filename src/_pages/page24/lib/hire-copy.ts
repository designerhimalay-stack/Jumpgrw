import { BRAND } from "@pg/page24/lib/brand";
import type { Figure, HelpStage, Reason, Step, TechProfile, WayToWork } from "@pg/page24/types/hire";

/* The words of every Technologies page, written once. Each page passes its
   TechProfile (src/content/tech.ts) and gets back the copy for each section of
   the hire kit, so the pages read alike and differ only where the skill does.
   Change a sentence here and it changes on every page that has this file.

   The figures are the owner's; the FAQ answers, the rates in the savings
   planner and the examples are drafts. Have them checked before launch. See
   docs/sections.md. */

export const FIGURES: Figure[] = [
  { value: "20+", label: "Years engineering software" },
  { value: "200+", label: "Engineers under one roof" },
  { value: "300+", label: "Clients served" },
  { value: "4+", label: "Global delivery locations" },
];

/** "React developers" → "React developers"; "generative AI engineers" →
    "Generative AI engineers"; "iOS developers" stays as it is. */
const cap = (s: string) => (/^[a-z][a-z]/.test(s) ? s[0].toUpperCase() + s.slice(1) : s);

/** Planning rates, per engineer, for the savings estimate. */
export const RATES = { onshore: 90, offshore: 32, hours: 160 };

const DEFAULT_HELP = (t: TechProfile): [HelpStage, HelpStage, HelpStage, HelpStage] => [
  {
    icon: "layout",
    title: "Build inside your product",
    body: `${t.Skill} features, APIs and workflows that fit the architecture you already have.`,
    covers: "Features, APIs and interfaces",
  },
  {
    icon: "diagram",
    title: "Develop the data layer",
    body: "Data models, state and the connections your application depends on, designed to hold up as it grows.",
    covers: "Data, state and connections",
  },
  {
    icon: "plug",
    title: "Integrate and release",
    body: "Work through your services, quality gates, cloud and release process until the code is a usable system.",
    covers: "Integration, testing and release",
  },
  {
    icon: "shield",
    title: "Operate and improve",
    body: "Observability, maintenance, security and steady follow-through, so the product stays reliable after launch.",
    covers: "Stability, security and evolution",
  },
];

export function hireCopy(t: TechProfile) {
  const brand = BRAND.name;
  const lower = t.people.toLowerCase();
  /** Engineering pages say "engineer"; product, design and analysis pages
      name their own people. */
  const eng = t.people === "Engineers";
  const plan = eng ? "Plan your engineering hires" : "Plan your hires";
  const unit: [string, string] = eng ? ["engineer", "engineers"] : [t.one, t.many];
  /** "your React stack", but "your full stack work", never "stack stack". */
  const area = t.skill.toLowerCase().endsWith(t.kit) ? `${t.skill} work` : `${t.skill} ${t.kit}`;

  const reasons: [Reason, Reason, Reason] = [
    {
      title: `${t.people} matched to your work`,
      body: "Start from the framework, domain, seniority and delivery habits you actually need. Review profiles and test the technical fit before you choose.",
      tags: ["Specialists", "Domain experience", "Direct interviews"],
    },
    {
      title: "Your team keeps ownership",
      body: `Your leads set priorities, review the work and own the roadmap. Our ${lower} join your rituals, your repositories and your release process.`,
      tags: ["Your tools", "Your rituals", "Your roadmap"],
    },
    {
      title: "Capacity without the handoff",
      body: `Nothing is thrown over a wall. ${t.people} work in your sprints with US workday overlap, so the work moves forward every day.`,
      tags: ["US overlap", "Daily stand-ups", "Shared sprints"],
    },
  ];

  const steps: [Step, Step, Step, Step, Step] = [
    {
      title: "Discovery call",
      kicker: "Leadership context",
      body: "Tell us about your roadmap, the team gap and the work that needs more support.",
      covers: ["Your goals", "The team gap", "Your tech context"],
    },
    {
      title: "Pick the model",
      kicker: "Team shape",
      body: `Choose one ${unit[0]}, a squad or a managed pod, and agree how the team works with yours.`,
      covers: ["Engagement model", "Seniority mix", "Working hours"],
    },
    {
      title: "Meet vetted options",
      kicker: "Shortlist",
      body: `Within days, review ${t.many} matched to your ${t.kit}, your domain and the way you deliver.`,
      covers: ["Matched profiles", "Evidence of skills", "Availability"],
    },
    {
      title: "Interview and select",
      kicker: "Your decision",
      body: "Interview the shortlist yourself, test the technical fit and choose who joins.",
      covers: ["Technical interview", "Team fit", "Your final pick"],
    },
    {
      title: "Onboard and kick off",
      kicker: "First sprint",
      body: "Access, introductions and a walkthrough of the codebase, then the first tickets inside your sprint.",
      covers: ["Access and tools", "Codebase walkthrough", "First commit"],
    },
  ];

  return {
    hero: {
      trail: ["Technologies", t.group, t.crumb ?? t.Skill],
      audience: eng ? `For product and ${t.skill} leaders` : "For product and engineering leaders",
      /* A full sentence, set a step smaller (size "long"), as the X-Shore
         pages do. */
      headline: [`Hire ${t.many}`, "for your team."],
      ctas: [
        { label: plan, href: "#contact", arrow: "diagonal" as const },
        { label: "Explore team options", href: "#ways", arrow: "right" as const },
      ],
      assurances: [
        { icon: "shield" as const, label: eng ? "Senior engineering oversight" : "Senior delivery oversight" },
        { icon: "clock" as const, label: "US workday overlap" },
        { icon: "lock" as const, label: `Your ${t.kit} and controls` },
      ],
      card: {
        status: "Build context / Active",
        place: "US ↔ India",
        note: `Start with one ${unit[0]}. Add a team when you need more hands.`,
        kicker: eng ? "Engineering capacity, inside your org." : `${t.Skill} capacity, inside your org.`,
        statement: eng
          ? `${cap(t.many)} who work in your codebase, quality gates and release rhythm.`
          : `${cap(t.many)} who work in your tools, rituals and release rhythm.`,
        foot: { label: "Built for product and application leaders", value: `One senior ${t.one} to a full ${t.skill} team` },
      },
      base: { title: "Dallas headquartered", line: "Delivery across the USA, India, Canada and Mexico" },
    },

    stack: {
      eyebrow: "Tech we use",
      headline: [`${t.people} who`, `fit your ${t.kit}.`],
      lede: eng
        ? `We work with the ${t.skill} tools, frameworks and architecture your teams already use.`
        : `We work with the ${t.skill} tools and ways of working your teams already use.`,
      coreLabel: "Core",
      ecosystemLabel: "Ecosystem",
      note: "We choose tools for your product, your data, your security needs and your deployment plan.",
    },

    work: {
      eyebrow: "More ways we can help",
      headline: ["Choose the work", "your team needs."],
      lede: `The ${t.skill} work our ${lower} take on, and the tools they use every day.`,
      workLabel: "Common work",
      toolsLabel: "Tools",
    },

    why: {
      eyebrow: `Why ${brand}`,
      headline: ["Why teams", `choose ${brand}.`],
      lede: `Senior India-based ${lower}, backed by delivery across the USA, India, Canada and Mexico.`,
      figures: FIGURES.slice(0, 3),
      reasons,
      cta: "Talk to our team",
    },

    ways: {
      eyebrow: "Ways to work together",
      headline: [`Start with one ${unit[0]}.`, "Grow into a team."],
      lede: "Choose the setup that fits your team and your delivery plan.",
      cta: "Plan this team shape",
      cards: [
        {
          kicker: "Staff augmentation",
          title: `Add one ${t.one}`,
          body: "A dedicated specialist in your team, your codebase and your sprint cycle.",
          chips: t.core.slice(0, 3).map((c) => c.name),
          photo: t.photos.ways[0],
        },
        {
          kicker: "Augmented squad",
          title: `Add a team of ${t.many}`,
          body: `Several ${t.many} for a clear gap in your team, led by your own managers.`,
          chips: t.core.slice(1, 4).map((c) => c.name),
          photo: t.photos.ways[1],
        },
        {
          kicker: "Managed delivery pod",
          title: "Build a delivery pod",
          body: "A connected team with its own lead, for more capacity and fewer handoffs.",
          chips: [t.core[0].name, "Architecture", "Delivery"],
          photo: t.photos.ways[2],
        },
      ] as WayToWork[],
      note: ["You stay in control.", `Our ${lower} work in your codebase, your tools and your delivery process.`],
    },

    savings: {
      eyebrow: "Cost savings calculator",
      headline: ["Estimate your", "monthly savings."],
      lede: `Move the slider to compare a senior US ${t.skill} team with an India-based team of the same size.`,
      sizeLabel: "Your team size",
      unit,
      onshoreLabel: `US onshore at $${RATES.onshore}/hr`,
      offshoreLabel: `Offshore at $${RATES.offshore}/hr`,
      savingsLabel: "Estimated monthly savings",
      perMonth: "per month",
      cta: "Build my team plan",
      ctaNote: "Get a costed plan for your roles, skills and stack.",
      note: `A planning estimate: $${RATES.onshore} an hour onshore and $${RATES.offshore} offshore, ${RATES.hours} hours per person each month. Not a ${brand} quote.`,
    },

    roles: {
      eyebrow: "Find the right skill",
      headline: [`Find the ${t.one}`, "you need."],
      lede: `Pick a skill to see the kinds of ${lower} we match to your team.`,
      all: "All roles",
      kicker: "Senior specialty role",
      cta: "Discuss this hire",
      note: "Example roles. We confirm availability and fit before you decide.",
    },

    capabilities: {
      eyebrow: `What our ${lower} do`,
      headline: ["Get help across", `your ${area}.`],
      lede: eng
        ? "Add the skills you need across apps, architecture, integration and operations."
        : "Add the skills you need, from the first idea to the product in your customers’ hands.",
    },

    help: {
      eyebrow: "How they help",
      headline: ["Build, ship and improve", `${t.products}.`],
      lede: "Hire one specialist or a full team. We cover the work from product to production.",
      stages: t.help ?? DEFAULT_HELP(t),
      footer: `Need help with one part of your ${area}?`,
      cta: "Find the right role",
    },

    examples: {
      eyebrow: "How teams use us",
      headline: ["Real examples of", `${t.skill} teams in action.`],
      lede: "The roles we brought in, and what each team achieved.",
      rolesLabel: "Capability mix",
      note: ["Client details are kept private.", "Roles show the skills each engagement used. Results are examples, not guarantees."],
    },

    pod: {
      eyebrow: "One team. Two locations.",
      headline: ["How your pod", `looks with ${brand}.`],
      lede: `Your leaders own the product and the architecture. Our India-based ${lower} join your way of working, backed by delivery across the USA, India, Canada and Mexico.`,
      points: [
        ["Start small", "with the role you need now."],
        ["Work your way", "in your codebase, tools and quality process."],
        ["Grow when needed", `with more ${t.skill} and integration skills.`],
      ] as [string, string][],
      cta: "Talk about your team",
      label: "Delivery pod / 01",
      status: "Active",
      facts: [
        { label: "Rituals", value: "Daily overlap" },
        { label: "Ownership", value: "Sprint outcomes" },
        { label: "Start", value: "Roadmap-led" },
      ],
    },

    fit: {
      eyebrow: "Is this a good fit?",
      headline: ["For teams that need", eng ? "more engineering help." : `more ${t.skill} help.`],
      items: [
        `You need more ${t.skill} capacity to meet your delivery goals.`,
        `You need ${t.one} skills your team doesn’t have yet.`,
        `You need ${lower} who follow your security and release process.`,
        `You want India-based ${lower} who work closely with your US team.`,
      ],
    },

    steps: {
      eyebrow: "How it works",
      headline: ["Five simple steps to", `add ${t.many}.`],
      coversLabel: "What we cover",
      steps,
      cta: plan,
    },

    faq: {
      eyebrow: "Common questions",
      headline: ["Before you add", `${t.many}.`],
      cta: "Ask a team lead",
      /* This skill's own questions first, then four about how hiring works. */
      faqs: [
        { q: `What ${t.skill} skills can we hire for?`, a: t.skillsAnswer },
        ...t.faqs,
        {
          q: "Is this staff augmentation or a managed delivery team?",
          a: `Both. Add one ${unit[0]}, a small team, or a full pod with its own lead.`,
        },
        {
          q: `Can we start with one ${t.one}?`,
          a: `Yes. Most teams start with one ${unit[0]} in a clear gap and add people once the fit is proven.`,
        },
        {
          q: `Can we interview ${unit[1]} before we choose?`,
          a: "Always. You see the profiles, run your own interviews and make the final call.",
        },
        {
          q: `Can we scale the team after the first ${unit[0]} starts?`,
          a: `Yes. Add people as the roadmap grows, or move from one ${unit[0]} to a managed pod with its own lead.`,
        },
      ],
    },

    contact: {
      eyebrow: "Tell us what you need",
      headline: ["Where does your", "team need help?"],
      body: `Tell us the role or the skill gap. We’ll help you choose the right ${unit[0]} or team.`,
      formKicker: "Engineering brief",
      formTitle: "Tell us what you need.",
      fields: {
        name: { label: "Your name", placeholder: "Full name" },
        company: { label: "Company", placeholder: "Company name" },
        email: { label: "Work email", placeholder: "you@company.com" },
        need: {
          label: "What do you need?",
          options: [`One ${unit[0]}`, "A small team", "A delivery pod", "Not sure yet"],
        },
        when: {
          label: "When do you need help?",
          options: ["Right away", "Within a month", "This quarter", "Just exploring"],
        },
        brief: {
          label: "Tell us about the role or skill you need.",
          placeholder: `The role, your ${t.kit}, or the gap in your team…`,
        },
      },
      submit: "Plan my team",
      consent: `By sending this brief you agree that ${brand} may use your details to reply to you about it.`,
      promise: "No newsletter. One conversation about your team.",
      subject: `${t.Skill} team brief`,
    },
  };
}

export type HireCopy = ReturnType<typeof hireCopy>;
