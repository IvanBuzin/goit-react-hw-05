import { useRef, useState } from "react";
import { getMovies } from "../../rest-api";
import css from "./MoviesPage.module.css";
import { useNavigate, NavLink } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";

export default function MoviesPage() {
  const inputElement = useRef();
  const [moviesList, setMoviesList] = useState(null);
  const navigate = useNavigate();

  async function getListOfMovies(event) {
    event.preventDefault();

    if (inputElement.current.value.trim() === "") {
      toast.error("Plese input your request!", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }
    try {
      const nameOfMovie = inputElement.current.value;
      const data = await getMovies(nameOfMovie);
      setMoviesList(data);
      navigate(`?query=${nameOfMovie}`);

      if (data.length === 0) {
        toast.info("Unfortunately, there are no movies for this request!", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (error) {
      console.error("Error while searching for movies by keyword: ", error);
    } finally {
      inputElement.current.value = "";
    }
  }

  return (
    <>
      <form className={css.formElement} onSubmit={getListOfMovies}>
        <input className={css.inputItem} type="text" ref={inputElement} />
        <button className={css.buttonElement} type="submit">
          Search
        </button>
      </form>

      <ToastContainer />

      <ul>
        {moviesList &&
          moviesList.map((movie) => (
            <li className={css.listItem} key={movie.id}>
              <NavLink className={css.linkElement} to={`${movie.id}`}>
                {movie.title}
              </NavLink>
            </li>
          ))}
      </ul>
    </>
  );
}
