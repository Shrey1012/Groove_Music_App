import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCountryApi = createApi({
  reducerPath: "shazamCountryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://genius-song-lyrics1.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "35a6534a08msh8c500d0bc5cad2fp170b35jsn8f7d160a3a03"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTrendingSongs: builder.query({ query: () => '/chart/songs/' }),  }),
});

export const { useGetTrendingSongsQuery } = shazamCountryApi;
