import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Contactpage from '../views/Contactpage.vue'
import Testimonials from '../views/Testimonials.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },

  { path: '/projects', name: 'Projects', component: Projects },

  { path: '/testimonials', name: 'Testimonials', component: Testimonials },


 {
  path: '/projects/:slug',
  name: 'ProjectsView',
  component: () => import('../views/projects-view.vue'),
  meta: { flushTop: true, hideFooter: true }
},

  { path: '/contact', name: 'Contactpage', component: Contactpage }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  }
})

export default router
