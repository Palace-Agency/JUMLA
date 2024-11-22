// src/api/authApiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken, setCredentials, setError } from "./userSlice";

export const authApiSlice = createApi({
    reducerPath: "authApi",
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
    tagTypes: ["User"],
    endpoints: (builder) => ({
        login: builder.mutation({
            query: ({ email, password }) => ({
                url: "/login",
                method: "POST",
                body: { email, password },
            }),
            transformResponse: (response) => {
                const { user, token } = response;
                return { user, token };
            },
            onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setCredentials(data));
                } catch (error) {
                    dispatch(setError("Login failed"));
                }
            },
        }),
        register: builder.mutation({
            query: ({ email, password }) => ({
                url: "/client/register",
                method: "POST",
                body: { email, password },
            }),
            transformResponse: (response) => {
                const { user, token } = response;
                return { user, token };
            },
            onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setCredentials(data));
                } catch (error) {
                    dispatch(setError("Login failed"));
                }
            },
        }),
        verify: builder.mutation({
            query: ({ email, pin }) => ({
                url: "/client/verify",
                method: "POST",
                body: { email, pin },
            }),
            transformResponse: (response) => {
                const { message } = response;
                return { message };
            },
        }),
        sentVerificationCode: builder.mutation({
            query: ({ email }) => ({
                url: "/client/resend-verification-code",
                method: "POST",
                body: { email },
            }),
            transformResponse: (response) => {
                const { message } = response;
                return { message };
            },
        }),
        googleAuth: builder.mutation({
            query: (user) => ({
                url: "/auth/google",
                method: "POST",
                body: { user },
            }),
            transformResponse: (response) => {
                const { user, token } = response;
                return { user, token };
            },
            onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setCredentials(data));
                } catch (error) {
                    dispatch(setError("Login failed"));
                }
            },
        }),
        verifyEmail: builder.mutation({
            query: ({ email }) => ({
                url: "/client/reset-password/send-verification-code",
                method: "POST",
                body: { email },
            }),
            transformResponse: (response) => {
                const { message } = response;
                return { message };
            },
        }),
        verifyCode: builder.mutation({
            query: ({ email, pin }) => ({
                url: "/client/reset-password/verify-code",
                method: "POST",
                body: { email, pin },
            }),
            transformResponse: (response) => {
                console.log(response);
                const { message, user } = response;
                return { message, user };
            },
            onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setCredentials(data));
                } catch (error) {
                    dispatch(setError("Login failed"));
                }
            },
        }),
        resendVerificationCode: builder.mutation({
            query: ({ email }) => ({
                url: "/client/reset-password/resend-verification-code",
                method: "POST",
                body: { email },
            }),
            transformResponse: (response) => {
                const { message } = response;
                return { message };
            },
        }),
        resetPassword: builder.mutation({
            query: ({ email, new_password }) => ({
                url: "/client/reset-password/reset-password",
                method: "POST",
                body: { email, new_password },
            }),
            transformResponse: (response) => {
                const { message } = response;
                return { message };
            },
        }),
    }),
});

export const {
    useLoginMutation,
    useRegisterMutation,
    useVerifyMutation,
    useSentVerificationCodeMutation,
    useGoogleAuthMutation,
    useVerifyEmailMutation,
    useVerifyCodeMutation,
    useResendVerificationCodeMutation,
    useResetPasswordMutation,
} = authApiSlice;
