import { useState } from "react";
import { InlinePickerItem } from "./components/InlinePickerItem.tsx";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { InlinePickerSize } from "./types.ts";

export interface InlinePickerProps {
  options: Array<{ id: number; label: string, icon?:IconDefinition }>;
  activeTabId?: number;
  onTabClick: (id: number) => void;
  size: InlinePickerSize
}

export const InlinePicker = (props: InlinePickerProps) => {
  const { options, activeTabId, onTabClick, size } = props;

  const [idSelected, setIdSelected] = useState(activeTabId || options[0].id);

  const handleSelectTab = (idNewTab: number) => {
    setIdSelected(idNewTab);
    onTabClick(idNewTab);
  };

  const activeIndex = options.findIndex((opcion) => opcion.id === idSelected);
  const tabWidth = 100 / options.length;

  return (
    <nav className="block w-full">
      <div className="mx-auto max-w-[450px] rounded-xl bg-neutral-900 p-1">
        <ul className="relative flex flex-row justify-between">
          <li
            className="absolute h-full cursor-pointer rounded-lg bg-neutral-500/20 px-2 text-center transition-transform duration-300 ease-in-out"
            style={{
              width: `${tabWidth}%`,
              transform: `translateX(${activeIndex * 100}%)`,
            }}
          ></li>

          {options?.map((option) => (
            <InlinePickerItem
              key={option.id}
              id={option.id}
              label={option.label}
              onClick={handleSelectTab}
              active={idSelected === option.id}
              icon={option.icon}
              size={size}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};
