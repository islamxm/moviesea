'use client'

import { cn, Mods } from '@/shared/lib/cn'
import { createContext, FC, PropsWithChildren, useContext, useEffect, useRef, useState } from 'react'
import classes from './classes.module.scss'
import { Flex as FlexType } from '../types'

type FlexContextValueType = {
  col: number
  itemWidth: number
}

const FlexContext = createContext<FlexContextValueType>({ col: 1, itemWidth: 0 })

export const FlexProvider: FC<PropsWithChildren & FlexContextValueType> = ({ children, col, itemWidth }) => {
  return <FlexContext.Provider value={{ col, itemWidth }}>{children}</FlexContext.Provider>
}

export const useFlexContext = () => {
  return useContext(FlexContext)
}

type FlexProps = FlexType & PropsWithChildren

const setAlignItems = (align: FlexType['align'] = 'strech') => {
  switch (align) {
    case 'center':
      return 'center'
    case 'end':
      return 'flex-end'
    case 'start':
      return 'flex-start'
    case 'strech':
      return 'strech'
    case 'between':
      return 'space-between'
  }
}

const setJustifyItems = (justify: FlexType['justify'] = 'start') => {
  switch (justify) {
    case 'center':
      return 'center'
    case 'end':
      return 'flex-end'
    case 'start':
      return 'flex-start'
    case 'between':
      return 'space-between'
  }
}

const defaultProps: FlexProps = {
  fill: true,
  justify: 'start',
  align: 'strech',
  dir: 'row',
  gap: 10,
  wrap: true
}

export const Flex: FC<FlexProps> = ({
  children,
  fill,
  justify,
  align,
  dir,
  gap,
  wrap,
  className,

  col = 1,
} = defaultProps) => {

  const classNameMods: Mods = {
    [classes.fill]: fill
  }
  
  return (
    
      <div
        style={{
          gap,
          justifyContent: setJustifyItems(justify),
          alignItems: setAlignItems(align),
          flexDirection: dir,
          flexWrap: wrap ? 'wrap' : 'nowrap'
        }}
        className={cn(
          [classes.wrapper, className],
          classNameMods
        )}
      >
        {children}
      </div>

  )
}