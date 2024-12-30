import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ProfileCard from './ProfileCard';

const meta = {
  title: 'Data Display/ProfileCard',
  component: ProfileCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    socialList: {
      control: {
        type: 'check',
      },
      description: 'Social media list, each item must contain type and link',
      mapping: {
        github: { type: 'github', link: 'https://github.com' },
        linkedin: { type: 'linkedin', link: 'https://linkedin.com' },
        twitter: { type: 'twitter', link: 'https://twitter.com' },
        facebook: { type: 'facebook', link: 'https://facebook.com' },
      },
      options: ['github', 'linkedin', 'twitter', 'facebook'],
    },
  },
  args: {
    onDownload: fn(),
  },
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: 'John Doe',
    picture: 'https://via.placeholder.com/150',
    description: 'Software Engineer',
    education: 'B.S. in Computer Science',
    license: 'License: 1234567890',
  },
};

export const Secondary: Story = {
  args: {
    name: 'Kathy',
    picture: 'https://via.placeholder.com/150',
    description: 'Software Engineer',
    education: 'B.S. in Computer Science',
    license: 'License: 1234567890',
  },
};
