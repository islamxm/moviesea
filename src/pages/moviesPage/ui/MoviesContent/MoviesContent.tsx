'use client'
import { MovieLists } from "@/entites/movie"
import { useState, FC } from "react"
import { SelectMovieList } from "@/features/select-movie-list"
import { VStack } from "@/shared/ui/Stack/VStack/VStack"
import { NowPlayingMovies } from "../NowPlayingMovies/NowPlayingMovies"
import { PopularMovies } from "../PopularMovies/PopularMovies"
import { TopRatedMovies } from "../TopRatedMovies/TopRatedMovies"
import { UpcomingMovies } from "../UpcomingMovies/UpcomingMovies"
import { MediaBase } from "@/shared/api/types"

type Props = {
  initialMovieListType: MovieLists
  initialData: Array<MediaBase>
}

export const MoviesContent: FC<Props> = ({
  initialMovieListType,
  initialData
}) => {
  const [listType, setListType] = useState<MovieLists>(initialMovieListType)
  
  const initialDataFromType = initialMovieListType === listType ? initialData : []


  return (
    <VStack fill gap={25} align={'start'}>
      <SelectMovieList
        value={listType}
        onSelectList={setListType}
      />
      {listType === 'now-playing' && <NowPlayingMovies initialData={initialDataFromType}/>}
      {listType === 'popular' && <PopularMovies initialData={initialDataFromType}/>}
      {listType === 'top-rated' && <TopRatedMovies initialData={initialDataFromType}/>}
      {listType === 'upcoming' && <UpcomingMovies initialData={initialDataFromType}/>}
    </VStack>
  )
}
