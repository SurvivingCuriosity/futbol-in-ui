import { CSSObjectWithLabel } from "react-select";

// sharedStyles.ts
export const sharedSelectStyles = {
  control: (
    provided: CSSObjectWithLabel,
    { isDisabled }: { isDisabled: boolean }
  ) => ({
    ...provided,
    backgroundColor: isDisabled
      ? "var(--color-neutral-600)"
      : "var(--color-neutral-950)",
    border: "1px solid var(--color-neutral-700)",
    boxShadow: "none",
    borderRadius: "10px",
  }),

  input: (provided: CSSObjectWithLabel) => ({
    ...provided,
    color: "var(--color-neutral-300)",
    "&:focus": {
      boxShadow: "none",
    },
  }),
  singleValue: (provided: CSSObjectWithLabel) => ({
    ...provided,
    color: "var(--color-neutral-300)",
  }),
  menu: (provided: CSSObjectWithLabel) => ({
    ...provided,
    padding: "0.25em",
    color: "var(--color-primary)",
    backgroundColor: "var(--color-neutral-950)",
    border: "1px solid var(--color-neutral-700)",
    boxShadow: "none",
  }),
  option: (
    provided: CSSObjectWithLabel,
    { isSelected }: { isSelected: boolean }
  ) => ({
    ...provided,
    borderRadius: "5px",
    backgroundColor: isSelected
      ? "var(--color-neutral-900)"
      : "var(--color-neutral-950)",
    color: "var(--color-neutral-50)",
    "&:hover": {
      backgroundColor: "var(--color-neutral-800)",
      color: "var(--color-primary)",
    },
  }),
};
