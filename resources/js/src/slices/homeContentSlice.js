import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const homeContentAdapter = createEntityAdapter({
    selectId: (homeContent) => homeContent.id,
});

const initialState = homeContentAdapter.getInitialState();

export const homeContentApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getHomeContent: builder.query({
            query: () => `/home-content`,
            transformResponse: (responseData) => {
                return homeContentAdapter.setAll(initialState, responseData);
            },
            providesTags: (result, error, arg) => [
                { type: "HomeContent", id: "LIST" },
                ...result.ids.map((id) => ({ type: "HomeContent", id })),
            ],
        }),
    }),
});

export const { useGetHomeContentQuery } = homeContentApiSlice;
