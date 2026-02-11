import Link from "next/link";
import JobCard from "./JobCard";
import { JobCardData } from "@/types/job.types";
import { jobsCardsData } from "@/constants/pagesContent/jobsContent";

const JobCardList = () => {
  const data: JobCardData[] = jobsCardsData;

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
