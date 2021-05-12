
<template>
  <paginate
    v-model="page"
    :page-count="20"
    :page-range="3"
    :margin-pages="2"
    :click-handler="clickCallback"
    :prev-text="'Prev'"
    :next-text="'Next'"
    :container-class="'pagination'"
    :page-class="'page-item'"
  >
  </paginate>
</template>

<script>

export default {
  data() {
    return {
        page:1
    };
  },
  methods: {
    clickCallback(pageNum) {
      console.log( this.$store.state.home.article);
    },
  },
};
</script>

<style>
.pagination {
  /* margin-left: 5px; */
  padding-left: 40%;
}
.page-item {
  margin-left: 15px;
}
</style>