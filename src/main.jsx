import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { routes } from "./Routing.jsx";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./Provider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  </React.StrictMode>
);
