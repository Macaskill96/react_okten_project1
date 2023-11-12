import {axiosService} from "./axios.service";
import {baseURL} from "../constants";

const account_id = 19447345;

const authService = {
    getAll:()=> axiosService.get(`${baseURL}/account/${account_id}`)
}

export {authService}