import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const aboutusContentAdapter = createEntityAdapter({
    selectId: (aboutusContent) => aboutusContent.id,
});

const initialState = aboutusContentAdapter.getInitialState();

export const aboutusContentApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAboutusContent: builder.query({
            query: () => `/aboutus-content`,
            transformResponse: (responseData) => {
                return aboutusContentAdapter.setAll(initialState, responseData);
            },
            providesTags: (result, error, arg) => [
                { type: "AboutusContent", id: "LIST" },
                ...result.ids.map((id) => ({ type: "AboutusContent", id })),
            ],
        }),
    }),
});

export const { useGetAboutusContentQuery } = aboutusContentApiSlice;
