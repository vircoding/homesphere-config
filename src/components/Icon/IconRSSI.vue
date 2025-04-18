<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  rssi: number;
}>();

const parsedRSSI = computed(() => {
  if (props.rssi >= -50) return 4;
  else if (props.rssi >= -60) return 3;
  else if (props.rssi >= -70) return 2;
  else if (props.rssi >= -80) return 1;
  else return 0;
});
</script>

<template>
  <div
    :data-level="parsedRSSI"
    class="bg-primary-500 dark:bg-primary-400 flex flex-col p-1.5 rounded-full"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      class="list-item-rssi w-7 h-7 text-primary-300 dark:text-zinc-600"
    >
      <!-- Bars ordered from high to low -->
      <path
        class="rssi-bar"
        fill="currentColor"
        fill-rule="evenodd"
        d="M14.188 7.063a8.75 8.75 0 0 0-12.374 0a.75.75 0 0 1-1.061-1.06c4.003-4.004 10.493-4.004 14.496 0a.75.75 0 1 1-1.061 1.06"
      />

      <path
        class="rssi-bar"
        fill="currentColor"
        fill-rule="evenodd"
        d="M12.067 9.184a5.75 5.75 0 0 0-8.132 0a.75.75 0 0 1-1.06-1.06a7.25 7.25 0 0 1 10.252 0a.75.75 0 0 1-1.06 1.06"
      />

      <path
        class="rssi-bar"
        fill="currentColor"
        fill-rule="evenodd"
        d="M9.945 11.306a2.75 2.75 0 0 0-3.889 0a.75.75 0 1 1-1.06-1.061a4.25 4.25 0 0 1 6.01 0a.75.75 0 0 1-1.06 1.06"
      />

      <path
        class="rssi-bar"
        fill="currentColor"
        fill-rule="evenodd"
        d="M7.117 12.366a1.25 1.25 0 0 1 1.768 0a.75.75 0 0 1 0 1.06l-.355.355a.75.75 0 0 1-1.06 0l-.354-.354a.75.75 0 0 1 0-1.06"
      />
    </svg>
  </div>
</template>
