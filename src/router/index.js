import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/movies/movie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Movie',
      component: Movie
    }, { 
      path: '/hello', 
      name: 'Hello',
      // component: function (resolve) {
      //   require(['@/components/HelloWorld'], resolve)
      // },
      component: () => import('@/components/HelloWorld')
    }
  ]
})
