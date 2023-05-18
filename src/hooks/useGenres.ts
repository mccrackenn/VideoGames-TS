import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// Stores genres in static files. No longer need to make API calls to get the data, it is stored in data/genres.ts

// const useGenres = () => useData<Genre>("/genres");
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24 hours
    initialData: { results: genres, count: genres.length, next: null },
  });
// const useGenres = () => ({
//   data: genres,
//   loading: false,
//   error: null,
// });

export default useGenres;
