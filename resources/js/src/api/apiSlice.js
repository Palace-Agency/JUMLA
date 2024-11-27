import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "/api",
        keepUnusedDataFor: 60 * 60,
    }),
    tagTypes: [
        "HomeContent",
        "AboutusContent",
        "Blogs",
        "Blog",
        "Pixel",
        "ServiceContent",
        "Setting",
    ],
    endpoints: (builder) => ({}),
});
