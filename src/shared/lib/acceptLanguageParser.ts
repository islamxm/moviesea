import { AcceptLanguageHeaderParsedObject } from "../types/common"

export const acceptLanguageParser = (acceptLanguageHeader: string | null | undefined): AcceptLanguageHeaderParsedObject => {
  if (acceptLanguageHeader) {
    const arr = acceptLanguageHeader.split(',')
    const languagePriorities: { [k: string]: any } = {}
    let mainLanguage: string = ''
    arr.forEach((i, ind) => {
      if (ind === 0) {
        mainLanguage = i
        return
      }
      const t = i.split(';')
      languagePriorities[t[0]] = Number(t[1].slice(2))
    })
    return {
      mainLanguage,
      languagePriorities
    }
  }
  return {
    mainLanguage: 'en-EN',
    languagePriorities: {} 
  }
}