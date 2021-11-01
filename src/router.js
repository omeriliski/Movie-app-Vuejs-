import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/pages/Home";
import MoviesPage from "@/pages/Movies";
import SeriesPage from "@/pages/Series";
import Contact from "@/pages/Contact";

const routes=[
    {
        path:"/",
        component:HomePage
    },
    {
        path:"/movies",
        component:MoviesPage
    },
    {
        path:"/series",
        component:SeriesPage
    },
    {
        path:"/contact",
        component:Contact
    }
]

const router=createRouter({
    routes,
    history:createWebHistory()
});

export default router;
