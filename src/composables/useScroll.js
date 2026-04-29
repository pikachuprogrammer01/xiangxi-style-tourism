export function useScroll() {
  const showBackTop = ref(false)
  const scrollY = ref(0)

  function onScroll() {
    scrollY.value = window.scrollY
    showBackTop.value = window.scrollY > 300
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })

  return { showBackTop, scrollY, scrollToTop }
}
