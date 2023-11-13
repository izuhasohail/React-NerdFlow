import { Provider } from "react-redux";
import store from "./store/store.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage.jsx";
import AddPostPage from "./views/AddPostPage.jsx";
import PostDetailPage from "./views/PostDetailPage.jsx";
import EditPostPage from "./views/EditPostPage.jsx";
import "./index.css";
function App() {
  return (
    <Provider store={store}>
      <div className=" bg-slate-100 flex flex-col content-center items-center">
        <h1 className=" text-3xl p-10 font-mono font-bold text-cyan-950">
          CRUD with JSONPlaceholder API
        </h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/post/:id" element={<PostDetailPage />} />
            <Route path="/edit/:id" element={<EditPostPage />} />
            <Route path="/add" element={<AddPostPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
