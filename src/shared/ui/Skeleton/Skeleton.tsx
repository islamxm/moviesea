import { CSSProperties, FC, PropsWithChildren } from 'react'
import classes from './classes.module.scss'
import { cn, Mods } from '@/shared/lib/cn'
import { Styleable } from '@/shared/types/ui'

type SkeletonProps = PropsWithChildren<{
  width?: number | `${number}%`
  height?: number | `${number}%`
  radius?: number | `${number}%`
  shimmer?: boolean,
  color?: string,
}> & Styleable

export const Skeleton:FC<SkeletonProps> = ({
  height,
  color,
  style,
  radius,
  shimmer = true,
  width = '100%',
  className,
  children
}) => {

  const styleMods:Mods = {
    [classes.shimmer]: shimmer  
  }

  return (
    <div 
      style={{
        width,
        height,
        borderRadius: radius,
        backgroundColor: color,
        ...style
      }}
      className={cn([classes.wrapper, className], styleMods)}>
        {children}
      </div>
  )
}
