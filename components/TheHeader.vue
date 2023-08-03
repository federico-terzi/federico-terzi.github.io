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
      <div class="open-mobile-menu" @click.stop="menuOpen = !menuOpen">
        <MenuIcon class="menu-icon" />
      </div>
      <transition name="fade">
        <div class="mobile-menu" v-if="menuOpen" @click="handleClickOutside">
          <div class="mobile-menu-links">
            <template v-for="(link, index) in links">
              <a
                :href="link.to"
                :key="'link' + link.to"
                v-if="link.useHtml"
                class="menu-link"
                @click.stop="menuOpen = false"
                >{{ link.label }}</a
              >
              <NuxtLink
                :to="link.to"
                :key="link.to"
                v-else
                class="menu-link"
                @click.native.stop="menuOpen = false"
                >{{ link.label }}</NuxtLink
              >
              <div
                class="menu-divider"
                :key="'separator' + link.to"
                v-if="index !== links.length - 1"
              />
            </template>
          </div>
          <span class="mobile-menu-label">Tap outside to close</span>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import TheLogo from './TheLogo.vue'
import MenuIcon from '~/assets/svg/menu.svg?inline'

export default {
  components: { TheLogo, MenuIcon },
  name: 'TheHeader',
  data: () => ({
    links: [
      { label: 'About', to: '/#about', useHtml: true },
      { label: 'Projects', to: '/projects', useHtml: false },
      { label: 'Blog', to: '/blog', useHtml: false },
      { label: 'Talks', to: '/talks', useHtml: false },
      { label: 'Contact me', to: '/contact-me', useHtml: false },
    ],
    menuOpen: false,
  }),
  mounted() {
    window.addEventListener('click', this.handleClickOutside)
    window.addEventListener('hashchange', this.handleClickOutside)
  },
  methods: {
    handleClickOutside() {
      this.menuOpen = false
    },
  },
  beforeDestroy() {
    window.removeEventListener('click', this.handleClickOutside)
    window.removeEventListener('hashchange', this.handleClickOutside)
  },
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
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

html[data-theme='dark'] .tagline {
  opacity: 0.9;
}

.menu-link {
  position: relative;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: var(--accent-menu);
  margin-left: 48px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.menu-link:hover {
  color: var(--accent-primary);
}

.menu-link::after {
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

.menu-link:hover::after {
  transform: scaleX(1);
  opacity: 1;
  background-color: var(--accent-primary);
}

.open-mobile-menu {
  display: none;
}

.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--background-semitransparent);
  z-index: 1000;
  box-shadow: 0px 3px 18px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  justify-content: center;

  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  perspective: 1000px;
}

.menu-divider {
  opacity: 0.05;
  border-bottom: 2px solid #2e4364;
  margin-right: 32px;
  margin-left: 32px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  -webkit-backdrop-filter: blur(0px);
  backdrop-filter: blur(0px);
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

  .open-mobile-menu {
    display: block;
    margin-right: 4px;
    filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.25));
  }

  .menu-link {
    text-align: center;
    margin-left: 0;
    margin-top: 18px;
    margin-bottom: 18px;

    animation: slide-in-bck-center 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
  }

  .mobile-menu-links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
  }

  .mobile-menu-label {
    text-align: center;
    font-size: 12px;
    margin-bottom: 100px;
  }
}

/* ----------------------------------------------
 * Generated by Animista on 2022-1-28 21:27:55
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-in-bck-center
 * ----------------------------------------
 */
@keyframes slide-in-bck-center {
  0% {
    transform: translateZ(600px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
}
</style>