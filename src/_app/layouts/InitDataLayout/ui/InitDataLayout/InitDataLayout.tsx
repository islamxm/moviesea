"use client"
import { FC, PropsWithChildren, useEffect } from "react"
import { useInitialData } from "@/shared/hooks/useInitialData"
import { InitialServerData } from "../../model/types"
import { acceptLanguageParser } from "../../../../../shared/lib/acceptLanguageParser"
export const InitDataLayout: FC<PropsWithChildren & InitialServerData> = ({
  children,
  acceptLanguage
}) => {

  useInitialData()

  useEffect(() => {

    const {mainLanguage, languagePriorities} = acceptLanguageParser(acceptLanguage)

  }, [acceptLanguage])

  return (
    <>{children}</>
  )
}