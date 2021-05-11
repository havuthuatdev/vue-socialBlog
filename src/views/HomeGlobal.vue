<template>
  <div class="global" :v-if="isAuthenticated">
    <h1>global</h1>
    <Articles :limit="7"/>
  </div>
</template>

<script>
import Article from './Article.vue';

export default {
  components: { Articles: Article},
};
</script>
<style scoped>
.global{
    color: black;
}
</style>