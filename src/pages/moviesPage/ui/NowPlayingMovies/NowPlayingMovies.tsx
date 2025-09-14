'use client'
import { locationSelector } from "@/entites/location"
import { movieApi, MovieList } from "@/entites/movie"
import { useSelector } from "@/shared/hooks/useStore"
import { FC, useState } from "react"
import { loadMore } from "../../lib/loadMore"
import { useDispatch } from "@/shared/hooks/useStore"

type Props = {
  initialData?: any 
}

export const NowPlayingMovies:FC<Props> = ({initialData}) => {
  const dispatch = useDispatch()
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
    language: 'en-EN'
  }, {skip: true})


  return (
    
    <MovieList
      isLoading={false}
      isFetching={false}
      isSuccess={true}
      isError={false}
      data={[...initialData, ...data?.data || []]}
      // data={data?.data || []}
      // data={initialData}
      onLoadMore={() => loadMore(refetch, () => setPage(s => ++s), isError)}
      // canLoadMore={false}
      totalPages={100}
      currentPage={page}
    />
  )
}