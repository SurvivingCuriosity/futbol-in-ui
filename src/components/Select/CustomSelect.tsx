import React from "react";
import Select from "react-select";
import { GroupBase } from "react-select";
import { sharedSelectStyles } from "./sharedStyles";

export interface OptionType {
  value: string;
  label: string;
}

export interface CustomSelectProps<T extends OptionType> {
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

  return (
    <Select<T, false, GroupBase<T>>
      placeholder={placeholder}
      options={options}
      onChange={handleSelect}
      isDisabled={disabled}
      styles={sharedSelectStyles}
      isSearchable={true}
      isClearable={false}
      noOptionsMessage={() => noOptionsMessage}
      loadingMessage={() => loadingMessage}
    />
  );
}
