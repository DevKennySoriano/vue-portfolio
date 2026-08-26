import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Experience from '../views/Experience.vue'
import Education from '../views/Education.vue'
import Certifications from '../views/Certifications.vue'
import TechStack from '../views/TechStack.vue'
import Projects from '../views/Projects.vue'
import WebProjects from '../views/WebProjects.vue'
import VisualProjects from '../views/VisualProjects.vue'
import Resources from '../views/Resources.vue'
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
    redirect: '/about'
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About | Kenny Soriano',
      description: 'Learn about Kenny Soriano, frontend-focused Computer Science student and portfolio creator.'
    }
  },
  {
    path: '/about/experience',
    name: 'Experience',
    component: Experience,
    meta: {
      title: 'Experience | Kenny Soriano',
      description: 'Review Kenny Soriano\'s professional and project experience highlights.'
    }
  },
  {
    path: '/about/education',
    name: 'Education',
    component: Education,
    meta: {
      title: 'Education | Kenny Soriano',
      description: 'Explore the educational background and academic timeline of Kenny Soriano.'
    }
  },
  {
    path: '/certifications',
    name: 'Certifications',
    component: Certifications,
    meta: {
      title: 'Certifications | Kenny Soriano',
      description: 'View Kenny Soriano\'s certifications and completed learning milestones.'
    }
  },
  {
    path: '/tech-stack',
    name: 'TechStack',
    component: TechStack,
    meta: {
      title: 'Tools & Tech | Kenny Soriano',
      description: 'Discover the tools, frameworks, and technologies used by Kenny Soriano.'
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
    path: '/projects/web',
    name: 'WebProjects',
    component: WebProjects,
    meta: {
      title: 'Web Projects | Kenny Soriano',
      description: 'Explore web application projects built by Kenny Soriano.'
    }
  },
  {
    path: '/projects/visual',
    name: 'VisualProjects',
    component: VisualProjects,
    meta: {
      title: 'Visual Projects | Kenny Soriano',
      description: 'Browse visual design, layout, and styling projects by Kenny Soriano.'
    }
  },
  {
    path: '/resources',
    name: 'Resources',
    component: Resources,
    meta: {
      title: 'Resources | Kenny Soriano',
      description: 'Download resume files and useful portfolio resources from Kenny Soriano.'
    }
  },

 {
  path: '/projects/:slug',
  name: 'ProjectsView',
  component: () => import('../views/projects-view.vue'),
  meta: {
    hideLayout: true,
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
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
    meta: {
      hideLayout: true,
      flushTop: true,
      title: 'Page Not Found | Kenny Soriano',
      description: 'The requested page could not be found. Return to the homepage or explore other sections.'
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
