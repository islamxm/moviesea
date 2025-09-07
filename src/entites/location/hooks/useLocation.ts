import { useEffect } from "react"

export const useLocation = () => {
  // const dispatch = useDispatch()

  useEffect(() => {
    if (!navigator.geolocation) {
      //Geolocation API не поддерживается
    }

    navigator.geolocation.getCurrentPosition(
        success => {
          
          //получили разрешение
          const {latitude, longitude} = success.coords


        },
        error => {
          // поизошла ошибка
          switch (error.code) {
            case GeolocationPositionError.TIMEOUT:
              console.log('Время истекло')
              break
            case GeolocationPositionError.PERMISSION_DENIED:
              console.log('Пользователь запретил определить местоположение')
              break
            case GeolocationPositionError.POSITION_UNAVAILABLE:
              console.log('Не удалось определить местоположение')
              break
          }
        }
      )
  }, [])

}