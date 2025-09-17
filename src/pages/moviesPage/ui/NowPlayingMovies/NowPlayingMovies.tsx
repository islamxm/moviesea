'use client'
import { locationSelector } from "@/entites/location"
import { movieApi } from "@/entites/movie"
import { useSelector } from "@/shared/hooks/useStore"
import { FC, useState, useEffect } from "react"
import { loadMore } from "@/shared/lib/loadMore"
import { ListResponse } from "@/shared/api/types"
import { MediaBase } from "@/shared/api/types"
import { MediaList } from "@/features/media-list"
import { MovieCard } from "@/entites/movie"

type Props = {
  initialData: ListResponse<MediaBase>
}

export const NowPlayingMovies: FC<Props> = ({ initialData }) => {
  const { language } = useSelector(locationSelector)
  const [page, setPage] = useState(1)
  // const {
  //   data,
  //   isLoading,
  //   isFetching,
  //   isSuccess,
  //   isError,
  //   refetch
  // } = movieApi.useGetNowPlayingMoviesQuery({
  //   page,
  //   language
  // }, { skip: page > 1 ? false : true })

  const [trigger, {
    data,
    isLoading,
    isFetching,
    isSuccess,
    isError,
  }] = movieApi.useLazyGetNowPlayingMoviesQuery()

  const list = [...initialData.data, ...(data?.data || [])]

  useEffect(() => {
    console.log(page)
    if (page > 1 && !isError) {
      trigger({ page, language })
    }
  }, [page, isError])

  return (
    <MediaList
      isLoading={isLoading && page === 1}
      isFetching={isFetching}
      isSuccess={isSuccess}
      isError={isError}
      onLoadMore={() => !isError && setPage(s => s + 1)}
      totalPages={initialData.totalPages || data?.totalPages || 1}
      currentPage={page}
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