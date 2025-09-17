// 'use client'
import { Title } from '@/shared/ui/Title/Title'
import { VStack } from '@/shared/ui/Stack/VStack/VStack'
import { Container } from '@/shared/ui/Container/Container'
import { FC } from 'react'
import { SelectMovieList } from '@/features/select-movie-list'
import { DefaultAnimLayout } from '@/_app/layouts/DefaultAnimLayout'
import { movieApi, MovieLists } from '@/entites/movie'
import { createStore } from '@/_app/providers/StoreProvider'
import { headers } from 'next/headers'
import { acceptLanguageParser } from '@/shared/lib/acceptLanguageParser'
import { AppLanguages } from '@/shared/types/locale'
import { redirect } from 'next/navigation'
import { AcceptLanguageHeaderParsedObject } from '@/shared/types/common'
import { ListResponse, MediaBase } from '@/shared/api/types'
import { locationActions } from '@/entites/location/model/locationSlice'

import { NowPlayingMovies } from '../NowPlayingMovies/NowPlayingMovies'
import { PopularMovies } from '../PopularMovies/PopularMovies'
import { TopRatedMovies } from '../TopRatedMovies/TopRatedMovies'
import { UpcomingMovies } from '../UpcomingMovies/UpcomingMovies'



type Props = {
  store: ReturnType<typeof createStore>
  acceptLanguage: AcceptLanguageHeaderParsedObject
  initialMovieListType?: MovieLists
}

export const MoviesPage: FC<Props> = async ({
  initialMovieListType,
  store,
  acceptLanguage
}) => {
  const {mainLanguage} = acceptLanguage

  // store.dispatch(locationActions.updateLang(mainLanguage))

  switch (initialMovieListType) {
    case 'now-playing':
      await store.dispatch(movieApi.endpoints.getNowPlayingMovies.initiate({ page: 1, language: mainLanguage as AppLanguages }))
      break
    case 'popular':
      await store.dispatch(movieApi.endpoints.getPopularMovies.initiate({ page: 1, language: mainLanguage as AppLanguages }))
      break
    case 'top-rated':
      await store.dispatch(movieApi.endpoints.getTopRatedMovies.initiate({ page: 1, language: mainLanguage as AppLanguages }))
      break
    case 'upcoming':
      await store.dispatch(movieApi.endpoints.getUpcomingMovies.initiate({ page: 1, language: mainLanguage as AppLanguages }))
      break
    default:
      redirect('/movies?category=now-playing')
  }

  const initialData:ListResponse<MediaBase> = await movieApi.endpoints.getNowPlayingMovies.select({ page: 1 })(store.getState()).data || {data: [], totalPages: 1}

  return (
    <DefaultAnimLayout>
      <Container>
        <VStack align={'start'} gap={25}>

          <Title textAlign='left'>Movies</Title>

          <SelectMovieList
            // onSelectList={}
            value={initialMovieListType}
          />

          {initialMovieListType === 'now-playing' && <NowPlayingMovies initialData={initialData} />}
          {initialMovieListType === 'popular' && <PopularMovies initialData={initialData} />}
          {initialMovieListType === 'top-rated' && <TopRatedMovies initialData={initialData}/>}
          {initialMovieListType === 'upcoming' && <UpcomingMovies initialData={initialData}/>}

        </VStack>
      </Container>
    </DefaultAnimLayout>
  )
}