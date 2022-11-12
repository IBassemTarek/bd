import React from "react";
import Spinner from "./Spinner";

const Loader = () => {
  return (
    <div className="flex flex-1 items-center justify-center flex-col gap-2 p-4">
      <h1 className="text-xl text-center">Wait for your surprise {"<3"}</h1>
      <Spinner />
    </div>
  );
};

export default Loader;
