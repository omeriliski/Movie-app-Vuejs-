import {
    createStore
} from "vuex";

const store = createStore({
    state: {
        discoverUrl: "https://api.themoviedb.org/3/discover/movie",
        apiKey: "24eddd44b256251f253d6d5c6dc7fea0",
        year1: 2010,
        year2: 2020,
        pageNo: 1,
    }
})

export default store;