import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import userReducer from "./slices/userSlice";
import newsReducer from "./slices/newsSlice"
export const store = configureStore({
    reducer:{
        theme: themeReducer,
        user: userReducer,
        news: newsReducer,
    }
})