import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { CustomSelect, OptionType } from './CustomSelect';

const meta: Meta<typeof CustomSelect> = {
  title: 'Components/CustomSelect',
  component: CustomSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    options: [
      { value: '1', label: 'Opción 1' },
      { value: '2', label: 'Opción 2' },
      { value: '3', label: 'Opción 3' },
    ],
    onSelect: action('selected'),
    disabled: false,
  },
} satisfies Meta<typeof CustomSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <CustomSelect<OptionType> {...args} />,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => <CustomSelect<OptionType> {...args} />,
};
