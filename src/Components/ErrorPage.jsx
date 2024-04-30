import { useRouteError } from "react-router-dom";
import bg from "../assets/images/4043.png";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div
      id="error-page"
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <h1 className="text-4xl font-bold">Oops!</h1>
      <img className="max-w-lg mb-4" src={bg} alt="" />

      <p className="font-bold text-2xl">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
