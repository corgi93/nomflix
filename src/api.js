import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "5e900e9effadd2ba84291c7f1dc5e25d",
    language: "en-US"
  }
});


/* 
tv, movie에 대한 url을 위의 api와 각각의 api object에서 즉시 실행하게하면
매우 clean하게 짤 수 있다!!!!
*/
export const movieApi = {
    nowPlaying : ()=> api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular : () => api.get("movie/popular"),
    // movie 디테일
    movieDetail : (id) => api.get(`movie/${id}`, {
        params : {
            append_to_response : "videos"
        }
    }),
    search : term => api.get("search/movie", {
        params :{
            query : encodeURIComponent(term)
        }
    })
};

export const tvApi = {
    topRated : () => api.get("tv/top"),
    popular : ()=> api.get("tv/popular"),
    airingToday : () => api.get("tv/airing_today"),
    // tv 디테일 -  append_to_response를 이용해 img나 video를 가져오기
    showDetail: (id) => api.get(`tv/${id}`, {
        params: {
            append_to_response : "videos"
        }
    }), 
    
    search : term => api.get("search/tv", {
        params: {
            query : encodeURIComponent(term)
        }
    })
}

export default api;