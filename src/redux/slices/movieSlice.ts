import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {movieService} from "../../services";
import {IMovie, IMovieData} from "../../Interfaces";
import {AxiosError} from "axios";
interface IState {
    movies:IMovieData
    movie:IMovie,
    trigger: boolean
}

const initialState:IState = {
    movies:{
        page:null,
        total_pages:0,
        results:[],
        total_results:0
    },
    movie:{
        overview:'',
        original_title:'',
        vote_average: 0,
        title:'',
        poster_path:'',
        id:0,
        backdrop_path:'',
        genre_ids:[],
        vote_count:0,
        release_date:'',
        popularity:0,
        original_language:'',
        adult:false,
        video:false
    },
    trigger: false
}

const getAll = createAsyncThunk <IMovieData, string> (
    'movieSlice/getAll',
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)
const getMovieById = createAsyncThunk <IMovie, number>(
    'movieSlice/getMovieById',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMovieById(id)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)
const getMovieByGenre = createAsyncThunk<IMovieData, {with_genre:number, page:string}>(
    'movieSlice/getMovieByGenre',
    async ({with_genre, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMovieByGenre(with_genre, page)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)
const searchMovieByTitle = createAsyncThunk<IMovieData, {query:string, page:string}> (
    'movieSlice/searchMovieByTitle',
    async ({query, page}, {rejectWithValue})=> {
        try {
            const {data} = await movieService.searchMovieByTitle(query, page)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)



const movieSlice = createSlice({
    name:'movieSlice',
    initialState,
    reducers:{
    },
    extraReducers:(builder) =>
        builder
            .addCase(getMovieById.fulfilled, (state, action)=> {
                state.trigger = true
                state.movie = action.payload
            })
            .addMatcher(isFulfilled(getAll, getMovieByGenre, searchMovieByTitle), (state, action)=> {
                state.movies = action.payload
                state.trigger = false
            })

})


const {reducer:movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAll,
    getMovieById,
    getMovieByGenre,
    searchMovieByTitle
}

export {movieActions, movieReducer}