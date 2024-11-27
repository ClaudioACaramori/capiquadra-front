import { defineStore } from 'pinia';
import { useLoadingStore } from './loading';

export const useSnackbarStore = defineStore({
  id: 'snackbar',

  state: () => ({
    message: null,
    kind: 'success',
  }),

  getters: {
    messages: (state) => state.message,
    hasMessage: (state) => !!state.message,
  },

  actions: {
    addErrorMessage(message) {
      useLoadingStore().removeLoading();
      this.kind = 'error';
      this.message = message;
    },

    addSuccessMessage(message) {
      useLoadingStore().removeLoading();
      this.kind = 'success';
      this.message = message;
    },

    removeMessage() {
      this.kind = null;
      this.message = null;
    },
  },
});
