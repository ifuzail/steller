import { create } from "zustand";
import products from "@/utils/constant";

const filterStore = create((set) => ({
  products: [...products], // Copy the products array

  filters: {
    category: '',
    company: '',
    price: '',
    search: '',
  },

  setCategory: (category) => {
    set((state) => ({
      filters: {
        ...state.filters,
        category,
      },
    }));
  },

  setCompany: (company) => {
    set((state) => ({
      filters: {
        ...state.filters,
        company,
      },
    }));
  },

  setPrice: (price) => {
    set((state) => ({
      filters: {
        ...state.filters,
        price,
      },
    }));
  },

  setSearch: (search) => {
    set((state) => ({
      filters: {
        ...state.filters,
        search,
      },
    }));
  },

  getFilteredProducts: () => {
    const { category, company, price, search } = filterStore.getState().filters;

    // Apply filters based on selected criteria
    let filteredProducts = filterStore.getState().products;

    if (category) {
      filteredProducts = filteredProducts.filter((product) =>
        product.category.includes(category)
      );
    }

    if (company) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(company.toLowerCase())
      );
    }

    if (price) {
      filteredProducts = filteredProducts.filter((product) => product.price <= parseFloat(price));
    }

    if (search) {
      const searchTerm = search.toLowerCase();
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm)
      );
    }

    return filteredProducts;
  },
  clearFilters: () => set({ filters: { category: '', company: '', price: '', search: '' } }),
}));

export default filterStore;
