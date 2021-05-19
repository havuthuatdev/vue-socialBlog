<template>
  <div>
    <h4>Favorited</h4>
    <article-list :favoritedPersonal="'?favorited=' + username" />
  </div>
</template>
<script>
import ArticleList from "./ArticleList.vue";
export default {
  components: { ArticleList },
  name: "Favorited",
  mounted(){
      this.callFetFavoritedArticle();
  },
  computed: {
    username() {
      return this.$route.params.username;
    },
  },
  methods:{
      callFetFavoritedArticle(){
          debugger
          this.$root.$refs.ArticleList.fetFavoritedArticle();
      }
  }
};
</script>
<style>
</style>