import Vue from "vue";
import Router from "vue-router";

import Home from "../components/Home.vue";
import Profile from "../components/Profile.vue";
import Articles from "../components/Articles.vue";
import Post from "../components/Post.vue";
import Editor from "../components/Editor.vue";
import PageNotFound from "../components/PageNotFound.vue";

Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [{
            path: "/",
            name: "Zeikar's 기술 블로그",
            component: Home
        },
        {
            path: "/about",
            name: "About me",
            component: Profile
        },
        {
            path: "/post",
            name: "블로그 글",
            component: Articles
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
    // 블로그 글로 타이틀 설정
    if (to.params.postTitle !== undefined) {
        document.title = to.params.postTitle;
    } else {
        document.title = to.name;
    }
    next();
});

export default router;