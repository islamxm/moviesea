import { z } from 'zod'

export const GenreDtoSchema = z.object({
  id: z.number(),
  name: z.string()
})

// export const ListResponseSchema = z.object({
//   data: z.array(z.object()),
//   totalPages: 
// })
