import { fruitImagesConfig } from './fruitImagesConfig';

export const assignImageToFruit = (fruitName: string): string => {
  const imageName = fruitImagesConfig[fruitName] || 'not-available.webp';
  const imagePath = `/${imageName}`;
  return imagePath;
};
