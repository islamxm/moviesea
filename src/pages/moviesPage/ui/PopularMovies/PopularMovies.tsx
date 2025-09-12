import { MovieList } from "@/entites/movie"
import { movieApi } from "@/entites/movie"
import { useState } from "react"
import { locationSelector } from "@/entites/location"
import { useSelector } from "@/shared/hooks/useStore"
import { loadMore } from "../../lib/loadMore"

export const PopularMovies = () => {
  const { language } = useSelector(locationSelector)
  const [page, setPage] = useState(1)
  const {
    data,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    refetch
  } = movieApi.useGetPopularMoviesQuery({
    page,
    language: language.locale
  })

  return (
    <MovieList
      isLoading={isLoading}
      isFetching={isFetching}
      isSuccess={isSuccess}
      isError={isError}
      data={data?.data || []}
      onLoadMore={() => loadMore(refetch, () => setPage(s => ++s), isError)}
      // canLoadMore={false}
      totalPages={data?.totalPages}
      currentPage={page}
    />
  )
}