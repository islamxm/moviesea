import z from 'zod'
import { MovieDtoSchema, MovieDetailsDtoSchema } from "./contracts"

export type MovieLists = 'now-playing' | 'popular' | 'top-rated' | 'upcoming'

export const movieLists:Record<MovieLists, any> = {
  'now-playing': {id: 1, label: 'Now Playing', value: 'now-playing'},
  'popular': {id: 2, label: 'Popular', value: 'popular'},
  'top-rated': {id: 3, label: 'Top Rated', value: 'top-rated'},
  'upcoming': {id: 3, label: 'Upcoming', value: 'upcoming'},
} 

export type MovieDto = z.infer<typeof MovieDtoSchema>
export type MovieDetailsDto = z.infer<typeof MovieDetailsDtoSchema>