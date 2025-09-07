import { rtkApi } from "@/shared/api/rtkApi";
import { MovieDtoSchema } from "@/shared/api/contracts";
import z from "zod";
import { MovieDto } from "@/shared/api/types";
import { MovieLists } from "../model";
import { MovieBase } from "../model";
import { movieDtoMap } from "../lib/movieDtoMap";


export const movieApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({

    getNowPlayingMovies: build.query<any, { page?: number, language?: string }>({
      query: ({ page = 1, language = 'en-EN' }) => ({
        url: 'movie/now_playing',
        params: {
          page,
          language
        }
      }),
      merge(currentCacheData, res) {
        currentCacheData?.data?.push(...res?.data)
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page !== previousArg?.page
      },
      transformResponse: (res: any): any => {
        // return z.array(MovieDtoSchema).parse(res.results).map(movieDtoMap)
        return {
          data: res.results,
          totalPages: res.total_pages
        }
      },
      // keepUnusedDataFor: 0
    }),

    getPopularMovies: build.query<any, { page?: number, language?: string }>({
      query: ({ page = 1, language = 'en-EN' }) => ({
        url: 'movie/popular',
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
      transformResponse: (res: any) => {
        return z.array(MovieDtoSchema).parse(res.results).map(movieDtoMap)
      },
      // keepUnusedDataFor: 0
    }),

    getTopRatedMovies: build.query<any, { page?: number, language?: string }>({
      query: ({ page = 1, language = 'en-EN' }) => ({
        url: 'movie/top_rated',
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
      transformResponse: (res: any) => {
        return z.array(MovieDtoSchema).parse(res.results).map(movieDtoMap)
      },
      // keepUnusedDataFor: 0
    }),

    getUpcomingMovies: build.query<any, { page?: number, language?: string }>({
      query: ({ page = 1, language = 'en-EN' }) => ({
        url: 'movie/upcoming',
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
      transformResponse: (res: any) => {
        return z.array(MovieDtoSchema).parse(res.results).map(movieDtoMap)
      },
      // keepUnusedDataFor: 0
    }),

  })
})
