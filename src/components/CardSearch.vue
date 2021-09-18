<template>
  <div class="navbar-item field">
    <p class="control has-icons-right">
      <input
        v-model="search"
        type="text"
        placeholder="Search (Minimum 3 char)"
      />
      <span class="icon is-small is-right">
        <icon />
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "CardSearch",
  data() {
    return {
      search: "",
    };
  },
  watch: {
    search() {
      if (this.search.length > 2) this.$store.dispatch("search", this.search);
      else this.$store.dispatch("clear");
    },
  },
};
</script>

<style></style>
