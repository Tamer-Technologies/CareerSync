import { BriefcaseBusinessIcon, Clock4, LucideIcon, Zap } from "lucide-react";
import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type JobState = "Active" | "Pending" | "On Hold";

export type JobCardData = {
  jobTitle: string;
  status: JobState;
  companyName: {
    type: string;
    name: string;
  };
};

interface JobCardProps extends ComponentProps<typeof Card>, JobCardData {}

const iconList: Record<JobState, { styles: string; icon: LucideIcon }> = {
  Active: {
    styles: "text-status-active",
    icon: Zap,
  },
  Pending: {
    styles: "text-status-pending",
    icon: Clock4,
  },
  "On Hold": {
    styles: "text-status-on-hold",
    icon: BriefcaseBusinessIcon,
  },
};

const JobCard = ({ jobTitle, status, companyName, ...props }: JobCardProps) => {
  const stateOptions = iconList[status];
  return (
    <Card {...props}>
      <CardHeader className="grid-cols-[1fr_auto] items-center">
        <CardTitle className="md:text-2xl">{jobTitle}</CardTitle>
        <p
          className={cn(
            "flex items-center gap-1.5 [&_svg:not([class*='size-'])]:size-4",
            stateOptions.styles,
          )}
        >
          {status}
          <stateOptions.icon />
        </p>
      </CardHeader>
      <CardFooter>
        {companyName.type}: {companyName.name}
      </CardFooter>
    </Card>
  );
};

export default JobCard;
