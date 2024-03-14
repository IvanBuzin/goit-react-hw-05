import { ProgressBar } from "react-loader-spinner";
const Loader = () => {
  return (
    <ProgressBar
      visible={true}
      height="80"
      width="80"
      color="grin"
      ariaLabel="progres-bar-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};
export default Loader;
