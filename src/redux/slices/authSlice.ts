import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authService} from "../../services";
import {IAuthInterface} from "../../Interfaces";
import {AxiosError} from "axios";


interface IState {
    user: IAuthInterface
}
const initialState:IState = {
    user:{
        name:'',
        username:'',
        id:0,
        iso_3166_1:'',
        include_adult:false,
        iso_639_1:'',
    }
}

const getAll = createAsyncThunk(
    'authSlice/getAll',
    async (_, {rejectWithValue})=> {
        try {
            const {data} = await authService.getAll()
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const authSlice = createSlice({
   name: 'authSlice',
    initialState,
    reducers:{
    },
    extraReducers:(builder)=>
        builder.addCase(getAll.fulfilled, (state, action)=> {
            state.user = action.payload
        })
})

const {reducer:authReducer, actions} = authSlice;

const authActions = {
    ...actions,
    getAll
}

export {
    authActions, authReducer
}