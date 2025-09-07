import { rtkApi } from "./rtkApi";

export const genresApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getMovieGenres: build.query<any,any>({
      query: () => ({
        url: 'genre/movie/list'
      }),
      // transformErrorResponse: (res:any) => {
      //   ret
      // }
    }),
    getTvShowGenres: build.query<any,any>({
      query: () => ({
        url: 'genre/tv/list'
      }),
      // transformErrorResponse: (res) => {
      //   console.log(res)
      //   return res
      // }
    })
  })
})