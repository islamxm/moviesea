import { rtkApi } from "@/shared/api/rtkApi";
import { SeriesBase } from "../model";
import { SeriesDtoSchema } from "@/shared/api/contracts";
import z from "zod";
import { seriesDtoMap } from "../lib/seriesDtoMap";

export const seriesApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({

    getAiringTodaySeries: build.query<any, { page?: number, language?: string }>({
      query: ({ page = 1, language = 'en-EN' }) => ({
        url: 'tv/airing_today',
        params: {
          page,
          language
        }
      }),
      merge(currentCacheData, res) {
        currentCacheData?.push(...res)
      },
      // serializeQueryArgs: ({ endpointName, ...rest }) => {
      //   return endpointName
      // },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page !== previousArg?.page
      },
      transformResponse: (res: any): Array<SeriesBase> => {
        return z.array(SeriesDtoSchema).parse(res.results).map(seriesDtoMap)
      },
    }),

    getOnTheAirSeries: build.query<any, { page?: number, language?: string }>({
      query: ({ page = 1, language = 'en-EN' }) => ({
        url: 'tv/on_the_air',
        params: {
          page,
          language
        }
      }),
      merge(currentCacheData, res) {
        currentCacheData?.push(...res)
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page !== previousArg?.page
      },
      transformResponse: (res: any): Array<SeriesBase> => {
        return z.array(SeriesDtoSchema).parse(res.results).map(seriesDtoMap)
      },
    }),

    getPopularSeries: build.query<any, { page?: number, language?: string }>({
      query: ({ page = 1, language = 'en-EN' }) => ({
        url: 'tv/popular',
        params: {
          page,
          language
        }
      }),
      merge(currentCacheData, res) {
        currentCacheData?.push(...res)
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page !== previousArg?.page
      },
      transformResponse: (res: any): Array<SeriesBase> => {
        return z.array(SeriesDtoSchema).parse(res.results).map(seriesDtoMap)
      },
    }),

    getTopRatedSeries: build.query<any, { page?: number, language?: string }>({
      query: ({ page = 1, language = 'en-EN' }) => ({
        url: 'tv/top_rated',
        params: {
          page,
          language
        }
      }),
      merge(currentCacheData, res) {
        currentCacheData?.push(...res)
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page !== previousArg?.page
      },
      transformResponse: (res: any): Array<SeriesBase> => {
        return z.array(SeriesDtoSchema).parse(res.results).map(seriesDtoMap)
      },
    })
  })
})