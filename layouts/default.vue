<template>
  <div class="main-layout-container">
    <TheBackground />
    <TheHeader />
    <div class="main-layout-content">
      <Nuxt />
    </div>
    <TheFooter />
    <SocialsBar />
  </div>
</template>

<script>
import '../assets/css/vars.css'

export default {
  name: 'DefaultLayout',
}
</script>

<style>
html,
body {
  font-family: Inter, sans-serif;
  color: var(--content-primary);
  background-color: transparent;

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
    max-width: 100vw;
    overflow-x: hidden;
  }
}
</style>