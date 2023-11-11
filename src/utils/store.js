import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slice/appSlice";
import searchSlice from "./slice/searchSlice";
import chatSlice from "./slice/chatSlice";
import commentsSlice from "./slice/commentsSlice";
import videoSlice from "./slice/videoSlice";

const store = configureStore({
    reducer:{
        app: appSlice,
        search: searchSlice,
        chat: chatSlice,
        comments: commentsSlice,
        video: videoSlice 
    }
    
})

export default store;