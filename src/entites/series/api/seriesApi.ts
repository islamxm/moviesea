import { rtkApi } from "@/shared/api/rtkApi";
import z from "zod";
import { seriesDtoMap } from "../lib/seriesDtoMap";
import { AppLanguages } from "@/shared/types/locale";
import { ListResponse, MediaBase } from "@/shared/api/types";
import { SeriesDtoSchema } from "../contracts";

export const seriesApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({

    getAiringTodaySeries: build.query<ListResponse<MediaBase>, { page?: number, language?: string }>({
      query: ({ page = 1, language = 'en-EN' }) => ({
        url: 'tv/airing_today',
        params: {
          page,
          language
        }
      }),
      merge(currentCacheData, res) {
        currentCacheData.data.push(...res.data)

      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page !== previousArg?.page
      },
      transformResponse: (res: any): any => {
        console.log(res.results)
        if (z.array(SeriesDtoSchema).parse(res.results)) {
          return {
            data: res.results.map(seriesDtoMap) || [],
            totalPages: res.total_pages
          }
        }
      },
    }),

    getOnTheAirSeries: build.query<ListResponse<MediaBase>, { page?: number, language?: string }>({
      query: ({ page = 1, language = 'en-EN' }) => ({
        url: 'tv/on_the_air',
        params: {
          page,
          language
        }
      }),
      merge(currentCacheData, res) {
        currentCacheData.data.push(...res.data)
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page !== previousArg?.page
      },
      transformResponse: (res: any): any => {
        if (z.array(SeriesDtoSchema).parse(res.results)) {
          return {
            data: res.results.map(seriesDtoMap) || [],
            totalPages: res.total_pages
          }
        }
      },
    }),

    getPopularSeries: build.query<ListResponse<MediaBase>, { page?: number, language?: string }>({
      query: ({ page = 1, language = 'en-EN' }) => ({
        url: 'tv/popular',
        params: {
          page,
          language
        }
      }),
      merge(currentCacheData, res) {
        currentCacheData.data.push(...res.data)

      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page !== previousArg?.page
      },
      transformResponse: (res: any): any => {
        if (z.array(SeriesDtoSchema).parse(res.results)) {
          return {
            data: res.results.map(seriesDtoMap) || [],
            totalPages: res.total_pages
          }
        }
      },
    }),

    getTopRatedSeries: build.query<ListResponse<MediaBase>, { page?: number, language?: string }>({
      query: ({ page = 1, language = 'en-EN' }) => ({
        url: 'tv/top_rated',
        params: {
          page,
          language
        }
      }),
      merge(currentCacheData, res) {
        currentCacheData.data.push(...res.data)

      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page !== previousArg?.page
      },
      transformResponse: (res: any): any => {
        if (z.array(SeriesDtoSchema).parse(res.results)) {
          return {
            data: res.results.map(seriesDtoMap) || [],
            totalPages: res.total_pages
          }
        }
      },
    })
  })
})