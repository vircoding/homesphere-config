<template>
  <div class="max-w-2xl grow mx-auto px-8 flex flex-col justify-center gap-y-3 md:gap-y-6">
    <!-- Hero -->
    <section>
      <h1 class="text-size-3xl text-color-title font-bold">HomeSphere</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis pariatur dolores commodi
        aperiam officia quaerat autem.
      </p>
    </section>

    <RouterLink :to="{ name: 'wifi' }">Configuración WiFi</RouterLink>
  </div>
</template>
