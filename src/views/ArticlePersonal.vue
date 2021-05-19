<template>
  <div>
    <h3>Article personal</h3>
    <article-list :articlePersonal="'?author=' + username"/>
  </div>
</template>
<script>
import ArticleList from "./ArticleList.vue";
export default {
  components: { ArticleList },
  name: "ArticlePersonal",
  mounted(){
    this.callfetchNewArticle();
  },
  computed: {
    username() {
      return this.$route.params.username;
    },
  },
  methods:{
    callfetchNewArticle(){
      this.$root.$refs.ArticleList.fetchNewArticle();
    }
  }
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