<template>
  <div class="container">
    <div class="columns is-multiline is-mobile">
      <Card
        v-for="morie in getMorieList()"
        :key="morie.imdbID"
        :morie="morie"
      />
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "CardList",
  components: {
    Card,
  },
  methods: {
    getMorieList() {
      return this.$store.getters.getMories;
    },
  },
};
</script>

<style scoped></style>
