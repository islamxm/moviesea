'use client'
import { FC, PropsWithChildren } from "react"
import { StoreProvider } from "./providers/StoreProvider"
import { HeroUiProvider } from "./providers/HeroUiProvider"
import { createStore } from "./providers/StoreProvider/config/store"

const AppRoot: FC<PropsWithChildren> = ({ children }) => {
  const store = createStore()

  return (
    <HeroUiProvider>
      <StoreProvider preloadedState={store}>
        {children}
      </StoreProvider>
    </HeroUiProvider>
  )
}

export default AppRoot