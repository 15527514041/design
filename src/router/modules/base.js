export default [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about/index.vue')
  },
  {
    path: '/other/:name?',
    name: 'other',
    component: () => import('@/views/other/index.vue')
  },
  {
    path: '/',
    redirect: '/home',
  },
]