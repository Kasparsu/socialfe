<template>
  <v-app id="inspire">


    <navigation :items="items" :items2="items2" :open="drawer" @changeval="setOpen"></navigation>
    <top-bar @toggle="drawer = !drawer"></top-bar>
    <v-content>
      <nuxt/>
    </v-content>
  </v-app>
</template>

<script>
  import Navigation from "../components/Navigation";
  import TopBar from "../components/TopBar";
  export default {
    components: {TopBar, Navigation},
    props: {
      source: String,
    },
    methods: {
      setOpen(value){
        this.drawer = value;
      }
    },
    data: () => ({
      drawer: null,
      items: [
        { icon: 'mdi-trending-up', text: 'Most Popular' },
        { icon: 'mdi-youtube-subscription', text: 'Subscriptions' },
        { icon: 'mdi-history', text: 'History' },
        { icon: 'mdi-playlist-play', text: 'Playlists' },
        { icon: 'mdi-clock', text: 'Watch Later' },
      ],
      items2: [
        { picture: 28, text: 'Joseph' },
        { picture: 38, text: 'Apple' },
        { picture: 48, text: 'Xbox Ahoy' },
        { picture: 58, text: 'Nokia' },
        { picture: 78, text: 'MKBHD' },
      ],
    }),
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>
