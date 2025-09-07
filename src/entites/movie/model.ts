export type MovieLists = 'now-playing' | 'popular' | 'top-rated' | 'upcoming'

export const movieLists:Record<MovieLists, any> = {
  'now-playing': {id: 1, label: 'Now Playing', value: 'now-playing'},
  'popular': {id: 2, label: 'Popular', value: 'popular'},
  'top-rated': {id: 3, label: 'Top Rated', value: 'top-rated'},
  'upcoming': {id: 3, label: 'Upcoming', value: 'upcoming'},
} 

export type MovieBase = {
  id: number,
  poster_path: string | null
  title: string
  vote_average: number,
  adult: boolean,
  genres: any[]
}
