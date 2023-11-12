import { Provider } from "react-redux";
import store from "./store/store.js";
import PostDetail from "./components/PostDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost";
import DeletePost from "./components/DeletePost";
import LandingPage from "./views/LandingPage.jsx";
import './index.css'
function App() {
  return (
    <Provider store={store}>
      <div className=" bg-slate-100 flex flex-col content-center items-center">
        <h1 className=" text-3xl p-10 font-mono font-bold text-cyan-950">CRUD with JSONPlaceholder API</h1>
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
