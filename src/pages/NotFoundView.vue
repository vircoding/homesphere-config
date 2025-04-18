<script setup lang="ts">
import LinkButton from '../components/LinkButton.vue';
</script>

<template>
  <div class="max-w-2xl grow mx-auto px-8 flex flex-col justify-center gap-y-3 md:gap-y-6">
    <!-- Hero -->
    <section>
      <h1 class="text-size-3xl text-color-title font-bold">Página no encontrada</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis pariatur dolores commodi
        aperiam officia quaerat autem.
      </p>
    </section>

    <LinkButton :to="{ name: 'home' }" label="Página principal" class="self-center" />
  </div>
</template>
