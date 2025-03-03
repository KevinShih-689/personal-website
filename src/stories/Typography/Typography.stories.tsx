import type { Meta, StoryObj } from '@storybook/react';
import Typography from './Typography';

const meta = {
  title: 'Data Display/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      type: 'string',
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'p', 'a', 'caption', 'small'],
      description: 'Variant of the typography',
    },
    color: {
      type: 'string',
      control: 'select',
      options: [
        'primary',
        'secondary',
        'textPrimary',
        'textSecondary',
        'textTertiary',
        'textDisabled',
        'success',
        'warning',
        'error',
      ],
      description: 'Color of the typography',
    },
    weight: {
      type: 'string',
      control: 'select',
      options: ['bold', 'regular'],
      description: 'Weight of the typography',
    },
    children: {
      type: 'string',
      control: 'text',
      description: 'Content of the typography',
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Typography',
    variant: 'h1',
    color: 'primary',
    weight: 'regular',
  },
};
