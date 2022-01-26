<template>
  <home-section title="Contact me" id="contact-section">
    <div class="content">
      <p>
        If you’d like to
        <span class="blue">get in touch</span>, feel free to write me at:
      </p>
      <a href="mailto:federicoterzi96@gmail.com" class="blue email"
        >federicoterzi96@gmail.com</a
      >
      <p>
        You can also find me on various socials, feel free to get it touch there
        too!
      </p>

      <div class="socials">
        <div class="social">
          <Twitter /><a
            target="_blank"
            href="https://twitter.com/terzi_federico"
            >Twitter</a
          >
        </div>
        <div class="social">
          <Github /><a target="_blank" href="https://github.com/federico-terzi/"
            >GitHub</a
          >
        </div>
      </div>
      <div class="socials">
        <div class="social">
          <Linkedin /><a
            target="_blank"
            href="https://www.linkedin.com/in/federico-terzi/"
            >Linkedin</a
          >
        </div>
        <div class="social">
          <Youtube /><a
            target="_blank"
            href="https://www.youtube.com/c/FedericoTerzi"
            >YouTube</a
          >
        </div>
      </div>
    </div>
  </home-section>
</template>

<script>
import HomeSection from './HomeSection.vue'
import Github from '~/assets/svg/github.svg?inline'
import Linkedin from '~/assets/svg/linkedin.svg?inline'
import Twitter from '~/assets/svg/twitter.svg?inline'
import Youtube from '~/assets/svg/youtube.svg?inline'

export default {
  name: 'ContactSection',
  components: { HomeSection, Github, Linkedin, Twitter, Youtube },
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

.email {
  display: block;
  padding: 16px;
  text-align: center;
}

.blue {
  font-weight: bold;
  color: var(--accent-secondary);
}

a {
  text-underline-offset: 2px;
  text-decoration-thickness: 2px;
}

.social {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 16px 0 16px 0;
}

.socials {
  display: flex;
  width: 100%;
}

.socials a {
  font-weight: bold;
  color: var(--accent-secondary);
  margin-left: 10px;
}
</style>