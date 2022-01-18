<template>
  <div class="container">
    <FSection class="f" />
    <TSection class="t" />
  </div>
</template>

<script>
import FSection from '~/assets/svg/logo-section-f.svg?inline'
import TSection from '~/assets/svg/logo-section-t.svg?inline'

export default {
  name: 'TheLogo',
  components: { FSection, TSection },
}
</script>

<style scoped>
.container {
  position: relative;
  width: 46px;
}

.f {
  position: absolute;
}

.t {
  position: absolute;
  left: -3px;
  top: -1px;
}

@media (max-width: 992px) {
  .container {
    width: 22px;
  }

  .f {
    height: 22px;
    width: 22px;
  }

  .t {
    height: 22px;
    width: 22px;
    left: -1px;
  }
}
</style>
