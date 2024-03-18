import { Link } from 'react-router-dom'

import { Button, getDate } from '@/common'
import { CommentList } from '@/features'
import { useLoadComments } from '@/pages'

import s from './story-item.module.scss'

export const StoryItem = ({ id }: { id: number }) => {
  const { comments, refetch, story } = useLoadComments(id)

  return (
    <>
      <div className={s.buttons}>
        <Button as={Link} to={'/'}>
          Back to Stories
        </Button>

        <Button className={s.refresh} onClick={() => refetch()} variant={'secondary'}>
          Refresh Comments
        </Button>
      </div>
      {story && (
        <>
          <div className={s.info}>
            <h2>{story.title}</h2>
            <p>Author: {story.by}</p>
            <p>Date: {getDate(story.time)}</p>
            <p>Comments: {story.descendants}</p>
          </div>
          <Button as={'a'} href={story.url} target={'_blank'} variant={'link'}>
            {story.url}
          </Button>
          <CommentList comments={comments} />
        </>
      )}
    </>
  )
}
