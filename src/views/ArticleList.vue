<template>
  <div class="articlePreview">
    <div class="articlePreview-meta">
      <article-preview
        v-for="Article in getArticle"
        :key="Article.id"
        :Article="Article"
      />
    </div>
  </div>
</template>
<script>
import ArticlePreview from "./ArticlePreview.vue";
export default {
  components: { ArticlePreview },
  name: "ArticleList",
props: ['query'],
  // data() {
  //   return {
  //     article: null,
  //     loading: true,
  //   };
  // },
    // created() {
    // },
  mounted() {
    // this.$store.dispatch("getArticle");  
    this.fetchNewArticle(); 

  },
  computed: {
    getArticle() {
      return this.$store.state.home.article;
    },
    // queryString() {
    //   return Object.assign({}, this.query);
    // },
  },
  methods: {
    // ...mapActions({
    //   fetchArticle: FETCH_ARTICLES,
    //   fetchFeedArticle: FETCH_FEED_ARTICLES,
    // }),
    fetchNewArticle() {
      debugger;
      // let query = this.query;
      this.$store.dispatch("getArticle",this.query);
      debugger;
    },
    // await this.fetchFeedArticle(this.queryString);
  },
};
</script>

<style scoped>
</style>