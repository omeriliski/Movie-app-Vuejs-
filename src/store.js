import { 
    createStore
} from "vuex";
import axios from "axios";

const store = createStore({
    state: {
        apiKey: "24eddd44b256251f253d6d5c6dc7fea0",
        searchUrl : "https://api.themoviedb.org/3/search/movie",
        discoverUrl: "https://api.themoviedb.org/3/discover/movie",
        baseImageUrl: "https://image.tmdb.org/t/p/w500",
        popularActorsUrl:"https://api.themoviedb.org/3/person/popular",
        videoUrl:"https://api.themoviedb.org/3/movie",
        currentFilmData:"",
        searchText:"",
        pageNo: 1,
        filmsData: "",
        popularActorsData:""
    },
    mutations: {
        searchMoviebyText(state) {  
            axios.get(state.searchUrl, {
                    params: {
                        api_key: state.apiKey,
                        page: state.pageNo,
                        query: state.searchText || "a"
                    }
                })
                .then((res) => {
                    console.log("searched Text", state.searchText);
                    console.log("Searched Data:",res.data);
                    state.filmsData = res.data.results;
                })
                .catch((err) => console.log(err))
        },
        getMoviesbyYear(state, years) {
            axios
                .get(
                    `${state.discoverUrl}?api_key=${state.apiKey}&primary_release_date.gte=${years.year1}-01-01&primary_release_date.lte=${years.year2}-12-31&page=${state.pageNo}`
                )
                .then((res) => {
                    console.log(res.data);
                    state.filmsData = res.data.results;
                    console.log("state.filmsData", state.filmsData)
                })
                .catch((err) => console.log(err));
        },
        getPopularActors(state){
            axios.get(`${state.popularActorsUrl}?api_key=${state.apiKey}&page=1`)
            .then((res) => {
                state.popularActorsData=res.data.results;
              console.log("popular Actors",res.data.results)
            })  
            .catch((err) => console.log(err))
          },

          getMoviesbyPerson(state,personId){
            axios.get(`${state.discoverUrl}?api_key=${state.apiKey}&with_people=${personId}&page=${state.pageNo}`)
            .then((res) => {
              console.log("PersonMovies:",res);
              state.filmsData=res.data.results;
            })  
            .catch((err) => console.log(err))
          },

          watch(state,filmData){
            state.currentFilmData=filmData;
            axios.get(`${state.videoUrl}/${filmData.id}/videos?api_key=${state.apiKey}`)
            .then((res) => {
              console.log("watch",res)
              console.log("filmaData",filmData);
            //   setModalFlag(true);
          })  
          .catch((err) => console.log(err));
        //   setModalFlag(false) ;
        }
    },

})

export default store;