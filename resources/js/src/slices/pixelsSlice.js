import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const pixelAdapter = createEntityAdapter({
    selectId: (pixel) => pixel.id,
});

const initialState = pixelAdapter.getInitialState();

export const pixelApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPixel: builder.query({
            query: () => `/pixels`,
            transformResponse: (responseData) => {
                return pixelAdapter.setAll(initialState, responseData.pixels);
            },
            providesTags: (result, error, arg) => [
                { type: "Pixel", id: "LIST" },
                ...result.ids.map((id) => ({ type: "Pixel", id })),
            ],
        }),
    }),
});

export const { useGetPixelQuery } = pixelApiSlice;
