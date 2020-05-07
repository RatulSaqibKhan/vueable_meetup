<template>
  <div>
    <v-container>
      <v-row>
        <v-col v-for="(item, i) in items" :key="i" cols="12">
          <v-card class="card-elevation violet" dark>
            <div class="justify-card d-flex flex-wrap align-center">
              <div>
                <v-card-title
                  class="headline"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.date"></v-card-subtitle>
                <v-card-actions>
                  <v-btn
                    :to="{ name: 'ShowMeetup', params: { id: item.id } }"
                    class="card-action-btn tartiary black--text"
                    text
                  >
                    <v-icon left>mdi-arrow-right-bold-hexagon-outline</v-icon>
                    <span class="ml-2">View Meetup</span>
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar class="ma-3" size="125" tile>
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Meetups',
  data: () => ({
    items: [
      {
        id: '1',
        color: '#1F7087',
        src:
          'https://c1.wallpaperflare.com/preview/919/750/326/banani-dhaka-bangladesh.jpg',
        title: 'Meetup in Dhaka',
        description: `The area of Dhaka has been inhabited since the first
                  millennium. The city rose to prominence in the 17th century as
                  a provincial capital and commercial center of the Mughal
                  Empire in South Asia. Dhaka was the capital of the
                  proto-industrialised Mughal Bengal for 75 years. As the center
                  of the muslin trade in Bengal, it was one of the most
                  prosperous cities in the Indian subcontinent. The medieval
                  city was named Jahangirabad in honor of the Mughal Emperor
                  Jahangir and hosted the seat of the Mughal Subahdar
                  (governor), Naib Nazims and Dewans (prime ministers)`,
        date: '17 Mar 2020'
      },
      {
        id: '2',
        color: '#952175',
        src:
          'https://travelersdiarybd.files.wordpress.com/2016/06/maxresdefault1.jpg',
        title: 'Meetup in Rajshahi',
        description: `Rajshahi (Bengali: রাজশাহী, [radʒ.ʃaɦi]; historically Rampur Boalia; nicknamed Silk City or City of Education) is a metropolitan city, and a major urban, commercial and educational centre of Bangladesh. It is also the administrative seat of eponymous division and district. [note 1] Located on the north bank of the Padma River, near the Bangladesh-India border, the city has a population of over 763,952 residents.[4] The city is surrounded by the satellite towns of Nowhata and Katakhali, which together build an urban agglomeration of about 1 million population. Arguably Rajshahi is the most clean and green among the cities in Bangladesh.`,
        date: '17 Apr 2020'
      }
    ]
  })
}
</script>

<style scoped>
.card-elevation {
  box-shadow: none;
}
.card-elevation:hover {
  box-shadow: 0 0 18px #512b58;
}

.card-action-btn:hover {
  color: white !important;
}

@media only screen and (max-width: 600px) {
  .justify-card {
    justify-content: center;
  }

  .justify-card > div {
    text-align: center;
  }

  .v-card__actions {
    justify-content: center;
  }
}

@media only screen and (min-width: 601px) {
  .justify-card {
    justify-content: space-between;
  }
}
</style>
