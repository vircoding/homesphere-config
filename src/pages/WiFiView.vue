<script setup lang="ts">
import InputGroup from '../components/InputGroup.vue';
import CTAButton from '../components/CTAButton.vue';
import { reactive, ref, useTemplateRef } from 'vue';
import type { Input, Network } from '../models/types';
import NetworkCard from '../components/NetworkCard.vue';
import IconRefresh from '../components/Icon/IconRefresh.vue';
import { useRouter } from 'vue-router';

const input = reactive<Input>({
  ssid: '',
  password: '',
});

const networks = ref<Network[] | undefined>();
const submitLoading = ref<boolean>(false);
const scanLoading = ref<boolean>(false);
const passwordInputRef = useTemplateRef('passwordInput');
const router = useRouter();

async function onScan() {
  scanLoading.value = true;

  try {
    if (import.meta.env.DEV) {
      networks.value = await new Promise<Network[]>((resolve) => {
        setTimeout(() => {
          const data: Network[] = [
            {
              ssid: 'nauta_HogarE0E5FA',
              rrsi: -72,
              secure: true,
            },
            {
              ssid: '@MC-0462885',
              rrsi: -77,
              secure: false,
            },
          ];

          resolve(data);
        }, 2000);
      });
    } else {
      const data: Network[] = await fetch('/scan').then((value) => value.json());
      networks.value = data;
    }
  } catch (error) {
    console.log(error);
  } finally {
    scanLoading.value = false;
  }
}

async function onSubmit() {
  submitLoading.value = true;

  try {
    if (import.meta.env.DEV) {
      await new Promise<true>((resolve) => {
        setTimeout(() => {
          console.log({ ssid: input.ssid, password: input.password });
          resolve(true);
        }, 3000);
      });
    } else {
      await fetch('/setup/wifi', {
        method: 'POST',
        body: JSON.stringify({
          ssid: input.ssid,
          password: input.password,
        }),
      });
    }

    await router.push({ name: 'confirm-challenge' });
  } catch (error) {
    console.log(error);
  } finally {
    submitLoading.value = false;
  }
}

function onCardSelected(ssid: string) {
  input.ssid = ssid;
  if (passwordInputRef.value) passwordInputRef.value.focus();
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-8">
    <div class="flex flex-col justify-center gap-y-5 md:gap-y-8">
      <!-- Hero -->
      <section>
        <h1 class="text-size-3xl text-color-title font-bold">Configuración WiFi</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis pariatur dolores commodi
          aperiam officia quaerat autem.
        </p>
      </section>

      <form @submit.prevent="onSubmit" class="flex flex-col gap-y-2.5">
        <!-- SSID -->
        <InputGroup v-model="input.ssid" type="text" id="ssidInput" label="Nombre de la red" />

        <!-- Password -->
        <InputGroup
          ref="passwordInput"
          v-model="input.password"
          type="password"
          id="passwordInput"
          label="Contraseña"
        />

        <!-- Submit Button -->
        <CTAButton
          type="submit"
          label="Guardar"
          :loading="submitLoading"
          :disabled="submitLoading || scanLoading"
        />
      </form>

      <!-- Networks -->
      <section>
        <!-- Loader -->
        <div v-if="scanLoading" class="flex justify-center py-10">
          <div class="loader loader-color-primary h-5 md:h-7"></div>
        </div>

        <!-- List -->
        <div v-else-if="networks">
          <div v-if="networks.length" class="flex flex-col gap-y-2">
            <!-- Hero -->
            <aside class="flex justify-between items-center">
              <h3 class="text-size-2xl text-color-title font-bold">Redes encontradas:</h3>
              <button type="button" @click="onScan">
                <IconRefresh class="w-8 h-8 md:w-9 md:h-9 p-0.5 text-color-title" />
              </button>
            </aside>

            <ul class="flex flex-col gap-y-2.5">
              <li v-for="(network, index) in networks" :key="index">
                <NetworkCard :network="network" @selected="onCardSelected" />
              </li>
            </ul>
          </div>

          <div v-else class="flex flex-col justify-center items-center text-center py-10 gap-y-1">
            <span class="px-4 text-size-xl font-bold">No se encontró ninguna red</span>
            <button type="button" @click="onScan">
              <IconRefresh class="w-7 h-7 md:w-8 md:h-8 p-0.5 text-color-title" />
            </button>
          </div>
        </div>

        <!-- Hero -->
        <div v-else class="flex flex-col gap-y-3.5">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis pariatur dolores commodi
            aperiam officia quaerat autem.
          </p>

          <CTAButton
            @click="onScan"
            type="button"
            label="Escanear"
            :loading="false"
            :disabled="submitLoading || scanLoading"
          />
        </div>
      </section>
    </div>
  </div>
</template>
