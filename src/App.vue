<template>
  <div id="app">
    <app-header />
      <router-view></router-view>
    <!-- <home-content /> -->
    <!-- <app-footer /> -->
  </div>
</template>

<script>
import Header from './components/Shared/Header.vue';
// import HomeContent from './components/HomeContent.vue';
// import Footer from './components/Shared/Footer.vue'
export default {

  name: 'app',
  components: {
    'app-header': Header,
    // 'home-content': HomeContent,
    // 'app-footer': Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

html, body {
    max-width: 100%;
    overflow-x: hidden;
}
</style>
