import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const destinationsAdapter = createEntityAdapter({
    selectId: (destination) => destination.id,
});

const initialState = destinationsAdapter.getInitialState();

export const destinationsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getDestinations: builder.query({
            query: (search) => `/destinations?search=${search}`,
            transformResponse: (responseData) => {
                return destinationsAdapter.setAll(initialState, responseData);
            },
            providesTags: (result, error, arg) => [
                { type: "Destinations", id: "LIST" },
                ...result.ids.map((id) => ({ type: "Destinations", id })),
            ],
        }),
    }),
});

export const { useGetDestinationsQuery } = destinationsApiSlice;
