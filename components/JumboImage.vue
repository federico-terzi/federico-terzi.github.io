<template>
  <div class="container">
    <div class="jumbo-image"></div>
  </div>
</template>

<script>
export default {
  name: 'JumboImage',
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  z-index: 2;
}

.jumbo-image {
  width: 530px;
  height: 580px;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;

  background-image: url('~assets/img/jumbo-image-light.png');
}
</style>