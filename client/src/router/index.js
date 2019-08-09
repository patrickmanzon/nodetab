import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Home from '@/components/Home'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
