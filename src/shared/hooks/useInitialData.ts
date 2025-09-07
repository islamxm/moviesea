import { useDispatch } from "./useStore"
import { genresApi } from "../api/genresApi"
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