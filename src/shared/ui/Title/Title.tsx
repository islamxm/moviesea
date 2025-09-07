import { FC, PropsWithChildren } from 'react'
import classes from './classes.module.scss'
import { ClassName, TextAlign } from '@/shared/types/ui'
import { cn } from '@/shared/lib/cn'

type TitleLevel = 1 | 2 | 3 | 4 | 5 | 6
type TitleTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

const TitleTags:Record<TitleLevel, TitleTag> = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6' 
}


type TitleProps = {
  level?: TitleLevel,
  textAlign?: TextAlign,
}
& PropsWithChildren
& ClassName

export const Title:FC<TitleProps> = ({
  level = 1,
  textAlign = 'center',
  children,
  className
}) => {
  
  const Tag = TitleTags[level]
  
  return (
    <Tag style={{textAlign}} className={cn([classes.title, className])}>{typeof children === 'string' && children}</Tag>
  )
}