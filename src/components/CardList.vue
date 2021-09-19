<template>
  <div class="container mt-6">
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

<style scoped>
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .mt-6 {
    margin-top: 5.5rem !important;
  }
}
</style>
