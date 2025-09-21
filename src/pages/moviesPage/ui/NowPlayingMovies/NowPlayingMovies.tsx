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
  initialData: Array<MediaBase>
}

export const NowPlayingMovies: FC<Props> = ({ initialData = [] }) => {
  const { language } = useSelector(locationSelector)

  const {
    data,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    fetchNextPage,
    refetch,
    hasNextPage
  } = movieApi.useGetNowPlayingMoviesInfiniteQuery({ language })

  const list = data?.pages.map(f => f.data).flat() ?? []


  return (
    <MediaList
      isLoading={isLoading}
      isFetching={isFetching}
      isSuccess={isSuccess}
      isError={isError}
      onLoadMore={() => loadMore(refetch, fetchNextPage, isError)}
      canLoadMore={hasNextPage}
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