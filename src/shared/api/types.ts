import {z} from 'zod'

import {
  UserDtoSchema,
  MovieDtoSchema,
  SeriesDtoSchema,
  ReviewDtoSchema,
  MovieDetailsDtoSchema
} from "./contracts";

export type UserDto = z.infer<typeof UserDtoSchema>

export type MovieDto = z.infer<typeof MovieDtoSchema>
export type MovieDetailsDto = z.infer<typeof MovieDetailsDtoSchema>

export type SeriesDto = z.infer<typeof SeriesDtoSchema>

export type ReviewDto = z.infer<typeof ReviewDtoSchema>



//common generics
