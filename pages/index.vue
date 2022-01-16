<template>
  <div>
    <div class="jumbo">
      <jumbo-tag-line />
      <jumbo-image />
    </div>
  </div>
</template>

<script>
import JumboImage from '~/components/JumboImage.vue'
import JumboTagLine from '~/components/JumboTagLine.vue'
export default {
  components: { JumboImage, JumboTagLine },
  name: 'IndexPage',
}
</script>

<style scoped>
.jumbo {
  display: flex;
  height: 75vh;
}
</style>
