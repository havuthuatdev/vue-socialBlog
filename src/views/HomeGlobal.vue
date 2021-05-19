<template>
  <div class="global">
    <h1>global</h1>
    <ArticleList />
  </div>
</template>

<script>
import ArticleList from "./ArticleList.vue";

export default {
  components: { ArticleList: ArticleList },
  mounted(){
    this.callfetchNewArticle();
  },
  methods:{
    // gọi dến function fetchNewArticle trong ArticleList component.
    // Nó sẽ trả về danh sách Article. 
    callfetchNewArticle(){
      this.$root.$refs.ArticleList.fetchNewArticle();
    }
  }
};
</script>
<style scoped>
.global {
  color: black;
}
</style>