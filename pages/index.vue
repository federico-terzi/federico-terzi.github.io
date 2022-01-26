<template>
  <div>
    <div class="jumbo">
      <jumbo-tag-line class="jumbo-tag-line" />
      <jumbo-image />
    </div>
    <scoll-down-indicator class="scroll-indicator" />
    <div class="home-divider"></div>
    <about-section />
    <div class="home-divider"></div>
    <latest-posts-section :articles="articles" />
    <div class="home-divider"></div>
    <contact-section />
  </div>
</template>

<script>
import { extractCleanSlug } from '../utils/contentUtils'

import AboutSection from '~/components/AboutSection.vue'
import JumboImage from '~/components/JumboImage.vue'
import JumboTagLine from '~/components/JumboTagLine.vue'
import LatestPostsSection from '~/components/LatestPostsSection.vue'
import ScollDownIndicator from '~/components/ScollDownIndicator.vue'
import ContactSection from '~/components/ContactSection.vue'

export default {
  components: {
    JumboImage,
    JumboTagLine,
    ScollDownIndicator,
    AboutSection,
    LatestPostsSection,
    ContactSection,
  },
  name: 'IndexPage',
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .sortBy('date', 'desc')
      .limit(3)
      .fetch()

    articles.forEach((article) => {
      const cleanedSlug = extractCleanSlug(article.slug)
      article.cleanedSlug = cleanedSlug
    })

    return {
      articles,
    }
  },
}
</script>

<style scoped>
.jumbo {
  display: flex;
  height: 75vh;
  padding-top: 95px;
  margin-top: -95px;
}

.scroll-indicator {
  height: 15vh;
}

.home-divider {
  opacity: 0.05;
  margin-top: 160px;
  margin-bottom: 160px;
}

@media (max-width: 992px) {
  .jumbo {
    flex-direction: column-reverse;
    justify-content: start;
    height: 70vh;
  }

  .jumbo-tag-line {
    margin-top: 20px;
  }

  .scroll-indicator {
    height: 20vh;
  }

  .home-divider {
    border: 1px solid #1a1a1a;
    margin: 24px;
  }
}
</style>
