import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostList from "../components/PostList"; 
import { useNavigate } from "react-router-dom";
import { fetchPosts } from "../store/slices/postSlice";
import { fetchPosts_Api } from "../api";

function HomePage() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postData = await fetchPosts_Api(posts);
        dispatch(fetchPosts(postData));
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="   bg-gray-200 flex flex-col content-center items-centre  ">
      <div className="flex justify-between  items-center py-5 bg-slate-100">
        <h1 className=" text-2xl font-semibold font-mono text-slate-700">
          All Posts and Comments
        </h1>
        <button
          className="bg-blue-500 font-bold py-1.5  hover:bg-blue-700 text-white px-2 rounded"
          onClick={() => navigate("./add")}
        >
          Add Post
        </button>
      </div>

      <PostList posts={posts} />
    </div>
  );
}

export default HomePage;
