import { createSlice } from "@reduxjs/toolkit";

const postSlice=createSlice({
    name:"posts",
    initialState:[],
    reducers:{
        fetchPosts(state,action){
          return action.payload
        },

        addPost(state,action){
             return [...state,action.payload]
        },

        editPost(state,action){
            return state.map((post)=>
            (post.id===action.payload.id)?action.payload:post)
        },

        deletePost(state,action){
            return state.filter((post)=>post.id!==action.payload)
        }

    },
});

export default postSlice.reducer;
export const {addPost,editPost,deletePost,fetchPosts}=postSlice.actions