import {z} from 'zod'
import { UserDtoSchema } from "./contracts"

export type UserDto = z.infer<typeof UserDtoSchema>

