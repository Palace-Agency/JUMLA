import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import { userSlice } from "../slices/userSlice";
import { authApiSlice } from "../slices/authApiSlice";
import { profileSlice } from "../slices/profileSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        [authApiSlice.reducerPath]: authApiSlice.reducer,
        [profileSlice.reducerPath]: profileSlice.reducer,
        user: userSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            apiSlice.middleware,
            authApiSlice.middleware,
            profileSlice.middleware
        ),
    devTools: true,
});
