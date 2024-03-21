import { fetchAllFruits } from '../../api/api';
import { Fruit, Nutritions } from '@/interface/Fruit.interface';
import { assignImageToFruit } from '@/utils/assignImageToFruit';

import { create } from 'zustand';

interface FruitState {
  fruits: Fruit[];
  page: number;
  perPage: number;
  displayedFruits: Fruit[];
  isSortedAscending: boolean;
}

interface Actions {
  fetchFruits: () => Promise<void>;
  getNutritionSum: () => Nutritions & { totalItems: number };
  handleSeeMore: () => void;
  sortFruits: () => void;
  filterFruits: (filter: string, value: string) => void;
}

export const useFruitStore = create<FruitState & Actions>()((set, get) => ({
  fruits: [],
  page: 1,
  perPage: 4,
  displayedFruits: [],
  isSortedAscending: true,

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
    const { fruits, page, perPage, displayedFruits } = get();

    if (fruits.length > displayedFruits.length) {
      const newPerPage = perPage;
      const newPage = page + 1;
      const newFruits = fruits.slice(0, newPage * newPerPage);
      set({ page: newPage, perPage: newPerPage, displayedFruits: newFruits });
    }
  },

  sortFruits: () => {
    const { displayedFruits, isSortedAscending } = get();

    const sortedFruits = [...displayedFruits].sort((a, b) =>
      isSortedAscending
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name),
    );
    set({
      displayedFruits: sortedFruits,
      isSortedAscending: !isSortedAscending,
    });
  },

  filterFruits: (filter, value) => {
    const { displayedFruits } = get();
    const filteredFruits = displayedFruits.filter((fruit) => {
      return fruit[filter as keyof Fruit] === value;
    });
    set({ displayedFruits: filteredFruits });
  },
}));
