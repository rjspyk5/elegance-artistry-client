import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";

export const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-[1100px] mx-auto">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};
