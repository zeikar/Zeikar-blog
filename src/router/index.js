import Vue from "vue";
import Router from "vue-router";

import Articles from "../components/Articles.vue";
import Profile from "../components/Profile.vue";
import Post from "../components/Post.vue";
import Editor from "../components/Editor.vue";
import PageNotFound from "../components/PageNotFound.vue";

Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [{
            path: "/",
            name: "Zeikar's 기술 블로그",
            component: Articles
        },
        {
            path: "/about",
            name: "About me",
            component: Profile
        },
        {
            path: "/post/:postTitle",
            name: "블로그 글 보기",
            component: Post,
            props: true
        },        
        {
            path: "/editor",
            name: "블로그 글 쓰기",
            component: Editor
        },
        {
            path: "/editor/:postId",
            name: "블로그 글 수정",
            component: Editor,
            props: true
        },
        {
            path: "*",
            name: "404 Not Found",
            component: PageNotFound
        }
    ]
});
        
router.beforeEach((to, from, next) => {
    document.title = to.name;
    next();
});

export default router;