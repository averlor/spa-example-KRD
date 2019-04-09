import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      drawer: false,
      menuItems: [
        {
          id: 1,
          icon: 'lock',
          title: 'Login',
          route: '/signin'

        },
        {
          id: 2,
          icon: 'face',
          title: 'Registration',
          route: '/signout'
        },
        {
          id: 3,
          icon: 'bookmark_border',
          title: 'Orders',
          route: '/orders'
        },
        {
          id: 4,
          icon: 'note_add',
          title: 'New ad',
          route: '/new'
        },
        {
          id: 5,
          icon: 'list',
          title: 'My ads',
          route: '/list'
        }
      ]
  },
  mutations: {

  },
  actions: {

  }
})
