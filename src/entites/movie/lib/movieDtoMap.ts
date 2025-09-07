import { MovieDto } from "@/shared/api/types";
import { MovieBase } from "../model";

export const movieDtoMap = (movie: MovieDto): MovieBase => {
  return {
    id: movie.id,
    title: movie.title,
    poster_path: movie.poster_path,
    vote_average: movie.vote_average,
    adult: movie.adult,
    genres: movie.genre_ids
  }
}