import { MediaBase } from "@/shared/api/types"
import { SeriesDto } from "../model"

export const seriesDtoMap = (series: SeriesDto): MediaBase => {
  return {
    id: series.id,
    title: series.name,
    image: series.poster_path,
    vote_average: series.vote_average,
    adult: series.adult,
    type: 'series'
  }
}