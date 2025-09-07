import { FC } from 'react'
import classes from './classes.module.scss'
import { Tab as TabType } from './types'
import { Tab } from './ui/Tab/Tab'
import { Flex } from '../Stack/Flex/Flex'
import { HStack } from '../Stack/HStack/HStack'

type TabsProp = {
  list?: Array<TabType>
  value?: TabType['value']

  onChange: (tab: TabType['value']) => void
}

export const Tabs: FC<TabsProp> = ({
  list = [],
  value,
  onChange
}) => {

  return (
    <HStack gap={10} className={classes.wrapper}>
      {
        list.map(tab => (
          <Tab
            key={tab.value}
            {...tab} 
            onChange={onChange}
            isActive={value === tab.value}
            label={tab.label}
            />
        ))
      }
    </HStack>
  )
}