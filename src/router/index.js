import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Contactpage from '../views/Contactpage.vue'

const DEFAULT_META = {
  title: 'Kenny Soriano | Portfolio',
  description: 'Portfolio of Kenny Soriano, a Computer Science student focused on frontend development, UI/UX, and practical web applications.'
}

const upsertMeta = (attribute, key, content) => {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Kenny Soriano |  Portfolio',
      description: 'Explore the portfolio of Kenny Soriano featuring web projects, UI/UX work, technical skills, and growth as a frontend developer.'
    }
  },

  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta: {
      title: 'Projects | Kenny Soriano',
      description: 'Browse selected projects by Kenny Soriano including web systems, interface design work, and practical development case studies.'
    }
  },

  


 {
  path: '/projects/:slug',
  name: 'ProjectsView',
  component: () => import('../views/projects-view.vue'),
  meta: {
    flushTop: true,
    hideFooter: true,
    title: 'Project Details | Kenny Soriano',
    description: 'Detailed project overview including process, technologies used, design decisions, and development outcomes.'
  }
},

  {
    path: '/contact',
    name: 'Contactpage',
    component: Contactpage,
    meta: {
      title: 'Contact | Kenny Soriano',
      description: 'Get in touch with Kenny Soriano for internships, freelance projects, collaborations, and frontend development opportunities.'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0 }
  }
})

router.afterEach((to) => {
  const title = to.meta?.title || DEFAULT_META.title
  const description = to.meta?.description || DEFAULT_META.description

  document.title = title
  upsertMeta('name', 'description', description)
  upsertMeta('property', 'og:title', title)
  upsertMeta('property', 'og:description', description)
  upsertMeta('property', 'og:type', 'website')
  upsertMeta('property', 'og:url', window.location.href)
})

export default router
