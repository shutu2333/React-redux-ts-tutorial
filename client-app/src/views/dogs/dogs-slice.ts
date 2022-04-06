import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
interface DogBreed {
  id: string;
  name: string;
  image: {
    url: string;
  };
}


const DOGS_API_KEY = "efef0c54-7e10-47ee-bb02-f206c4bb6dc7";
// Define a service using a base URL and expected endpoints
export const dogsApiSlice = createApi({
  reducerPath: "dogsApi",
  // lightweight wrapper of the base query
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thedogapi.com/v1",
    prepareHeaders: headers => {
      headers.set("x-api-key", DOGS_API_KEY);
      return headers;
    },
  }),
// Endpoints are just a set of operations that you want to perform against your server. 
// You define them as an object using the builder syntax. 
// There are two basic endpoint types: [query] and [mutation]
  endpoints: builder => ({
    fetchDogBreeds: builder.query<DogBreed[], number | void>({
      query: (limit = 10) => `/breeds?limit=${limit}`
    }),
    // other queries or mutation definition if needed
    //updateDogVotes: builder.mutation<xxxx, xxxx>({...})
  }),
});


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useFetchDogBreedsQuery } = dogsApiSlice;
