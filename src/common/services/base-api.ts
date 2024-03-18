import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.APP_API_URL,
  }),
  endpoints: () => ({}),
  reducerPath: 'baseApi',
  tagTypes: ['Stories', 'Comments'],
})
