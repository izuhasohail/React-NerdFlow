import React from "react";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { editPost } from "../actions/postActions";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
    const navigate=useNavigate()
     const {id}=useParams();
    const dispatch=useDispatch();
    const post=useSelector((state)=>
    {
      return state.posts.posts.find(p=>p.id===parseInt(id))
    })


    const [title,setTitle]=useState(post.title);
    const [body,setBody]=useState(post.body);

    const handleSubmit=async()=>{
        await dispatch(editPost(post.id,{title,body}));
        navigate('/')
    }
  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
    }}>
    <h2>Edit Post</h2>
    <input
        type="text"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        style={{
          width:'30%',
          padding:'10px'
        }}
    />
    <textarea
        style={{
        marginTop:'50px',
        width:'60%',
        height:'50vh'
        }}
        value={body}
        onChange={(e)=>setBody(e.target.value)}
    />
    <button onClick={handleSubmit}
    style={{
      marginTop:50,
      backgroundColor:'lightblue',
      width:'30%'
    }}>Save Changes</button>
      
    </div>
  )
}

export default EditPost
