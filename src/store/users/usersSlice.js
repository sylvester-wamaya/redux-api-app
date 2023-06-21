import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    isLoading: false,
    error: null
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    },
    extraReducers:{
        
    }
})

export default usersSlice.reducer