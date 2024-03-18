import { Link } from 'react-router-dom'

import { formatDate, formatTime } from '@/common'
import { Story } from '@/features'

import s from './item-story.module.scss'

export const ItemStory = ({ story }: { story: Story }) => {
  const storyTime = formatTime(story.time)
  const storyDate = formatDate(story.time)

  return (
    <li className={s.root}>
      <Link className={s.link} to={`/story/${story.id}`}>
        <p className={s.title}>{story.title}</p>
        <div className={s.body}>
          <p> ⭐ {story.score} points</p>
          <p className={s.by}>
            by <span>{story.by}</span>
          </p>
          <p className={s.date}>{storyDate + ' ' + storyTime}</p>
        </div>
      </Link>
    </li>
  )
}
