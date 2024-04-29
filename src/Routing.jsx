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
import { UpdateArts } from "./Pages/UpdateArts";
import { SubCatagoryData } from "./Components/SubCatagoryData";

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
        loader: () => fetch(`https://elegance-artistry-server.vercel.app/arts`),
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
        loader: ({ params }) =>
          fetch(`https://elegance-artistry-server.vercel.app/art/${params.id}`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateArts />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://elegance-artistry-server.vercel.app/art/${params.id}`),
      },
      {
        path: "/catagory/:sub",
        element: (
          <PrivateRoute>
            <SubCatagoryData />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://elegance-artistry-server.vercel.app/catagory/${params.sub}`
          ),
      },
    ],
  },
]);
