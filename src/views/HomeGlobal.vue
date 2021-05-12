<template>
  <div class="global">
    <h1>global</h1>
    <Articles/>
  </div>
</template>

<script>
import Article from "./Article.vue";

export default {
  components: { Articles: Article },
};
</script>
<style scoped>
.global {
  color: black;
}
</style>