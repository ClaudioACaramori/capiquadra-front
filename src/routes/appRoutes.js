import Home from '@/views/AppHome.vue';

export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/piscinas',
    name: 'pools',
    component: () => import('@/views/AppPools.vue'),

  },
  {
    path: '/reservas',
    name: 'reservations',
    component: () => import('@/views/AppReservations.vue'),

  },
  {
    path: '/quadras',
    name: 'courts',
    component: () => import('@/views/AppCourts.vue'),
  },
];