"use client"
import { MovieLists, movieLists } from '@/entites/movie'
import { Tabs } from '@/shared/ui/Tabs/Tabs'
import { FC, useCallback, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'


type Props = {
  value?: MovieLists
  onSelectList?: (value: MovieLists) => void 
}

export const SelectMovieList:FC<Props> = ({
  value,
  onSelectList
}) => { 
  const searchParams = useSearchParams()
  const nav= useRouter()
  
  // const onChange = useCallback((value: string | number) => {
  //   onSelectList && onSelectList(value as MovieLists)
  // }, [onSelectList])

  const onChange = (value: string | number) => {
    onSelectList?.(value as MovieLists)
    // nav.push(`/movies?category=${value}`, {scroll: true})
    const params = new URLSearchParams(searchParams?.toString())
    params.set('category', value as string)
    const currentPath = window.location.pathname
    const newUrl = `${currentPath}?${params.toString()}`
    window.history.pushState({}, '', newUrl)    
  }

  return (
    <Tabs
      value={value}
      list={Object.entries(movieLists).map(([_, { value, label }]) => ({ value, label }))}
      onChange={onChange}
    />
  )
}