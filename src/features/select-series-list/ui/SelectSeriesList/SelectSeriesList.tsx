"use client"
import { seriesList, SeriesList } from '@/entites/series/model'
import { Tabs } from '@/shared/ui/Tabs/Tabs'
import { FC, useCallback } from 'react'
import { useRouter } from 'next/navigation'

type Props = {
  value?: SeriesList
  // onSelectList?: (value: SeriesList) => void 
}

export const SelectSeriesList:FC<Props> = ({
  value,
  // onSelectList
}) => {
  const nav= useRouter()

  // const onChange = useCallback((value: string | number) => {
  //   onSelectList && onSelectList(value as SeriesList)
  // }, [onSelectList])
  const onChange = (value: string | number) => {
    nav.push(`/series?category=${value}`, {scroll: true})
  }

  return (
    <Tabs
      value={value}
      list={Object.entries(seriesList).map(([_, { value, label }]) => ({ value, label }))}
      onChange={onChange}
    />
  )
}