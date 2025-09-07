export type AppLanguages = 'ru-RU' | 'en-EN'

export type Language = {
  name: Record<AppLanguages, string>
  locale: AppLanguages
  countries: Array<unknown>
}

export type Location = {
  country?: string,
  city?: string
}
