<template>
  <div id="app">
    <Header></Header>
    <Aside></Aside>
    <main class="container">
      <router-view></router-view>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Aside from './components/Aside.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header, Aside, Footer
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/base/init';
@import '@/assets/scss/base/fonts';
@import '@/assets/scss/base/normalize';
@import '@/assets/scss/base/reset';
@import '@/assets/scss/base/mixin';
@import '@/assets/scss/base/typography';
@import '@/assets/scss/layout/container';
</style>