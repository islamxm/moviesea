import { createStore } from "@/_app/providers/StoreProvider"
import { MovieLists } from "@/entites/movie"
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

const MoviesPage: FC<{ searchParams?: { category?: MovieLists } }> = async ({ searchParams }) => {
  //инициализация стора на сервере
  const store = createStore()
  // получение заголовков
  const headersList = await headers()
  // получение параметров url
  const params = await searchParams
  // получение начальной категории фильмов из параметров url
  const movieListType = params?.category
  // парсинг заголовка acceptLanguage
  const acceptLanguage = acceptLanguageParser(headersList.get(headerKeys.ACCEPT_LANGUAGE))
  // деструктуризация основного языка на основе распарсенного acceptLanguage
  const { mainLanguage } = acceptLanguage

  // получение списка начального списка фильмов на сервере на основе выбранного типа
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

  // получение начальных данных для дочерних компонентов
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
