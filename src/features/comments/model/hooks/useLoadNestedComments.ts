import { useState } from 'react'

import { CommentEntity, useLazyGetCommentQuery } from '@/features'

export const useLoadNestedComments = (comment: CommentEntity) => {
  const [nestedComments, setNestedComments] = useState<CommentEntity[]>([])
  const [showNestedComments, setShowNestedComments] = useState(false)
  const [getComments] = useLazyGetCommentQuery()

  const handleLoadNestedComments = async () => {
    try {
      const nestedCommentData = await Promise.all(
        (comment.kids || []).map(async kidId => {
          const { data } = await getComments(kidId)

          return data
        })
      )

      setNestedComments(nestedCommentData as CommentEntity[])
      setShowNestedComments(true)
    } catch (error) {
      console.error('Error loading nested comments:', error)
    }
  }

  return {
    handleLoadNestedComments,
    nestedComments,
    showNestedComments,
  }
}
