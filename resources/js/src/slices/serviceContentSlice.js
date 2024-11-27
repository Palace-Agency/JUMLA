import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const serviceContentAdapter = createEntityAdapter({
    selectId: (serviceContent) => serviceContent.id,
});

const initialState = serviceContentAdapter.getInitialState();

export const serviceContentApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getServiceContent: builder.query({
            query: () => `/service-content`,
            transformResponse: (responseData) => {
                return serviceContentAdapter.setAll(initialState, responseData);
            },
            providesTags: (result, error, arg) => [
                { type: "ServiceContent", id: "LIST" },
                ...result.ids.map((id) => ({ type: "ServiceContent", id })),
            ],
        }),
    }),
});

export const { useGetServiceContentQuery } = serviceContentApiSlice;
