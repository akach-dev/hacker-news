import { baseApi } from '@/common'
import { CommentEntity } from '@/features'

export const commentsService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getComment: builder.query<CommentEntity, number>({
      providesTags: ['Comments'],
      query: id => `item/${id}.json`,
    }),
  }),
})

export const { useGetCommentQuery, useLazyGetCommentQuery } = commentsService
