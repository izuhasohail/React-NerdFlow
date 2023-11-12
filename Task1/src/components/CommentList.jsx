import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';


const fetchCommentsByPostId=async(postId)=>{
  const response= await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  )
  return response.data
}

function CommentList({comments}) {

  

  return (
    <div className='h-full '>
    <ul className='flex flex-col p-10'>
        {
         comments.map((comment)=>(
            <li className=' list-disc p-2' key={comment.id}>
                {comment.body}
            </li>
         ))
        }
    </ul>
    </div>
  )
}

export default CommentList
