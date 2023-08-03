<template>
  <div class="content">
    <div class="details">
      <span class="date">{{ formatDate(date) }}</span>
      <span class="location">{{ location }}</span>
    </div>
    <h3 class="conference">{{ conference }}</h3>

    <template v-if="recording">
      <a
        class="name recording"
        :href="recording"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ name }}
      </a>
    </template>
    <template v-else>
      <span class="name">{{ name }}</span>
    </template>
  </div>
</template>

<script>
import { formatDate } from '../utils/dateUtils'

export default {
  name: 'TalkItem',
  props: {
    date: Date,
    name: String,
    conference: String,
    recording: String,
    location: String,
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

.details {
  display: flex;
  justify-content: space-between;
}

h3 {
  font-size: 18px;
}

.date,
.location {
  font-size: 12px;
  line-height: 15px;
}

.name {
  font-size: 14px;
  color: var(--accent-secondary);
  font-weight: bold;
  text-decoration: none;
}

.recording {
  text-decoration: underline;
}

.conference {
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 10px;
  margin-top: 18px;
}
</style>