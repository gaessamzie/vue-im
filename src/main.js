import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

import privacy from './views/privacy.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'privacy', path: '/privacy', component: privacy
    }
  ]
});

const eventBus = new Vue();
export default eventBus;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
