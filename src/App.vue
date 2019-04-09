<template>
  <v-app>
      <v-navigation-drawer app temporary v-model="drawer">
        <v-list>
          <v-list-tile
          v-for="item in menuItems" :key="item.id"
          :to="item.route"
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>

          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar app dark color="primary">
          <v-toolbar-side-icon @click="drawer = !drawer" class="hidden-md-and-up">
          </v-toolbar-side-icon>
          <v-toolbar-title>Example App</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn v-for="item in menuItems" :key="item.id" flat :to="item.route">
              <v-icon left>{{ item.icon }}</v-icon>
              {{ item.title }}
            </v-btn>
          </v-toolbar-items>
      </v-toolbar>
      <v-content>
          <router-view></router-view>
      </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
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
    }
  }
}
</script>
