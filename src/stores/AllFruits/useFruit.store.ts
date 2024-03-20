import { fetchAllFruits } from '../../api/api';
import { Fruit } from '@/interface/Fruit.interface';
import { assignImageToFruit } from '@/utils/assignImageToFruit';

import { create } from 'zustand';

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
