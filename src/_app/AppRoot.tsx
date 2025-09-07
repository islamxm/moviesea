'use client'
import { FC, PropsWithChildren, useEffect } from "react"
import { StoreProvider } from "./providers/StoreProvider"

const AppRoot: FC<PropsWithChildren> = ({ children }) => {

  return (
    <StoreProvider preloadedState={{}}>
        {children}
    </StoreProvider>
  )
}

export default AppRoot