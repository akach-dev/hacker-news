import { Button, Page } from '@/common'
import { NewStories, useAllStories } from '@/features'

import s from './home-page.module.scss'

export const HomePage = () => {
  const { allStories, disabled, refetch } = useAllStories()

  return (
    <Page mt={0}>
      <div className={s.head}>
        <h1 className={s.title}>Hacker News</h1>
        <Button disabled={disabled} onClick={refetch}>
          Refresh Stories
        </Button>
      </div>
      <NewStories stories={allStories} />
    </Page>
  )
}
