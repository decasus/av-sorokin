import { Loader } from "lucide-react";

const Spinner = () => {
  return (
    <Loader
      size={48}
      className="my-10"
      style={{ animation: "rotate 1s infinite" }}
    />
  );
};

export default Spinner;
