import { ComponentPropsWithRef } from "react";
import { cn } from "../libs/utils";
import { cva, VariantProps } from "class-variance-authority";

interface ButtonProps
  extends
    ComponentPropsWithRef<"button">,
    VariantProps<typeof buttonVariants> {}

const buttonVariants = cva("bg-green-200", {
  variants: {
    variant: {
      default: "",
      outline: "",
      ghost: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Button = ({
  variant = "default",
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button className={cn(buttonVariants({ variant, className }))} {...props}>
      {children}
    </button>
  );
};

export default Button;
