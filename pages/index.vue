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

  background-image: url('~/assets/svg/background-lines.svg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: bottom -5vh right -10vw;
}
</style>
