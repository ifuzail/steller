import { create } from "zustand";
import supabase from "@/utils/supabase";

const filterStore = create((set) => ({
  products: [],

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

  clearFilters: () => set((state) => ({
    filters: {
      ...state.filters,
      category: '',
      company: '',
      price: '',
      search: '',
    },
  })),

  fetchProducts: async () => {
    try {
      const { data: products, error } = await supabase.from('products').select('*');
      if (error) {
        console.error('Error fetching products:', error.message);
      } else {
        set({ products });
      }
    } catch (error) {
      console.error('Error fetching products:', error.message);
    }
  },
}));

// Fetch products immediately after creating the store
filterStore.getState().fetchProducts();

export default filterStore;
