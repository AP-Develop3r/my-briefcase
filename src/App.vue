<template>
    <div class="min-h-screen 
           bg-green-50 text-gray-700 
           dark:bg-gray-900 dark:text-purple-50">
      <Navbar />
      <router-view />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Navbar from '@/views/components/navbar/Navbar.vue'
export default {
  components: {
    Navbar
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
