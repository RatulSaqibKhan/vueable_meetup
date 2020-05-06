<template>
  <v-app>
    <NavBar></NavBar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default {
  name: 'App',

  components: {
    NavBar,
    Footer
  },

  data: () => ({})
}
</script>
