import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = 'https://randomuser.me/api/?results=5'

const initialState = {
    users: [],
    isLoading: false,
    error: null
}

export const getUsers = createAsyncThunk('users/getUsers', async()=>{
    try{
        const jsonData = await axios.get(url)
        return jsonData.data

    } catch(err){
        return err.message}

})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        array: ()=>{
            "kjj"
        }
    },
    extraReducers(builder){
        builder

        .addCase(getUsers.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(getUsers.fulfilled, (state, action)=>{
            console.log(action)
            state.users = action.payload.results
            state.isLoading = false
            console.log(state.users)
        })
        .addCase(getUsers.rejected, (state, action)=>{
            state.isLoading = false
            state.error = action.error.message
        })

       
        

    }
})
export const {array} = usersSlice.actions

export default usersSlice.reducer