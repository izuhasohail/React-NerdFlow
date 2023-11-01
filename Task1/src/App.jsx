import { useState } from "react";
import { Provider } from "react-redux";
import store from "./store";
import PostDetail from "./components/PostDetail";
import "./App.css";
import { Router } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost";
import DeletePost from "./components/DeletePost";
import PostList from "./components/PostList";
import LandingPage from "./components/LandingPage";
function App() {
  
  return (
    <Provider store={store}>
      <div className="App">
        <h1>CRUD with JSONPlaceholder API</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="/add" element={<AddPost />} />
            <Route path="/delete/:id" element={<DeletePost />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
