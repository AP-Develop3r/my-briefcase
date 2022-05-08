<template>
    <div class="min-h-screen 
           bg-green-50 text-gray-700 
           dark:bg-gray-900 dark:text-purple-50">
      <navbar />
      <about id="about"/>
      <skills id="skills"/>
      <!-- <router-view /> -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Navbar from '@/views/components/navbar/Navbar.vue'
import About from '@/views/components/about/About.vue'
import Skills from '@/views/components/skills/Skills.vue'
export default {
  components: {
    Navbar, About, Skills
  },
  beforeMount() {
    this.$store.dispatch("initTheme");
  },
  computed: {
    ...mapGetters({ theme: "getTheme" }),
  },
  watch: {
    theme(newTheme, oldTheme) {
      newTheme === "light"
        ? document.querySelector("html").classList.remove("dark")
        : document.querySelector("html").classList.add("dark");
    },
  },
}
</script>
<style>
</style>
