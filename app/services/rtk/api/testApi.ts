"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Test {
  _id?: string;
  name?: string;
}

export const testApi = createApi({
  reducerPath: "testApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUsersQuery } = testApi;
