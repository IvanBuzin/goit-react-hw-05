import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ data, urlPath }) => {
  const defaultImg =
    "https://drive.google.com/file/d/1duL1VQXwqE_WgAS_279R3dJhwdF-9JZ3/view?usp=sharing";
  const location = useLocation();

  return (
    <ul className={css.list}>
      {data.map((el) => {
        return (
          <li key={el.id} className={css.item}>
            <img
              className={css.img}
              src={
                data.poster_path ? `${urlPath}${data.poster_path}` : defaultImg
              }
              alt={data.title}
            />
            <Link to={`/movies/${el.id}`} state={location}>
              {el.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
