import {axiosService} from "./axios.service";
import {baseURL} from "../constants";


const movieService = {
    getAll:(page='1')=> axiosService.get(`${baseURL}/discover/movie`, {params:{page}}),
    getMovieById:(id:number)=> axiosService.get(`${baseURL}/movie/${id}`),
    getMovieByGenre:(with_genres:number, page='1')=> axiosService.get(`${baseURL}/discover/movie?with_genres=${with_genres}`, {params:{page}}),
    searchMovieByTitle:(query='', page='1')=> axiosService.get(`${baseURL}/search/movie`, {params:{query, page}})
}

export {movieService}