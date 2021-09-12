<template>
  <div
    class="column center is-full-mobile is-one-third-tablet is-one-quarter-desktop"
  >
    <div class="card">
      <div class="card-image has-text-centered">
        <img :src="src" :alt="alt" />
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">John Smith</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["src", "alt"],
};
</script>

<style scoped></style>
