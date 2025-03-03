"use client";

import { useState } from "react";
import { cn } from "../../utils/cn";
import { BaseInput } from "../BaseInput";
import { TextInputProps } from "../TextInput";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PasswordInput = (props: TextInputProps) => {
  const {
    value,
    placeholder,
    disabled,
    onChangeText,
    errorText = "",
    successText = "",
  } = props;

  const [showingPassword, setShowingPassword] = useState<boolean>(false);

  const errorClasses = errorText
    ? "border border-red-500 text-red-500 placeholder-red-500 focus:outline-red-500"
    : "";

  const baseClasses =
    "border border-neutral-500 cursor-text rounded-lg focus:outline-primary";

  const disabledClasses = disabled
    ? "bg-neutral-300 text-neutral-300 cursor-not-allowed placeholder:text-neutral-400 text-neutral-500"
    : "cursor-text";

  const classes = cn(baseClasses, errorClasses, disabledClasses);

  return (
    <div className="relative">
      <BaseInput
        type={`${showingPassword ? "text" : "password"}`}
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
      <FontAwesomeIcon
        icon={showingPassword ? faEyeSlash : faEye}
        className="size-4 absolute right-2 top-1/2 -translate-y-1/2 text-neutral-500"
        onClick={() => setShowingPassword(!showingPassword)}
      />
    </div>
  );
};
