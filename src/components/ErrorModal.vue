<script setup lang="ts">
import CTAButton from './CTAButton.vue';

function onRefresh() {
  window.location.reload();
}
</script>

<template>
  <div
    class="absolute top-0 left-0 right-0 bottom-0 text-size-base text-color-body dark:bg-zinc-950 bg-zinc-50 font-display"
  >
    <div class="min-h-dvh flex flex-col items-center">
      <main class="divider flex flex-col grow w-full py-10">
        <div
          class="max-w-2xl grow mx-auto px-8 flex flex-col justify-center items-center gap-y-3 md:gap-y-6"
        >
          <!-- Hero -->
          <section>
            <h1 class="text-size-3xl text-color-title font-bold">Error inesperado</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis pariatur dolores
              commodi aperiam officia quaerat autem.
            </p>
          </section>

          <CTAButton
            type="button"
            label="Refrescar"
            :loading="false"
            :disabled="false"
            class="px-6"
            @click="onRefresh"
          />
        </div>
      </main>
    </div>
  </div>
</template>
