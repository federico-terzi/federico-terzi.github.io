<template>
  <div class="social-bar-container">
    <a href="https://twitter.com/terzi_federico"><Twitter /></a>
    <div class="social-bar-divider" />
    <a href="https://github.com/federico-terzi/"><Github /></a>
    <div class="social-bar-divider" />
    <a href="https://www.linkedin.com/in/federico-terzi/"><Linkedin /></a>
    <div class="social-bar-divider" />
    <a href="https://www.youtube.com/c/FedericoTerzi"><Youtube /></a>
  </div>
</template>

<script>
import Github from '~/assets/svg/github.svg?inline'
import Linkedin from '~/assets/svg/linkedin.svg?inline'
import Twitter from '~/assets/svg/twitter.svg?inline'
import Youtube from '~/assets/svg/youtube.svg?inline'

export default {
  name: 'SocialBar',
  components: {
    Github,
    Linkedin,
    Twitter,
    Youtube,
  },
}
</script>

<style>
.social-bar-container {
  position: fixed;

  left: 24px;
  bottom: 24px;

  background: var(--background-elevated);
  border: 1px solid var(--details);
  box-sizing: border-box;
  box-shadow: 0px 3px 8px 2px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  display: flex;
  justify-content: space-evenly;

  width: 360px;
  padding-top: 10px;
  padding-bottom: 10px;

  transition: all 0.3s ease;
}

html[data-scrolled-to-bottom='true'] .social-bar-container {
  opacity: 0;
  transform: translateY(100px);
}

.social-bar-container a {
  display: flex;
  align-items: center;
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.25));

  transition: all 0.3s ease;
}

.social-bar-container a:hover {
  transform: scale(1.2) translateY(-3px);
}

.social-bar-container a path {
  stroke: var(--accent-primary);
}

.social-bar-divider {
  border-left: 1px solid var(--details);
}

@media (max-width: 992px) {
  .social-bar-container {
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;

    border-radius: 0;
  }
}
</style>