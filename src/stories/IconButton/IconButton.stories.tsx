import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import IconButton from './IconButton';
import DownloadIcon from '@icons/download.svg';
import SendIcon from '@icons/send.svg';
import GithubIcon from '@icons/github.svg';
import LinkedInIcon from '@icons/linkedIn.svg';
import CakeResumeIcon from '@icons/cakeResume.svg';

const meta = {
  title: 'Inputs/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'select' },
      options: ['DownloadIcon', 'SendIcon', 'GithubIcon', 'LinkedInIcon', 'CakeResumeIcon'],
      description: 'Icon to display',
      mapping: {
        DownloadIcon: <DownloadIcon fill="currentColor" />,
        SendIcon: <SendIcon fill="currentColor" />,
        GithubIcon: <GithubIcon fill="currentColor" />,
        LinkedInIcon: <LinkedInIcon fill="currentColor" />,
        CakeResumeIcon: <CakeResumeIcon fill="currentColor" />,
      },
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
    disabled: {
      type: 'boolean',
      control: 'boolean',
      description: 'Disabled state of the icon button',
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
    children: <DownloadIcon fill="currentColor" />,
    size: 'medium',
    color: 'primary',
  },
};

export const Small: Story = {
  args: {
    children: <DownloadIcon fill="currentColor" />,
    size: 'small',
    color: 'primary',
  },
};

export const Large: Story = {
  args: {
    children: <DownloadIcon fill="currentColor" />,
    size: 'large',
    color: 'primary',
  },
};

export const Success: Story = {
  args: {
    children: <DownloadIcon fill="currentColor" />,
    size: 'medium',
    color: 'success',
  },
};

export const Warning: Story = {
  args: {
    children: <DownloadIcon fill="currentColor" />,
    size: 'medium',
    color: 'warning',
  },
};

export const Error: Story = {
  args: {
    children: <DownloadIcon fill="currentColor" />,
    size: 'medium',
    color: 'error',
  },
};

export const Send: Story = {
  args: {
    children: <SendIcon fill="currentColor" />,
    size: 'medium',
    color: 'primary',
  },
};
