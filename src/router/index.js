import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import CarsView from '@/views/CarsView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import CarView from '@/views/CarView.vue';
import AddCarView from '@/views/AddCarView.vue';
import EditCarView from '@/views/EditCarView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cars',
      name: 'cars',
      component: CarsView,
    },
    {
      path: '/cars/:id',
      name: 'car',
      component: CarView,
    },
    {
      path: '/cars/add',
      name: 'add-car',
      component: AddCarView,
    },
    {
      path: '/cars/edit/:id',
      name: 'edit-car',
      component: EditCarView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
});

export default router;
