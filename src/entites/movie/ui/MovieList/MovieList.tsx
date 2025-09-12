'use client'
import { MovieCard } from '../MovieCard/MovieCard'
import { HStack } from '@/shared/ui/Stack/HStack/HStack'
import { FC, useRef } from 'react'
import { ComponentStatusProps } from '@/shared/types/ui'
import { MovieCardExtra } from '../MovieCardExtra/MovieCardExtra'
import { AdultBadge } from '../AdultBadge/AdultBadge'
import { VoteAverageBadge } from '../VoteAverageBadge/VoteAverageBadge'
import { useLoadMore } from '@/shared/hooks/useLoadMore'
import { MovieListSkeleton } from './MovieList.skeleton'

type Props = {
  data?: Array<any>
  onLoadMore?: (...args: any[]) => any,
  canLoadMore?: boolean,
  totalPages?: number
  currentPage?: number
} & ComponentStatusProps

export const MovieList: FC<Props> = ({
  data = [],
  onLoadMore,
  totalPages,
  currentPage,
  // canLoadMore,

  isLoading = true,
  isError,
  isFetching,
  isSuccess, }) => {
  const loaderRef = useRef<HTMLDivElement>(null)
  const canLoadMore = (currentPage && totalPages) && currentPage <= totalPages

  useLoadMore(
    loaderRef,
    isFetching,
    onLoadMore,
  )

  if (isError) return <>Error</>

  if (isLoading) return <MovieListSkeleton />

  return (
    <HStack fill col={3} wrap gap={20}>
      {
        data.map(movie => (
          <MovieCard
            key={movie.id}
            topExtra={
              <MovieCardExtra>
                <VoteAverageBadge value={movie?.vote_average} />
                {movie?.adult && <AdultBadge />}
              </MovieCardExtra>
            }
            data={movie} />
        ))
      }
      {
        canLoadMore &&
        <div
          style={{ width: '100%', height: 1, border: '1px solid red' }}
          ref={loaderRef} />
      }
    </HStack>
  )
}