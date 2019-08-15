// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { sync } from 'vuex-router-sync'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vuex from 'vuex'
import store from '@/store/store'
import VueYouTubeEmbed from 'vue-youtube-embed'
import Panel from '@/components/Panel'

Vue.use(Vuex)
Vue.use(Vuetify)
Vue.use(VueYouTubeEmbed)

sync(store, router)

Vue.config.productionTip = false

Vue.component('panel', Panel)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  vuetify: new Vuetify({}),
  router,
  store,
  components: { App },
  template: '<App/>'
})
