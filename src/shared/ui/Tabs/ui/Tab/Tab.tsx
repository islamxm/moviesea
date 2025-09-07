import { FC, memo, useCallback } from 'react'
import { Tab as TabType } from '../../types'
import classes from './classes.module.scss'
import { Button } from '@/shared/ui/Button/Button'

type TabProps = 
TabType 
& {
  onChange: (value: TabType['value']) => any
  isActive?: boolean
} 

export const Tab:FC<TabProps> = memo(({
  isActive,
  onChange,
  label,
  value
}) => {

  const onLocalChange = useCallback(() => {
    onChange && onChange(value)
  }, [value, onChange])

  return (
    <Button
      variant={isActive ? 'solid' : 'simple'}
      onClick={onLocalChange}
      style={{
      }}
      >{label}</Button>
  )
})

