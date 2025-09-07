import { z } from 'zod'


export const UserDtoSchema = z.object({
  avatar: z.object({
    gravatar: z.object({
      hash: z.string()
    }),
    tmdb: z.object({
      avatar_path: z.string().nullable()
    })
  }),
  id: z.number(),
  iso_639_1: z.string(),
  iso_3166_1: z.string(),
  name: z.string(),
  include_adult: z.boolean(),
  username: z.string()
})

export const MovieDtoSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string().nullable(),
  genre_ids: z.array(z.number()),
  id: z.number(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string().nullable(),
  release_date: z.string(),
  title: z.string(),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.number()
})

export const GenreDtoSchema = z.object({
  id: z.number(),
  name: z.string()
})

export const MovieDetailsDtoSchema = MovieDtoSchema.extend({
  belongs_to_collection: z.string().nullable(),
  budget: z.number(),
  genres: z.array(GenreDtoSchema),
  homepage: z.string(),
  imdb_id: z.string(),
  production_companies: z.array(z.object({
    id: z.number(),
    logo_path: z.number(),
    name: z.string(),
    origin_country: z.string(),
  })),
  production_countries: z.array(z.object({
    iso_3166_1: z.string(),
    name: z.string()
  })),
  revenue: z.number(),
  runtime: z.number(),
  spoken_languages: z.array(z.object({
    english_name: z.string(),
    iso_639_1: z.string(),
    name: z.string()
  })),
  status: z.string(),
  tagline: z.string(),
})

export const SeriesDtoSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string(),
  genre_ids: z.array(z.number()),
  id: z.number(),
  original_language: z.string(),
  original_name: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string(),
  first_air_date: z.string(),
  name: z.string(),
  vote_average: z.number(),
  vote_count: z.number()
})

export const ReviewDtoSchema = z.object({
  id: z.string(),
  author: z.string(),
  author_details: z.object({
    name: z.string(),
    username: z.string(),
    avatar_path: z.string(),
    rating: z.number(),
  }),
  content: z.string(),
  created_at: z.string(),
  iso_639_1: z.string(),
  media_id: z.number(),
  media_title: z.string(),
  media_type: z.string(),
  updated_at: z.string(),
  url: z.url()
})
