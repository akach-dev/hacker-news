import { useParams } from 'react-router-dom'

import { Page } from '@/common'
import { StoryItem } from '@/features'

export const StoryPage = () => {
  const { id = 0 } = useParams<{ id: string }>()

  return (
    <Page>
      <StoryItem id={+id} />
    </Page>
  )
}
