<script setup>
import { ref, onMounted } from 'vue'
import { useToast } from '@/composables/useToast'
import { useDownloadCounter } from '@/composables/useDownloadCounter'

const { success } = useToast()
const { counts, fetchCount, increment } = useDownloadCounter()

const showVersions = ref(false)
const showDownloadConfirm = ref(false)
const downloadTarget = ref(null)

const allVersions = [
  {
    label: 'July 11, 2026',
    tag: 'Latest',
    href: '/resume/Kenny_Soriano_Resume_07112026_A4.pdf',
    name: 'Kenny Soriano Resume (July 11, 2026)',
  },
  {
    label: 'June 7, 2026',
    tag: '',
    href: '/resume/Kenny_Soriano_Resume_06072026_A4.pdf',
    name: 'Kenny Soriano Resume (June 7, 2026)',
  },
  {
    label: 'June 6, 2026',
    tag: '',
    href: '/resume/Kenny_Soriano_Resume_06062026.pdf',
    name: 'Kenny Soriano Resume (June 6, 2026)',
  },
  {
    label: 'April 25, 2026',
    tag: '',
    href: '/resume/Kenny_Soriano_Resume_04252026.pdf',
    name: 'Kenny Soriano Resume (April 25, 2026)',
  },
]

const resources = [
  {
    id: 'brand-style-guide',
    title: 'Brand Style Guide',
    subtitle: 'Brandstyle Template Example',
    date: 'August 26, 2026',
    thumbnail: '/resources/brandstyle_thumbnail_sorianokenny.png',
    previewHref: '/resources/free_template_brandstyle_guide.pdf',
    downloadHref: '/resources/free_template_brandstyle_guide.pdf',
    downloadName: 'Brand Style Guide Template',
  },
  {
    id: 'cover-letter',
    title: 'Cover Letter',
    subtitle: 'Cover Letter Example - Template',
    date: 'August 28, 2026',
    thumbnail: '/coverletter/coverletter_thumnail.png',
    previewHref: '/coverletter/CoverLetter_v1_template.pdf',
    downloadHref: '/coverletter/CoverLetter_v1_template.pdf',
    downloadName: 'Cover Letter Template',
  },
]

const resourceGroups = [
  { id: 'resume', name: 'Kenny Soriano Resume (July 11, 2026)' },
  ...resources.map((r) => ({ id: r.id, name: r.downloadName })),
]

onMounted(() => {
  resourceGroups.forEach((g) => fetchCount(g.id))
})

function toggleVersions() {
  showVersions.value = !showVersions.value
}

function closeVersions() {
  showVersions.value = false
}

function requestDownload(href, name) {
  downloadTarget.value = { href, name }
  showDownloadConfirm.value = true
}

function confirmDownload() {
  const { href, name } = downloadTarget.value
  const a = document.createElement('a')
  a.href = href
  a.download = ''
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  showDownloadConfirm.value = false
  const matched = resourceGroups.find((g) => g.name === name)
  if (matched) increment(matched.id)
  const cleaned = name.replace(/ \([^)]*\)$/, '').replace(/\([^)]*\)$/, '').trim()
  downloadTarget.value = null
  success(`Downloading ${cleaned}`)
}

function cancelDownload() {
  showDownloadConfirm.value = false
  downloadTarget.value = null
}
</script>

<template>
  <section class="resources-page" @click.self="closeVersions">
    <div class="resources-shell">
      <header class="resources-hero">
        <p class="eyebrow">Resources</p>
        <h1>Downloadable Files</h1>
        <p class="subtitle">
          Quick access to resume files and downloadable portfolio resources.
        </p>
      </header>

      <div class="resources-grid">
        <article class="resource-card">
          <div class="resource-preview">
            <img src="/resume/resume_thumbnail_sorianokenny.png" alt="Resume preview" />
          </div>

          <div class="resource-head">
            <span class="resource-type-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5Zm0 2.5L16.5 7H14V4.5ZM7 20V4h5v4a1 1 0 0 0 1 1h4v11H7Zm2-8h6v1.5H9V12Zm0 3h6v1.5H9V15Z"/></svg>
            </span>
            <span class="resource-tag">Free</span>
          </div>

          <div class="resource-info">
            <h2>Resume</h2>
            <p class="resource-subtitle">ATS Resume</p>
            <p class="resource-label">Date</p>
            <p class="resource-date">July 11, 2026</p>
            <p class="resource-downloads">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"/></svg>
              {{ counts['resume'] ?? '—' }} downloads
            </p>
          </div>

          <div class="resource-actions">
            <div class="versions-wrapper">
              <button class="resource-btn preview" @click="toggleVersions">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                Preview
              </button>

              <div v-if="showVersions" class="versions-popover">
                <p class="versions-popover-title">Resume Versions</p>
                <ul class="versions-popover-list">
                  <li v-for="v in allVersions" :key="v.href" class="versions-popover-item">
                    <a
                      class="versions-popover-link"
                      :href="v.href"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg class="versions-popover-icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5Zm0 2.5L16.5 7H14V4.5Z"/></svg>
                      <span class="versions-popover-label">{{ v.label }}</span>
                      <span v-if="v.tag" class="versions-popover-tag">{{ v.tag }}</span>
                      <svg class="versions-popover-arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <button
              class="resource-btn download"
              @click="requestDownload('/resume/Kenny_Soriano_Resume_07112026_A4.pdf', 'Kenny Soriano Resume (July 11, 2026)')"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"/></svg>
              Download
            </button>
          </div>
        </article>

        <article v-for="r in resources" :key="r.title" class="resource-card">
          <div class="resource-preview">
            <img :src="r.thumbnail" :alt="r.title + ' preview'" />
          </div>

          <div class="resource-head">
            <span class="resource-type-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5Zm0 2.5L16.5 7H14V4.5ZM7 20V4h5v4a1 1 0 0 0 1 1h4v11H7Zm2-8h6v1.5H9V12Zm0 3h6v1.5H9V15Z"/></svg>
            </span>
            <span class="resource-tag">Free</span>
          </div>

          <div class="resource-info">
            <h2>{{ r.title }}</h2>
            <p class="resource-subtitle">{{ r.subtitle }}</p>
            <p class="resource-label">Date</p>
            <p class="resource-date">{{ r.date }}</p>
            <p class="resource-downloads">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"/></svg>
              {{ counts[r.id] ?? '—' }} downloads
            </p>
          </div>

          <div class="resource-actions">
            <a
              class="resource-btn preview"
              :href="r.previewHref"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
              Preview
            </a>
            <button
              class="resource-btn download"
              @click="requestDownload(r.downloadHref, r.downloadName)"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"/></svg>
              Download
            </button>
          </div>
        </article>
      </div>
    </div>

    <transition name="modal-fade">
      <div v-if="showDownloadConfirm" class="download-modal" @click.self="cancelDownload">
        <div class="download-modal-box">
          <div class="download-modal-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"/></svg>
          </div>
          <h3 class="download-modal-title">Download File?</h3>
          <p class="download-modal-name">{{ downloadTarget?.name }}</p>
          <div class="download-modal-actions">
            <button class="download-modal-btn cancel" @click="cancelDownload">Cancel</button>
            <button class="download-modal-btn confirm" @click="confirmDownload">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"/></svg>
              Download
            </button>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<style scoped src="@/css/views/resources.css"></style>
