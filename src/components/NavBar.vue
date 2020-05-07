<template>
  <div>
    <v-navigation-drawer
      v-model="sideNav"
      absolute
      temporary
      class="primary"
      dark
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-icon>mdi-face-recognition</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="{ name: item.route }"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon
        @click.stop="sideNav = !sideNav"
        class="d-flex d-sm-none"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link :to="{ name: 'Home' }" tag="span" style="cursor: pointer;">
          VueMeetups
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="d-none d-sm-flex">
        <v-btn
          text
          v-for="item in menuItems"
          :key="item.title"
          :to="{ name: item.route }"
        >
          <v-icon left>{{ item.icon }}</v-icon>
          <span class="ml-2">{{ item.title }}</span>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',

  data: () => ({
    sideNav: null,
    menuItems: [
      { title: 'View Meetups', icon: 'mdi-account-multiple', route: 'Meetups' },
      {
        title: 'Organize Meetup',
        icon: 'mdi-map-marker',
        route: 'CreateMeetup'
      },
      { title: 'Profile', icon: 'mdi-account', route: 'Profile' },
      { title: 'Register', icon: 'mdi-account-cog', route: 'Register' },
      { title: 'Log In', icon: 'mdi-lock-open', route: 'Login' },
      { title: 'Log Out', icon: 'mdi-account-remove', route: 'Logout' }
    ]
  })
}
</script>
