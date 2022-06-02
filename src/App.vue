<template>
  <div id="app">
    <Header></Header>
    <main class="container">
      <router-view></router-view>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header, Footer
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/base/fonts';
@import '@/assets/scss/base/normalize';
@import '@/assets/scss/base/reset';
@import '@/assets/scss/base/typography';
@import '@/assets/scss/layout/container';
</style>
