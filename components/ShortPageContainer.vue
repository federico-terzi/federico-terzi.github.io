<template>
  <div class="short-page-container">
    <page-header :title="title" class="short-page-title" />
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ShortPageContainer',
  props: {
    title: String,
  },
}
</script>

<style>
.short-page-container {
  max-width: 700px;

  margin-right: auto;
  margin-left: auto;

  margin-top: 30px;

  padding: 28px;
}

.short-page-title {
  margin-bottom: 50px;
  margin-left: -8px;
}

@media (max-width: 992px) {
  .short-page-container {
    margin-top: 10px;
  }
}
</style>