<template>
  <div class="the-tags">
    <h4>Popular Tags</h4>
    <div class="tag-list">
      <span
        class="badge badge-warning"
        v-for="(item, index) in getInforTag"
        :key="item + index"
        @click="tagsHandle"
        >{{ item }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tag",
  created() {
    this.$store.dispatch("getTags");
  },
  computed: {
    getInforTag() {
      return this.$store.state.home["tags"];
    },
  },
  methods:{
    tagsHandle(){
      alert("hihi")
    }
  }
};
</script>

<style scoped> 
.badge{
margin-left: 5px;
}
</style>