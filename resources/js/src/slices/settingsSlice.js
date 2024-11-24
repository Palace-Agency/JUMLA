import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const settingAdapter = createEntityAdapter({
    selectId: (setting) => setting.id,
});

const initialState = settingAdapter.getInitialState();

export const settingApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getSetting: builder.query({
            query: () => `/system-settings`,
            transformResponse: (responseData) => {
                return settingAdapter.setAll(initialState, responseData);
            },
            providesTags: (result, error, arg) => [
                { type: "Setting", id: "LIST" },
                ...result.ids.map((id) => ({ type: "Setting", id })),
            ],
        }),
    }),
});

export const { useGetSettingQuery } = settingApiSlice;
