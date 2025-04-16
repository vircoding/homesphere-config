<script setup lang="ts">
import IconGitHub from './Icon/IconGitHub.vue';
</script>

<template>
  <div
    class="absolute top-0 left-0 right-0 bottom-0 text-size-base text-color-body dark:bg-zinc-950 bg-zinc-50 font-display"
  >
    <div class="min-h-dvh flex flex-col items-center">
      <main class="divider flex flex-col grow w-full py-10">
        <div
          class="max-w-7xl grow mx-auto px-8 flex flex-col justify-center items-center gap-y-3 md:gap-y-6"
        >
          <!-- Hero -->
          <section class="text-center">
            <h1 class="text-size-3xl text-color-title font-bold mb-3">HomeSphere reinciado</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis pariatur dolores
              commodi aperiam officia quaerat autem.
            </p>
          </section>

          <a href="https://github.com/vircoding" target="_blank" class="inline-block mt-5">
            <IconGitHub class="icon-link w-10 h-10" />
          </a>
        </div>
      </main>
    </div>
  </div>
</template>
