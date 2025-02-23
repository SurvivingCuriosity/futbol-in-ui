import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Buttons/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'outline', 'neutral', 'neutral-outline', 'danger'],
    },
    loading: {
      control: 'boolean',
    },
    // Si deseas añadir más controles (por ejemplo, label) lo puedes hacer aquí.
  },
  args: {
    onClick: action('clicked'),
    label: 'Button',
    size: 'md',
    variant: 'primary',
    loading: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const Neutral: Story = {
  args: {
    variant: 'neutral',
  },
};

export const NeutralOutline: Story = {
  args: {
    variant: 'neutral-outline',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
  },
};

export const DangerOutline: Story = {
  args: {
    variant: 'danger-outline',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    // Al estar en loading, el spinner se renderiza en lugar de la etiqueta
    label: '',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};
