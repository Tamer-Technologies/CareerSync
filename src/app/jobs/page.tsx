import JobClient from "@/components/JobClient";
import { jobsPageContent } from "@/constants/pagesContent/jobsContent";

const Jobs = () => {
  return (
    <div className="max-w-200 mx-auto flex flex-col items-center gap-10">
      <h1>{jobsPageContent.title}</h1>
      <JobClient />
    </div>
  );
};

export default Jobs;
