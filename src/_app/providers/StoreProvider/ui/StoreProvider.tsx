import { Provider } from "react-redux"
import { FC, PropsWithChildren } from "react"

type StoreProviderProps = PropsWithChildren & {
  preloadedState: any
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, preloadedState }) => {
  // const storeRef = useRef<ReturnType<typeof createStore>>(null)

  // if(!storeRef.current) {
  //   storeRef.current = createStore(preloadedState)
  // }

  return (
    <Provider store={preloadedState}>
      {children}
    </Provider>
  )
}