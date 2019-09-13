import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Profile from './views/Profile.vue'
import City from './components/City'
import Playing from './components/Playing'
import Coming from './components/Coming'
import Search from './components/Search'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [{
        path: 'city',
        name: 'city',
        component: City,
      }, {
        path: 'playing',
        name: 'playing',
        component: Playing,
      }, {
        path: 'coming',
        name: 'coming',
        component: Coming,
      }, {
        path: 'search',
        name: 'search',
        component: Search,
      }]
    },
    {
      path: '/movie',
      name: 'movie',
      component: () => import('./views/Movie.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
  ]
})
