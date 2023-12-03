import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService} from "../../services";
import {IGenreData} from "../../Interfaces";
import {AxiosError} from "axios";

interface IState {
    genres:IGenreData
}

const initialState:IState = {
    genres:{
        genres:[]
    }
}

const getAll = createAsyncThunk(
    'genreSlice/getAll',
    async (_, {rejectWithValue})=> {
        try {
            const {data} = await genreService.getAll()
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder.addCase(getAll.fulfilled, (state, action) => {
            state.genres = action.payload;
        }),
});
const {reducer:genreReducer, actions} = genreSlice

const genreActions = {
    ...actions,
    getAll
}

export {
    genreActions, genreReducer
}