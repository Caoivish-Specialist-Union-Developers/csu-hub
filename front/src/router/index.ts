import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/map',
    name: 'Map',
    component: () => import(/* webpackChunkName: "map" */ '../views/Map.vue')
  },
  {
    path: '/missions',
    name: 'Missions',
    component: () => import(/* webpackChunkName: "missions" */ '../views/Missions.vue')
  },
  {
    path: '/pipeline',
    name: 'Pipeline',
    component: () => import(/* webpackChunkName: "pipeline" */ '../views/Pipeline.vue')
  },
  {
    path: '/stocks',
    name: 'Stocks',
    component: () => import(/* webpackChunkName: "stocks" */ '../views/Stocks.vue')
  },
  {
    path: '/comms',
    name: 'Comms',
    component: () => import(/* webpackChunkName: "comms" */ '../views/Comms.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
