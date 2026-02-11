"use client";

import { useEffect, useState } from "react";
import { Job } from "@/types/job.types";
import JobCardHeader from "@/components/JobCardHeader";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import FormSheet from "./Form/FormSheet";
import JobForm from "./Form/job/JobForm";
import {
  Banknote,
  BriefcaseBusinessIcon,
  Building2,
  Clock,
  MapPin,
  Monitor,
} from "lucide-react";
import { Separator } from "./ui/separator";
import JobDetailItem from "./JobDetailItem";
import { formatSalary } from "@/lib/formatters";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export const JobDetailsClient = ({ jobId }: { jobId: string }) => {
  const [data, setData] = useState<Job | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  const deleteJob = () => {
    const savedJobs = localStorage.getItem("jobs");
    if (savedJobs) {
      const jobs: Job[] = JSON.parse(savedJobs);
      const updatedJobs = jobs.filter((item) => item.id !== jobId);
      localStorage.setItem("jobs", JSON.stringify(updatedJobs));
      router.push("/jobs");
    }
  };

  const updateData = () => {
    const savedJobs = localStorage.getItem("jobs");
    if (savedJobs) {
      const jobs: Job[] = JSON.parse(savedJobs);
      const updatedJobs = jobs.find(
        (item) => String(item.id) === String(jobId),
      );

      if (updatedJobs) {
        setData(updatedJobs);
      }
    }
  };

  useEffect(() => {
    setIsMounted(true);
    const savedJobs = localStorage.getItem("jobs");
    if (savedJobs) {
      const jobs: Job[] = JSON.parse(savedJobs);
      const foundJob = jobs.find((item) => String(item.id) === String(jobId));
      if (foundJob) setData(foundJob);
    }
  }, [jobId]);

  if (!isMounted) {
    return (
      <div className="container max-w-170 mx-auto">
        <Card>
          <CardContent>Loading Job Details...</CardContent>
        </Card>
      </div>
    );
  }

  if (!data)
    return (
      <div className="container max-w-170 mx-auto">
        <Card>
          <CardContent>Job not found</CardContent>
        </Card>
      </div>
    );

  return (
    <div className="container max-w-170 mx-auto flex flex-col">
      <div className="flex gap-5">
        <FormSheet
          className="mb-4"
          title="Job Form"
          trigger={<Button>Edit</Button>}
          formId={`job-[${data.id}]-form`}
        >
          <JobForm
            id={`job-[${data.id}]-form`}
            job={data}
            onUpdate={updateData}
          />
        </FormSheet>

        <Button className="ml-auto" onClick={deleteJob}>
          Delete
        </Button>
      </div>

      <Card>
        <div className="sr-only">
          <h1>{data?.jobTitle}</h1>
          <span>{data?.status}</span>
        </div>

        <JobCardHeader
          jobTitle={data?.jobTitle}
          status={data?.status}
          aria-hidden="true"
        >
          <div className="flex gap-2 items-center text-primary">
            <Building2 className="size-4" />
            <span>{data?.company.name}</span>
            <span className="text-primary/60">•</span>
            <span className="text-sm">{data?.company.type}</span>
          </div>
        </JobCardHeader>

        <Separator />

        <CardContent className="flex flex-col gap-7">
          <div className="flex flex-col gap-7">
            <div className="flex gap-5">
              <div className="text-2xl flex gap-2">
                <BriefcaseBusinessIcon className="mt-1.25" /> experience:
                <span>{data?.experienceLevel}</span>
              </div>
            </div>

            <div>
              <h2 className="text-xl mb-3">About the Role</h2>
              <p className="text-primary">{data?.description}</p>
            </div>

            <div>
              <h2 className="text-xl mb-3">Tech Stack</h2>
              <div className="flex flex-wrap gap-4 text-sm">
                {data?.techStack?.length ? (
                  data.techStack.map((item) => (
                    <p className="bg-accent py-1 px-2 rounded-md" key={item}>
                      {item}
                    </p>
                  ))
                ) : (
                  <p>none</p>
                )}
              </div>
            </div>
          </div>

          <Separator />

          <div className="flex flex-wrap gap-7">
            <JobDetailItem
              icon={Monitor}
              label="Work Mode"
              value={data?.workMode}
            />
            <JobDetailItem
              icon={Clock}
              label="Type"
              value={data?.employmentType}
            />
            <JobDetailItem
              icon={Banknote}
              label="Salary"
              value={formatSalary(data?.salary)}
            />
          </div>
        </CardContent>

        <CardFooter>
          <div className="flex flex-col w-full">
            <Separator />
            <div className="pt-3 text-primary flex gap-2">
              <MapPin className="size-4" />
              <span className="text-sm">
                {data?.location ? data.location : "Location not specified"}
              </span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
