import { SeriesDto } from "@/shared/api/types"
import { SeriesBase } from "../model"

export const seriesDtoMap = (series: SeriesDto): SeriesBase => {
  return {
    id: series.id,
    title: series.name,
    poster_path: series.poster_path,
    vote_average: series.vote_average,
    adult: series.adult,
    genres: series.genre_ids,
    first_air_date: series.first_air_date
  }
}