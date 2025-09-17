import z from 'zod'

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