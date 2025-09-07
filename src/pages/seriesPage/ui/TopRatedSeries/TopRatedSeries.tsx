import { MovieList } from "@/entites/movie"
import { seriesApi } from "@/entites/series/api/seriesApi"
import { useState } from "react"

export const TopRatedSeries = () => {
  const [page, setPage] = useState(1)
  const {
    data,
    isLoading,
    isFetching,
    isSuccess,
    isError
  } = seriesApi.useGetTopRatedSeriesQuery({ page })

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