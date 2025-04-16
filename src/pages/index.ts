import { createRouter, createWebHistory } from 'vue-router';

import HomeView from './HomeView.vue';
import WiFiView from './WiFiView.vue';
import ConfirmView from './ConfirmView.vue';
import NotFoundView from './NotFoundView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/wifi', name: 'wifi', component: WiFiView },
  {
    path: '/confirm-challenge',
    name: 'confirm-challenge',
    component: ConfirmView,
  },
  { path: '/:pathMatch(.*)*', name: '404', component: NotFoundView },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
