import { rtkApi } from "@/shared/api/rtkApi";
import z from "zod";
import { InfiniteListResponse, MediaBase } from "@/shared/api/types";
import { MovieDto } from "../model";
import { MovieDtoSchema } from "../contracts";
import { movieDtoMap } from "../lib/movieDtoMap";
import { AppLanguages } from "@/shared/types/locale";


export const movieApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({

    getNowPlayingMovies: build.infiniteQuery<InfiniteListResponse<MediaBase>, { language?: string }, number>({
      query: ({ queryArg: { language = 'en-EN' }, pageParam = 1 }) => ({
        url: 'movie/now_playing',
        params: {
          page: pageParam,
          language
        }
      }),
      infiniteQueryOptions: {
        initialPageParam: 259,
        getNextPageParam(lastPage, allPages, lastPageParam, allPageParams, queryArg) {
          return lastPage.totalPages > lastPage.page ? lastPage.page + 1 : undefined;
        },
      },
      transformResponse: (res: any): any => {
        if (z.array(MovieDtoSchema).parse(res.results)) {
          return {
            data: res.results.map(movieDtoMap) || [],
            totalPages: res.total_pages,
            page: res.page
          }
        }
      },
      // keepUnusedDataFor: 0
    }),

    getPopularMovies: build.infiniteQuery<InfiniteListResponse<MediaBase>, { language?: string }, number>({
      query: ({ queryArg: {language = 'en-EN'}, pageParam = 1 }) => ({
        url: 'movie/popular',
        params: {
          page: pageParam,
          language
        }
      }),
      infiniteQueryOptions: {
        initialPageParam: 1,
        getNextPageParam(lastPage, allPages, lastPageParam, allPageParams, queryArg) {
          return lastPage.totalPages > lastPage.page ? lastPage.page + 1 : undefined;
        },
      },
      transformResponse: (res: any): any => {
        if (z.array(MovieDtoSchema).parse(res.results)) {
          return {
            data: res.results.map(movieDtoMap) || [],
            totalPages: res.total_pages,
            page: res.page
          }
        }
      },
      // keepUnusedDataFor: 0
    }),

    getTopRatedMovies: build.infiniteQuery<InfiniteListResponse<MediaBase>, { language?: string }, number>({
      query: ({ queryArg: {language = 'en-EN'}, pageParam = 1 }) => ({
        url: 'movie/top_rated',
        params: {
          page: pageParam,
          language
        }
      }),
      infiniteQueryOptions: {
        initialPageParam: 1,
        getNextPageParam(lastPage, allPages, lastPageParam, allPageParams, queryArg) {
          return lastPage.totalPages > lastPage.page ? lastPage.page + 1 : undefined;
        },
      },
      transformResponse: (res: any): any => {
        if (z.array(MovieDtoSchema).parse(res.results)) {
          return {
            data: res.results.map(movieDtoMap) || [],
            totalPages: res.total_pages,
            page: res.page
          }
        }
      },
      // keepUnusedDataFor: 0
    }),

    getUpcomingMovies: build.infiniteQuery<InfiniteListResponse<MediaBase>, { language?: string }, number>({
      query: ({ queryArg: {language = 'en-EN'}, pageParam = 1 }) => ({
        url: 'movie/upcoming',
        params: {
          page: pageParam,
          language
        }
      }),
      infiniteQueryOptions: {
        initialPageParam: 1,
        getNextPageParam(lastPage, allPages, lastPageParam, allPageParams, queryArg) {
          return lastPage.totalPages > lastPage.page ? lastPage.page + 1 : undefined;
        },
      },
      transformResponse: (res: any): any => {
        if (z.array(MovieDtoSchema).parse(res.results)) {
          return {
            data: res.results.map(movieDtoMap) || [],
            totalPages: res.total_pages,
            page: res.page
          }
        }
      },
      // keepUnusedDataFor: 0
    }),

  })
})
