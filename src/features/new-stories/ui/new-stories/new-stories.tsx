import { ItemStory, Story } from '@/features'

export const NewStories = ({ stories }: { stories: Story[] }) => {
  return (
    <ul>
      {stories.map(story => (
        <ItemStory key={story.id} story={story} />
      ))}
    </ul>
  )
}
