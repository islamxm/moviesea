'use client'
import { locationSelector } from "@/entites/location"
import { movieApi } from "@/entites/movie"
import { useDispatch, useSelector } from "@/shared/hooks/useStore"
import { FC, useState, useEffect, useRef } from "react"
import { loadMore } from "@/shared/lib/loadMore"
import { InfiniteListResponse, ListResponse } from "@/shared/api/types"
import { MediaBase } from "@/shared/api/types"
import { MediaList } from "@/features/media-list"
import { MovieCard } from "@/entites/movie"
import { Button } from "@/shared/ui/Button/Button"
import { MovieInfiniteDataType } from "@/entites/movie/api/movieApi"


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
    hasNextPage,
  } = movieApi.useGetNowPlayingMoviesInfiniteQuery({ language: 'ru' }, { initialPageParam: initialData.length > 0 ? 2 : 1})

  const list = [...initialData, ...(data?.pages.map(f => f.data).flat() ?? [])]

  return (
    <MediaList
      isLoading={isLoading}
      isFetching={isFetching}
      isSuccess={isSuccess}
      isError={isError}
      onLoadMore={() => loadMore(refetch, fetchNextPage, isError)}
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