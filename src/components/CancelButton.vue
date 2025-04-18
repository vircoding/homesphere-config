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
    class="flex justify-center py-2 mt-1 rounded-lg bg-zinc-300 dark:bg-zinc-700 cursor-pointer disabled:cursor-default"
  >
    <!-- Loader -->
    <div v-if="props.loading" class="py-1">
      <div class="loader loader-color-cancel h-4 md:h-5"></div>
    </div>

    <!-- Label -->
    <span v-else class="text-zinc-500 dark:text-zinc-50 relative top-0.5 font-bold uppercase">{{
      props.label
    }}</span>
  </button>
</template>
