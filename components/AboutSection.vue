<template>
  <home-section title="About me" id="about-section">
    <div class="content">
      <p>
        I’m a Software Engineer specialized in
        <span class="red">Front-end</span> development and
        <span class="blue">System programming</span>, with a Master’s degree in
        Computer Engineering.
      </p>
      <p>
        I’m <span class="red">product-oriented</span>. Despite loving the
        technical side, I also deeply care about user experiences and design.
      </p>
      <p>
        I love creating <span class="blue">side-projects</span>, and some of
        them are used by tens of thousands of daily active users.
        <a href="https://espanso.org" target="_blank" class="red">Espanso</a> is
        the most popular one, and you can find the others
        <NuxtLink to="/portfolio" class="blue">here</NuxtLink>.
      </p>
      <p>
        If you like technical topics, you might also enjoy my
        <NuxtLink to="/blog" class="red">Blog</NuxtLink>
        and
        <a
          href="https://www.youtube.com/c/FedericoTerzi"
          target="_blank"
          class="red"
          >YouTube</a
        >
        channel.
      </p>
      <p>
        I really enjoy <span class="blue">books</span>. I’m currently reading X,
        I’ve previously read Y. You can also check out my
        <NuxtLink to="/books" class="blue">book recommendations</NuxtLink>.
      </p>
      <p>
        I’m currently based in the lovely city of
        <span class="red">Bologna</span>, Italy.
      </p>
    </div>
  </home-section>
</template>

<script>
import HomeSection from './HomeSection.vue'
export default {
  name: 'AboutSection',
  components: { HomeSection },
}
</script>

<style scoped>
.content {
  font-size: 18px;
  line-height: 22px;
}

.content > p:first-child {
  margin-top: 0;
}

.red {
  font-weight: bold;
  color: var(--accent-primary);
}

.blue {
  font-weight: bold;
  color: var(--accent-secondary);
}

a {
  text-underline-offset: 2px;
  text-decoration-thickness: 2px;
}
</style>