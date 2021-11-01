import {
    createStore
} from "vuex";
import axios from "axios";

const store = createStore({
    state: {
        discoverUrl: "https://api.themoviedb.org/3/discover/movie",
        baseImageUrl: "https://image.tmdb.org/t/p/w500",
        apiKey: "24eddd44b256251f253d6d5c6dc7fea0",
        pageNo: 1,
        filmsData:""
    },
    mutations: {
        getMoviesbyYear(state,years){
            axios
                .get(
                    `${state.discoverUrl}?api_key=${state.apiKey}&primary_release_date.gte=${years.year1}-01-01&primary_release_date.lte=${years.year2}-12-31&page=${state.pageNo}`
                )
                .then((res) => {
                    console.log(res.data);
                    state.filmsData=res.data.results;
                    console.log("state.filmsData",state.filmsData)
                })
                .catch((err) => console.log(err));
        },

    },

})

export default store;