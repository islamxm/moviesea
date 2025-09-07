import { movieApi, MovieList } from "@/entites/movie"
import { useState } from "react"

export const TopRatedMovies = () => {
  const [page, setPage] = useState(1)
  const {
    data,
    isLoading,
    isFetching,
    isSuccess,
    isError
  } = movieApi.useGetTopRatedMoviesQuery({page})


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