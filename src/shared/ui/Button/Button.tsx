import { cn, Mods } from "@/shared/lib/cn"
import { FC, HTMLProps, PropsWithChildren, ReactNode, useMemo } from "react"
import classes from './classes.module.scss'
import {
  FlexContentPosition,
  UiColorPreset,
  UiSizePreset,
  UiVariantPreset
} from "@/shared/types/ui"
import { setFlexContentPosition } from "@/shared/lib/setFlexContentPosition"
import { fontPresets } from "@/shared/consts/sizes"
import { Statuses } from "@/shared/types/status"


type ButtonProps =
  HTMLProps<HTMLButtonElement>
  & FlexContentPosition
  & PropsWithChildren
  & {
    type?: 'button' | 'reset' | 'submit'
    isIcon?: boolean
    isFill?: boolean
    isLoading?: boolean
    buttonSize?: UiSizePreset
    color?: UiColorPreset
    variant?: UiVariantPreset
    before?: ReactNode
    after?: ReactNode
  }

export const Button: FC<ButtonProps> = ({
  children,
  isIcon,
  isFill,
  align,
  
  justify = 'center',
  buttonSize = 'md',
  color = 'primary',
  variant = 'solid',
  before,
  after,
  isLoading,
  className,
  ...props
}) => {

  const mods: Mods = useMemo(() => {
    return {
      [classes.icon]: isIcon,
      [classes.fill]: isFill,
      [classes.loading]: isLoading 
    }
  }, [isIcon])

  return (
    <button
      {...props}
      style={{
        ...fontPresets[buttonSize],
        alignItems: setFlexContentPosition(align),
        justifyContent: setFlexContentPosition(justify),
        ...props.style,
      }}
      className={cn([
        classes.wrapper,
        classes[buttonSize],
        classes[color],
        classes[variant],
        className
      ], mods)}
    >
      {
        before && <div className={cn([classes.extra, classes.before])}>
          {before}
        </div>
      }
      <div className={classes.main}>
        {children}
      </div>
      {
        after && <div className={cn([classes.extra, classes.after])}>
          {after}
        </div>
      }
      {isLoading && <div className={classes.loader}>...Loading</div>}
    </button>
  )
}