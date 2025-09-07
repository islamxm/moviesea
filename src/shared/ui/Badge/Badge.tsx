import { FC, PropsWithChildren } from 'react'
import classes from './classes.module.scss'
import { Styleable, UiColorPreset, UiSizePreset, UiVariantPreset } from '@/shared/types/ui'
import { cn } from '@/shared/lib/cn'

type Props = PropsWithChildren<{
  size?: UiSizePreset
  color?: UiColorPreset
  variant?: UiVariantPreset
}> & Styleable

export const Badge: FC<Props> = ({
  color = 'default',
  variant = 'simple',
  size = 'md',

  className,
  style,

  children
}) => {


  return (
    <div className={cn([
      classes.wrapper,
      classes[color],
      classes[variant],
      classes[size],
      className
    ])}
    style={style}
    >
      {children}
    </div>
  )
}