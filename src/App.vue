<template>
  <section class="section">
    <CardSearch />
    <CardList />
  </section>
</template>

<script>
import CardList from "./components/CardList.vue";
import CardSearch from "./components/CardSearch.vue";

export default {
  name: "App",
  components: {
    CardList,
    CardSearch,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
