import { configureStore } from "@reduxjs/toolkit";

import postSlice from "./slices/postSlice";
import commentSlice from "./slices/commentSlice";

const store=configureStore({
    reducer:{
        posts:postSlice,
        comments:commentSlice
    }
});

export default store