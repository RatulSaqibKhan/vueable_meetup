<template>
  <v-footer color="primary lighten-1" padless>
    <v-row justify="center" no-gutters>
      <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
        <strong>VueMeetups</strong> &copy;
        <a href="mailto:ratulkhan.jhenidah@gmail.com">RSK</a> -
        {{ new Date().getFullYear() }}
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({})
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
