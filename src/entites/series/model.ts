import z from 'zod'
import { SeriesDtoSchema } from "./contracts"

export type SeriesList = 'airing-today' | 'popular' | 'top-rated' | 'on-the-air'

export const seriesList:Record<SeriesList, any> = {
  'airing-today': {id: 1, label: 'Airing Today', value: 'airing-today'},
  'popular': {id: 2, label: 'Popular', value: 'popular'},
  'top-rated': {id: 3, label: 'Top Rated', value: 'top-rated'},
  'on-the-air': {id: 3, label: 'On the Air', value: 'on-the-air'},
} 

export type SeriesBase = {
  id: number,
  poster_path: string | null
  title: string
  vote_average: number,
  adult: boolean,
  genres: any[]
  first_air_date: string
}

export type SeriesDto = z.infer<typeof SeriesDtoSchema>

