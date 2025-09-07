export type Mods = Record<string, any>

export const cn = (classNames: Array<any>, mods: Mods = {}) => {
  return [
    ...classNames.filter(className => typeof className === 'string'),
    
    ...Object.entries(mods)
    .filter(([_, value]) => Boolean(value))
    .map(([className]) => className)
  ].join(' ')
}

