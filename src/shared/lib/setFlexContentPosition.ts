import { Align, Justify } from "../types/ui";

export const setFlexContentPosition = (type?: Justify | Align) => {
  switch(type) {
    case 'center':
      return 'center'
    case 'start':
      return 'flex-start'
    case 'end':
      return 'flex-end'
    case 'strech':
      return 'strech'
    default:
      return 'flex-start'
  }
}