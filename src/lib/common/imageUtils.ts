import { getPlaiceholder } from 'plaiceholder';
import imageInstance from '@middleware/imageInstance';

export const getBlurDataURL = async (src: string): Promise<string> => {
  try {
    const imageResponse = await imageInstance.get(src);
    const buffer = Buffer.from(imageResponse.data);

    const { base64 } = await getPlaiceholder(buffer);
    console.log('🚀 ~ getBlurDataURL ~ base64:', base64);

    return base64;
  } catch (err) {
    console.error(err);
    return '';
  }
};
