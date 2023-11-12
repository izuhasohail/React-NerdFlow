import axios from "axios";
import { ADD_POST,DELETE_POST,EDIT_POST,FETCH_POSTS } from "./types";

const API_BASE_URL='https://jsonplaceholder.typicode.com';


export const fetchPosts = () => async (dispatch, getState) => {
    // Check if posts are already in the Redux store
    const { posts } = getState();
    
    if (posts.posts.length === 0) {
      try {
        const response = await axios.get(`${API_BASE_URL}/posts`);
        console.log('response is:', response.data);
        dispatch({
          type: FETCH_POSTS,
          payload: response.data,
        });
      } catch (err) {
        console.log(err);
      }
    }
  };
  


export const addPost=(post)=>async(dispatch)=>{
    try{

        const response= await axios.post(`${API_BASE_URL}/posts`,post);
        dispatch({
            type:ADD_POST,
            payload:response.data
        })

    }
    catch(error){
     console.log(error)
    }
}

export const editPost=(id,_post)=>async(dispatch)=>{
    try{
      console.log('edit post called');
     
      
        const response= await axios.put(`${API_BASE_URL}/posts/${id}`,_post);
        console.log('response.data is this',response.data)
        dispatch({
            type:EDIT_POST,
            payload: response.data
        })
    }
    catch(error){
      console.log(error)
    }
}

export const deletePost=(id)=>async(dispatch)=>{
    try{
        await axios.delete(`${API_BASE_URL}/posts/${id}`);
        dispatch({
            type:DELETE_POST,
            payload:id
        })
    }
    catch(err){
        console.log(err)
    }
}