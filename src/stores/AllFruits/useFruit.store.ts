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
  likedFruits: string[];
}

interface Actions {
  fetchFruits: () => Promise<void>;
  getNutritionSum: () => Nutritions & { totalItems: number };
  handleSeeMore: () => void;
  sortFruits: () => void;
  filterFruits: (filter: string, value: string) => void;
  toggleLikeFruit: (fruitName: string) => void;
}

export const useFruitStore = create<FruitState & Actions>()((set, get) => ({
  fruits: [],
  page: 2,
  perPage: 4,
  displayedFruits: [],
  isSortedAscending: true,
  likedFruits: JSON.parse(localStorage.getItem('likedFruits') || '[]'),

  fetchFruits: async () => {
    const { likedFruits } = get();

    try {
      const fruits = await fetchAllFruits();

      const likedFruitsSet = new Set(likedFruits);

      const fruitsWithImagesAndLikes = fruits.map((fruit: Fruit) => ({
        ...fruit,
        image: assignImageToFruit(fruit.name),
        isLiked: likedFruitsSet.has(fruit.name),
      }));

      set({
        fruits: fruitsWithImagesAndLikes,
        displayedFruits: fruitsWithImagesAndLikes.slice(0, 8),
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
      const newPage = Math.min(page + 1, Math.ceil(fruits.length / perPage));
      const newDisplayedFruits = [
        ...displayedFruits,
        ...fruits.slice((newPage - 1) * perPage, newPage * perPage),
      ];
      set({ page: newPage, displayedFruits: newDisplayedFruits });
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

  toggleLikeFruit: (fruitName) => {
    const { likedFruits, fruits, displayedFruits } = get();

    const isLiked = likedFruits.includes(fruitName);
    console.log('🚀 ~ useFruitStore ~ isLiked:', isLiked);

    const newLikedFruits = isLiked
      ? likedFruits.filter((fruit) => fruit !== fruitName)
      : [...likedFruits, fruitName];
    localStorage.setItem('likedFruits', JSON.stringify(newLikedFruits));

    const updatedFruits = fruits.map((fruit) => ({
      ...fruit,
      isLiked: newLikedFruits.includes(fruit.name),
    }));

    const updatedDisplayedFruits = displayedFruits.map((fruit) => ({
      ...fruit,
      isLiked: newLikedFruits.includes(fruit.name),
    }));

    set({
      likedFruits: newLikedFruits,
      fruits: updatedFruits,
      displayedFruits: updatedDisplayedFruits,
    });
  },
}));
