import Router from 'vue-router'
import Home from 'components/Home/Home'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
