<template>
  <div class="page-header">
    <ArrowLeft class="page-header-arrow" />
    <span>{{ title }}</span>
  </div>
</template>

<script>
import ArrowLeft from '~/assets/svg/arrow-left.svg?inline'
export default {
  name: 'PageHeader',
  components: {
    ArrowLeft,
  },
  props: {
    title: String,
  },
}
</script>

<style>
.page-header {
  display: flex;
  flex-direction: row;
  align-items: center;

  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 34px;

  color: var(--accent-secondary);
}

.page-header-arrow {
  margin-right: 8px;
}
</style>