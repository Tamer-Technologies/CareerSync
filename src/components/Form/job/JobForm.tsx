"use client";

import { Job } from "@/types/job.types";
import * as JOB_CONSTANTS from "@/constants/job.constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { ComponentProps } from "react";
import { Resolver, useForm } from "react-hook-form";
import z from "zod";
import { formSchema } from "@/schemas/job.schema";
import FormInput from "../FormInput";
import FormTextArea from "../FormTextArea";
import FormRadio from "../FormRadio";
import FormSelect from "../FormSelect";
import { FieldGroup, FieldLegend, FieldSet } from "@/components/ui/field";
import { Separator } from "@/components/ui/separator";
import FormSwitch from "../FormSwitch";

type FormValues = z.infer<typeof formSchema>;

interface JobForm extends ComponentProps<"form"> {
  job?: Job;
  onUpdate?: () => void;
}

const JobForm = ({ job, onUpdate, ...props }: JobForm) => {
  const form = useForm<FormValues>({
    defaultValues: {
      title: job?.jobTitle ?? "",
      status: job?.status ?? JOB_CONSTANTS.JOB_STATUSES[0],
      companyType: job?.company?.type ?? JOB_CONSTANTS.COMPANY_TYPES[0],
      companyName: job?.company?.name,
      description: job?.description ?? "",
      employmentType: job?.employmentType ?? JOB_CONSTANTS.EMPLOYMENT_TYPES[0],
      workMode: job?.workMode ?? JOB_CONSTANTS.WORK_MODES[0],
      experienceLevel:
        job?.experienceLevel ?? JOB_CONSTANTS.EXPERIENCE_LEVELS[0],
      location: job?.location ?? "",
      hasSalary: job?.salary ? true : false,
      salaryMode: job?.salary?.fixed ? "Fixed" : "Range",
      salaryMin: job?.salary?.min,
      salaryMax: job?.salary?.max,
      salaryFixed: job?.salary?.fixed,
      salaryCurrency:
        job?.salary?.currency ?? JOB_CONSTANTS.SALARY_CURRENCIES[0],
      salaryPeriod: job?.salary?.period ?? JOB_CONSTANTS.SALARY_PERIOD[0],
      techStack: job?.techStack ?? [],
    },
    resolver: zodResolver(formSchema) as Resolver<FormValues>,
  });

  const hasSalary = form.watch("hasSalary");
  const salaryMode = form.watch("salaryMode");

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const refinedData: Omit<Job, "id"> = {
      jobTitle: data.title,
      status: data.status,
      company: {
        name: data.companyName,
        type: data.companyType,
      },
      description: data.description,
      employmentType: data.employmentType,
      workMode: data.workMode,
      experienceLevel: data.experienceLevel,
    };

    if (data.location && data.location.trim() !== "") {
      refinedData.location = data.location;
    }

    if (data.techStack && data.techStack.length > 0) {
      refinedData.techStack = data.techStack;
    }

    if (data.hasSalary) {
      refinedData.salary = {
        currency: data.salaryCurrency,
        period: data.salaryPeriod,
      };

      if (data.salaryMode === "Fixed") {
        if (data.salaryFixed !== undefined)
          refinedData.salary.fixed = data.salaryFixed;
      } else {
        if (data.salaryMin !== undefined)
          refinedData.salary.min = data.salaryMin;
        if (data.salaryMax !== undefined)
          refinedData.salary.max = data.salaryMax;
      }
    }

    const savedJobs = localStorage.getItem("jobs");
    let jobsList: Job[] = savedJobs ? JSON.parse(savedJobs) : [];

    if (job) {
      const updatedJob = { ...refinedData, id: job.id };
      jobsList = jobsList.map((item) =>
        item.id === job.id ? updatedJob : item,
      );

      // await fetch(`/api/jobs/${job.id}`, {
      //   method: "PATCH",
      //   body: JSON.stringify(refinedData),
      // });
    } else {
      const newJob = { ...refinedData, id: crypto.randomUUID() };
      jobsList.push(newJob);

      // await fetch(`/api/jobs`, {
      //   method: "POST",
      //   body: JSON.stringify(refinedData),
      // });
    }

    localStorage.setItem("jobs", JSON.stringify(jobsList));
    if (onUpdate) onUpdate();
    console.log(data);
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} {...props}>
      <FieldGroup>
        <FormInput control={form.control} name="title" label="Job Title*" />
        <FormTextArea
          control={form.control}
          name="description"
          label="Description*"
          description="Provide details about the Job."
        />

        <FormInput
          control={form.control}
          name="location"
          label="Job Location"
        />

        <Separator />

        <FormRadio
          control={form.control}
          name="status"
          label="Status*"
          options={JOB_CONSTANTS.JOB_STATUSES}
        />

        <Separator />

        <FieldSet>
          <FieldLegend>Company</FieldLegend>
          <FormInput control={form.control} name="companyName" label="Name*" />

          <FormSelect
            control={form.control}
            name="companyType"
            label="Type*"
            options={JOB_CONSTANTS.COMPANY_TYPES}
          />
        </FieldSet>

        <FormSelect
          control={form.control}
          name="employmentType"
          label="Employment*"
          options={JOB_CONSTANTS.EMPLOYMENT_TYPES}
        />

        <Separator />

        <FormRadio
          control={form.control}
          name="workMode"
          label="Work Mode*"
          options={JOB_CONSTANTS.WORK_MODES}
        />

        <FormSelect
          control={form.control}
          name="experienceLevel"
          label="Experience*"
          options={JOB_CONSTANTS.EXPERIENCE_LEVELS}
        />

        <Separator />

        <FieldSet>
          <FieldLegend className="flex gap-3 items-center">
            Salary <FormSwitch control={form.control} name="hasSalary" />
          </FieldLegend>

          {hasSalary && (
            <>
              <FormRadio
                control={form.control}
                name="salaryMode"
                options={["Fixed", "Range"]}
                className="flex-row"
              />

              {salaryMode === "Fixed" ? (
                <FormInput
                  control={form.control}
                  name="salaryFixed"
                  label="Value*"
                />
              ) : (
                <div className="flex gap-5">
                  <FormInput
                    control={form.control}
                    name="salaryMin"
                    label="Min Value*"
                  />
                  <FormInput
                    control={form.control}
                    name="salaryMax"
                    label="Max Value*"
                  />
                </div>
              )}

              <div className="flex gap-5">
                <FormSelect
                  control={form.control}
                  name="salaryCurrency"
                  label="Currency*"
                  options={JOB_CONSTANTS.SALARY_CURRENCIES}
                />
                <FormSelect
                  control={form.control}
                  name="salaryPeriod"
                  label="Period*"
                  options={JOB_CONSTANTS.SALARY_PERIOD}
                />
              </div>
            </>
          )}
        </FieldSet>
      </FieldGroup>
    </form>
  );
};

export default JobForm;
