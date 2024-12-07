const API_KEY = "fde7e320e3ebc33b85faf37eae8626db";
const baseUrl = "https://api.themoviedb.org/3";
const animationGenre = 16;

export const fetchMovies = () => {
  return new Promise((resolve) => {
    resolve([{}]);
  });
};

export const fetchTrending = async (): Promise<TrendingResponseItem[]> => {
  const movies = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?adult=false&api_key=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data.results.filter(
        (item: TrendingResponseItem) =>
          item.genre_ids.includes(animationGenre) &&
          item.origin_country?.includes("JP")
      );
    });

  const series = await fetch(
    `https://api.themoviedb.org/3/trending/tv/week?adult=false&api_key=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data.results.filter(
        (item: TrendingResponseItem) =>
          item.genre_ids.includes(animationGenre) &&
          item?.origin_country.includes("JP")
      );
    });
  return [...movies, ...series];
};

export interface TrendingResponseItem {
  backdrop_path: string;
  id: number;
  name: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: false;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
}
