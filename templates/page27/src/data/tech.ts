import type { TechProfile } from "@/types/hire";
import hero from "@/assets/pages/p27-hero.jpg";
import ways from "@/assets/pages/p27-ways.jpg";
import whiteboard from "@/assets/pages/p27-whiteboard.jpg";
import card from "@/assets/pages/p27-card.jpg";
import r1 from "@/assets/pages/p27-r1.jpg";
import r2 from "@/assets/pages/p27-r2.jpg";
import r3 from "@/assets/pages/p27-r3.jpg";
import r4 from "@/assets/pages/p27-r4.jpg";
import steps from "@/assets/pages/p27-steps.jpg";
import faq from "@/assets/pages/p27-faq.jpg";

/* Machine learning engineers: everything on this page that is about machine
   learning. The rest of the words come from src/lib/hire-copy.ts, shared
   with every Technologies page. The examples and the skills answer are
   drafts; have them checked before launch. Photo sources are in
   docs/sections.md. */

export const TECH: TechProfile = {
  group: "AI & data",
  crumb: "Machine learning",
  skill: "machine learning",
  Skill: "Machine learning",
  one: "machine learning engineer",
  many: "machine learning engineers",
  people: "Engineers",
  kit: "stack",
  products: "machine learning products",

  hero: {
    lede: "Engineers who take models from notebook to production: trained with care, explained to your team, and watched for drift once they’re live.",
    photo: { image: hero, alt: "An engineer in headphones works at a standing desk with code on two monitors." },
  },

  core: [
    { name: "Python", logo: "python", note: "Language" },
    { name: "PyTorch", logo: "pytorch", note: "Deep learning" },
    { name: "scikit-learn", logo: "scikitlearn", note: "Classic ML" },
    { name: "XGBoost", note: "Gradient boosting" },
    { name: "MLflow", logo: "mlflow", note: "Experiment tracking" },
    { name: "TensorFlow", logo: "tensorflow", note: "Model training" },
  ],
  ecosystem: ["pandas", "NumPy", "Jupyter", "Weights & Biases", "DVC", "Ray", "ONNX", "FastAPI", "Kubeflow"],

  benefits: [
    {
      title: "Models that meet the target",
      body: "The simplest model that meets your target, measured against an honest baseline, with deep learning only where the data earns it.",
      work: ["Model development", "Feature engineering", "Baselines"],
      tools: ["scikit-learn", "XGBoost", "PyTorch", "pandas"],
    },
    {
      title: "Notebook to production",
      body: "Notebooks turned into versioned pipelines with tracked experiments, tested data and models you can deploy and roll back.",
      work: ["ML pipelines", "Experiment tracking", "Model serving"],
      tools: ["MLflow", "DVC", "FastAPI", "Docker"],
    },
    {
      title: "Predictions people can check",
      body: "Feature importance for the model and a breakdown for any single prediction, in terms your team can explain.",
      work: ["Explainability", "Model cards", "Bias checks"],
      tools: ["SHAP", "scikit-learn", "Jupyter", "MLflow"],
    },
    {
      title: "Models that stay accurate",
      body: "Inputs and outputs watched for drift, with retraining that ships a new model only when it beats the old one.",
      work: ["Drift monitoring", "Retraining", "A/B testing"],
      tools: ["MLflow", "Evidently", "Kubeflow", "Python"],
    },
  ],

  roles: [
    {
      title: "ML Solutions Architect",
      body: "Sets the shape of your ML system: data, training, serving and the standards the team builds to.",
      skills: ["Python", "PyTorch", "MLflow", "Kubeflow"],
      part: "Architecture",
      photo: { image: r1, alt: "A researcher in a lab coat analyses scans across two monitors." },
    },
    {
      title: "Machine Learning Engineer",
      body: "Builds models end to end, from the training data to the deployed endpoint, with tests and tracking alongside.",
      skills: ["PyTorch", "scikit-learn", "XGBoost", "MLflow"],
      part: "Core delivery",
      photo: { image: r2, alt: "A man works through equations on a huge chalkboard covered in formulas." },
    },
    {
      title: "Applied Data Scientist",
      body: "Frames the business question, explores the data and finds the features and models worth building.",
      skills: ["Python", "pandas", "scikit-learn", "Jupyter"],
      part: "Modelling",
      photo: { image: r3, alt: "An engineer works on a laptop beside robotics equipment in a lab." },
    },
    {
      title: "MLOps Engineer",
      body: "Runs training, deployment and monitoring as pipelines, so models ship, roll back and retrain on schedule.",
      skills: ["MLflow", "Kubeflow", "Docker", "Kubernetes"],
      part: "Platform",
      photo: { image: r4, alt: "A woman maps out notes and diagrams on a whiteboard wall." },
    },
  ],

  capabilities: [
    {
      label: "Build",
      icon: "zap",
      title: "Build ML models",
      body: "Machine learning engineers who build forecasting, ranking, classification and vision models that hold up in production.",
      chips: ["PyTorch", "scikit-learn", "XGBoost"],
    },
    {
      label: "Integrate",
      icon: "plug",
      title: "Connect your data",
      body: "Specialists who connect models to your data, your product and the decisions they support.",
      chips: ["Feature pipelines", "Model APIs", "Batch scoring"],
    },
    {
      label: "Platform",
      icon: "cloud",
      title: "Deploy securely",
      body: "Engineers who deploy, monitor and retrain models inside your cloud and under your security rules.",
      chips: ["MLOps", "Drift monitoring", "Security"],
    },
  ],

  help: [
    {
      icon: "pointer",
      title: "Start from the decision",
      body: "Turn a business question into a prediction your product can use, with a clear target and a baseline to beat.",
      covers: "Problem, target and baseline",
    },
    {
      icon: "diagram",
      title: "Prepare data and features",
      body: "Pipelines that clean, version and test the data, and build the features the model learns from.",
      covers: "Data, features and validation",
    },
    {
      icon: "zap",
      title: "Train and deploy",
      body: "Tracked experiments, honest evaluation, and models served behind an API or a batch job you can roll back.",
      covers: "Training, evaluation and serving",
    },
    {
      icon: "sync",
      title: "Monitor and retrain",
      body: "Drift and accuracy watched in production, with retraining that ships a new model only when it beats the old one.",
      covers: "Drift, retraining and ownership",
    },
  ],

  examples: [
    {
      client: "US product company",
      model: "Dedicated product pod",
      title: "Forecasting model team",
      body: "We provided machine learning engineers to take a forecasting model from notebook to production and set up reliable retraining.",
      roles: ["ML Solutions Architect", "Machine Learning Engineer", "Delivery Lead"],
      stack: ["Python", "XGBoost", "MLflow", "FastAPI"],
      outcomes: [
        { value: "Faster", label: "model releases" },
        { value: "Reliable", label: "production forecasts" },
      ],
    },
    {
      client: "US enterprise platform",
      model: "Architecture and delivery",
      title: "ML platform modernisation",
      body: "We added specialists to move the platform’s models onto versioned pipelines with tracking, monitoring and safe rollbacks.",
      roles: ["ML Solutions Architect", "MLOps Engineer", "Data Engineer"],
      stack: ["PyTorch", "MLflow", "Kubeflow", "Kubernetes"],
      outcomes: [
        { value: "Repeatable", label: "model training" },
        { value: "Reduced", label: "manual work" },
      ],
    },
    {
      client: "US financial services",
      model: "Augmented squad",
      title: "Explainable risk models",
      body: "We placed machine learning engineers inside the client’s strict security and compliance workflow to ship risk models the business can explain.",
      roles: ["Machine Learning Engineer", "Applied Data Scientist", "Security Engineer"],
      stack: ["scikit-learn", "XGBoost", "SHAP", "Python"],
      outcomes: [
        { value: "Compliant", label: "model releases" },
        { value: "Explainable", label: "predictions" },
      ],
    },
  ],

  skillsAnswer:
    "ML architecture, PyTorch, TensorFlow and scikit-learn, gradient boosting, feature engineering, experiment tracking, model serving, explainability, drift monitoring and MLOps.",

  /* Questions about this skill, asked first in the FAQ. Drafts, to be
     reworked; the four about how hiring works are shared (hire-copy.ts). */
  faqs: [
    {
      q: "We only have a notebook. Is that enough to start?",
      a: "Yes. We turn it into a versioned pipeline with tracked experiments, tests on the data, and a model you can deploy and roll back.",
    },
    {
      q: "Do we need deep learning?",
      a: "Often not. We start with the simplest model that meets the target, and reach for PyTorch or TensorFlow when the data earns it.",
    },
    {
      q: "How do you explain predictions to the business?",
      a: "Global feature importance for the model, and a per-prediction breakdown for any single decision your team needs to justify.",
    },
    {
      q: "What happens after launch?",
      a: "Inputs and outputs are watched for drift. When a score crosses its threshold, retraining runs and a new model ships only if it beats the old one.",
    },
  ],

  photos: {
    ways: [
      { image: ways, alt: "An engineer in a maroon sweater works at a computer in a lab." },
      { image: whiteboard, alt: "An engineer works through equations on a chalkboard.", focus: "50% 40%" },
      { image: card, alt: "Three colleagues review a model’s results on a laptop.", focus: "50% 35%" },
    ],
    steps: { image: steps, alt: "Three colleagues review a project on a tablet on an office sofa." },
    faq: { image: faq, alt: "An engineer takes notes beside her laptop at a bright desk.", focus: "50% 40%" },
  },
};
