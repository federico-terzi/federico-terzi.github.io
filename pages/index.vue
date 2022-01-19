<template>
  <div>
    <div class="jumbo">
      <jumbo-tag-line class="jumbo-tag-line" />
      <jumbo-image />
    </div>
    <scoll-down-indicator />
  </div>
</template>

<script>
import JumboImage from '~/components/JumboImage.vue'
import JumboTagLine from '~/components/JumboTagLine.vue'
import ScollDownIndicator from '~/components/ScollDownIndicator.vue'
export default {
  components: { JumboImage, JumboTagLine, ScollDownIndicator },
  name: 'IndexPage',
}
</script>

<style scoped>
.jumbo {
  display: flex;
  height: 75vh;
  padding-top: 95px;
  margin-top: -95px;
}

@media (max-width: 992px) {
  .jumbo {
    flex-direction: column-reverse;
    justify-content: start;
    height: 70vh;
  }

  .jumbo-tag-line {
    margin-top: 20px;
  }
}
</style>
