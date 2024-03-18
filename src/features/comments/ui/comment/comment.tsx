import { Button, getDate } from '@/common'
import { CommentEntity, CommentList, useLoadNestedComments } from '@/features'
import parse from 'html-react-parser'

import s from './comment.module.scss'

export const Comment = ({ comment }: { comment: CommentEntity }) => {
  const { handleLoadNestedComments, nestedComments, showNestedComments } =
    useLoadNestedComments(comment)

  return (
    <li className={s.root}>
      <p>Author: {comment.by}</p>
      <p>Date: {getDate(comment.time)}</p>
      <div>{comment?.text && parse(comment.text)}</div>
      {comment.kids && (
        <>
          <Button disabled={showNestedComments} onClick={handleLoadNestedComments}>
            Load Nested Comments
          </Button>
          {showNestedComments && <CommentList comments={nestedComments} />}
        </>
      )}
    </li>
  )
}
