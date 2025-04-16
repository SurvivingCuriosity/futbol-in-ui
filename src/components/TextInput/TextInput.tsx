"use client";

import { cn } from "../../utils/cn";
import { BaseInput } from "../BaseInput";

export interface TextInputProps {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onChangeText?: (text: string) => void;
  errorText?: string;
  successText?: string;
  className?: string;
}

export const TextInput = (props: TextInputProps) => {
  const {
    value,
    placeholder,
    disabled,
    onChangeText,
    errorText = "",
    successText = "",
    className = "",
  } = props;

  const errorClasses = errorText
    ? "border border-red-500 text-red-500 placeholder-red-500 focus:outline-red-500"
    : "";

  const baseClasses =
    "border border-neutral-500 cursor-text rounded-lg focus:outline-primary";

  const disabledClasses = disabled
    ? "bg-neutral-300 text-neutral-300 cursor-not-allowed placeholder:text-neutral-400 text-neutral-500"
    : "cursor-text";

  const classes = cn(baseClasses, errorClasses, disabledClasses, className);

  return (
    <>
      <BaseInput
        value={value}
        className={classes}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => onChangeText && onChangeText(e.target.value)}
      />
      {errorText && (
        <small className="text-red-500 text-xs block px-1">{errorText}</small>
      )}
      {successText && (
        <small className="text-green-500 text-xs block px-1">
          {successText}
        </small>
      )}
    </>
  );
};
