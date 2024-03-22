import axios from 'axios';

const url = 'https://api.themoviedb.org/3';

const options = {
  params: { language: 'en-US' },
  include_adult: false,
  headers: {
    Authorization:
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZGY3NDgxZTQ5N2NjNmIwYmM4YjY1YmNmMWVmY2EzZCIsInN1YiI6IjY1ZjcxZDNmZWY5ZDcyMDE3ZWQ1OWI4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ibmQkZm78mMh7I8Z7lBYklhxH8bLmfkW7xnBjxip6_I";

 },
  accept: 'application/json',
};

axios.defaults.baseURL = url;

export async function fetchData() {
  const response = await axios.get('trending/movie/day', options);

  return response.data;
}

export async function fetchMovieData(movieId) {
  const response = await axios.get(`movie/${movieId}`, options);

  return response.data;
}

export async function fetchMovieReviews(movieId) {
  const response = await axios.get(`movie/${movieId}/reviews`, options);

  return response.data;
}

export async function fetchMovieCast(movieId) {
  const response = await axios.get(`movie/${movieId}/credits`, options);

  return response.data;
}

export async function searchMovie(query) {
  options.params.query = query;

  const response = await axios.get('search/movie', options);

  return response.data;
}