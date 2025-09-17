import { SelectSeriesList } from '@/features/select-series-list'
import { FC } from 'react'
import { SeriesList } from '@/entites/series/model'
import { Container } from '@/shared/ui/Container/Container'
import { VStack } from '@/shared/ui/Stack/VStack/VStack'
import { Title } from '@/shared/ui/Title/Title'
import { AiringTodaySeries } from '../AiringTodaySeries/AiringTodaySeries'
import { PopularSeries } from '../PopularSeries/PopularSeries'
import { TopRatedSeries } from '../TopRatedSeries/TopRatedSeries'
import { OnTheAirSeries } from '../OnTheAirSeries/OnTheAirSeries'
import { createStore } from '@/_app/providers/StoreProvider'
import { AcceptLanguageHeaderParsedObject } from '@/shared/types/common'
import { seriesApi } from '@/entites/series/api/seriesApi'
import { AppLanguages } from '@/shared/types/locale'
import { redirect } from 'next/navigation'
import { ListResponse, MediaBase } from '@/shared/api/types'
import { DefaultAnimLayout } from '@/_app/layouts/DefaultAnimLayout'

type Props = {
  store: ReturnType<typeof createStore>
  acceptLanguage: AcceptLanguageHeaderParsedObject
  initialSeriesListType?: SeriesList
}

export const SeriesPage: FC<Props> = async ({
  initialSeriesListType,
  store,
  acceptLanguage
}) => {

  const { mainLanguage } = acceptLanguage

  switch (initialSeriesListType) {
    case 'airing-today':
      await store.dispatch(seriesApi.endpoints.getAiringTodaySeries.initiate({ page: 1, language: mainLanguage as AppLanguages }))
      break
    case 'on-the-air':
      await store.dispatch(seriesApi.endpoints.getOnTheAirSeries.initiate({ page: 1, language: mainLanguage as AppLanguages }))
      break
    case 'popular':
      await store.dispatch(seriesApi.endpoints.getPopularSeries.initiate({ page: 1, language: mainLanguage as AppLanguages }))
      break
    case 'top-rated':
      await store.dispatch(seriesApi.endpoints.getTopRatedSeries.initiate({ page: 1, language: mainLanguage as AppLanguages }))
      break
    default:
      redirect('/series?category=airing-today')
  }

  const initialData: ListResponse<MediaBase> = seriesApi.endpoints.getAiringTodaySeries.select({ page: 1 })(store.getState()).data || { data: [], totalPages: 1 }


  return (
    <DefaultAnimLayout>
      <Container>
        <VStack align={'start'} gap={25}>

          <Title textAlign='left'>Series</Title>

          <SelectSeriesList
            value={initialSeriesListType}
          />

          {initialSeriesListType === 'airing-today' && <AiringTodaySeries initialData={initialData}/>}
          {initialSeriesListType === 'popular' && <PopularSeries initialData={initialData}/>}
          {initialSeriesListType === 'top-rated' && <TopRatedSeries initialData={initialData}/>}
          {initialSeriesListType === 'on-the-air' && <OnTheAirSeries initialData={initialData}/>}

        </VStack>
      </Container>
    </DefaultAnimLayout>
  )
}