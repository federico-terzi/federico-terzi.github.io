<template>
  <div>
    <short-page-container>
      <contact-section />
    </short-page-container>
  </div>
</template>

<script>
import { generateTitle } from '~/utils/titleUtils'

export default {
  name: 'ContactPage',
  head() {
    return {
      title: generateTitle('Contact me'),
    }
  },
}
</script>

<style scoped>
</style>