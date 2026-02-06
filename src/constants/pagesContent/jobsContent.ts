import { JobCardData } from "@/components/JobCard";
import {
  BriefcaseBusinessIcon,
  DiamondPlusIcon,
  LucideIcon,
} from "lucide-react";

type JobsPageData = {
  title: string;
  cta: {
    label: string;
    addIcon: LucideIcon;
    descriptiveIcon: LucideIcon;
  };
};

export const jobsPageData: JobsPageData = {
  title: "Jobs",
  cta: {
    label: "Create job",
    addIcon: DiamondPlusIcon,
    descriptiveIcon: BriefcaseBusinessIcon,
  },
};

export const jobsCardsData: (JobCardData & { id: string })[] = [
  {
    id: crypto.randomUUID(),
    jobTitle: "Frontend Developer Required for Local Dev",
    status: "Pending",
    companyName: {
      type: "Company",
      name: "Areganto Tante",
    },
  },
  {
    id: crypto.randomUUID(),
    jobTitle: "Senior Frontend Engineer (React/Next.js)",
    status: "Active",
    companyName: {
      type: "Company",
      name: "Nexus Flow Systems",
    },
  },
  {
    id: crypto.randomUUID(),
    jobTitle: "Junior UI Developer",
    status: "Pending",
    companyName: {
      type: "Agency",
      name: "Pixel Perfect Labs",
    },
  },
  {
    id: crypto.randomUUID(),
    jobTitle: "Design Systems Engineer",
    status: "On Hold",
    companyName: {
      type: "Corporation",
      name: "Nova Core Solutions",
    },
  },
];
