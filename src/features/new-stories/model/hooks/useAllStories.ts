import { useEffect, useState } from 'react'

import { Story, useGetNewsIDsQuery, useLazyGetNewsItemQuery } from '@/features'

export const useAllStories = () => {
  const { data: newsIDs = [], refetch } = useGetNewsIDsQuery()
  const [getStory, { isFetching, isLoading }] = useLazyGetNewsItemQuery()

  const [allStories, setAllStories] = useState<Story[]>([])

  const disabled = isFetching || isLoading

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storyData = await Promise.all(
          newsIDs.slice(0, 100).map(async id => {
            const { data } = await getStory(id)

            return data
          })
        )

        const newStories = storyData
          .filter((item): item is Story => item !== null && item !== undefined)
          .sort((a, b) => b?.time - a?.time)

        setAllStories(newStories)
      } catch (error) {
        console.error('Ошибка при получении данных:', error)
      }
    }

    fetchData()
  }, [newsIDs, getStory])

  return { allStories, disabled, refetch }
}
