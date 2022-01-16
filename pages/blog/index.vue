<template>
  <div>
    <h1>Blog Posts</h1>
    <ul>
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink
          :to="{ name: 'blog-slug', params: { slug: article.cleanedSlug } }"
        >
          <img :src="article.img" />
          <div>
            <h2>{{ article.title }}</h2>
            <p>{{ formatDate(article.date) }}</p>
            <p>by {{ article.author }}</p>
            <p>{{ article.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
import { formatDate } from '../../utils/dateUtils'
import { extractCleanSlug } from '../../utils/contentUtils'

export default {
  name: 'BlogPage',
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'author', 'date', 'slug'])
      .sortBy('date', 'desc')
      .fetch()

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
}
</script>