import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import bg from "../assets/images/bgcenter.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

export const Login = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const successToast = (msz) => toast.success(msz);
  const errorToast = (msz) => toast.error(msz);

  const { logIn, googleLogIn } = useContext(AuthContext);

  console.log(state);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = e.target.pass.value;
    logIn(email, password)
      .then(() => {
        Swal.fire({
          title: "Succussfully Login",

          icon: "success",
        });
        navigate(state ? state : "/");
      })
      .catch((err) => errorToast(`${err}`));
  };

  const handleGoogleLogIn = () => {
    googleLogIn()
      .then((r) => {
        console.log(r);
        Swal.fire({
          title: "Succussfully Login",

          icon: "success",
        });
        navigate(state ? state : "/");
      })
      .catch((err) => errorToast(`${err}`));
  };
  return (
    <div className="">
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="colored"
      />
      <div
        className="hero   min-h-screen bg-contain bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="hero-overlay bg-opacity-40 "></div>
        <div className="flex-col w-full">
          <div className="text-center lg:text-left"></div>
          <div className="card shrink-0 p-6 w-full md:w-3/6 mx-auto shadow-2xl bg-[#3f3e3e34] backdrop-blur-md">
            <h1 className="text-5xl font-bold text-center text-[white]">
              Login now!
            </h1>
            <form onSubmit={handleLogin} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[white]">Email</span>
                </label>
                <input
                  name="email"
                  type="Type your email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[white]">Password</span>
                </label>
                <input
                  name="pass"
                  type="password"
                  placeholder="Type your password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-main text-[white]">Login</button>
              </div>
            </form>
            <h1 className="text-[white] text-center font-semibold">
              New Here?{" "}
              <Link to="/register" className="text-[#48ed48]">
                Register now
              </Link>
            </h1>
            <button onClick={handleGoogleLogIn}>Google Login</button>
            <button>Github Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};
