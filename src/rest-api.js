import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZGY3NDgxZTQ5N2NjNmIwYmM4YjY1YmNmMWVmY2EzZCIsInN1YiI6IjY1ZjcxZDNmZWY5ZDcyMDE3ZWQ1OWI4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ibmQkZm78mMh7I8Z7lBYklhxH8bLmfkW7xnBjxip6_I";

export const trendingMovies = async () => {
  const response = await axios.get("/trending/movie/day");
  return response.data.results;
};

export const getMovies = async (query, page) => {
  const response = await axios.get(`/search/movie?query=${query}&page=${page}`);
  return response.data;
};

export const getMovieById = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}`);
  return response.data;
};

export const getImagePath = async () => {
  const response = await axios.get("/configuration");
  return response.data.images;
};

export const getCredits = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits`);

  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews`);
  return response.data.results;
};
