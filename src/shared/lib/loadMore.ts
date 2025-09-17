export const loadMore = (refetchFunc: DefFunc, updateFunc: DefFunc, isError: boolean ) => {
  console.log('isError', isError)
  if (isError) {
    refetchFunc?.()
  } else updateFunc?.()
}
