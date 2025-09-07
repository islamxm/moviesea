import { movieApi, MovieList } from "@/entites/movie"
import { useState } from "react"

export const UpcomingMovies = () => {
  const [page, setPage] = useState(1)
  const {
    data,
    isLoading,
    isFetching,
    isSuccess,
    isError
  } = movieApi.useGetUpcomingMoviesQuery({page})


  return (
    <MovieList
      isLoading={isLoading}
      isFetching={isFetching}
      isSuccess={isSuccess}
      isError={isError}
      data={data}
      onLoadMore={() => setPage(s => s + 1)} 
      />
  )
}