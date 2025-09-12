export type ObjectWithSomeKeys<T extends {}> = {
  [key: string]: any
} & T

export type AcceptLanguageHeaderParsedObject = {
  mainLanguage: string,
  languagePriorities: { [key: string]: number }
}