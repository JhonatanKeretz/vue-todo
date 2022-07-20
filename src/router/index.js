import Vue from 'vue'
import VueRouter from 'vue-router'
import Tarefas from '../views/Tarefas.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Tarefas',
    // eslint-disable-next-line no-undef
    component: Tarefas
  },
  {
    path: '/sobre',
    name: 'VSobre',
 
    component: () => import('../views/VSobre.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
