import { useCallback, useEffect, useState } from "react"
import { UIStatus } from "../types/ui"

type InitStatus = {
  isLoading?: boolean,
  isError?: boolean,
  isSuccess?: boolean
}

export const useStatus = (initStatus?: InitStatus) => {
  const [status, setStatus] = useState<InitStatus>({
    isLoading: true,
    isError: false,
    isSuccess: false
  })

  // useEffect(() => {
  //   if (initStatus) {
  //     setStatus(initStatus)
  //   }
  // }, [initStatus])

  const changeStatus = useCallback((status: keyof InitStatus, value: boolean) => {
    switch (status) {
      case 'isError':
        setStatus(s => ({ ...s, isError: value }))
        break
      case 'isLoading':
        setStatus(s => ({ ...s, isLoading: value }))
        break
      case 'isSuccess':
        setStatus(s => ({ ...s, isSuccess: value }))
        break
    }
  }, [])

  return {
    isLoading: status.isLoading,
    isError: status.isError,
    isSuccess: status.isSuccess,
    changeStatus,
    setStatus
  }
}