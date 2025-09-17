import z from "zod";

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