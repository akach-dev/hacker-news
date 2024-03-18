import { useEffect, useState } from 'react'

import { CommentEntity, useGetNewsItemQuery, useLazyGetCommentQuery } from '@/features'

export const useLoadComments = (id: number) => {
  const [comments, setComments] = useState<CommentEntity[]>([])

  const { data: story, refetch } = useGetNewsItemQuery(id)
  const [getComments] = useLazyGetCommentQuery()

  useEffect(() => {
    const handleLoadComments = async () => {
      if (story) {
        try {
          const commentData = await Promise.all(
            (story.kids || []).map(async (kidId: number) => {
              const { data } = await getComments(kidId)

              return data
            })
          )

          setComments(commentData as CommentEntity[])
        } catch (error) {
          console.error('Error loading comments:', error)
        }
      }
    }

    handleLoadComments()
  }, [story, getComments])

  return { comments, refetch, story }
}
