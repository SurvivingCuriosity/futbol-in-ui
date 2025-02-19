"use client"

import { cn } from "../../utils/cn";
import { BaseInput } from "../BaseInput";

export interface TextInputProps {
  placeholder?: string;
  disabled?: boolean;
  onChangeText?: (text: string) => void;
  errorText?: string;
}

export const TextInput = (props: TextInputProps) => {
  const { placeholder, disabled, onChangeText, errorText = "" } = props;

  const errorClasses = errorText
    ? "border border-red-500 text-red-500 placeholder-red-500 focus:outline-red-500"
    : "";

  const baseClasses =
    "border border-neutral-500 rounded-lg focus:outline-primary";

  const disabledClasses = disabled
    ? "bg-neutral-200 text-neutral-300 cursor-not-allowed placeholder:text-neutral-400"
    : "cursor-pointer";

  const classes = cn(baseClasses, errorClasses, disabledClasses);

  return (
    <>
      <BaseInput
        className={classes}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => onChangeText && onChangeText(e.target.value)}
      />
      {errorText && <small className="text-red-500 text-xs block px-1">{errorText}</small>}
    </>
  );
};
