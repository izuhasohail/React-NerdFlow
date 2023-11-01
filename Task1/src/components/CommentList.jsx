import React from 'react'

function CommentList({comments}) {
  return (
    <ul>
        {
         comments.map((comment)=>(
            <li key={comment.id}>
                {comment.body}
            </li>
         ))
        }
    </ul>
  )
}

export default CommentList
