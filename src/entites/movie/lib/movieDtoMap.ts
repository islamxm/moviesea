import { MediaBase } from "@/shared/api/types";
import { MovieDto } from "../model";

export const movieDtoMap = (movie: MovieDto): MediaBase => {
  return {
    id: movie.id,
    title: movie.title,
    image: movie.poster_path,
    vote_average: movie.vote_average,
    adult: movie.adult,
    type: 'movie'
  }
}