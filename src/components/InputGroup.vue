<script setup lang="ts">
import { useTemplateRef } from 'vue';

const props = defineProps<{
  type: 'text' | 'password';
  id: string;
  label: string;
}>();

const model = defineModel<string>({ required: true });
const inputRef = useTemplateRef('input');

defineExpose<{
  focus: () => void;
}>({
  focus: function () {
    if (inputRef.value) {
      inputRef.value.focus();
      inputRef.value.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  },
});
</script>

<template>
  <div class="flex flex-col gap-y-1 md:gap-y-2">
    <label for="ssidInput" class="text-color-title ml-1.5 font-semibold leading-none">{{
      props.label
    }}</label>
    <div class="flex flex-col rounded-t-lg overflow-hidden">
      <input
        ref="input"
        v-model="model"
        :id="props.id"
        :type="props.type"
        class="bg-primary-50 dark:bg-zinc-900 px-4 py-2"
      />
      <div class="w-full h-0.5 bg-primary-500 dark:bg-primary-400" />
    </div>
  </div>
</template>
