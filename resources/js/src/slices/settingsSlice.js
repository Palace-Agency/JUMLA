import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const seetingsAdapter = createEntityAdapter({
    selectId: (setting) => setting.id,
});

const initialState = seetingsAdapter.getInitialState();

export const settingsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getLanguages: builder.query({
            query: () => `/languages`,
            transformResponse: (responseData) => {
                const languages = responseData.languages;
                return seetingsAdapter.setAll(initialState, languages);
            },
            providesTags: (result, error, arg) => [
                { type: "Languages", id: "LIST" },
                ...result.ids.map((id) => ({ type: "Languages", id })),
            ],
        }),
        getCountries: builder.query({
            query: () => `/countries`,
            transformResponse: (responseData) => {
                const countries = responseData.countries;
                return seetingsAdapter.setAll(initialState, countries);
            },
            providesTags: (result, error, arg) => [
                { type: "Countries", id: "LIST" },
                ...result.ids.map((id) => ({ type: "Countries", id })),
            ],
        }),
        getCurrencies: builder.query({
            query: () => `/currencies`,
            transformResponse: (responseData) => {
                const currencies = responseData.currencies;
                return seetingsAdapter.setAll(initialState, currencies);
            },
            providesTags: (result, error, arg) => [
                { type: "Currencies", id: "LIST" },
                ...result.ids.map((id) => ({ type: "Currencies", id })),
            ],
        }),
    }),
});

export const {
    useGetLanguagesQuery,
    useGetCountriesQuery,
    useGetCurrenciesQuery,
} = settingsApiSlice;
