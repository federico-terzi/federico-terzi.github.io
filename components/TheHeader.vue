<template>
  <div class="header" id="header">
    <div class="content">
      <NuxtLink to="/" class="logo-link">
        <div class="details">
          <the-logo class="logo" />
          <div class="details-text">
            <span class="name">Federico Terzi</span>
            <span class="tagline">A Software Engineering Journey</span>
          </div>
        </div>
      </NuxtLink>
      <div class="extended-menu">
        <template v-for="link in links">
          <a
            :href="link.to"
            :key="link.to"
            v-if="link.useHtml"
            class="menu-link"
            >{{ link.label }}</a
          >
          <NuxtLink :to="link.to" :key="link.to" v-else class="menu-link">{{
            link.label
          }}</NuxtLink>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import TheLogo from './TheLogo.vue'
export default {
  components: { TheLogo },
  name: 'TheHeader',
  data: () => ({
    links: [
      { label: 'About', to: '/#about', useHtml: true },
      { label: 'Portfolio', to: '/portfolio', useHtml: false },
      { label: 'Blog', to: '/blog', useHtml: false },
      { label: 'Contact me', to: '/contact-me', useHtml: false },
    ],
  }),
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

.logo-link {
  text-decoration: none;
}

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
  color: var(--content-primary);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
}

.extended-menu a {
  position: relative;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: var(--accent-secondary);
  margin-left: 48px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.extended-menu a:hover {
  color: var(--accent-primary);
}

.menu-link::before {
  content: '';
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  bottom: -3px;
  left: 0;
  background-color: var(--accent-secondary);
  transform: scaleX(0);
  opacity: 0;
  transition: all 0.3s ease;
}

.menu-link:hover::before {
  transform: scaleX(1);
  opacity: 1;
  background-color: var(--accent-primary);
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