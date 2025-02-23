import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { CustomAsyncSelect } from './CustomAsyncSelect';
import { OptionType } from './CustomSelect';

const meta: Meta<typeof CustomAsyncSelect> = {
  title: 'Components/CustomAsyncSelect',
  component: CustomAsyncSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    // Función simulada que retorna opciones basadas en el input
    loadOptions: (inputValue: string) =>
      Promise.resolve<OptionType[]>([
        { value: '1', label: `Opción 1 para ${inputValue}` },
        { value: '2', label: `Opción 2 para ${inputValue}` },
        { value: '3', label: `Opción 3 para ${inputValue}` },
      ]),
    onSelect: action('selected'),
    disabled: false,
  },
} satisfies Meta<typeof CustomAsyncSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <div className='p-2 w-[300px]'><CustomAsyncSelect<OptionType> {...args} /></div>,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => <CustomAsyncSelect<OptionType> {...args} />,
};
