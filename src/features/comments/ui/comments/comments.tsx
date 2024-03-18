import { Comment, CommentEntity } from '@/features'

export const CommentList = ({ comments }: { comments: CommentEntity[] }) => {
  return (
    <ul>
      {comments.map(comment => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </ul>
  )
}
