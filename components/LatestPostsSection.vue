<template>
  <regular-section title="Latest posts" id="about-section">
    <div class="content">
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
    </div>
    <NuxtLink to="/blog" class="view-all-link">View all posts</NuxtLink>
  </regular-section>
</template>

<script>
import { formatDate } from '../utils/dateUtils'

import PostItem from './PostItem.vue'

export default {
  components: { PostItem },
  name: 'LatestPostsSection',
  props: {
    articles: Array,
  },
  methods: {
    formatDate,
  },
}
</script>

<style scoped>
.content {
  display: flex;
}

.divider {
  opacity: 0.1;
  border: 1px solid #1a1a1a;
  margin-right: 36px;
  margin-left: 36px;
}

.view-all-link {
  text-align: center;
  width: 100%;
  font-weight: bold;
  color: var(--accent-menu);
  text-underline-offset: 2px;
  text-decoration-thickness: 2px;

  margin-top: 48px;
}

.post-link {
  text-decoration: none;
  color: var(--content-primary);
  flex: 1;
}

@media (max-width: 992px) {
  .content {
    flex-direction: column;
  }

  .divider {
    margin-right: 0;
    margin-left: 0;
    margin-top: 24px;
    margin-bottom: 24px;
  }
}
</style>