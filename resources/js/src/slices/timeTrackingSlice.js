import { apiSlice } from "../api/apiSlice";

export const timeTrackingApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        timeTracking: builder.mutation({
            query: (data) => ({
                url: "/time-tracking",
                method: "POST",
                body: data,
            }),
        }),
        blogTimeTracking: builder.mutation({
            query: (data) => ({
                url: "/blog-tracking",
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const { useTimeTrackingMutation, useBlogTimeTrackingMutation } =
    timeTrackingApiSlice;
