<template>
  <div class="main-layout-container">
    <TheBackground />
    <TheHeader />
    <div class="main-layout-content">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import '../assets/css/vars.css'

// Taken from: https://pqina.nl/blog/applying-styles-based-on-the-user-scroll-position-with-smart-css/
const debounce = (fn) => {
  let frame
  return (...params) => {
    if (frame) {
      cancelAnimationFrame(frame)
    }

    frame = requestAnimationFrame(() => {
      fn(...params)
    })
  }
}

export default {
  name: 'DefaultLayout',
  beforeMount() {
    document.addEventListener('scroll', this.handleScrollDebounced, {
      passive: true,
    })
    this.handleScrollDebounced()
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.handleScrollDebounced)
  },
  methods: {
    handleScroll() {
      document.documentElement.dataset.scroll = window.scrollY
    },
    handleScrollDebounced() {
      debounce(this.handleScroll)()
    },
  },
}
</script>

<style>
html,
body {
  font-family: Inter, sans-serif;
  color: var(--content-primary);
  background-color: var(--background-primary);

  margin: 0;
  padding: 0;
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.main-layout-container {
  max-width: 1512px;
  margin: auto;
}

.main-layout-content {
  padding-top: 95px;
}

@media (max-width: 992px) {
  .main-layout-content {
    padding-top: 50px;
  }
}
</style>