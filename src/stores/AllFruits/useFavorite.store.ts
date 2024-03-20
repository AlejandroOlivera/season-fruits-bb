import { create } from 'zustand';

interface FavoriteStore {
  likedProducts: string[];
  addLikedProduct: (productId: string) => void;
}

export const useFavoriteStore = create<FavoriteStore>()((set) => ({
  likedProducts: [],
  addLikedProduct: (productId) =>
    set((state) => ({
      likedProducts: [...state.likedProducts, productId],
    })),
}));
