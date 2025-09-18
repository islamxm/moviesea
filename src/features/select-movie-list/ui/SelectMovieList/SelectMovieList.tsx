"use client"
import { MovieLists, movieLists } from '@/entites/movie'
import { Tabs } from '@/shared/ui/Tabs/Tabs'
import { FC, useCallback, useEffect } from 'react'
import { useRouter } from 'next/navigation'


type Props = {
  value?: MovieLists
  // onSelectList?: (value: MovieLists) => void 
}

export const SelectMovieList:FC<Props> = ({
  value,
  // onSelectList
}) => { 
  const nav= useRouter()
  
  // const onChange = useCallback((value: string | number) => {
  //   onSelectList && onSelectList(value as MovieLists)
  // }, [onSelectList])

  const onChange = (value: string | number) => {
    nav.push(`/movies?category=${value}`, {scroll: true})
  }

  return (
    <Tabs
      value={value}
      list={Object.entries(movieLists).map(([_, { value, label }]) => ({ value, label }))}
      onChange={onChange}
    />
  )
}