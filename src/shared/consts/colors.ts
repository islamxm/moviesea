import { UIStatus } from "../types/ui";

type ColorObject = {
  default?: string,
  accent?: string,
  hover?: string
}

export const uiStatusColors:Record<UIStatus, ColorObject> = {
  'error': {default: ''},
  'loading': {default: ''},
  'success': {default: ''},
  'warning': {default: ''}
}