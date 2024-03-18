import { baseApi } from '@/common'
import { Story } from '@/features'

export const storiesService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getNewsIDs: builder.query<number[], void>({
      providesTags: ['Stories'],
      query: () => 'topstories.json',
    }),

    getNewsItem: builder.query<Story, number>({
      providesTags: ['Stories'],
      query: id => `item/${id}.json`,
    }),
  }),
})

export const { useGetNewsIDsQuery, useGetNewsItemQuery, useLazyGetNewsItemQuery } = storiesService
