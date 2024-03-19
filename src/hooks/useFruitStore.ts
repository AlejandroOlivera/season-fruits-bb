import { fetchAllFruits } from '../api';
import { Fruit } from '@/interface/Fruit.interface';
import { create } from 'zustand';

interface FruitStore {
  fruits: Fruit[];
  fetchFruits: () => Promise<void>;
}

export const useFruitStore = create<FruitStore>((set) => ({
  fruits: [],
  fetchFruits: async () => {
    try {
      const fruits = await fetchAllFruits();
      set({ fruits });
    } catch (error) {
      console.log(error);
    }
  },
}));
