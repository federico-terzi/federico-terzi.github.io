<template>
  <div>
    <short-page-container title="Books">
      <p class="books-label">
        Books an incredible resource to learn new concepts in a coherent way, to
        broaden point of views or simply to relax. Here's a list of the ones I'm
        currently reading or I've read (most recently read at the top):
      </p>

      <ul class="books-list">
        <li v-for="book in books" :key="book.name">
          <a :href="book.link" target="_blank">{{ book.name }}</a> by
          {{ book.author }}
        </li>
      </ul>
    </short-page-container>
  </div>
</template>

<script>
import { generateTitle } from '~/utils/titleUtils'
import books from '~/books'

export default {
  name: 'BooksPage',
  data: () => ({
    books: [...books].reverse(),
  }),
  head() {
    return {
      title: generateTitle('Books'),
    }
  },
}
</script>

<style scoped>
.books-label {
  font-size: 14px;
  line-height: 17px;
  margin-top: -30px;
  margin-bottom: 30px;
}

.books-list > li {
  margin-bottom: 10px;
}

.books-list a {
  color: var(--accent-primary);
  text-decoration: underline;
  text-underline-offset: 2px;
  text-decoration-thickness: 2px;
  font-style: italic;
}
</style>