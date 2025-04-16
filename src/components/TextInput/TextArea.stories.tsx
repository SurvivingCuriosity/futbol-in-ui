import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "./TextArea";

const meta: Meta<typeof TextArea> = {
  title: "Inputs/TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    errorText: { control: "text" },
    // La acción para onChangeText se mostrará en el panel de acciones de Storybook
    onChangeText: { action: "changed text" },
  },
  args: {
    placeholder: "Escribe algo...",
    disabled: false,
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  render: (args) => (
    <div className="p-10 bg-neutral-900">
      <TextArea {...args} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: "Placeholder personalizado...",
  },
};
