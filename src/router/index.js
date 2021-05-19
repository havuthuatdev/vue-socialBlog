import Vue from "vue";
import Router from "vue-router";
import TheAppContent from "@/views/TheAppContent.vue";
import HomeGlobal from "@/views/HomeGlobal.vue";
import HomeFeed from "@/views/HomeFeed.vue";
import TheProfile from "@/views/TheProfile.vue";
import ProfileFavorited from "@/views/ProfileFavorited.vue";
import ArticlePersonal from "@/views/ArticlePersonal.vue";
import ProfileArticle from "@/views/ProfileArticle.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            component: TheAppContent,
            name: "TheAppContent",
            children: [
                {
                    path: "/",
                    component: HomeGlobal
                },
                {
                    path: "/feed",
                    component: HomeFeed,
                    meta: { requiresAuth: true }
                }
            ]
        },
        {
            path: "/register",
            name: "register",
            component: () => import("@/views/Register.vue")
        },
        {
            path: "/login",
            name: "login",
            component: () => import("@/views/Login.vue")
        },
        {
            path: "/editor",
            name: "editor_new",
            component: () => import("@/views/ArticleCreate.vue")
        },
        // {
        //   path: "/editor/:article-slug",
        //   name: "editor_edit",
        //   component: () => import("@/views/ArticleEdit.vue")
        // },
        // {
        //   path: "/article/:article-slug",
        //   name: "article",
        //   component: () => import("@/views/Article.vue")
        // },
        // {
        //   path: '/profile/:username',
        //   name: 'profile',
        //   component: () => import("@/views/Profile.vue")
        // },
        {
            path: "/profile/:username",
            component: TheProfile,
            name: "ProfileUser",
            children: [
                {
                    path: "",
                    component: ArticlePersonal,
                    name: "ArticlePersonal"
                },
                {
                    path: "/favorited/:username",
                    component: ProfileFavorited,
                    name: "ProfileFavorited",
                    // meta: { requiresAuth: true }
                }
            ]
        },
        {
            path: "/articles/:slug",
            name: "ProfileArticle",
            component: ProfileArticle,
            meta: { requiresAuth: true }
        },
        {
            path: "/setting",
            name: "setting",
            component: () => import("@/views/Setting.vue"),
            meta: { requiresAuth: true }
        }
    ]
});
