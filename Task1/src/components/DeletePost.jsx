import React from 'react'
import { deletePost } from '../actions/postActions'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
function DeletePost() {
     const navigate=useNavigate()
    const dispatch=useDispatch();
    const {id}=useParams()

    const handleDelete=async()=>{
        await dispatch(deletePost(parseInt(id)));
        console.log('DELETED!!!')
        navigate('/')
    }


  return (
    <button onClick={handleDelete} style={{color:'red'}}>
        Delete
    </button>
  )
}

export default DeletePost
