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
    props: ["articlePersonal", "favoritedPersonal"],
    mounted() {
        // this.fetchNewArticle();
        this.$root.$refs.ArticleList = this;
        // this.fetFavoritedArticle();
    },
    computed: {
        getArticle() {
            return this.$store.state.home.article;
        },
    },
    methods: {
        fetchNewArticle() {
            debugger
            this.$store.dispatch("getArticle", this.articlePersonal);
        },
        fetFavoritedArticle(){
            debugger;
            this.$store.dispatch("getArticle", this.favoritedPersonal);
        }
    },
};
</script>

<style scoped>
</style>