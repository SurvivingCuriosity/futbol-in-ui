import { faFaceAngry } from "@fortawesome/free-solid-svg-icons";
import { InlinePicker } from "./InlinePicker";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof InlinePicker> = {
  title: "Components/InlinePicker",
  component: InlinePicker,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    options: { control: "object" },
    activeTabId: { control: "number" },
    onTabClick: { action: "tab clicked" },
  },
  args: {
    options: [
      { id: 1, label: "", icon: faFaceAngry },
      { id: 2, label: "", icon: faFaceAngry },
      { id: 3, label: "", icon: faFaceAngry },
    ],
    activeTabId: 1,
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InlinePicker>;

export const Default: Story = {};

export const SecondActive: Story = {
  args: {
    activeTabId: 2,
  },
};

export const CustomOptions: Story = {
  args: {
    options: [
      { id: 10, label: "First Option" },
      { id: 20, label: "Second Option" },
      { id: 30, label: "Third Option" },
    ],
    activeTabId: 20,
  },
};
