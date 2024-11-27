<template>
  <div class="snackbar" />
</template>

<script setup>
import { useSnackbarStore } from '@/store/snackbar';
import { storeToRefs } from 'pinia';
import { ElNotification } from 'element-plus';
import { watch } from 'vue';

const { hasMessage, messages, kind } = storeToRefs(useSnackbarStore());

watch(hasMessage, (value) => {
  if (value) {
    ElNotification({
      title: 'Atenção',
      message: messages.value,
      type: kind.value,
      offset: 100,
      onClose: () => useSnackbarStore().removeMessage(),
    });
  }
});
</script>
