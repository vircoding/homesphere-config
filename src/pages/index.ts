import { createRouter, createWebHistory } from 'vue-router';
import useState from '../composables/useState';
import type { RouteRecordRaw } from 'vue-router';

import HomeView from './HomeView.vue';
import WiFiView from './WiFiView.vue';
import ConfirmView from './ConfirmView.vue';
import NotFoundView from './NotFoundView.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/wifi', name: 'wifi', component: WiFiView },
  { path: '/:pathMatch(.*)*', name: '404', component: NotFoundView },
  {
    path: '/confirm-challenge',
    name: 'confirm-challenge',
    component: ConfirmView,
    beforeEnter: function (_to, _from, next) {
      if (useState().confirmAccess.value) next();
      else next({ name: 'home' });
    },
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
