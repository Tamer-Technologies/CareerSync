"use client";

import React, { useCallback, useState } from "react";
import FormSheet from "./Form/FormSheet";
import JobForm from "./Form/job/JobForm";
import { Button } from "./ui/button";
import { jobsPageContent } from "@/constants/pagesContent/jobsContent";
import JobCardList from "./JobCardList";
import { Job } from "@/types/job.types";

const JobClient = () => {
  const [data, setData] = useState<Job[]>();

  const updateJobList = useCallback(() => {
    {
      const savedJobs = localStorage.getItem("jobs");
      if (!savedJobs) setData([]);
      if (savedJobs) {
        const jobs: Job[] = JSON.parse(savedJobs);
        setData(jobs);
      }
    }
  }, []);

  return (
    <>
      <FormSheet
        className="mb-4 w-full"
        title="Job Form"
        trigger={
          <Button
            variant={"outline"}
            className="group border-2 border-dashed border-accent w-full hover:border-none hover:bg-accent/50 hover:text-primary active:bg-accent"
          >
            <jobsPageContent.cta.addIcon />
            {jobsPageContent.cta.label}
            <jobsPageContent.cta.descriptiveIcon />
          </Button>
        }
        formId={`create-job-form`}
        ctaLabel="Create"
      >
        <JobForm id={`create-job-form`} onUpdate={updateJobList} />
      </FormSheet>

      <JobCardList data={data} updateJobList={updateJobList} />
    </>
  );
};

export default JobClient;
