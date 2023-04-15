import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamApi = createApi({
  reducerPath: 'shazamApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '35a6534a08msh8c500d0bc5cad2fp170b35jsn8f7d160a3a03');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/track' }),
    getSongDetails: builder.query({ query: (songid) => `/songs/get-details?key=${songid}` }),
    getSongsRelated: builder.query({ query: (songid) => `/songs/list-recommendations?key=${songid}` }),
    getArtistDetails: builder.query({ query: (artistId) => `/artists/get-summary?id=${artistId}` }),
    getSongsBySearch: builder.query({ query: (searchTerm) => `/search?term=${searchTerm}&locale=en-US&offset=0&limit=5` }),
  }),
});

export const { useGetTopChartsQuery, useGetSongDetailsQuery, useGetSongsRelatedQuery, useGetArtistDetailsQuery, useGetSongsBySearchQuery } = shazamApi;
