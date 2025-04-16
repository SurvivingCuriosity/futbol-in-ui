"use client";

import { cn } from "../../utils/cn";

export interface TextAreaProps {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onChangeText?: (text: string) => void;
  errorText?: string;
  successText?: string;
  className?: string;
}

export const TextArea = (props: TextAreaProps) => {
  const {
    value,
    placeholder,
    disabled,
    onChangeText,
    errorText = "",
    successText = "",
    className = "",
  } = props;

  return (
    <>
      <textarea
        value={value}
        className={cn(
          `w-full h-24 max-h-48 min-h-16 p-2 border border-neutral-700 rounded-lg text-sm`,
          className
        )}
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
