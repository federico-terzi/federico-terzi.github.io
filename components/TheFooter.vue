<template>
  <div class="footer-container">
    <p>
      <span class="bold">Designed</span> and
      <span class="bold">coded</span> with<span class="red"> ♥</span> by me.
      Copyright © Federico Terzi 2019-2023 - P.IVA 03864201201
    </p>
  </div>
</template>

<script>
export default {
  name: 'TheFooter',
}
</script>

<style scoped>
.footer-container {
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: var(--accent-menu);
  margin-top: 40px;
  padding-right: 16px;
  padding-left: 16px;
}

.bold {
  font-weight: bold;
}

.red {
  color: var(--accent-primary);
}
</style>