<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Footer
  },
  computed: {
    /* films() {
      return this.$store.getters["films/films"];
    } */
  }
};
</script>

<style lang="scss">
  @import "assets/styles/style";
</style>
