import { rtkApi } from "@/shared/api/rtkApi";
import z from "zod";
import { InfiniteListResponse, MediaBase } from "@/shared/api/types";
import { MovieDtoSchema } from "../contracts";
import { movieDtoMap } from "../lib/movieDtoMap";
import { InfiniteData } from "@reduxjs/toolkit/query";
import { EndpointBuilder, BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta } from "@reduxjs/toolkit/query";

export type MovieInfiniteDataType = InfiniteData<InfiniteListResponse<MediaBase>, number>

const transforMoviesResponse = (res?: any, ...args: any[]) => {
  if (z.array(MovieDtoSchema).safeParse(res.results).success) {
    return {
      data: res.results.map(movieDtoMap) || [],
      totalPages: res.total_pages,
      page: res.page
    }
  }
}

const buildQuery = (build: EndpointBuilder<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, never, "api">, url: string) => {
  return build.infiniteQuery<InfiniteListResponse<MediaBase>, {language?: string}, number>({
    query: ({queryArg: {language = 'en-EN'}, pageParam = 1}) => ({
      url,
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
    transformResponse: (res: any, f, s): any => transforMoviesResponse(res)
  })
}

export const movieApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({

    getNowPlayingMovies: buildQuery(build, 'movie/now_playing'),

    getPopularMovies: buildQuery(build, 'movie/popular'),

    getTopRatedMovies: buildQuery(build, 'movie/top_rated'),

    getUpcomingMovies: buildQuery(build, 'movie/upcoming'),
  
  })
})
