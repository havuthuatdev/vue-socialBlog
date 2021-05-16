<template>
  <div class="container">
    <div class="homefeed">
      <h1>feed</h1>
    </div>
  </div>
</template>

<script>
import ArticleList from "./ArticleList.vue";
export default {
  components: { ArticleList: ArticleList},
  mounted(){
    this.$store.dispatch("getArticleFeed");
  }
};
</script>

<style scoped>
.homefeed {
  color: black;
}
</style>>

