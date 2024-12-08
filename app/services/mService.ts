const API_KEY = "fde7e320e3ebc33b85faf37eae8626db";
const baseUrl = "https://api.themoviedb.org/3";
const animationGenre = 16;

export const searchMovies = async (
  keywords: string
): Promise<TrendingResponseItem[]> => {
  let allResults: TrendingResponseItem[] = [];

  for (let i = 1; i <= 6; i++) {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(
        keywords
      )}&page=${i}`
    );
    const data = await response.json();
    console.log({ data });
    // @ts-ignore
    // if (data.results.length) break;

    // @ts-ignore
    const filtered = data.results.filter(
      (item: TrendingResponseItem) =>
        item.genre_ids &&
        item.genre_ids.includes(animationGenre) &&
        item.origin_country?.includes("JP") &&
        item.media_type !== "person"
    ) as TrendingResponseItem[];

    allResults.push(...filtered);
  }
  console.log(allResults);
  return new Promise((resolve) => resolve(allResults));
};

export const fetchDetails = async (
  type: "movie" | "tv",
  id: number
): Promise<MediaDetails | undefined> => {
  const endpoint = `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return new Promise((resolve) => resolve(data));
  } catch (error) {
    console.error("Error fetching details:", error);
  }
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

export const fetchTopMovies = async (): Promise<TrendingResponseItem[]> => {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16&with_original_language=ja&sort_by=vote_average.desc&vote_count.gte=100`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
      return data.results.slice(0, 15) as TrendingResponseItem[];
    });
};

export const fetchTopSeries = async (): Promise<TrendingResponseItem[]> => {
  return fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=16&with_original_language=ja&sort_by=vote_average.desc&vote_count.gte=100`
  )
    .then((response) => response.json())
    .then((data) => {
      return data.results.slice(0, 15) as TrendingResponseItem[];
    });
};

export interface TrendingResponseItem {
  backdrop_path: string;
  id: number;
  name: string;
  title?: string;
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

export interface MediaDetails {
  adult: false;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: ["JP"];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  name: string;
  number_of_episodes: number;
  success: boolean;
  // production_companies: [
  //   {
  //     id: number;
  //     logo_path: string;
  //     name: string;
  //     origin_country: string;
  //   }
  // ];
  // production_countries: [
  //   {
  //     iso_3166_1: string;
  //     name: string;
  //   }
  // ];
  release_date: string;
  revenue: number;
  runtime: number;
  // spoken_languages: [
  //   {
  //     english_name: string;
  //     iso_639_1: string;
  //     name: string;
  //   }
  // ];
  status: string;
  tagline: "";
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
}
