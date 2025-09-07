import { PropsWithChildren } from "react";

export type FlexDirection = 'row' | 'column'
export type FlexGap = number
export type FlexWrap = boolean
export type FlexJustify = 'center' | 'start' | 'end' | 'between'
export type FlexAlign = 'center' | 'start' | 'end' | 'strech' | 'between'

export type Flex = {
  dir?: FlexDirection,
  wrap?: FlexWrap
  gap?: FlexGap,
  align?: FlexAlign,
  justify?: FlexJustify,
  className?: string,
  fill?: boolean,

  col?: number,
}

export type StackProps = Pick<
  Flex,
  'gap' | 'align' | 'justify' | 'className' | 'fill'
> & PropsWithChildren

export type VStackProps = StackProps
export type HStackProps = StackProps & {wrap?: FlexWrap, col?: number}