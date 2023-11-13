import React from "react";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { editPost } from "../store/slices/postSlice";
import { useNavigate, useParams } from "react-router-dom";


function EditPostPage() {
    const navigate=useNavigate()
     const {id}=useParams();
     const dispatch=useDispatch();

     const post=useSelector((state)=>
     {
       return state.posts.find(p=>p.id===parseInt(id))
     })

   
    console.log('Post editing: ',post)


    const [title,setTitle]=useState(post.title);
    const [body,setBody]=useState(post.body);


     const handleSubmit=()=>{
        
         dispatch(editPost({id:parseInt(id),title,body}));
         navigate('/')
     }


  return (
    <div 
    className=" -mt-16 h-screen flex flex-col justify-center items-center"
    >
    <h2 className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Edit Post</h2>
    <input
        type="text"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        className="focus:outline-sky-500 bg-gray-50  w-80 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
    <textarea
        rows={8}
        className=" mt-8 px-4 pt-4 bg-gray-50   w-96 rounded-lg focus:outline-sky-600  text-sm text-gray-900   dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
        value={body}
        onChange={(e)=>setBody(e.target.value)}
    />
    <button onClick={handleSubmit}
     className=" mt-10 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Save Changes</button>
      
    </div>
  )
}

export default EditPostPage
