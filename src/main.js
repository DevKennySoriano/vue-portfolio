import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(router)

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

AOS.init({
  duration: 800,
  easing: 'ease-out-cubic',
  once: true,
  mirror: false
})

router.afterEach(() => {
  window.requestAnimationFrame(() => {
    AOS.refreshHard()
  })
})

app.mount('#app')
