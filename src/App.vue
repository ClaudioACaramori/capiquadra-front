<template>
  <div class="app">
    <reservation-form />
    <navigation />

    <main class="container">
      <router-view />
    </main>

    <snackbar />
    <loading />
  </div>
</template>

<script setup>
import Snackbar from '@/components/feedbacks/AppSnackbar.vue';
import Loading from '@/components/feedbacks/AppLoading.vue';
import Navigation from '@/components/navigation/AppNavigation.vue';
import ReservationForm from '@/components/dialogs/ReservationForm.vue';

</script>

<style lang="scss">
body {
  margin: 0;

  .app {
    .container {
      min-height: 100vh;
      padding: 20px;
    }
  }
}
</style>
