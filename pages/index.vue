<template>
  <div>
    <div class="jumbo">
      <jumbo-tag-line class="jumbo-tag-line" />
      <jumbo-image />
    </div>
    <scoll-down-indicator class="scroll-indicator" />
    <about-section />
    <latest-posts-section class="latest-posts" :articles="articles" />
    <div class="test"></div>
  </div>
</template>

<script>
import { extractCleanSlug } from '../utils/contentUtils'

import AboutSection from '~/components/AboutSection.vue'
import JumboImage from '~/components/JumboImage.vue'
import JumboTagLine from '~/components/JumboTagLine.vue'
import LatestPostsSection from '~/components/LatestPostsSection.vue'
import ScollDownIndicator from '~/components/ScollDownIndicator.vue'

export default {
  components: {
    JumboImage,
    JumboTagLine,
    ScollDownIndicator,
    AboutSection,
    LatestPostsSection,
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

.test {
  height: 3000px;
}

.scroll-indicator {
  height: 25vh;
}

.latest-posts {
  margin-top: 40px;
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

  .latest-posts {
    margin-top: 0;
  }
}
</style>
