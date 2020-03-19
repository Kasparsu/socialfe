<template>
  <v-container class="fill-height">
    <v-row
      justify="center"
      align="center"
    >
      <v-col>
         <card v-for="post in $store.state.posts" :post="post"></card>
        <div class="text-center">
          <v-pagination
            :value="$store.state.pagination.current_page"
            @input="changePage"
            :length="$store.state.pagination.last_page"
          ></v-pagination>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import Card from "../components/Card";
export default {
  components: {Card},
  created() {
    this.$store.dispatch('loadPosts');
  },
  methods: {
    changePage(value){
      this.$store.dispatch('loadPosts', value);
    }
  }
}
</script>
