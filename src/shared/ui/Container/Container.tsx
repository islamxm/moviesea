import { FC, PropsWithChildren } from 'react'
import classes from './classes.module.scss'

export const Container:FC<PropsWithChildren> = ({children}) => {
  return (
    <div className={classes.wrapper}>{children}</div>
  )
}