<template>
  <div class="content">
    <span class="date">{{ formatDate(date) }}</span>
    <h3 class="title">{{ title }}</h3>
    <p class="snippet">
      {{ snippet }}
    </p>
  </div>
</template>

<script>
import { formatDate } from '../utils/dateUtils'

export default {
  name: 'PostItem',
  props: {
    date: String,
    title: String,
    snippet: String,
  },
  methods: {
    formatDate,
  },
}
</script>

<style scoped>
.content {
  display: flex;
  padding: 0;
  flex-direction: column;
}

.date {
  font-size: 12px;
  line-height: 15px;
}

.title {
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 0;
  margin-top: 8px;
}

.snippet {
  font-size: 15px;
  line-height: 22px;
  font-family: 'PT Serif';
}
</style>