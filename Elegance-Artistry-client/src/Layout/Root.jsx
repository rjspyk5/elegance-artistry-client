import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";

export const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};
