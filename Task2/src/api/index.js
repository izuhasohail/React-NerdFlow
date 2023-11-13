
import axios from "axios";
const API_BASE_URL='https://jsonplaceholder.typicode.com';




export const fetchPosts_Api = async(posts) => {
    // Check if posts are already in the Redux store
    
    if (posts.length === 0) {
      try {
        const response = await axios.get(`${API_BASE_URL}/posts`);
    
        return response.data;
      } catch (err) {
        console.log(err);
      }
    }
  };



  export const addPost_Api=async(post)=>{
    try{

        const response= await axios.post(`${API_BASE_URL}/posts`,post);
  
        return response.data;

    }
    catch(error){
     console.log(error)
    }
  }



export const fetchComments_Api=async(postId)=>{
    try{
        const response=await axios.get(`${API_BASE_URL}/comments?postId=${postId}`);
        return response.data;

    }
    catch(err){
       console.log(err)
    }
}