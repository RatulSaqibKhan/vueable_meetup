<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card class="mx-auto" :elevation="7">
            <v-img
              class="white--text align-end"
              height="250px"
              src="https://c1.wallpaperflare.com/preview/919/750/326/banani-dhaka-bangladesh.jpg"
            >
              <v-card-title class="card-title">Meetup In Dhaka</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">17 Mar 2020</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>Mirpur, Dhaka</div>
              <article class="mt-2">
                The area of Dhaka has been inhabited since the first millennium.
                The city rose to prominence in the 17th century as a provincial
                capital and commercial center of the Mughal Empire in South
                Asia. Dhaka was the capital of the proto-industrialised Mughal
                Bengal for 75 years. As the center of the muslin trade in
                Bengal, it was one of the most prosperous cities in the Indian
                subcontinent. The medieval city was named Jahangirabad in honor
                of the Mughal Emperor Jahangir and hosted the seat of the Mughal
                Subahdar (governor), Naib Nazims and Dewans (prime ministers)
              </article>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="secondary" dark text>
                <v-icon>mdi-bell</v-icon>
                <span class="ml-2">Register</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'ShowMeetup',
  props: ['id']
}
</script>

<style scoped>
.card-title {
  color: orange;
  background-color: rgba(0, 0, 0, 0.43);
  justify-content: center;
  align-items: center;
}
</style>
