<template>
  <div
    v-if="loading"
    class="m-app-loader"
  >
    <div class="loader" />
  </div>
</template>
<script setup>
import { useLoadingStore } from '@/store/loading';
import { storeToRefs } from 'pinia';

const { loading } = storeToRefs(useLoadingStore());
</script>

<style lang="scss" src="@/assets/scss/components/feedbacks/loading.scss" scoped />
