import { useDispatch } from "@/shared/hooks/useStore"
import { genresApi } from "@/shared/api/genresApi"
import { useEffect } from "react"

const {
  getMovieGenres, 
  getTvShowGenres
} = genresApi.endpoints

export const useInitialData = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getMovieGenres.initiate({}))
    dispatch(getTvShowGenres.initiate({}))
  }, [dispatch])  
}