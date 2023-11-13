import { createSlice } from "@reduxjs/toolkit";

const commentSlice=createSlice({
    name:"comments",
    initialState:[],
    reducers:{
        fetchComments(state,action){
            return action.payload;
        }
    }
});

export default commentSlice.reducer;
export const {fetchComments}=commentSlice.actions