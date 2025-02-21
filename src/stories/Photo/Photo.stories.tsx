import type { Meta, StoryObj } from '@storybook/react';
import Photo from './Photo';

const meta: Meta<typeof Photo> = {
  title: 'Data Display/Photo',
  component: Photo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    src: 'https://avatars.githubusercontent.com/u/78122777?s=80&u=7675d6714c1d4fa2be2270c7c397a675842fc274&v=4',
    alt: 'Profile picture',
  },
};

export const RemoteImage: Story = {
  args: {
    src: 'https://avatars.githubusercontent.com/u/78122777?s=80&u=7675d6714c1d4fa2be2270c7c397a675842fc274&v=4',
    alt: 'Profile picture',
  },
};

export const LocalImage: Story = {
  args: {
    src: '/icons/github.svg',
    alt: 'Github icon',
  },
};
