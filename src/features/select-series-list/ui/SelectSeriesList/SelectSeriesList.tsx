import { seriesList, SeriesList } from '@/entites/series/model'
import { Tabs } from '@/shared/ui/Tabs/Tabs'
import { FC, useCallback } from 'react'

type Props = {
  value?: SeriesList
  onSelectList?: (value: SeriesList) => void 
}

export const SelectSeriesList:FC<Props> = ({
  value,
  onSelectList
}) => {

  const onChange = useCallback((value: string | number) => {
    onSelectList && onSelectList(value as SeriesList)
  }, [onSelectList])

  return (
    <Tabs
      value={value}
      list={Object.entries(seriesList).map(([_, { value, label }]) => ({ value, label }))}
      onChange={onChange}
    />
  )
}