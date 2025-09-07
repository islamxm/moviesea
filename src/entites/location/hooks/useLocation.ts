import { useDispatch } from "@/shared/hooks/useStore"
import { useEffect } from "react"
import { locationActions } from "../model/locationSlice"


const t = new Promise((res, rej) => {
  window.navigator.geolocation.getCurrentPosition(res, rej)
})

export const useLocation = () => {
  // const dispatch = useDispatch()

  useEffect(() => {
    if (window.navigator.geolocation) {
      //если браузер поддерживает Geolocation API
      t.then(res => console.log(res))

    }
    console.log('test')
  }, [])

}