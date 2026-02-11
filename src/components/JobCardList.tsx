"use client";

import Link from "next/link";
import JobCard from "./JobCard";
import { Job } from "@/types/job.types";

import { useEffect } from "react";

const JobCardList = ({
  data,
  updateJobList,
}: {
  data: Job[] | undefined;
  updateJobList: () => void;
}) => {
  useEffect(() => {
    updateJobList();
  }, [updateJobList]);

  if (data === undefined) return <p>Loading Jobs...</p>;

  if (data.length === 0)
    return <p>There are no Jobs being tracked right now.</p>;

  return (
    <>
      {data.map((item) => (
        <Link href={`/jobs/${item.id}`} className="w-full group" key={item.id}>
          <JobCard
            jobTitle={item.jobTitle}
            status={item.status}
            company={item.company}
            className="group-hover:-translate-y-3 transition ease-in-out duration-500"
          />
        </Link>
      ))}
    </>
  );
};

export default JobCardList;
