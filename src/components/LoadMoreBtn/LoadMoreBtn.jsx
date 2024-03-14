import css from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ onClick }) => {
  return (
    <button type="buton" onClick={onClick} className={css.button}>
      Load More
    </button>
  );
};
export default LoadMoreBtn;
