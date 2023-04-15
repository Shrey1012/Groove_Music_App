import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCountryApi = createApi({
  reducerPath: "shazamCountryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://genius-song-lyrics1.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "40b843d9e4msh0584f48c64d6712p1982cdjsn38d63d3ad848"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTrendingSongs: builder.query({ query: () => '/chart/songs/' }),
  }),
});

export const { useGetTrendingSongsQuery } = shazamCountryApi;
