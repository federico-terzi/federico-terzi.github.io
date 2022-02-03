<template>
  <div>
    <short-page-container title="Blog">
      <template v-for="(article, index) of articles">
        <NuxtLink
          :key="article.slug"
          :to="{ name: 'blog-slug', params: { slug: article.cleanedSlug } }"
          class="post-link"
        >
          <post-item
            :title="article.title"
            :date="article.date"
            :snippet="article.description"
          ></post-item>
        </NuxtLink>
        <div
          class="divider"
          :key="article.slug"
          v-if="index !== articles.length - 1"
        ></div>
      </template>
    </short-page-container>
  </div>
</template>

<script>
import { formatDate } from '../../utils/dateUtils'
import { generateTitle } from '../../utils/titleUtils'
import { extractCleanSlug } from '../../utils/contentUtils'

export default {
  name: 'BlogPage',
  async asyncData({ $content, params }) {
    const articles = await $content('articles').sortBy('date', 'desc').fetch()

    articles.forEach((article) => {
      const cleanedSlug = extractCleanSlug(article.slug)
      article.cleanedSlug = cleanedSlug
    })

    return {
      articles,
    }
  },
  methods: {
    formatDate,
  },
  head() {
    return {
      title: generateTitle('Blog'),
    }
  },
}
</script>

<style scoped>
.divider {
  border: 1px solid var(--details);

  margin-top: 18px;
  margin-bottom: 28px;
}

.post-link {
  text-decoration: none;
  color: var(--content-primary);
  flex: 1;
}
</style>