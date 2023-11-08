import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slice/appSlice";
import searchSlice from "./slice/searchSlice";
import chatSlice from "./slice/chatSlice";

const store = configureStore({
    reducer:{
        app: appSlice,
        search: searchSlice,
        chat: chatSlice
    }
    
})

export default store;