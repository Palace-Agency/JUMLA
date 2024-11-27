import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const blogAdapter = createEntityAdapter({
    selectId: (blog) => blog.id,
});

const initialState = blogAdapter.getInitialState();

export const blogApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getLatestBlog: builder.query({
            query: () => `/get-blogs`,
            transformResponse: (responseData) => {
                return blogAdapter.setAll(initialState, responseData.blogs);
            },
            providesTags: (result, error, arg) => [
                { type: "Blog", id: "LIST" },
                ...result.ids.map((id) => ({ type: "Blog", id })),
            ],
        }),
        getAllBlogs: builder.query({
            query: () => `/get-Allblogs`,
            transformResponse: (responseData) => {
                return blogAdapter.setAll(initialState, responseData.blogs);
            },
            providesTags: (result, error, arg) => [
                { type: "Blogs", id: "LIST" },
                ...result.ids.map((id) => ({ type: "Blogs", id })),
            ],
        }),
        getBlog: builder.mutation({
            query: ({ slug }) => ({
                url: "/get-blog",
                method: "POST",
                body: { slug },
            }),
            transformResponse: (response) => {
                const { blog, relatedBlogs } = response;
                return { blog, relatedBlogs };
            },
        }),
    }),
});

export const {
    useGetLatestBlogQuery,
    useGetAllBlogsQuery,
    useGetBlogMutation,
} = blogApiSlice;
