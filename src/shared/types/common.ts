export type ObjectWithSomeKeys<T extends {}> = {
  [key:string]: any
} & T