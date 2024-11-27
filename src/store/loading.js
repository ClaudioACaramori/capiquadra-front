import { defineStore } from 'pinia';

export const useLoadingStore = defineStore({
  id: 'loading',

  state: () => ({
    loading: false,
  }),

  actions: {
    initLoading() {
      this.loading = true;
    },
    removeLoading() {
      this.loading = false;
    },
  },
});
