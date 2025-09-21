import { createStore } from "@/_app/providers/StoreProvider"
import { MovieLists } from "@/entites/movie"
import { MoviesPage as MoviesPageComponent } from "@/pages/moviesPage"
import { acceptLanguageParser } from "@/shared/lib/acceptLanguageParser"
import { FC } from "react"
import { headers } from "next/headers"
import { headerKeys } from "@/shared/consts/headers"
import { movieApi } from "@/entites/movie"
import { redirect } from "next/navigation"
import { DefaultAnimLayout } from "@/_app/layouts/DefaultAnimLayout"
import { Container } from "@/shared/ui/Container/Container"
import { VStack } from "@/shared/ui/Stack/VStack/VStack"
import { Title } from "@/shared/ui/Title/Title"
import { MoviesContent } from "@/pages/moviesPage/ui/MoviesContent/MoviesContent"
import { AppLanguages } from "@/shared/types/locale"
const axios = require('axios').default;

const MoviesPage: FC<{ searchParams?: { category?: MovieLists } }> = async ({ searchParams }) => {
  const store = createStore()
  const headersList = await headers()
  const params = await searchParams
  const movieListType = params?.category
  const acceptLanguage = acceptLanguageParser(headersList.get(headerKeys.ACCEPT_LANGUAGE))
  const { mainLanguage } = acceptLanguage

  switch (movieListType) {
    case 'now-playing':
      await store.dispatch(movieApi.endpoints.getNowPlayingMovies.initiate({ language: mainLanguage as AppLanguages }))
      break
    case 'popular':
      await store.dispatch(movieApi.endpoints.getPopularMovies.initiate({ language: mainLanguage as AppLanguages }))
      break
    case 'top-rated':
      await store.dispatch(movieApi.endpoints.getTopRatedMovies.initiate({ language: mainLanguage as AppLanguages }))
      break
    case 'upcoming':
      await store.dispatch(movieApi.endpoints.getUpcomingMovies.initiate({ language: mainLanguage as AppLanguages }))
      break
    default:
      redirect('/movies?category=now-playing')
  }

  const initialData = () => {
    switch (movieListType) {
      case 'now-playing':
        return movieApi.endpoints.getNowPlayingMovies.select({ language: mainLanguage as AppLanguages })(store.getState()).data ?? {pages: [], pageParams: []}
      case 'popular':
        return movieApi.endpoints.getPopularMovies.select({ language: mainLanguage as AppLanguages })(store.getState()).data ?? {pages: [], pageParams: []}
      case 'top-rated':
        return movieApi.endpoints.getTopRatedMovies.select({ language: mainLanguage as AppLanguages })(store.getState()).data ?? {pages: [], pageParams: []}
      case 'upcoming':
        return movieApi.endpoints.getUpcomingMovies.select({ language: mainLanguage as AppLanguages })(store.getState()).data ?? {pages: [], pageParams: []}
    }
  }



  return (
    <DefaultAnimLayout>
      <Container>
        <VStack align={'start'} gap={25}>
          <Title textAlign='left'>Movies</Title>
          <MoviesContent
            initialData={initialData().pages[0].data}
            initialMovieListType={movieListType}
          />
        </VStack>
      </Container>
    </DefaultAnimLayout>
  )
}

export default MoviesPage
