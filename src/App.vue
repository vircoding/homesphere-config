<script setup lang="ts">
import { ref } from 'vue';
import useGlobalEvent from './composables/useGlobalEvent';
import Layout from './components/Layout.vue';
import SuccessModal from './components/SuccessModal.vue';
import ErrorModal from './components/ErrorModal.vue';

const isModal = ref(false);
const isError = ref(false);

const { listener } = useGlobalEvent();

listener('layout:end', () => {
  isModal.value = true;
});

listener('layout:error', () => {
  isError.value = true;
});
</script>

<template>
  <div class="relative">
    <Layout>
      <RouterView />
    </Layout>

    <!-- Success Modal -->
    <SuccessModal v-if="isModal" />

    <!-- Error Modal -->
    <ErrorModal v-if="isError" />
  </div>
</template>
