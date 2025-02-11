"use client"

import { cn } from "../../utils/cn";
import { InputSize } from "./types";

export interface BaseInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: InputSize;
}

export const BaseInput = (props: BaseInputProps) => {
  const { className, size = "md", ...rest } = props;

  const baseClasses = "w-full";

  const sizeClasses: Record<InputSize, string> = {
    sm: "px-2 py-1 text-sm h-8",
    md: "px-4 py-2 text-base h-10",
    lg: "px-6 py-3 text-lg h-12",
  };

  const classes = cn(baseClasses, sizeClasses[size], className);

  return <input className={classes} {...rest} />;
};
