import { HeroUIProvider } from "@heroui/react"
import { FC, PropsWithChildren } from "react"

export const HeroUiProvider:FC<PropsWithChildren> = ({children}) => {
  return (
    <HeroUIProvider>
      {children}
    </HeroUIProvider>
  )
}