export const loadMore = (refetchFunc: DefFunc, updateFunc: DefFunc, isError: boolean ) => {
  if (isError) {
    refetchFunc?.()
  } else updateFunc?.()
}
