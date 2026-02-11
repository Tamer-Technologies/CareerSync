import z from "zod";
import * as JOB_CONSTANTS from "@/constants/job.constants";

export const formSchema = z
  .object({
    title: z
      .string()
      .min(5, "job title must be at least 5 characters.")
      .max(75, "job title must be at most 32 characters."),
    description: z
      .string()
      .min(20, "description must be at least 20 characters.")
      .max(1500, "description must be at most 1500 characters."),
    location: z.string().optional(),
    status: z.enum(JOB_CONSTANTS.JOB_STATUSES),
    companyType: z.enum(JOB_CONSTANTS.COMPANY_TYPES),
    companyName: z.string().min(2).max(25),
    employmentType: z.enum(JOB_CONSTANTS.EMPLOYMENT_TYPES),
    workMode: z.enum(JOB_CONSTANTS.WORK_MODES),
    experienceLevel: z.enum(JOB_CONSTANTS.EXPERIENCE_LEVELS),
    hasSalary: z.boolean(),
    salaryMode: z.enum(["Range", "Fixed"]),
    salaryMin: z.coerce
      .number("must enter a value")
      .min(1, "min value must start from 1")
      .max(1000000, "max value must end at 1000000")
      .optional(),
    salaryMax: z.coerce
      .number("must enter a value")
      .min(1, "min value must start from 1")
      .max(1000000, "max value must end at 1000000")
      .optional(),
    salaryFixed: z.coerce
      .number("must enter a value")
      .min(1, "min value must start from 1")
      .max(1000000, "max value must end at 1000000")
      .optional(),
    salaryCurrency: z.enum(JOB_CONSTANTS.SALARY_CURRENCIES),
    salaryPeriod: z.enum(JOB_CONSTANTS.SALARY_PERIOD),
    techStack: z.array(z.string()).optional(),
  })
  .superRefine((data, ctx) => {
    if (data.hasSalary === false) {
      return;
    }

    if (data.salaryMode === "Fixed" && !data.salaryFixed) {
      ctx.addIssue({
        path: ["salaryFixed"],
        message: "Required",
        code: "custom",
      });
      return;
    }

    if (data.salaryMode === "Range") {
      if (!data.salaryMin) {
        ctx.addIssue({
          path: ["salaryMin"],
          message: "min range salary is required",
          code: "custom",
        });
      }

      if (!data.salaryMax) {
        ctx.addIssue({
          path: ["salaryMax"],
          message: "max range salary is required",
          code: "custom",
        });
      }
      return;
    }
  });
