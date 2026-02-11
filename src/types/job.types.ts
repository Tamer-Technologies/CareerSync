import * as JOB_CONSTANTS from "@/constants/job.constants";

import { LucideIcon } from "lucide-react";

export type JobStatus = (typeof JOB_CONSTANTS.JOB_STATUSES)[number];

export type StateOptions = { styles: string; icon: LucideIcon };

export type JobCardData = {
  id: string;
  jobTitle: string;
  status: JobStatus;
  company: {
    type: (typeof JOB_CONSTANTS.COMPANY_TYPES)[number];
    name: string;
  };
};

export interface Job extends JobCardData {
  description: string;
  location?: string;
  employmentType: (typeof JOB_CONSTANTS.EMPLOYMENT_TYPES)[number];
  workMode: (typeof JOB_CONSTANTS.WORK_MODES)[number];
  experienceLevel: (typeof JOB_CONSTANTS.EXPERIENCE_LEVELS)[number];
  salary?: {
    min?: number;
    max?: number;
    fixed?: number;
    currency: (typeof JOB_CONSTANTS.SALARY_CURRENCIES)[number];
    period: (typeof JOB_CONSTANTS.SALARY_PERIOD)[number];
  };
  techStack?: string[];
}
