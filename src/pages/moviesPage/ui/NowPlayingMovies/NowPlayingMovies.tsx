import { locationSelector } from "@/entites/location"
import { movieApi, MovieList } from "@/entites/movie"
import { useSelector } from "@/shared/hooks/useStore"
import { useState } from "react"

export const NowPlayingMovies = () => {
  const { language } = useSelector(locationSelector)
  const [page, setPage] = useState(1)
  const {
    data,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    refetch
  } = movieApi.useGetNowPlayingMoviesQuery({
    page,
    language: language.locale
  })

  const onLoadMore = () => {
    if (isError) {
      refetch()
    } else setPage(s => ++s)
  }

  return (
    <MovieList
      isLoading={isLoading}
      isFetching={isFetching}
      isSuccess={isSuccess}
      isError={isError}
      data={data?.data || []}
      onLoadMore={onLoadMore}
      // canLoadMore={false}
      totalPages={data?.totalPages}
      currentPage={page}
    />
  )
}