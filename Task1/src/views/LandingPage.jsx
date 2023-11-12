import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import PostList from '../components/PostList'; // Create a PostList component to display the list of posts.
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
function LandingPage() {
   const dispatch = useDispatch();
   const posts = useSelector((state) => state.posts);
   console.log(posts)
  const navigate=useNavigate()
 

   useEffect(() => {
     console.log('useEffect called')
     // Fetch all posts and their comments
     dispatch(fetchPosts());
   }, [dispatch]);

  return (
    <div className='   bg-gray-200 flex flex-col content-center items-centre  '>
    <div className='flex justify-between  items-center py-5 bg-slate-100'>
    <h1 className=' text-2xl font-semibold font-mono text-slate-700'>All Posts and Comments</h1>
      <button className='bg-blue-500 font-bold py-1.5  hover:bg-blue-700 text-white px-2 rounded'
      onClick={()=>navigate('./add')}>Add Post</button>
    </div>
      
    <PostList posts={posts.posts} />
    </div>
  );
}

export default LandingPage;
