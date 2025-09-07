import { ChangeEvent, FC, FocusEvent, HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute, ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import classes from './classes.module.scss'
import { useSpring, animated } from '@react-spring/web'
import { cn, Mods } from '@/shared/lib/cn'
import { UiColorPreset, UiSizePreset } from '@/shared/types/ui'
import { fontPresets } from '@/shared/consts/sizes'
import { springLinearAnimConfig } from '@/shared/config/springLinearAnimConfig'
import { uiStatus } from '@/shared/consts/status'
import { Statuses } from '@/shared/types/status'


type InputProps = {
  before?: ReactNode
  after?: ReactNode
  value?: string
  size?: UiSizePreset
  color?: UiColorPreset
  onChange?: (e: string) => void
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  placeholder?: string,
  status?: keyof Pick<typeof uiStatus, 'error' | 'success' | 'default'>
  message?: ReactNode
  isFill?: boolean
  width?: number | string,
  type?: HTMLInputTypeAttribute,
  autoComplete?: HTMLInputAutoCompleteAttribute | false
}
  & Statuses
// & Partial<Record<keyof Statuses, boolean | {message: ReactNode}>>

export const Input: FC<InputProps> = ({
  before,
  after,
  value,
  onChange,
  onFocus,
  onBlur,
  placeholder,
  color = 'default',
  size = 'md',
  message,
  isFill,
  isLoading,
  isError,
  isSuccess,
  width,
  type,
  autoComplete
}) => {
  const ref = useRef<HTMLInputElement>(null)
  const placeholderRef = useRef<HTMLDivElement>(null)
  const [plTrans, setPlTrans] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const placeholderAnimStyle = useSpring({
    y: plTrans ? -(Number(placeholderRef.current?.scrollHeight) / 1.5) : 0,
    fontSize: plTrans ? fontPresets[size].fontSize - 5 : fontPresets[size].fontSize,
    config: springLinearAnimConfig
  })

  useEffect(() => {
    if (ref.current && (isFocused || value || ref.current.value)) {
      setPlTrans(true)
    } else setPlTrans(false)
  }, [value, isFocused, ref])

  const onLocalFocus = useCallback((e: FocusEvent<HTMLInputElement>) => {
    onFocus && onFocus(e)
    setIsFocused(true)
  }, [value, onFocus])

  const onLocalBlur = useCallback((e: FocusEvent<HTMLInputElement>) => {
    onBlur && onBlur(e)
    setIsFocused(false)
  }, [value, onBlur])

  const onLocalChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.target.value)
  }, [value, onChange])

  const mods: Mods = {
    [classes.focused]: isFocused,
    [classes.fill]: isFill,
    [classes[uiStatus.error]]: isError,
    [classes[uiStatus.loading]]: isLoading,
    [classes[uiStatus.success]]: isSuccess,
  }

  return (
    <div
      style={{
        ...fontPresets[size],
        width
      }}
      className={cn([
        classes.wrapper,
        classes[size],
        classes[color],
      ], mods)}>
      <label
        className={classes.label}>
        {before && <div className={cn([classes.extra, classes.before])}>{before}</div>}
        <div className={classes.main}>
          <animated.div
            ref={placeholderRef}
            style={placeholderAnimStyle}
            className={classes.placeholder}>{placeholder}</animated.div>
          <input
            ref={ref}
            className={classes.input}
            value={value}
            onFocus={onLocalFocus}
            onBlur={onLocalBlur}
            type={type}
            // autoComplete={!autoComplete ? 'off' : autoComplete}
            onChange={onLocalChange}
          />
        </div>
        {after && <div className={cn([classes.extra, classes.after])}>{after}</div>}
      </label>
      {message && <div className={classes.message}>{message}</div>}
    </div>
  )
}