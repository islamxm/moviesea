'use client'
import { HStack } from '@/shared/ui/Stack/HStack/HStack'
import { FC, PropsWithChildren, useEffect, useRef } from 'react'
import { ComponentStatusProps } from '@/shared/types/ui'
import { MediaListSkeleton } from './MediaList.skeleton'
import { MediaListError } from '../MediaListError/MediaListError'
import { MediaListSpinner } from '../MediaListSpinner/MediaListSpinner'
import { useIntersectionObserver } from 'react-intersection-observer-hook'

type Props = PropsWithChildren<{
  onLoadMore?: (...args: any[]) => any,
  canLoadMore?: boolean
} & ComponentStatusProps>

export const MediaList: FC<Props> = ({
  onLoadMore,
  isLoading = true,
  isError,
  canLoadMore,
  children
}) => {
  const [ref, { entry }] = useIntersectionObserver();
  const isVisible = entry && entry.isIntersecting

  useEffect(() => {
    if (isVisible) onLoadMore?.()
  }, [isVisible])
 
  if (isLoading) return <MediaListSkeleton />

  return (
    <HStack fill col={3} wrap gap={20}>
      {children}
      {isError && <MediaListError onRetry={onLoadMore} />}
      {(!isError && canLoadMore) && <MediaListSpinner ref={ref} />}
    </HStack>
  )
}