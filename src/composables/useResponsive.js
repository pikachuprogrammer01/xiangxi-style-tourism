import { ref, onMounted, onUnmounted } from 'vue'

export function useResponsive() {
  const width = ref(window.innerWidth)
  const breakpoint = computed(() => {
    if (width.value >= 1200) return 'desktop'
    if (width.value >= 768) return 'tablet'
    return 'mobile'
  })

  const isDesktop = computed(() => breakpoint.value === 'desktop')
  const isTablet = computed(() => breakpoint.value === 'tablet')
  const isMobile = computed(() => breakpoint.value === 'mobile')

  function onResize() {
    width.value = window.innerWidth
  }

  onMounted(() => {
    window.addEventListener('resize', onResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', onResize)
  })

  return { width, breakpoint, isDesktop, isTablet, isMobile }
}
