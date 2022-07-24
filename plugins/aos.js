import AOS from 'aos'
import 'aos/dist/aos.css'

export default ({ app }) => {
  requestAnimationFrame(() => {
    if (typeof window !== 'undefined') {
      app.AOS = AOS.init({
        // Global settings
        // startEvent: 'DOMContentLoaded',

        // Settings that can be overridden
        disable: 'tablet',
        offset: 200,
        duration: 600,
        easing: 'ease',
        mirror: false,
        once: true
      })
    }
  })
}
