<template>
  <article>
    <nuxt-content :document="article" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .where({ path: { $contains: params.slug } })
      .limit(1)
      .fetch()

    return { article: articles[0] }
  },
}
</script>