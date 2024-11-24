import { apiSlice } from "../api/apiSlice";

export const contactApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        contact: builder.mutation({
            query: (data) => ({
                url: "/contacts",
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const { useContactMutation } = contactApiSlice;
