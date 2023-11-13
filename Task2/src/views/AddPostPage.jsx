import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../store/slices/postSlice";
import { addPost_Api } from "../api";

function AddPostPage() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const posts = useSelector((state) => state.posts);

  const handleSubmit = async () => {
    console.log(`title is ${title}  body is ${body}`);

    try {
      const addedPost = await addPost_Api({ title, body });
      dispatch(addPost(addedPost));
      console.log(`now posts are ${posts}`);
      setTitle("");
      setBody("");
      navigate("/");
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div className=" h-screen">
      <form>
        <div className="flex flex-col w-full  justify-center items-center">
          <h2 className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
            Add Post
          </h2>
          <input
            className=" focus:outline-sky-500 bg-gray-50 w-72 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <div className="w-full mt-16 mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className=" -mb-1 bg-white rounded-t-lg dark:bg-gray-800">
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                rows="5"
                className=" px-1 pt-1 bg-gray-50   w-96 rounded-lg focus:outline-sky-600  text-sm text-gray-900   dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Your text..."
                required
              ></textarea>
            </div>
            <div className="flex justify-center px-3 py-2 border-t dark:border-gray-600">
              <button
                type="button"
                onClick={handleSubmit}
                className="py-2.5 px-10 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                POST
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddPostPage;
