"use client"

import React from "react";
import Select, { GroupBase } from "react-select";
import { sharedSelectStyles } from "./sharedStyles";

export interface OptionType {
  value: string|number;
  label: string;
  imageUrl?: string;
}

export interface CustomSelectProps<T extends OptionType> {
  value?: T;
  onSelect: (selectedOption: T) => void;
  options: T[];
  disabled?: boolean;
  placeholder?: string;
  noOptionsMessage?: string;
  loadingMessage?: string;
}

export function CustomSelect<T extends OptionType>(
  props: CustomSelectProps<T>
): React.JSX.Element {
  const {
    value,
    onSelect,
    options,
    disabled = false,
    placeholder = "Escribe para buscar",
    noOptionsMessage = "Sin resultados",
    loadingMessage = "Cargando...",
  } = props;

  const handleSelect = (selectedOption: T | null) => {
    if (selectedOption) {
      onSelect(selectedOption);
    }
  };

  function formatOptionLabel<T extends OptionType>(
    option: T,
  ) {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        {option.imageUrl && (
          <img
            src={option.imageUrl}
            alt={option.label}
            style={{ width: 20, height: 20, marginRight: 8 }}
          />
        )}
        <span>{option.label}</span>
      </div>
    );
  }

  return (
    <Select<T, false, GroupBase<T>>
      value={value}
      placeholder={placeholder}
      options={options}
      onChange={handleSelect}
      isDisabled={disabled}
      styles={sharedSelectStyles}
      isSearchable={true}
      isClearable={false}
      noOptionsMessage={() => noOptionsMessage}
      loadingMessage={() => loadingMessage}
      formatOptionLabel={formatOptionLabel}
    />
  );
}
