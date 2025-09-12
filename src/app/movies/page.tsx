import { createStore } from "@/_app/providers/StoreProvider"
import { MovieLists } from "@/entites/movie"
import { MoviesPage as MoviesPageComponent } from "@/pages/moviesPage"
import { acceptLanguageParser } from "@/shared/lib/acceptLanguageParser"
import { FC } from "react"
import { headers } from "next/headers"
import { headerKeys } from "@/shared/consts/headers"

const MoviesPage:FC<{searchParams?: {category?: MovieLists}}> = async ({searchParams}) => {
  const store = createStore()
  const headersList = await headers()
  const params = await searchParams
  const movieListType = params?.category
  const acceptLanguage = acceptLanguageParser(headersList.get(headerKeys.ACCEPT_LANGUAGE))

  return (
    <MoviesPageComponent 
      initialMovieListType={movieListType}
      store={store}
      acceptLanguage={acceptLanguage}
      />
  )
}

export default MoviesPage
