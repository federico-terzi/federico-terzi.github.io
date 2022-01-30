<template>
  <div class="post-footer-container">
    <img
      src="~/assets/img/profile-picture-small.png"
      alt="Federico Terzi Picture"
      class="post-footer-image"
    />
    <div class="post-footer-content">
      <p>Hi 👋, I’m <span class="red">Federico</span>, thanks for reading!</p>
      <p>
        If you liked this article, make sure to follow me on
        <a href="https://twitter.com/terzi_federico" class="blue">Twitter</a> to
        stay updated with the latest ones :)
      </p>
      <p>
        If you are into technical topics, you might also enjoy my
        <a href="https://www.youtube.com/c/FedericoTerzi" class="red"
          >YouTube</a
        >
        channel.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostFooter',
}
</script>

<style scoped>
.post-footer-container {
  font-size: 18px;
  line-height: 22px;

  border-top: 1px solid var(--details);
  padding-top: 28px;

  display: flex;
}

.post-footer-image {
  height: 138px;
  width: 138px;
}

.post-footer-content {
  margin-left: 28px;
}

.post-footer-content p:first-child {
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

@media (max-width: 992px) {
  .post-footer-container {
    align-items: center;
    flex-direction: column;
  }

  .post-footer-content {
    margin-left: 0;
    margin-top: 28px;
  }
}
</style>