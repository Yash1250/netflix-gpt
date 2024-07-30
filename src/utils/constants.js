/** @format */

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzI5NmM5ZmYwN2MxMmQxNTM1YWRhNDBhNjFlNDc1NyIsIm5iZiI6MTcyMTYzMjcxNS4zMTU2ODYsInN1YiI6IjY2OWUwNWMxNzk0ZDFkZjgwYzUwMjE0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pBoDKdZ3iS9a6QXrSsLXq8pqZmti3dHo0gzQ5CEtLp8",
  },
};

export const nowPlayingApi =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const popularApi = "https://api.themoviedb.org/3/movie/popular?page=1";

export const topRatedApi =
  "https://api.themoviedb.org/3/movie/top_rated?page=1";

export const upcomingApi = "https://api.themoviedb.org/3/movie/upcoming?page=1";

export const POSTER_IMG_URL = "https://image.tmdb.org/t/p/w500/";
