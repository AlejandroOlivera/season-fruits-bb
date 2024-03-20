import { Fruit } from '@/interface/Fruit.interface';
import { fruitImagesConfig } from './fruitImagesConfig';

export const assignImageToFruit = (fruit: Fruit): Fruit => {
  const imageName = fruitImagesConfig[fruit.name] || 'not-available.webp';
  const imagePath = `/${imageName}`;
  return { ...fruit, image: imagePath };
};
