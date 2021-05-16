<template>
  <div class="global">
    <h1>global</h1>
    <ArticleList/>
  </div>
</template>

<script>
import ArticleList from "./ArticleList.vue";

export default {
  components: { ArticleList: ArticleList },
};
</script>
<style scoped>
.global {
  color: black;
}
</style>