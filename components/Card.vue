<template>
  <div>
  <v-card
    class="mx-auto"
    :class="{'mb-3': !showComments}"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">{{post.author.name}}</div>
        <v-list-item-title class="headline mb-1">{{post.title}}</v-list-item-title>
        <v-list-item-subtitle>{{post.content}}</v-list-item-subtitle>
      </v-list-item-content>

<!--      <v-list-item-avatar-->
<!--        tile-->
<!--        size="80"-->
<!--        color="grey"-->
<!--      ></v-list-item-avatar>-->
    </v-list-item>

    <v-card-actions>
      <v-btn text> <v-icon dark class="mr-1">mdi-thumb-up</v-icon>{{post.likers_count}}</v-btn>
      <v-btn text @click="showComments=!showComments"> <v-icon dark class="mr-1">mdi-message</v-icon>{{post.comments_count}}</v-btn>
    </v-card-actions>
  </v-card>

    <v-card
      tile
      class="mb-3"
      v-if="showComments"
    >
      <div  v-for="comment in post.display_comments">


      <v-list-item>
        <v-list-item-content two-line>
          <v-list-item-title>{{comment.author.name}}</v-list-item-title>
          <v-list-item-subtitle>{{comment.content}}</v-list-item-subtitle>
        </v-list-item-content>

      </v-list-item>
      <v-divider></v-divider>
      </div>
    </v-card>


  </div>
</template>

<script>
    export default {
        name: "Card",
        props: ['post'],
        data(){
          return {
            showComments: false
          }
        }
    }
</script>

<style scoped>

</style>
