<template>
  <div
    class="column center is-full-mobile is-one-third-tablet is-one-quarter-desktop"
  >
    <div class="card">
      <div class="card-image">
        <img
          class="image is-fullwidth	
"
          :src="
            morie.Poster == 'N/A'
              ? 'https://yilmazbilgisayar.com/wp-content/uploads/2019/04/placeholder-image.jpg'
              : morie.Poster
          "
          alt=""
        />
        <div class="is-overlay">
          <span
            class="tag is-warning is-one-fifth is-pulled-right has-text-weight-bold is-medium"
            >{{ morie.Year }}</span
          >
          <span
            class="tag is-one-fifth is-pulled-left has-text-weight-bold is-medium is-capitalized"
            :class="morie.Type == 'movie' ? 'is-info' : 'is-danger'"
            >{{ morie.Type }}</span
          >
        </div>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <h4 class="title is-4 has-text-left">{{ morie.Title }}</h4>
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

<style scoped>
.card {
  height: 600px;
  background-color: #e2e2e2;
}
.card .card-image img {
  height: 500px;
}
</style>
