import { GroupBase, OptionsOrGroups } from "react-select";
import AsyncSelect from "react-select/async";
import { sharedSelectStyles } from "./sharedStyles";

interface OptionType {
  value: string;
  label: string;
}

export interface AsyncSelectProps<T extends OptionType> {
  value?: T;
  onSelect: (selectedOption: T) => void;
  loadOptions: (inputValue: string) => Promise<T[]> | T[];
  disabled?: boolean;
  placeholder?: string;
  noOptionsMessage?: string;
  loadingMessage?: string;
}

export function CustomAsyncSelect<T extends OptionType>(
  props: AsyncSelectProps<T>
) {
  const {
    value,
    onSelect,
    loadOptions,
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

  // Wrapper para adaptar la firma de loadOptions
  const loadOptionsWrapper = (
    inputValue: string,
    callback: (options: OptionsOrGroups<T, GroupBase<T>>) => void
  ) => {
    const result = loadOptions(inputValue);
    if (result instanceof Promise) {
      result.then((options) => callback(options));
    } else {
      callback(result);
    }
  };

  return (
    <AsyncSelect<T>
      value={value}
      placeholder={placeholder}
      loadOptions={loadOptionsWrapper}
      onChange={handleSelect}
      isDisabled={disabled}
      styles={sharedSelectStyles}
      noOptionsMessage={() => noOptionsMessage}
      loadingMessage={() => loadingMessage}
    />
  );
}
