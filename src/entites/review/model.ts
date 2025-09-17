import z from 'zod'
import { ReviewDtoSchema } from "./contracts"

export type ReviewDto = z.infer<typeof ReviewDtoSchema>
