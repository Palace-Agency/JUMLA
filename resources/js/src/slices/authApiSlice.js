import { apiSlice } from "../api/apiSlice";
import { setCredentials, setError } from "./userSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: ({ email, password }) => ({
                url: "/login",
                method: "POST",
                body: { email, password },
            }),
            transformResponse: (response) => {
                console.log(response);
                const { user } = response;
                return { user };
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

export const { useLoginMutation, useResetPasswordMutation } = authApiSlice;
