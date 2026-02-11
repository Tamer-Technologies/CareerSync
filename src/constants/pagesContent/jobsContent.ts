import { Job, JobCardData } from "@/types/job.types";
import {
  BriefcaseBusinessIcon,
  DiamondPlusIcon,
  LucideIcon,
} from "lucide-react";

type JobsPageContent = {
  title: string;
  cta: {
    label: string;
    addIcon: LucideIcon;
    descriptiveIcon: LucideIcon;
  };
};

export const jobsPageContent: JobsPageContent = {
  title: "Jobs",
  cta: {
    label: "Create job",
    addIcon: DiamondPlusIcon,
    descriptiveIcon: BriefcaseBusinessIcon,
  },
};

export const jobsCardsData: JobCardData[] = [
  {
    id: "job-1",
    jobTitle: "Frontend Developer Required for Local Dev",
    status: "Pending",
    company: {
      type: "Company",
      name: "Areganto Tante",
    },
  },
  {
    id: "job-2",
    jobTitle: "Senior Frontend Engineer (React/Next.js)",
    status: "Active",
    company: {
      type: "Company",
      name: "Nexus Flow Systems",
    },
  },
  {
    id: "job-3",
    jobTitle: "Junior UI Developer",
    status: "Pending",
    company: {
      type: "Agency",
      name: "Pixel Perfect Labs",
    },
  },
  {
    id: "job-4",
    jobTitle: "Design Systems Engineer",
    status: "On Hold",
    company: {
      type: "Corporation",
      name: "Nova Core Solutions",
    },
  },
];

export const jobsDetailsData: Job[] = [
  {
    id: "job-1",
    jobTitle: "Frontend Developer Required for Local Dev",
    status: "Pending",
    company: {
      type: "Company",
      name: "Areganto Tante",
    },

    description:
      "We are looking for a skilled Frontend Developer to join our local development team and support the development of internal web tools. In this role, you will work closely with backend developers and product stakeholders to implement user-friendly interfaces, improve existing features, and ensure the applications are responsive and performant. This is a hands-on role suited for someone who enjoys working on real-world projects in a collaborative, on-site environment.",

    employmentType: "Contract",
    workMode: "On-site",
    experienceLevel: "Mid",
    location: "Cairo, Egypt",

    techStack: ["HTML", "CSS", "JavaScript", "React"],
  },

  {
    id: "job-2",
    jobTitle: "Senior Frontend Engineer (React/Next.js)",
    status: "Active",
    company: {
      type: "Company",
      name: "Nexus Flow Systems",
    },

    description:
      "Nexus Flow Systems is seeking a Senior Frontend Engineer to lead the development of high-quality, scalable web applications. You will be responsible for architecting frontend solutions, mentoring team members, and collaborating with product managers and designers to deliver exceptional user experiences. The ideal candidate has deep experience with React and Next.js and is comfortable working in a fast-paced, remote-first environment.",

    employmentType: "Full-time",
    workMode: "Remote",
    experienceLevel: "Senior",

    salary: {
      min: 80000,
      max: 110000,
      currency: "USD",
      period: "Yearly",
    },

    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },

  {
    id: "job-3",
    jobTitle: "Junior UI Developer",
    status: "Pending",
    company: {
      type: "Agency",
      name: "Pixel Perfect Labs",
    },

    description:
      "Pixel Perfect Labs is looking for a Junior UI Developer who is passionate about creating clean and responsive user interfaces. You will work closely with designers to convert Figma designs into production-ready UI components, ensure visual consistency across browsers, and learn best practices in modern frontend development. This role is ideal for someone at the beginning of their career who wants to grow within a supportive agency environment.",

    employmentType: "Full-time",
    workMode: "Hybrid",
    experienceLevel: "Junior",
    location: "Alexandria, Egypt",

    techStack: ["HTML", "CSS", "Tailwind", "Figma"],
  },

  {
    id: "job-4",
    jobTitle: "Design Systems Engineer",
    status: "On Hold",
    company: {
      type: "Corporation",
      name: "Nova Core Solutions",
    },

    description:
      "Nova Core Solutions is seeking an experienced Design Systems Engineer to build, maintain, and evolve a scalable design system used across multiple enterprise products. You will collaborate closely with designers, frontend engineers, and product teams to create reusable UI components, define design standards, and ensure consistency across platforms. This role requires strong expertise in component architecture, CSS strategy, and documentation practices.",

    employmentType: "Full-time",
    workMode: "Hybrid",
    experienceLevel: "Senior",
    location: "Berlin, Germany",

    salary: {
      fixed: 60000,
      currency: "EUR",
      period: "Yearly",
    },

    techStack: ["React", "TypeScript", "Storybook", "CSS Architecture"],
  },
];
