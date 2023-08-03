<template>
  <div>
    <short-page-container title="Talks">
      <p class="talks-label">
        I love talking at conferences and meetups! Here's a list of my past and
        planned talks:
      </p>

      <template v-for="talk of talks">
        <talk-item
          :key="talk.date.toISOString()"
          :name="talk.name"
          :date="talk.date"
          :recording="talk.recording"
          :location="talk.location"
          :conference="talk.conference"
        >
        </talk-item>
        <div class="divider" :key="`divider-${talk.date.toISOString()}`"></div>
      </template>
    </short-page-container>
  </div>
</template>

<script>
import { generateTitle } from '~/utils/titleUtils'
import talks from '~/talks'

export default {
  name: 'TalksPage',
  data: () => {
    const sorted = talks.map((talk) => ({
      ...talk,
      date: new Date(Date.parse(talk.date)),
    }))

    sorted.sort((a, b) => b.date - a.date)
    return {
      talks: sorted,
    }
  },
  head() {
    return {
      title: generateTitle('Talks'),
    }
  },
}
</script>

<style scoped>
.talks-label {
  font-size: 14px;
  line-height: 17px;
  margin-top: -20px;
  margin-bottom: 40px;
}

.talk-conference {
  font-weight: bold;
  line-height: 1;
  margin-bottom: 8px;
}

.divider {
  border: 1px solid var(--details);

  margin-bottom: 18px;
  margin-top: 18px;
}
</style>