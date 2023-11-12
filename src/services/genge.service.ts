import {axiosService} from "./axios.service";
import {baseURL} from "../constants";


const genreService = {
    getAll:()=> axiosService.get(`${baseURL}/genre/movie/list`)
}

export {genreService}