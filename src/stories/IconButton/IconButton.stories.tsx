import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import IconButton from './IconButton';

const meta = {
  title: 'Inputs/IconButton',
  component: IconButton,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'select' },
      options: ['DownloadIcon'],
      description: 'Icon to display',
    },
    size: {
      type: 'string',
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the icon button',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    color: {
      type: 'string',
      control: 'select',
      options: ['info', 'primary', 'success', 'warning', 'error'],
      description: 'Color of the icon button',
      table: {
        defaultValue: { summary: 'info' },
      },
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <div>aaa</div>,
    size: 'medium',
    color: 'primary',
  },
};
