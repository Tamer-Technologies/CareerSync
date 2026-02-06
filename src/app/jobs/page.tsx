import JobCard from "@/components/JobCard";
import { Button } from "@/components/ui/button";
import {
  jobsCardsData,
  jobsPageData,
} from "@/constants/pagesContent/jobsContent";
import Link from "next/link";

const Jobs = () => {
  return (
    <div className="max-w-200 mx-auto flex flex-col items-center gap-10">
      <h1>{jobsPageData.title}</h1>
      <Button
        asChild
        variant={"outline"}
        className="group border-2 border-dashed border-accent w-full hover:border-none hover:bg-accent/50 hover:text-primary active:bg-accent"
      >
        <Link href={"/jobs/new"}>
          <jobsPageData.cta.addIcon />
          {jobsPageData.cta.label}
          <jobsPageData.cta.descriptiveIcon />
        </Link>
      </Button>
      {jobsCardsData.map((item) => (
        <Link href={`/jobs/${item.id}`} className="w-full group" key={item.id}>
          <JobCard
            jobTitle={item.jobTitle}
            status={item.status}
            companyName={item.companyName}
            className="group-hover:-translate-y-3 transition ease-in-out duration-500"
          />
        </Link>
      ))}
    </div>
  );
};

export default Jobs;
