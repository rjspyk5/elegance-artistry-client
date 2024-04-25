import { createBrowserRouter } from "react-router-dom";
import { Root } from "./Layout/Root";
import { Home } from "./Pages/Home";
import { PrivateRoute } from "./Pages/PrivateRoute";
import { AddArtIteam } from "./Pages/AddArtIteam";
import { MyArtList } from "./Pages/MyArtList";
import { AllArtAndCrafts } from "./Pages/AllArtAndCrafts";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/arts",
        element: <AllArtAndCrafts />,
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/add",
        element: (
          <PrivateRoute>
            <AddArtIteam />
          </PrivateRoute>
        ),
      },
      {
        path: "/myart",
        element: (
          <PrivateRoute>
            <MyArtList />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
