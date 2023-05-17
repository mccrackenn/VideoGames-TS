import useData from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// Stores genres in static files. No longer need to make API calls to get the data, it is stored in data/genres.ts

// const useGenres = () => useData<Genre>("/genres");
const useGenres = () => ({
  data: genres,
  loading: false,
  error: null,
});

export default useGenres;
