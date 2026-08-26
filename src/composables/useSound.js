import { ref, onMounted, onUnmounted } from 'vue'

const soundEnabled = ref(false)
let audioCtx = null

function getCtx() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)()
  }
  return audioCtx
}

function playTone(freq, duration, volume = 0.15, type = 'sine') {
  if (!soundEnabled.value) return
  try {
    const ctx = getCtx()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = type
    osc.frequency.value = freq
    gain.gain.setValueAtTime(volume, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration)
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start()
    osc.stop(ctx.currentTime + duration)
  } catch (_) {}
}

function playHover() {
  playTone(800, 0.08, 0.08, 'sine')
}

function playClick() {
  playTone(600, 0.1, 0.12, 'square')
  setTimeout(() => playTone(900, 0.08, 0.08, 'sine'), 50)
}

function isInteractive(el) {
  if (!el || el.closest('.sidebar-toggle-btn') || el.closest('.preloader')) return false
  return (
    el.tagName === 'BUTTON' ||
    el.tagName === 'A' ||
    el.closest('button') ||
    el.closest('a') ||
    el.closest('[role="button"]') ||
    getComputedStyle(el).cursor === 'pointer'
  )
}

function onPointerOver(e) {
  if (isInteractive(e.target)) playHover()
}

function onClick(e) {
  if (isInteractive(e.target)) playClick()
}

export function useSound() {
  onMounted(() => {
    const saved = localStorage.getItem('soundEnabled')
    if (saved !== null) {
      soundEnabled.value = saved === 'true'
    }
    document.addEventListener('pointerover', onPointerOver, { passive: true })
    document.addEventListener('click', onClick, { passive: true })
  })

  onUnmounted(() => {
    document.removeEventListener('pointerover', onPointerOver)
    document.removeEventListener('click', onClick)
  })

  function toggleSound() {
    soundEnabled.value = !soundEnabled.value
    localStorage.setItem('soundEnabled', soundEnabled.value)
  }

  return { soundEnabled, toggleSound }
}
