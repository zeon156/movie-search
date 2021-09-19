<template>
  <nav class="navbar has-shadow is-primary is-fixed-top">
    <div class="navbar-start">
      <h3 class="navbar-item title is-3 has-text-centered has-text-white">
        Mories Search
      </h3>
    </div>
    <div class="navbar-end">
      <div class="navbar-item field">
        <p class="control">
          <input
            class="input is-rounded is-success is-medium is-lowercase has-text-weight-semibold"
            v-model="search"
            type="text"
            placeholder="Search (Minimum 3 char)"
          />
        </p>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "CardSearch",
  data() {
    return {
      search: "",
    };
  },
  created() {
    this.$store.dispatch("leyla");
  },
  watch: {
    search() {
      if (this.search.length > 2) this.$store.dispatch("search", this.search);
      else if (this.search.length > 0) this.$store.dispatch("clear");
      else this.$store.dispatch("leyla");
    },
  },
};
</script>

<style></style>
