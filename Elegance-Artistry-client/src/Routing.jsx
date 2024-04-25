import { createBrowserRouter } from "react-router-dom";
import { Root } from "./Layout/Root";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);
