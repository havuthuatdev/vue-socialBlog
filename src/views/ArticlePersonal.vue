<template>
  <div>
    <h3>Article personal</h3>
    <article-list :query="'?author='+username" :limit="5"/>
  </div>
</template>
<script>
import ArticleList from './ArticleList.vue';
export default {
  components: { ArticleList },
  name: "ArticlePersonal",
  computed: {
    username() {
      return this.$route.params.username; 
    },
  },
  //   mounted(){
  //       this.$store.dispatch("fetchArticle")
  //   },
  //   computed: {
  //     getArticlePersonal() {
  //         debugger;
  //       return console.log(this.$store.state.articles["article"]);
  //     },
  //   },
};
</script>
<style>
</style>