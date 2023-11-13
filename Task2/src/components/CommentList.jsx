

import React from 'react';

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
