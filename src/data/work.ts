import jobIconRaw from "../assets/icons/job-title-icon.svg?raw";
import companyIconRaw from "../assets/icons/company-icon.svg?raw";
import locationIconRaw from "../assets/icons/location-icon.svg?raw";
import { sanitizeToOutline } from "../lib/svg";

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "Frontend Developer",
    company: "TGH TECH",
    region: "Kerala, India",
    description:
"Drove frontend development for healthcare, recruitment, and productivity platforms; standardized UI with a reusable design system, introduced secure role-based access, and built booking and presentation automation features.",
    technologies: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Shadcn",
      "Tanstack Query",
      "Vercel",
      "Firebase",
      "Storyblok CMS",
      "REST API",
    ],
  },
  // {
  //   title: "Staff Software Engineer",
  //   company: "FinchPay",
  //   region: "Global",
  //   description:
  //     "Architected event‑driven payment services with idempotency and retries, introduced Kafka for async processing, enforced API versioning, and drove observability with structured logging and tracing.",
  //   technologies: [
  //     "TypeScript",
  //     "NestJS",
  //     "Kafka",
  //     "PostgreSQL",
  //     "Redis",
  //     "gRPC",
  //     "OpenTelemetry",
  //     "AWS",
  //   ],
  // },
  // {
  //   title: "Senior Frontend Engineer",
  //   company: "Insight Analytics",
  //   region: "Europe",
  //   description:
  //     "Owned the design system and SSR/ISR strategy, improved Core Web Vitals (LCP/INP) into the green, and shipped accessible UI components with strong tests and story coverage.",
  //   technologies: [
  //     "React",
  //     "Next.js",
  //     "Astro",
  //     "Tailwind CSS",
  //     "Playwright",
  //     "Vitest",
  //   ],
  // },
  // {
  //   title: "Software Engineer",
  //   company: "LaunchPad",
  //   region: "Brazil",
  //   description:
  //     "Built MVPs end‑to‑end: designed REST/GraphQL APIs, set up CI/CD with preview environments, introduced feature flags, and migrated data to Postgres.",
  //   technologies: [
  //     "Node.js",
  //     "Express",
  //     "GraphQL",
  //     "Supabase",
  //     "PostgreSQL",
  //     "GitHub Actions",
  //     "Docker",
  //   ],
  // },
];

export type WorkItem = (typeof work)[number];
