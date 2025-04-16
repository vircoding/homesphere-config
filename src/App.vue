<script setup lang="ts">
import { ref } from 'vue';
import useGlobalEvent from './composables/useGlobalEvent';
import Layout from './components/Layout.vue';
import SuccessModal from './components/SuccessModal.vue';

const isModal = ref(false);

useGlobalEvent().listener('layout:end', () => {
  isModal.value = true;
});
</script>

<template>
  <div class="relative">
    <Layout>
      <RouterView />
    </Layout>

    <!-- Success Modal -->
    <SuccessModal v-if="isModal" />
  </div>
</template>
