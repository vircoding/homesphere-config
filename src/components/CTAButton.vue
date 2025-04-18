<script setup lang="ts">
const props = defineProps<{
  type: 'button' | 'submit';
  label: string;
  loading: boolean;
  disabled: boolean;
}>();
</script>

<template>
  <button
    :type="props.type"
    :disabled="props.disabled"
    class="flex justify-center py-2 mt-1 rounded-lg bg-primary-500 dark:bg-primary-400 cursor-pointer disabled:cursor-default"
  >
    <!-- Loader -->
    <div v-if="props.loading" class="py-1">
      <div class="loader loader-color-cta h-4 md:h-5"></div>
    </div>

    <!-- Label -->
    <span v-else class="text-zinc-50 dark:text-zinc-950 relative top-0.5 font-bold uppercase">{{
      props.label
    }}</span>
  </button>
</template>
