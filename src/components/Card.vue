<template>
  <div
    class="column center is-full-mobile is-one-third-tablet is-one-quarter-desktop"
  >
    <div class="card">
      <div class="card-image has-text-centered">
        <img :src="morie.Poster" :alt="morie.Title" />
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ morie.Title }}</p>
            <p class="title is-4">{{ morie.Year }}</p>
            <p class="title is-4">{{ morie.Type }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    morie: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped></style>
