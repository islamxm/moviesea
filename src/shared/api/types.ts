export type MediaType = 'movie' | 'series'

export type MediaBase = {
  id: number
  image: string | null
  title: string
  vote_average: number
  adult: boolean
  type: MediaType
}

export type ListResponse<T extends {}> = {
  data: Array<T>,
  totalPages: number
}
