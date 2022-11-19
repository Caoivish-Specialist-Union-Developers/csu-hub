import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/room',
    name: 'Room',
    component: () => import(/* webpackChunkName: "tagged" */ '../views/Room.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Home',
    component: () => import(/* webpackChunkName: "tagged" */ '../views/Home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
