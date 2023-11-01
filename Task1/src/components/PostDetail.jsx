import React from 'react'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetchComments } from '../actions/commentAction'
import CommentList from './CommentList'
import { Link, useParams } from 'react-router-dom'
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


  return (
    <div>
    {
      post? (
      <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <h3>Comments:</h3>
        <CommentList comments={comments}/>
        <Link to={`/edit/${post.id}`}>Edit Post</Link>
        <br/>
        <Link to="/">Back to Post List</Link>
        <br/>
        <Link to={`/delete/${post.id}`}>Delete Post</Link>

      </div>
      ):(
        <div>No post founc</div>
      )
    }
   
      
    </div>
  )
}

export default PostDetail
