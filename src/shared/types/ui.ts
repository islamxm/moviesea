import { CSSProperties } from "react"

export type UiSizePreset = 'sm' | 'md' | 'lg' | 'extra_sm'

export type UiColorPreset = 'default' | 'primary' | 'error' | 'warning' | 'success'

export type UiVariantPreset = 'simple' | 'outlined' | 'solid'

export type Justify = 'start' | 'end' | 'center'

export type Align = Justify | 'strech'

export type FlexContentPosition = {
  align?: Align,
  justify?: Justify
}

export type UIStatus = 'success' | 'error' | 'loading' | 'warning' | 'default'

export type TextAlign = 'left' | 'center' | 'right'

export type Dimensions = 'mobile' | 'tablet' | 'desktop'

export type ClassName = { className?: string }
export type CSSInlineStyle = { style?: CSSProperties }

export type Styleable = ClassName & CSSInlineStyle

export type ComponentStatusProps = {
  isLoading?: boolean,
  isFetching?: boolean,
  isError?: boolean,
  isSuccess?: boolean
}