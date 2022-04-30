<template>
  <div>
    <Navbar />
    <router-view />
      </div>
</template>
<script>
import Navbar from '@/views/components/navbar/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>
<style>
</style>
