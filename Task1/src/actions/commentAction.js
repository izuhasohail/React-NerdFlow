import axios from "axios";

const API_BASE_URL='https://jsonplaceholder.typicode.com';

export const FETCH_COMMENTS='FETCH_COMMENTS';

export const fetchComments=(postId)=>async(dispatch)=>{
    try{
        const response=await axios.get(`${API_BASE_URL}/comments?postId=${postId}`);
        dispatch({
            type:FETCH_COMMENTS,
            payload: response.data
        })

    }
    catch(err){
       console.log(err)
    }
}
