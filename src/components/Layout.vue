<script setup lang="ts">
import IconGitHub from './Icon/IconGitHub.vue';

const year = new Date().getFullYear();
</script>

<template>
  <div class="text-size-base text-color-body dark:bg-zinc-950 bg-zinc-50 font-display">
    <div class="min-h-dvh flex flex-col items-center">
      <header class="divider flex justify-between items-center w-full px-6 h-14">
        <RouterLink :to="{ name: 'home' }">
          <h3 class="text-color-title text-2xl font-bold">HomeSphere</h3>
        </RouterLink>

        <nav>
          <a href="https://github.com/vircoding" target="_blank">
            <IconGitHub class="icon-link w-6 h-6" />
          </a>
        </nav>
      </header>

      <main class="divider flex flex-col grow w-full py-10">
        <slot />
      </main>

      <footer class="text-center pt-3 pb-[10px]">
        <span class="text-color-title font-semibold">© {{ year }}, La Habana, Cuba</span>
      </footer>
    </div>
  </div>
</template>
