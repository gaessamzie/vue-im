<template>
  <div id="app">
    <Header v-bind:aside="aside" @asideChange="asideChange"></Header>
    <Aside v-bind:aside="aside" @asideChange="asideChange"></Aside>
    <main class="container">
      <router-view></router-view>
    </main>
    <Footer></Footer>
    <button type="button" v-on:click="aside =! aside">테스트</button>
    {{aside}}
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
  },
  data() {
    return {
      aside: false
    }
  },
  methods: {
    asideChange(aside) {
      this.aside = aside;
    }
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