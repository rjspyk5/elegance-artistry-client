import React from "react";
import { Link, useLocation } from "react-router-dom";
import bg from "../assets/images/bgcenter.png";

export const Login = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div className="">
      <div
        className="hero  min-h-screen bg-contain bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="hero-overlay bg-opacity-40 "></div>
        <div className="flex-col w-full">
          <div className="text-center lg:text-left"></div>
          <div className="card shrink-0 p-6 w-full md:w-3/6 mx-auto shadow-2xl bg-[#3f3e3e34] backdrop-blur-md">
            <h1 className="text-5xl font-bold text-center">Login now!</h1>
            <form className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
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
                  <span className="label-text">Password</span>
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
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <h1 className="text-[white] text-center font-semibold">
              New Here?{" "}
              <Link to="/register" className="text-[#48ed48]">
                Register now
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
