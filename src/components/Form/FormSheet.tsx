import { ComponentProps, ReactNode } from "react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";

interface FormSheetProps extends ComponentProps<"div"> {
  trigger: ReactNode;
  title: string;
  description?: string;
  formId: string;
  ctaLabel?: string;
}

const FormSheet = ({
  trigger,
  ctaLabel = "Save Changes",
  title,
  description,
  formId,
  children,
  ...props
}: FormSheetProps) => {
  return (
    <div {...props}>
      <Sheet>
        <SheetTrigger asChild className="w-full">
          {trigger}
        </SheetTrigger>
        <SheetContent showCloseButton={false} className="flex flex-col gap-0">
          <SheetHeader>
            <SheetTitle>{title}</SheetTitle>
            {description && <SheetDescription>{description}</SheetDescription>}
          </SheetHeader>
          <Separator />
          <ScrollArea className="min-h-0 flex-1">
            <div className="p-4">{children}</div>
          </ScrollArea>
          <Separator />
          <SheetFooter className="gap-0">
            <Button type="submit" form={formId} className="mb-3">
              {ctaLabel}
            </Button>
            <SheetClose asChild>
              <Button variant="outline">Cancel</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default FormSheet;
