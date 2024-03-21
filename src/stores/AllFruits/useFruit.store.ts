import { fetchAllFruits } from '../../api/api';
import { Fruit, Nutritions } from '@/interface/Fruit.interface';
import { assignImageToFruit } from '@/utils/assignImageToFruit';

import { create } from 'zustand';

interface FruitStore {
  fruits: Fruit[];
  page: number;
  perPage: number;
  displayedFruits: Fruit[];
  fetchFruits: () => Promise<void>;
  getNutritionSum: () => Nutritions & { totalItems: number };
  handleSeeMore: () => void;
  sortFruits: () => void;
}

export const useFruitStore = create<FruitStore>()((set, get) => ({
  fruits: [],
  page: 1,
  perPage: 8,
  displayedFruits: [],
  fetchFruits: async () => {
    try {
      const fruits = await fetchAllFruits();
      const fruitsWithImages = fruits.map(assignImageToFruit);
      set({
        fruits: fruitsWithImages,
        displayedFruits: fruitsWithImages.slice(0, 8),
      });
    } catch (error) {
      console.log(error);
    }
  },

  getNutritionSum: () => {
    const { displayedFruits } = get();
    return {
      calories: displayedFruits.reduce(
        (sum, fruit) => sum + fruit.nutritions.calories,
        0,
      ),
      fat: displayedFruits.reduce(
        (sum, fruit) => sum + fruit.nutritions.fat,
        0,
      ),
      sugar: displayedFruits.reduce(
        (sum, fruit) => sum + fruit.nutritions.sugar,
        0,
      ),
      carbohydrates: displayedFruits.reduce(
        (sum, fruit) => sum + fruit.nutritions.carbohydrates,
        0,
      ),
      protein: displayedFruits.reduce(
        (sum, fruit) => sum + fruit.nutritions.protein,
        0,
      ),
      totalItems: displayedFruits.length,
    };
  },

  handleSeeMore: () => {
    const { fruits, page, displayedFruits } = get();
    if (fruits.length === displayedFruits.length) return;
    set({ perPage: 4, page: page + 1 });
  },

  sortFruits: () => {
    const { displayedFruits } = get();
    const sortedFruits = [...displayedFruits].sort((a, b) =>
      a.name.localeCompare(b.name),
    );
    set({ displayedFruits: sortedFruits });
  },
}));
