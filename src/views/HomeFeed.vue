<template>
  <div class="container">
    <div class="homefeed">
      <h1>feed</h1>
    </div>
  </div>
</template>

<script>
import Article from "./Article.vue";
export default {
  components: { Article: Article},
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

