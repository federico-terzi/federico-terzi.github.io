<template>
  <div class="header">
    <div class="details">
      <the-logo class="logo" />
      <div class="details-text">
        <span class="name">Federico Terzi</span>
        <span class="tagline">A Software Engineering Journey</span>
      </div>
    </div>
    <div>
      <span>About</span>
    </div>
  </div>
</template>

<script>
import TheLogo from './TheLogo.vue'
export default {
  components: { TheLogo },
  name: 'TheHeader',
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
}

/* Details */

.details {
  display: flex;
}

.logo {
  margin-right: 16px;
}

.details-text {
  display: flex;
  flex-direction: column;
}

.name {
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  margin-top: -1px;
  margin-bottom: 2px;
  color: var(--accent-primary);
}

.tagline {
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
}

@media (max-width: 768px) {
  .name {
    font-size: 14px;
    line-height: 17px;
  }

  .tagline {
    display: none;
  }
}
</style>