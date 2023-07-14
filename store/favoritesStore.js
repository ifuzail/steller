import { create } from 'zustand';
import { products } from '@/utils/constant';

const useFavoritesStore = create((set) => ({
  favorites: [],
  addToFavorites: (productId) => set((state) => ({ favorites: [...state.favorites, productId] })),
  removeFromFavorites: (id) =>
    set((state) => ({ favorites: state.favorites.filter((id) => id !== id) })),
  clearFavorites: () => set({ favorites: [] }),
  getProductById: (productId) => products.find((product) => product.id === productId),
  getFavoriteProducts: () => state.favorites.map((productId) => getProductById(productId)),
}));

export default useFavoritesStore;
