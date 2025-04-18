<script setup lang="ts">
import IconSecured from './Icon/IconSecured.vue';
import IconNotSecured from './Icon/IconNotSecured.vue';
import type { Network } from '../models/types';
import IconRSSI from './Icon/IconRSSI.vue';

const props = defineProps<{
  network: Network;
}>();

defineEmits<{
  (e: 'selected', ssid: string): void;
}>();
</script>

<template>
  <button
    type="button"
    class="w-full p-3 rounded-lg bg-primary-50 dark:bg-zinc-900 border flex border-primary-300 dark:border-primary-400 cursor-pointer"
    @click="$emit('selected', network.ssid)"
  >
    <aside class="grow flex items-center gap-x-1.5">
      <!-- SSID -->
      <span class="text-size-xl text-color-title inline font-semibold wrap-anywhere">{{
        props.network.ssid
      }}</span>

      <!-- Secured -->
      <IconSecured v-if="props.network.secure" class="text-color-title relative -top-0.5" />

      <!-- Not Secured -->
      <IconNotSecured v-else class="text-color-title relative -top-0.5" />
    </aside>

    <!-- RSSI -->
    <IconRSSI :rssi="props.network.rssi" />
  </button>
</template>
