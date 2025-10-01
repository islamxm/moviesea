'use client'
import { locationSelector } from "@/entites/location"
import { movieApi } from "@/entites/movie"
import { useSelector } from "@/shared/hooks/useStore"
import { FC } from "react"
import { MediaBase } from "@/shared/api/types"
import { MediaList } from "@/features/media-list"
import { MovieCard } from "@/entites/movie"

type Props = {
  initialData: Array<MediaBase>
}

export const UpcomingMovies: FC<Props> = ({ initialData = [] }) => {
  const { language } = useSelector(locationSelector)

  const {
    data,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    fetchNextPage,
    refetch,
    hasNextPage,
  } = movieApi.useGetUpcomingMoviesInfiniteQuery({ language: 'ru' }, { initialPageParam: initialData.length > 0 ? 2 : 1})

  const list = [...initialData, ...(data?.pages.map(f => f.data).flat() ?? [])]

  return (
      <MediaList
        isLoading={isLoading}
        isFetching={isFetching}
        isSuccess={isSuccess}
        isError={isError}
        onLoadMore={fetchNextPage}
        canLoadMore={hasNextPage}
        hasInitData={initialData.length > 0}
      >
        {
          list.map(product => {
            return (
              <MovieCard
                {...product}
                type={'movie'}
              />
            )
          })
        }
      </MediaList>
    )
}