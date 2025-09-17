'use client'
import { FC } from 'react'
import { Card } from '@/shared/ui/Card/Card'
import { MediaBase } from '@/shared/api/types'

export const MovieCard: FC<MediaBase> = (props) => {

  return (
    <Card
      data={props}
      link={`/movies/${props.id}`}
    />
  )
}