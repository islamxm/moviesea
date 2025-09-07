'use client'
import { FC, PropsWithChildren } from 'react'
import classes from './classes.module.scss'
import { useFlexContext } from '../Flex/Flex'

export const FlexItem: FC<PropsWithChildren> = ({ children }) => {
  // const {itemWidth} = useFlexContext()  

  return <div className={classes.wrapper}>{children}</div>

}