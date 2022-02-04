<template>
  <article>
    <short-page-container>
      <h1 class="post-title">{{ article.title }}</h1>
      <p class="post-details">
        {{ formatDate(article.date) }} - by {{ article.author }}
      </p>
      <div class="post-content">
        <nuxt-content :document="article" />
      </div>
      <post-footer class="post-footer" />
    </short-page-container>
  </article>
</template>

<script>
import '~/assets/css/postcontent.css'
import { formatDate } from '../../utils/dateUtils'
import { generateTitle } from '~/utils/titleUtils'

export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .where({ path: { $contains: params.slug } })
      .limit(1)
      .fetch()

    return { article: articles[0] }
  },
  methods: {
    formatDate,
  },
  head() {
    return {
      title: generateTitle(this.article.title),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.article.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https://federicoterzi.com/social/${this.article.slug}.png`,
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:site',
          content: '@terzi_federico',
        },
        {
          name: 'twitter:title',
          content: this.article.title,
        },
        {
          name: 'twitter:description',
          content: this.article.description,
        },
        {
          name: 'twitter:image',
          content: `https://federicoterzi.com/social/${this.article.slug}.png`,
        },
      ],
    }
  },
}
</script>

<style scoped>
.post-title {
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;

  color: var(--content-primary);

  margin-top: 0;
  margin-bottom: 6px;
}

.post-details {
  font-size: 14px;
  line-height: 17px;

  color: var(--content-secondary);
  margin-bottom: 34px;
}

.post-footer {
  margin-top: 28px;
}
</style>