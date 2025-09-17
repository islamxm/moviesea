'use client'
import { FC, PropsWithChildren, useEffect } from "react"
import { StoreProvider } from "./providers/StoreProvider"
import { createStore } from "./providers/StoreProvider/config/store"
import {toast} from 'sonner'

const AppRoot: FC<PropsWithChildren> = ({ children }) => {
  const store = createStore()

  return (
    <StoreProvider preloadedState={store}>
        {children}
    </StoreProvider>
  )
}

export default AppRoot