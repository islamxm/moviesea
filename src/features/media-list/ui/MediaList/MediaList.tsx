'use client'
import { HStack } from '@/shared/ui/Stack/HStack/HStack'
import { FC, PropsWithChildren, useEffect, useRef } from 'react'
import { ComponentStatusProps } from '@/shared/types/ui'
import { useLoadMore } from '@/shared/hooks/useLoadMore'
import { MediaListSkeleton } from './MediaList.skeleton'
import { MediaListError } from '../MediaListError/MediaListError'
import { MediaListSpinner } from '../MediaListSpinner/MediaListSpinner'

type Props = PropsWithChildren<{
  onLoadMore?: (...args: any[]) => any,
  totalPages?: number
  currentPage?: number
} & ComponentStatusProps>

export const MediaList: FC<Props> = ({
  onLoadMore,
  totalPages,
  currentPage,
  isLoading = true,
  isError,
  isFetching,
  isSuccess,

  children
}) => {
  const loaderRef = useRef<HTMLButtonElement>(null)
  const canLoadMore = (currentPage && totalPages) && currentPage <= totalPages

  // useLoadMore(
  //   loaderRef,
  //   isFetching,
  //   onLoadMore,
  // )

  if (isError) return <>Error</>

  if (isLoading) return <MediaListSkeleton />

  return (
    <HStack fill col={3} wrap gap={20}>
      {children}
      {isError && <MediaListError />}
      {canLoadMore && <MediaListSpinner ref={loaderRef}/>}
    </HStack>
  )
}