
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPost } from '../actions/postActions'
import { useNavigate } from 'react-router-dom';
function AddPost() {
    const dispatch=useDispatch();
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const navigate=useNavigate()

    const posts=useSelector((state)=>state.posts)

    const handleSubmit=()=>{
        console.log(`title is ${title}  body is ${body}`)
        
       dispatch(addPost({title,body}));
        console.log(`now posts are ${posts}`)
        setTitle('');
        setBody('');
        navigate('/')
    }

  return (
    
    <div style={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
    }}>
      <h2>Add Post</h2>
      <input
        type='text'
        placeholder='Title'
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
        placeholder='Body'
        value={body}
        onChange={(e)=>setBody(e.target.value)}
      />

      <button onClick={handleSubmit} style={{
        marginTop:50,
        backgroundColor:'lightblue',
        width:'30%'
      }}>POST</button>

    </div>
  )
}

export default AddPost
