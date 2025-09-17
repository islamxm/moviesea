'use client'
import { seriesApi } from "@/entites/series/api/seriesApi"
import { FC, useState } from "react"
import { locationSelector } from "@/entites/location"
import { useSelector } from "@/shared/hooks/useStore"
import { MediaList } from "@/features/media-list"
import { ListResponse } from "@/shared/api/types"
import { MediaBase } from "@/shared/api/types"
import { loadMore } from "@/shared/lib/loadMore"
import { SeriesCard } from "@/entites/series"

type Props = {
  initialData: ListResponse<MediaBase>
}

export const OnTheAirSeries: FC<Props> = ({initialData}) => {
  const { language } = useSelector(locationSelector)
  const [page, setPage] = useState(1)
  const {
    data,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    refetch
  } = seriesApi.useGetOnTheAirSeriesQuery({
    page,
    language
  }, { skip: page > 1 ? false : true })

  const list = [...initialData.data, ...(data?.data || [])]

  return (
    <MediaList
      isLoading={isLoading && page === 1}
      isFetching={isFetching}
      isSuccess={isSuccess}
      isError={isError}
      onLoadMore={() => loadMore(refetch, () => setPage(s => ++s), isError)}
      totalPages={initialData.totalPages || data?.totalPages || 1}
      currentPage={page}
    >
      {
        list.map(product => {
          return (
            <SeriesCard
              {...product}
              type={'series'}
            />
          )
        })
      }
    </MediaList>
  )
}