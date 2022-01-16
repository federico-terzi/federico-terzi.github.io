<template>
  <div>
    <TheHeader />
    <Nuxt />
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
  background-color: var(--background-primary);

  margin: 0;
  padding: 0;
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>