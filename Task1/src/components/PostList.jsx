import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions/postActions';

function PostList({posts}) {



  return (
    <ul className='p-10'>
      {posts.map((post) => (
        <li className='p-6 font-semibold text-zinc-500 list-decimal' key={post.id}>
          <Link to={`/post/${post.id}`}>
            <h3 className='font-semibold hover:bg-gray-400 hover:text-slate-900'> {post.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default PostList;
