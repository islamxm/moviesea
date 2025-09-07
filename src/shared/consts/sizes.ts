import { UiSizePreset } from "../types/ui";

export const fontPresets:Record<UiSizePreset, {fontSize: number, lineHeight: string}> = {
  'sm': {
    fontSize: 16,
    lineHeight: '150%'
  },
  'md': {
    fontSize: 18,
    lineHeight: '150%'
  },
  'lg': {
    fontSize: 20,
    lineHeight: '150%'
  }
}