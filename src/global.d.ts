declare global {
  type StoreType = import('./_app/providers/StoreProvider/index').RootState
  type DispatchType = import('./_app/providers/StoreProvider/index').AppDispatch
}
export {}