import type { Meta, StoryObj } from '@storybook/react';
import Photo from './Photo';
import profileImage from '../assets/profile.png';

const meta: Meta<typeof Photo> = {
  title: 'Data Display/Photo',
  component: Photo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '照片元件用於顯示各種類型的圖片，支援本地圖片和遠端圖片，並且可以使用固定尺寸或填充模式。',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    src: profileImage.src,
    alt: 'Profile picture',
    width: 100,
    height: 100,
  },
  parameters: {
    docs: {
      description: {
        story: '基本用法：使用本地圖片，並指定固定寬度和高度。',
      },
    },
  },
};

export const LocalImageWithFill: Story = {
  args: {
    src: profileImage.src,
    alt: 'Profile picture',
    fill: true,
  },
  argTypes: {
    fill: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: '本地圖片：使用本地圖片，並指定 fill 模式，圖片長寬會自動適應父容器。',
      },
      source: {
        language: 'tsx',
        code: `
        import profileImage from '../assets/profile.png';

<div style={{ position: 'relative', width: '200px', height: '200px' }}>
  <Photo
    src={profileImage.src}
    alt="Profile picture"
    fill
  />
</div>
`,
      },
    },
  },
  decorators: [
    (Component) => (
      <div style={{ position: 'relative', width: '200px', height: '200px' }}>
        <Component />
      </div>
    ),
  ],
};

export const RemoteImage: Story = {
  args: {
    src: profileImage.src,
    alt: 'Github icon',
    width: 100,
    height: 100,
  },
  parameters: {
    docs: {
      description: {
        story: '遠端圖片：從網路加載圖片，使用 getImage 取得圖片的 base64 和圖片尺寸實現圖片預處理',
      },
      source: {
        language: 'tsx',
        code: `
          import Photo from '@components/Photo/Photo';
import { getImage } from '@lib/common/imageUtils';

const { base64, img } = await getImage({
  src: 'https://avatars.githubusercontent.com/u/78122777?s=300&u=7675d6714c1d4fa2be2270c7c397a675842fc274&v=4',
});

return (
  <Photo {...img} alt="Profile picture" blurDataURL={base64} placeholder="blur" />
)
`,
      },
    },
  },
};
