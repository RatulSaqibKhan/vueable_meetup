<template>
  <div>
    <v-container>
      <v-row no-gutters>
        <v-col
          class="d-flex justify-md-end justify-center align-center"
          cols="12"
          sm="6"
        >
          <div class="my-1 pr-md-4">
            <v-btn large class="secondary" :to="{ name: 'Meetups' }"
              >Explore Meetups</v-btn
            >
          </div>
        </v-col>
        <v-col
          class="d-flex justify-md-start justify-center align-center"
          cols="12"
          sm="6"
        >
          <div class="my-1 pl-md-4">
            <v-btn large class="secondary" :to="{ name: 'CreateMeetup' }"
              >Organize Meetup</v-btn
            >
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex justify-center align-center" cols="12" sm="12">
          <v-carousel cycle hide-delimiters show-arrows-on-hover>
            <v-carousel-item
              v-for="meetup in meetups"
              :key="meetup.id"
              :src="meetup.src"
              :to="{ name: 'ShowMeetup', params: { id: meetup.id } }"
              reverse-transition="fade-transition"
              transition="fade-transition"
            >
              <div class="title">
                {{ meetup.title }}
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex justify-center align-center" cols="12" sm="12">
          <article class="body-1">Join the meetup</article>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    meetups: [
      {
        id: '1',
        src:
          'https://c1.wallpaperflare.com/preview/919/750/326/banani-dhaka-bangladesh.jpg',
        title: 'Meetup in Dhaka'
      },
      {
        id: '2',
        src:
          'https://travelersdiarybd.files.wordpress.com/2016/06/maxresdefault1.jpg',
        title: 'Meetup in Rajshahi'
      }
    ]
  })
}
</script>

<style scoped>
.title {
  position: absolute;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: white;
  background: rgba(0, 0, 0, 0.43);
  padding: 10px;
  font-size: 2em;
}
</style>
