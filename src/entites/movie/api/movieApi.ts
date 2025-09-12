import { rtkApi } from "@/shared/api/rtkApi";
import { MovieDtoSchema } from "@/shared/api/contracts";
import z from "zod";
import { ListResponse, MovieDto } from "@/shared/api/types";
import { movieDtoMap } from "../lib/movieDtoMap";
import { AppLanguages } from "@/shared/types/locale";

export const movieApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({

    getNowPlayingMovies: build.query<ListResponse<MovieDto>, { page?: number, language?: AppLanguages }>({
      query: ({ page = 1, language = 'en-EN' }) => ({
        url: 'movie/now_playing',
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
        if (z.array(MovieDtoSchema).parse(res.results)) {
          return {
            data: res.results.map(movieDtoMap) || [],
            totalPages: res.total_pages
          }
        }
      },
      // keepUnusedDataFor: 0
    }),

    getPopularMovies: build.query<ListResponse<MovieDto>, { page?: number, language?: AppLanguages }>({
      query: ({ page = 1, language = 'en-EN' }) => ({
        url: 'movie/popular',
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
        if (z.array(MovieDtoSchema).parse(res.results)) {
          console.log('valid data')
          return {
            data: res.results.map(movieDtoMap) || [],
            totalPages: res.total_pages
          }
        }
      },
      // keepUnusedDataFor: 0
    }),

    getTopRatedMovies: build.query<ListResponse<MovieDto>, { page?: number, language?: AppLanguages }>({
      query: ({ page = 1, language = 'en-EN' }) => ({
        url: 'movie/top_rated',
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
        if (z.array(MovieDtoSchema).parse(res.results)) {
          return {
            data: res.results.map(movieDtoMap) || [],
            totalPages: res.total_pages
          }
        }
      },
      // keepUnusedDataFor: 0
    }),

    getUpcomingMovies: build.query<ListResponse<MovieDto>, { page?: number, language?: AppLanguages }>({
      query: ({ page = 1, language = 'en-EN' }) => ({
        url: 'movie/upcoming',
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
        if (z.array(MovieDtoSchema).parse(res.results)) {
          return {
            data: res.results.map(movieDtoMap) || [],
            totalPages: res.total_pages
          }
        }
      },
      // keepUnusedDataFor: 0
    }),

  })
})
