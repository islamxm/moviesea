import { Provider } from "react-redux"
import { createStore } from "../config/store"
import { FC, PropsWithChildren, useRef } from "react"

type StoreProviderProps = PropsWithChildren & {
  preloadedState: any
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, preloadedState }) => {
  const storeRef = useRef<ReturnType<typeof createStore>>(null)

  if(!storeRef.current) {
    storeRef.current = createStore(preloadedState)
  }

  return (
    <Provider store={storeRef.current}>
      {children}
    </Provider>
  )
}