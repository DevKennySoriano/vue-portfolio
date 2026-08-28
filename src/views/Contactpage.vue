<script setup>
import { reactive, ref, onMounted, onBeforeUnmount } from 'vue'
import { useToast } from '@/composables/useToast'

const { success, error: toastError } = useToast()
const email = 'devkennysoriano@gmail.com'
const copied = ref(false)
const submitting = ref(false)
let copyTimer

const CAPTCHA_SITEKEY = '50b2fe65-b00b-4b9e-ad62-3ba471098be2'
let captchaWidgetId = null

function loadHCaptchaScript() {
  return new Promise((resolve, reject) => {
    window._hcaptchaOnload = () => {
      renderCaptcha()
      resolve()
    }
    const existing = document.querySelector('script[src*="hcaptcha.com/api.js"]')
    if (existing) {
      if (typeof hcaptcha !== 'undefined' && hcaptcha.render) {
        renderCaptcha()
        resolve()
      } else {
        existing.addEventListener('load', () => {
          renderCaptcha()
          resolve()
        })
        existing.addEventListener('error', reject)
      }
      return
    }
    const script = document.createElement('script')
    script.src =
      'https://js.hcaptcha.com/1/api.js?recaptchacompat=off&render=explicit&onload=_hcaptchaOnload'
    script.async = true
    script.defer = true
    script.onerror = reject
    document.body.appendChild(script)
  })
}

function renderCaptcha() {
  const container = document.querySelector('#contact-captcha')
  if (!container || typeof hcaptcha === 'undefined') return
  if (container.getAttribute('data-rendered')) return
  container.setAttribute('data-rendered', 'true')
  captchaWidgetId = hcaptcha.render(container, {
    sitekey: CAPTCHA_SITEKEY,
    size: 'normal',
  })
}

onMounted(async () => {
  try {
    await loadHCaptchaScript()
  } catch (e) {
    console.error('hCaptcha failed to load:', e)
  }
})

onBeforeUnmount(() => {
  if (captchaWidgetId !== null && typeof hcaptcha !== 'undefined' && hcaptcha.reset) {
    try {
      hcaptcha.remove(captchaWidgetId)
    } catch (e) {
      hcaptcha.reset(captchaWidgetId)
    }
  }
  captchaWidgetId = null
})

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || ''

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(email)
    copied.value = true
    success('Email copied to clipboard')
    window.clearTimeout(copyTimer)
    copyTimer = window.setTimeout(() => {
      copied.value = false
    }, 2500)
  } catch (e) {
    toastError('Could not copy email')
  }
}

async function submitForm() {
  if (!accessKey) {
    toastError('Contact form is not configured yet')
    return
  }
  if (!form.name || !form.email || !form.message) {
    toastError('Please fill in your name, email, and message')
    return
  }
  const container = document.querySelector('#contact-captcha')
  const hCaptcha = container && container.querySelector('textarea[name="h-captcha-response"]')
  if (!hCaptcha || !hCaptcha.value) {
    toastError('Please complete the captcha')
    return
  }
  const captchaToken = hCaptcha.value
  submitting.value = true
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        name: form.name,
        email: form.email,
        subject: form.subject || 'New message from portfolio',
        message: form.message,
        from_name: form.name,
        replyto: form.email,
        'h-captcha-response': captchaToken,
      }),
    })
    const data = await res.json()
    if (data.success) {
      success('Message sent successfully')
      form.name = ''
      form.email = ''
      form.subject = ''
      form.message = ''
      if (captchaWidgetId !== null && typeof hcaptcha !== 'undefined') {
        hcaptcha.reset(captchaWidgetId)
      }
    } else {
      throw new Error(data.message || 'Submission failed')
    }
  } catch (e) {
    console.error('Contact form error:', e)
    toastError('Could not send message')
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <section class="contact-page">
    <div class="contact-shell">
      <header class="contact-hero">
        <p class="eyebrow">Contact</p>
        <h1>Let's connect.</h1>
        <p class="subtitle">
          Open to full-time opportunities, freelance projects, and collaborations. Feel free to reach out through any of the channels below.
        </p>
      </header>

      <div class="contact-layout">
      <div class="contact-form-wrap">
        <h2 class="contact-form-title">Send me a message</h2>
        <form class="contact-form" @submit.prevent="submitForm">
          <div class="form-row">
            <div class="form-field">
              <label for="cf-name">Name <span class="req">*</span></label>
              <input
                id="cf-name"
                v-model="form.name"
                type="text"
                placeholder="Your name"
                autocomplete="name"
                required
              />
            </div>
            <div class="form-field">
              <label for="cf-email">Email <span class="req">*</span></label>
              <input
                id="cf-email"
                v-model="form.email"
                type="email"
                placeholder="you@example.com"
                autocomplete="email"
                required
              />
              <p class="field-note">Please use an active email so I can reach you back.</p>
            </div>
          </div>
          <div class="form-field">
            <label for="cf-subject">Subject</label>
            <input
              id="cf-subject"
              v-model="form.subject"
              type="text"
              placeholder="What is this about?"
            />
          </div>
          <div class="form-field">
            <label for="cf-message">Message <span class="req">*</span></label>
            <textarea
              id="cf-message"
              v-model="form.message"
              rows="4"
              maxlength="1000"
              placeholder="Write your message here..."
              required
            ></textarea>
            <p class="field-count">{{ form.message.length }}/1000</p>
          </div>
          <div id="contact-captcha" class="h-captcha"></div>
          <div class="form-actions">
            <button class="form-submit" type="submit" :disabled="submitting">
              <svg v-if="!submitting" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7Z"/></svg>
              <svg v-else class="form-spinner" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
              {{ submitting ? 'Sending...' : 'Send Message' }}
            </button>
          </div>
        </form>
      </div>

      <div class="contact-side">
        <p class="contact-links-hint">Or reach out via the links below</p>
        <div class="contact-grid">
        <div class="contact-link email-card">
          <span class="contact-icon email-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </span>
          <div class="contact-info">
            <span class="contact-label">Email</span>
            <span class="contact-value">{{ email }}</span>
          </div>
          <div class="email-actions">
            <a class="email-mailto" href="mailto:devkennysoriano@gmail.com" aria-label="Open email app">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </a>
            <button class="email-copy" @click="copyEmail" :aria-label="copied ? 'Copied' : 'Copy email'">
              <svg v-if="copied" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
            </button>
          </div>
        </div>

        <a class="contact-link" href="https://www.linkedin.com/in/kennysoriano/" target="_blank" rel="noopener noreferrer">
          <span class="contact-icon linkedin-icon">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45H16.9v-5.57c0-1.33-.03-3.03-1.85-3.03-1.85 0-2.13 1.45-2.13 2.94v5.66H9.37V9h3.4v1.56h.05c.47-.9 1.64-1.84 3.36-1.84 3.58 0 4.24 2.35 4.24 5.42v6.31ZM5.35 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.57V9h3.55v11.45Z"/></svg>
          </span>
          <div class="contact-info">
            <span class="contact-label">LinkedIn</span>
            <span class="contact-value">kennysoriano</span>
          </div>
          <svg class="contact-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </a>

        <a class="contact-link" href="https://github.com/DevKennySoriano" target="_blank" rel="noopener noreferrer">
          <span class="contact-icon github-icon">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.91c.57.1.78-.25.78-.55 0-.27-.01-.99-.02-1.95-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.71 1.25 3.37.95.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.02 11.02 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.27 5.68.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.2.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>
          </span>
          <div class="contact-info">
            <span class="contact-label">GitHub</span>
            <span class="contact-value">DevKennySoriano</span>
          </div>
          <svg class="contact-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </a>

        <a class="contact-link" href="https://www.facebook.com/soriano.kenny" target="_blank" rel="noopener noreferrer">
          <span class="contact-icon facebook-icon">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.03 4.39 11.03 10.13 11.93v-8.43H7.08V12.1h3.05V9.42c0-3.02 1.8-4.7 4.55-4.7 1.32 0 2.7.24 2.7.24v2.97h-1.52c-1.5 0-1.97.93-1.97 1.89v2.28h3.35l-.54 3.47h-2.8V24C19.62 23.1 24 18.1 24 12.07Z"/></svg>
          </span>
          <div class="contact-info">
            <span class="contact-label">Facebook</span>
            <span class="contact-value">soriano.kenny</span>
          </div>
          <svg class="contact-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </a>
        </div>
      </div>
      </div>
    </div>
  </section>
</template>

<style scoped src="@/css/views/contactpage.css"></style>
