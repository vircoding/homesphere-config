<script lang="ts" setup>
import { ref } from 'vue';
import useGlobalEvent from '../composables/useGlobalEvent';
import CTAButton from '../components/CTAButton.vue';
import CancelButton from '../components/CancelButton.vue';
import LinkButton from '../components/LinkButton.vue';

const confirmLoading = ref<boolean>(false);
const cancelLoading = ref<boolean>(false);

async function onCancel() {
  cancelLoading.value = true;

  try {
    if (import.meta.env.DEV) {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });
    } else {
      await fetch('/close', { method: 'POST' });
    }

    useGlobalEvent().emitter('layout:end');
  } catch (error) {
    console.log(error);
  } finally {
    cancelLoading.value = false;
  }
}

async function onSave() {
  confirmLoading.value = true;

  try {
    if (import.meta.env.DEV) {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });
    } else {
      await fetch('/setup', { method: 'POST' });
    }

    useGlobalEvent().emitter('layout:end');
  } catch (error) {
    console.log(error);
  } finally {
    confirmLoading.value = false;
  }
}
</script>

<template>
  <div class="max-w-7xl grow mx-auto px-8 flex flex-col justify-center gap-y-3 md:gap-y-6">
    <!-- Hero -->
    <section>
      <h1 class="text-size-3xl text-color-title font-bold">Confirmar cambios</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis pariatur dolores commodi
        aperiam officia quaerat autem.
      </p>
    </section>

    <!-- CTA's -->
    <div class="flex gap-x-3">
      <CancelButton
        type="button"
        label="Cancelar"
        :loading="cancelLoading"
        :disabled="cancelLoading || confirmLoading"
        class="w-full"
        @click="onCancel"
      />

      <!-- Submit -->
      <CTAButton
        type="button"
        label="Confirmar"
        :loading="confirmLoading"
        :disabled="cancelLoading || confirmLoading"
        class="w-full"
        @click="onSave"
      />
    </div>

    <section class="flex flex-col items-center gap-y-3 mt-6">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis pariatur dolores commodi
        aperiam officia quaerat autem.
      </p>

      <LinkButton :to="{ name: 'home' }" label="Seguir editando" class="self-center" />
    </section>
  </div>
</template>
