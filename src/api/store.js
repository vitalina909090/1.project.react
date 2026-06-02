import counterReducer from "../features/counter/counterSlice";
import postsReducer from "../features/posts/PostsSlice";
import usersReducer from "../features/users/UsersSlice";
import { todoApi } from "./todoApi";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
        users: usersReducer,
        [todoApi.reducerPath]: todoApi.reducer
    },
    middleware: (getDefault) => getDefault().concat(todoApi.middleware)
})

export default store;