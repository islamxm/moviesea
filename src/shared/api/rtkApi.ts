import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = process.env.NEXT_PUBLIC_API_URL

export const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      //тут походу надо разместить логику назначения каких то хедеров, например если в хранилище есть токен авторизации то можно его оттуда получить и сетить в хедеры
      // и возвращать надо сам headers
      headers.set('Authorization', `Bearer ${API_KEY}`)
      headers.set('Cache-Control', 'no-cache');
      // если никакой логики работы с хедерами перед запросами нет то можно удалить эту часть
      return headers
    }
  }),
  endpoints: (build) => ({})
})