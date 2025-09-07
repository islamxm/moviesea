import { MovieLists, movieLists } from '@/entites/movie'
import { Tabs } from '@/shared/ui/Tabs/Tabs'
import { FC, useCallback } from 'react'

type Props = {
  value?: MovieLists
  onSelectList?: (value: MovieLists) => void 
}

export const SelectMovieList:FC<Props> = ({
  value,
  onSelectList
}) => {

  const onChange = useCallback((value: string | number) => {
    onSelectList && onSelectList(value as MovieLists)
  }, [onSelectList])

  return (
    <Tabs
      value={value}
      list={Object.entries(movieLists).map(([_, { value, label }]) => ({ value, label }))}
      onChange={onChange}
    />
  )
}