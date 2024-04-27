import { createBrowserRouter } from "react-router-dom";
import { Root } from "./Layout/Root";
import { Home } from "./Pages/Home";
import { PrivateRoute } from "./Pages/PrivateRoute";
import { AddArtIteam } from "./Pages/AddArtIteam";
import { MyArtList } from "./Pages/MyArtList";
import { AllArtAndCrafts } from "./Pages/AllArtAndCrafts";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { ErrorPage } from "./Components/ErrorPage";
import { ArtDetails } from "./Pages/ArtDetails";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/arts",
        element: <AllArtAndCrafts />,
        loader: () => fetch(`http://localhost:5000/arts`),
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

      {
        path: "/art/:id",
        element: (
          <PrivateRoute>
            <ArtDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/art/${params.id}`),
      },
    ],
  },
]);
