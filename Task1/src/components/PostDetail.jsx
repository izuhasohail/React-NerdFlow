import React from 'react'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetchComments } from '../actions/commentAction'
import CommentList from './CommentList'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { deletePost } from '../actions/postActions'
import axios from 'axios'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'


const fetchPostById=async(postId)=>{
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)

  return response.data;
}


function PostDetail() {
  const dispatch=useDispatch();
  const {id}=useParams();
  

  const post=useSelector((state)=>{
    console.log('State is',state)
    return state.posts.posts.find((post)=>post.id===parseInt(id));
  })

  const comments=useSelector((state)=> state.comments.comments);

  useEffect(()=>{
      dispatch(fetchComments(id))
  },[dispatch,id])

     const handleDelete=async()=>{
       await dispatch(deletePost(parseInt(id)));
       console.log('DELETED!!!')
       alert('Post Deleted!')
       navigate('/')
   }

 

  return (
    <div className=' h-screen w-full'>
    {
      post? (
      <div className=' flex flex-col justify-center items-center'>
        <h1 className=' font-bold text-center  text-cyan-800'>{post.title}</h1>
        <p className=' text-left p-3'>{post.body}</p>
        <h3 className=' font-bold font-mono text-lg'>Comments:</h3>
        <CommentList comments={comments}/>
        
        <Link to={`/edit/${post.id}`}
        className=' flex flex-col justify-center items-center rounded-lg w-24  h-11 bg-purple-700 hover:bg-purple-800 text-white focus:outline-none focus:ring-purple-300 font-medium dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'>Edit Post</Link>
        <br/>
        <Link to="/"
        className= ' text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>Back to Post List</Link>
        <br/>
        <button onClick={handleDelete} type="button" className="  focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>

      </div>
      ):(
        <div>No post found</div>
      )
    }
   
      
    </div>
  )
}

export default PostDetail
