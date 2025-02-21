"use client";

import spinner from "../../assets/svg/bouncing-circles.svg";
import { cn } from "../../utils/cn";
import { ButtonSize, ButtonVariant } from "./types";

export interface ButtonProps {
  label?: string;
  onClick?: () => void;
  size?: ButtonSize;
  variant?: ButtonVariant;
  loading?: boolean;
  disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
  const {
    label,
    onClick,
    size = "md",
    variant = "primary",
    loading = false,
    disabled = false,
  } = props;

  const baseClasses = "rounded-lg hover:brightness-90 w-full";

  const sizeClasses: Record<ButtonSize, string> = {
    sm: "px-2 py-1 text-sm h-8",
    md: "px-4 py-2 text-base h-10",
    lg: "px-6 py-3 text-lg h-12",
  };

  const variantClasses: Record<ButtonVariant, string> = {
    primary: "bg-primary text-black",
    outline: "bg-transparent text-primary border border-primary",
    neutral: "bg-neutral-500 text-white",
    "neutral-outline":
      "bg-transparent text-neutral-500 border border-neutral-500",
    danger: "bg-red-500 text-white",
  };

  const disabledClasses = disabled
    ? "bg-neutral-300 text-neutral-400 cursor-not-allowed"
    : "cursor-pointer";

  const classes = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    disabledClasses,
    loading && "cursor-not-allowed"
  );

  return (
    <button
      type="button"
      onClick={onClick}
      className={classes}
      // Es importante deshabilitar el botón cuando esté en loading o disabled
      disabled={disabled || loading}
    >
      {loading ? (
        <img src={spinner} alt="Loading..." className="w-6 h-6 mx-auto" />
      ) : (
        label
      )}
    </button>
  );
};
