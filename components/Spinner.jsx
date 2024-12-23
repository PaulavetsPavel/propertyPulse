"user client";
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = ({ loading }) => {
  const override = {
    display: "block",
    margin: "100px auto",
  };
  return (
    <ClipLoader
      color="#3b82f6"
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading spinner"
    />
  );
};

export default Spinner;
