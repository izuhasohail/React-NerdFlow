import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import PostList from './PostList'; // Create a PostList component to display the list of posts.
import { Link } from 'react-router-dom';
function LandingPage() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  console.log(posts)

  useEffect(() => {
    console.log('useEffect called')
    // Fetch all posts and their comments
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h1>All Posts and Comments</h1>
      
      <Link to={`/add`} style={{
        backgroundColor:'lightblue'
      }}>Add Post</Link>
      <PostList posts={posts.posts} />
    </div>
  );
}

export default LandingPage;
