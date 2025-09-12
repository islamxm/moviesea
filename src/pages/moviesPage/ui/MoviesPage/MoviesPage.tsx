// 'use client'
import { Title } from '@/shared/ui/Title/Title'
import { VStack } from '@/shared/ui/Stack/VStack/VStack'
import { Container } from '@/shared/ui/Container/Container'
// import { MovieLists } from '@/entites/movie'
import { FC } from 'react'
import { SelectMovieList } from '@/features/select-movie-list'
import { DefaultAnimLayout } from '@/_app/layouts/DefaultAnimLayout'
import { movieApi, MovieLists } from '@/entites/movie'
import { NowPlayingMovies } from '../NowPlayingMovies/NowPlayingMovies'
import { PopularMovies } from '../PopularMovies/PopularMovies'
import { createStore } from '@/_app/providers/StoreProvider'
import { headers } from 'next/headers'
import { acceptLanguageParser } from '@/shared/lib/acceptLanguageParser'
import { AppLanguages } from '@/shared/types/locale'
import { redirect } from 'next/navigation'
import { AcceptLanguageHeaderParsedObject } from '@/shared/types/common'
// import { NowPlayingMovies } from '../NowPlayingMovies/NowPlayingMovies'
// import { PopularMovies } from '../PopularMovies/PopularMovies'
// import { UpcomingMovies } from '../UpcomingMovies/UpcomingMovies'
// import { TopRatedMovies } from '../TopRatedMovies/TopRatedMovies'

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

  const initialData = movieApi.endpoints.getNowPlayingMovies.select({ page: 1 })(store.getState()).data?.data || []

  return (
    <DefaultAnimLayout>
      <Container>
        <VStack align={'start'} gap={25}>

          <Title textAlign='left'>Movies</Title>

          <SelectMovieList
            // onSelectList={}
            value={initialMovieListType}
          />

          {/* <MoviesContent/> */}
          {initialMovieListType === 'now-playing' && <NowPlayingMovies initialData={initialData} />}
          {/* {initialMovieListType === 'popular' && <PopularMovies/>} */}

        </VStack>
      </Container>
    </DefaultAnimLayout>
  )
}