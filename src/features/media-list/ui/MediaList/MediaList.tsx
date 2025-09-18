'use client'
import { HStack } from '@/shared/ui/Stack/HStack/HStack'
import { FC, PropsWithChildren, useRef } from 'react'
import { ComponentStatusProps } from '@/shared/types/ui'
import { useLoadMore } from '@/shared/hooks/useLoadMore'
import { MediaListSkeleton } from './MediaList.skeleton'
import { MediaListError } from '../MediaListError/MediaListError'
import { MediaListSpinner } from '../MediaListSpinner/MediaListSpinner'

type Props = PropsWithChildren<{
  data?: Array<any>
  onLoadMore?: (...args: any[]) => any,
  totalPages?: number
  currentPage?: number
} & ComponentStatusProps>

export const MediaList: FC<Props> = ({
  data = [],
  onLoadMore,
  totalPages,
  currentPage,
  isLoading = true,
  isError,
  isFetching,
  isSuccess, 

  children
}) => {
  const loaderRef = useRef<HTMLDivElement>(null)
  const canLoadMore = (currentPage && totalPages) && currentPage <= totalPages

  useLoadMore(
    loaderRef,
    isFetching,
    onLoadMore,
  )

  if (isError) return <>Error</>

  if (isLoading) return <MediaListSkeleton />

  return (
    <HStack fill col={3} wrap gap={20}>
      {children}
      {/* {
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
      } */}
      {
        isError && <MediaListError/>
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