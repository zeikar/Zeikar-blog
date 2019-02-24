import Vue from "vue";
import Router from "vue-router";

import Articles from "../components/Articles.vue";
import Profile from "../components/Profile.vue";
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