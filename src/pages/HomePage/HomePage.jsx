import { useEffect } from "react";
import { trendingMovies } from "../../rest-api";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import css from "./HomePage.module.css";

export default function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await trendingMovies();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching trending movies: ", error);
      }
    };
    getMovies();
  }, []);
  return (
    <div>
      <h2>Trending todey</h2>
      <ul>
        {movies &&
          movies.map((movie) => {
            <li key={movie.id}>
              <NavLink className={css.linkElrment} to={`/movies/${movie.id}`}>
                {movie.original_title}
              </NavLink>
            </li>;
          })}
      </ul>
    </div>
  );
}
