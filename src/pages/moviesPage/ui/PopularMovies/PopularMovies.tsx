import { MovieList } from "@/entites/movie"
import { movieApi } from "@/entites/movie"
import { useState } from "react"


export const PopularMovies = () => {
  const [page, setPage] = useState(1)
  const {
    data,
    isLoading,
    isFetching,
    isSuccess,
    isError
  } = movieApi.useGetPopularMoviesQuery({ page })


  return (
    <MovieList
      data={data}
      isLoading={isLoading}
      isFetching={isFetching}
      isSuccess={isSuccess}
      isError={isError}
      onLoadMore={() => setPage(s => s + 1)}
    />
  )
}