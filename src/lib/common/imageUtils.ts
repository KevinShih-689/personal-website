import { getPlaiceholder, GetPlaiceholderReturn } from 'plaiceholder';
import imageInstance from '@middleware/imageInstance';

type GetImageType = {
  /**
   * The source of the image
   */
  src: string;
};

type ImageResponse = GetPlaiceholderReturn & {
  img: {
    src: string;
    height: number;
    width: number;
  };
};

export const getImage = async ({ src }: GetImageType): Promise<ImageResponse> => {
  const buffer = await imageInstance.get(src).then(async (res) => Buffer.from(await res.data));
  const plaiceholder = await getPlaiceholder(buffer, { size: 10 });

  const {
    metadata: { height, width },
  } = plaiceholder;

  return {
    ...plaiceholder,
    img: { src, height, width },
  };
};
