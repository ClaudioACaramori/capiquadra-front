import { defineStore } from 'pinia';
import ReservationsResource from '@/api/resources/reservations';
import { useLoadingStore } from './loading';

export const useReservationStore = defineStore({
  id: 'reservation',

  state: () => ({
    reservations: [],
    reservation: null,
  }),

  getters: {
    getReservations: (state) => state.reservations,
  },

  actions: {
    async fetchReservations(params) {
      useLoadingStore().initLoading();
      const response = await ReservationsResource.index(params);
      this.reservations = response;
      useLoadingStore().removeLoading();
    },

    async createReservation(params) {
      useLoadingStore().initLoading();
      const response = await ReservationsResource.create(params)
      this.reservation = response.data;
      useLoadingStore().removeLoading();
    },

    async deleteReservation(id) {
      useLoadingStore().initLoading();
      await ReservationsResource.destroy(id);
      useLoadingStore().removeLoading();
    },
  },
});
