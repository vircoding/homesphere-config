<script setup lang="ts">
const props = defineProps<{
  to: { name: string };
  label: string;
}>();
</script>

<template>
  <RouterLink
    :to="props.to"
    class="flex justify-center w-min text-nowrap bg-primary-500 dark:bg-primary-400 py-2 px-6 mt-1 rounded-lg cursor-pointer disabled:cursor-default"
  >
    <span class="text-zinc-50 dark:text-zinc-950 relative top-0.5 font-bold uppercase">{{
      props.label
    }}</span>
  </RouterLink>
</template>
