<template>
  <div>
    <div class="jumbo">
      <jumbo-tag-line class="jumbo-tag-line" />
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
  padding-top: 95px;
  margin-top: -95px;

  background-image: url('~/assets/svg/background-lines.svg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: bottom -5vh right -10vw;
}

@media (max-width: 992px) {
  .jumbo {
    flex-direction: column-reverse;
    justify-content: start;

    background-size: 200% 200%;
    background-position: right 25% top 60%;
  }

  .jumbo-tag-line {
    margin-top: 20px;
  }
}
</style>
