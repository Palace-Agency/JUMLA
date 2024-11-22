import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken, setCredentials, setError } from "./userSlice";

export const profileSlice = createApi({
    reducerPath: "profileApi",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BACKEND_URL + "/api",
        prepareHeaders: (headers) => {
            const token = getToken();
            console.log(token);
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            headers.set("Content-Type", "application/json");

            return headers;
        },
    }),
    endpoints: (builder) => ({
        personalInformation: builder.mutation({
            query: (data) => ({
                url: "/personal-informations",
                method: "POST",
                body: data,
            }),
            transformResponse: (response) => {
                const { user, token, message } = response;
                return { user, token, message };
            },
            onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setCredentials(data));
                } catch (error) {
                    dispatch(setError("Something went wrong"));
                }
            },
        }),
        preference: builder.mutation({
            query: (data) => ({
                url: "/preferences",
                method: "POST",
                body: data,
            }),
            transformResponse: (response) => {
                const { user, token, message } = response;
                return { user, token, message };
            },
            onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setCredentials(data));
                } catch (error) {
                    dispatch(setError("Something went wrong"));
                }
            },
        }),
        payment: builder.mutation({
            query: (data) => ({
                url: "/payment-informations",
                method: "POST",
                body: data,
            }),
            transformResponse: (response) => {
                const { user, token, message } = response;
                return { user, token, message };
            },
            onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setCredentials(data));
                } catch (error) {
                    dispatch(setError("Something went wrong"));
                }
            },
        }),
        setting: builder.mutation({
            query: (data) => ({
                url: "/settings",
                method: "POST",
                body: data,
            }),
            transformResponse: (response) => {
                const { user, token, message } = response;
                return { user, token, message };
            },
            onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setCredentials(data));
                } catch (error) {
                    dispatch(setError("Something went wrong"));
                }
            },
        }),
    }),
});

export const {
    usePersonalInformationMutation,
    usePreferenceMutation,
    usePaymentMutation,
    useSettingMutation,
} = profileSlice;
