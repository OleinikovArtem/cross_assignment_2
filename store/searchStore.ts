import { create } from 'zustand';

interface SearchState {
  searchQuery: string;
  filters: {
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    rating?: number;
  };
  searchHistory: string[];
  setSearchQuery: (query: string) => void;
  setFilters: (filters: Partial<SearchState['filters']>) => void;
  addToHistory: (query: string) => void;
  clearHistory: () => void;
}

export const useSearchStore = create<SearchState>((set, get) => ({
  searchQuery: '',
  filters: {},
  searchHistory: [],
  
  setSearchQuery: (query) => set({ searchQuery: query }),
  
  setFilters: (newFilters) => set((state) => ({
    filters: { ...state.filters, ...newFilters }
  })),
  
  addToHistory: (query) => {
    if (query.trim() && !get().searchHistory.includes(query)) {
      set((state) => ({
        searchHistory: [query, ...state.searchHistory.slice(0, 9)] // Keep last 10
      }));
    }
  },
  
  clearHistory: () => set({ searchHistory: [] }),
}));
