<template>
  <a
    :href="link"
    target="_blank"
    class="project-button"
    :style="{ backgroundColor: colorStyle }"
  >
    <component :is="iconComponent" class="project-button-icon" />
    <span>{{ label }}</span>
  </a>
</template>

<script>
import ExternalLink from '~/assets/svg/external-link.svg?inline'
import Github from '~/assets/svg/github.svg?inline'
import Youtube from '~/assets/svg/youtube.svg?inline'

export default {
  name: 'ProjectButton',
  props: {
    label: String,
    icon: String,
    link: String,
  },
  computed: {
    colorStyle() {
      switch (this.icon) {
        case 'github':
          return 'var(--accent-secondary)'
        case 'youtube':
          return 'var(--accent-primary)'
        case 'play':
          return 'var(--accent-primary)'
        case 'gplay':
          return 'var(--accent-secondary)'
        default:
          return 'var(--accent-primary)'
      }
    },
    iconComponent() {
      switch (this.icon) {
        case 'github':
          return Github
        case 'youtube':
          return Youtube
        default:
          return ExternalLink
      }
    },
  },
}
</script>

<style>
.project-button {
  filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.2));
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 8px;
  padding: 14px 20px 14px 20px;

  font-weight: bold;
  font-size: 14px;
  line-height: 17px;

  color: var(--content-primary-inverted);

  opacity: 0.9;

  text-decoration: none;

  display: flex;
  align-items: center;

  transition: all 0.4s ease;
}

.project-button:hover {
  opacity: 1;
  transform: translateY(-2px);
}

.project-button-icon {
  height: 24px;
  width: 24px;
  margin-right: 8px;
}

.project-button-icon path {
  stroke: var(--content-primary-inverted);
}
</style>