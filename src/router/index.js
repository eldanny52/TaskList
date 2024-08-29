import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/contador',
      name: 'contador',
      component: () => import('../modules/counter/components/counter.vue')
    },
    {
      path: '/lista-de-tareas',
      name: 'lista-de-tareas',
      component: () => import('../modules/taskList/components/TaskList.vue')
    },
    {
      path: '/Registrar',
      name: 'Registrar',
      component: () => import('../modules/register/views/RegisterView.vue')
    }
  ]
})

export default router
