import {configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slices";
import {genreReducer} from "./slices/genreSlice";
import {authReducer} from "./slices/authSlice";

const store = configureStore({
    reducer:{
        movie: movieReducer,
        genre:genreReducer,
        auth: authReducer
    }
})

export {store}