import { fetchAllFruits } from '../../api';
import { Fruit } from '@/interface/Fruit.interface';
import { create } from 'zustand';

const fruitImagesConfig: Record<string, string> = {
  Apple: 'Apple.webp',
  Annona: 'Annona.webp',
  Banana: 'Banana.avif',
  Blackberry: 'Blackberry.webp',
};

const assignImageToFruit = (fruit: Fruit): Fruit => {
  const imageName = fruitImagesConfig[fruit.name] || 'not-available.webp';
  const imagePath = `/${imageName}`;
  return { ...fruit, image: imagePath };
};

interface FruitStore {
  fruits: Fruit[];
  fetchFruits: () => Promise<void>;
}

export const useFruitStore = create<FruitStore>()((set) => ({
  fruits: [],
  fetchFruits: async () => {
    try {
      const fruits = await fetchAllFruits();
      const fruitsWithImages = fruits.map(assignImageToFruit);
      set({ fruits: fruitsWithImages });
    } catch (error) {
      console.log(error);
    }
  },
}));
