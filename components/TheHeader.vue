<template>
  <div class="header">
    <div class="content">
      <div class="details">
        <the-logo class="logo" />
        <div class="details-text">
          <span class="name">Federico Terzi</span>
          <span class="tagline">A Software Engineering Journey</span>
        </div>
      </div>
      <div class="extended-menu">
        <span>About</span>
      </div>
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
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  z-index: 20;

  background-color: transparent;
  box-shadow: none;
  transition: all 0.2s ease-in-out;
}

html:not([data-scroll='0']) .header {
  background-color: var(--background-primary);
  box-shadow: 0px 4px 43px rgba(0, 0, 0, 0.1);
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  max-width: 1512px;
  margin: auto;
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
  justify-content: center;
}

.name {
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: var(--accent-primary);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
}

.tagline {
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  opacity: 0.8;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
}

@media (max-width: 992px) {
  .name {
    font-size: 14px;
    line-height: 17px;
  }

  .tagline {
    display: none;
  }

  .details-text {
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  html:not([data-scroll='0']) .details-text {
    opacity: 1;
  }

  .content {
    padding: 14px;
  }

  .extended-menu {
    display: none;
  }
}
</style>