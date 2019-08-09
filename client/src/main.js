// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { sync } from 'vuex-router-sync'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	strict: true,
	state: {
		token: null,
		user: null,
		isSignedIn: false
	},
	mutations: {
		setToken(state, token){
			state.token = token
			if(token){
				state.isSignedIn = true
			}
		},
		setUser(state, user){
			state.user = user
		}
	},
	actions: {
		setToken({commit}, token){
			commit('setToken', token)
		},
		setUser({commit}, user) {
			commit('setUser', user)
		}
	}
})

sync(store, router)

Vue.config.productionTip = false

Vue.use(Vuetify)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  vuetify: new Vuetify({}),
  router,
  store,
  components: { App },
  template: '<App/>'
})
