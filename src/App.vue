<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <button class="button is-primary">Test</button>
  <p class="subtitle">My first website with <strong>Bulma</strong>!</p>

  <div class="dropdown">
    <div class="dropdown-trigger">
      <button
        class="button"
        aria-haspopup="true"
        aria-controls="dropdown-menu3"
      >
        <span>Click me</span>
        <span class="icon is-small">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu3" role="menu">
      <div class="dropdown-content">
        <a href="#" class="dropdown-item">
          Overview
        </a>
        <a href="#" class="dropdown-item">
          Modifiers
        </a>
        <a href="#" class="dropdown-item">
          Grid
        </a>
        <a href="#" class="dropdown-item">
          Form
        </a>
        <a href="#" class="dropdown-item">
          Elements
        </a>
        <a href="#" class="dropdown-item">
          Components
        </a>
        <a href="#" class="dropdown-item">
          Layout
        </a>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item">
          More
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
