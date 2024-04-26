import React from "react";
import bg from "../assets/images/bg.png";
import { Link } from "react-router-dom";
export const Register = () => {
  return (
    <div className="">
      <div
        className="hero min-h-screen bg-contain bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="hero-overlay bg-opacity-40 "></div>
        <div className="flex-col w-full">
          <div className="text-center lg:text-left"></div>
          <div className="card my-10 shrink-0 p-6 w-full md:w-3/6 mx-auto shadow-2xl bg-[#3f3e3e34] backdrop-blur-md">
            <h1 className="text-5xl font-bold text-center  text-[white]">
              Register now!
            </h1>
            <form className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo url</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Give your phot url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-main text-[white]">Login</button>
              </div>
            </form>
            <h1 className="text-[white] text-center font-semibold">
              Already register?{" "}
              <Link to="/login" className="text-[#48ed48]">
                Log In now
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
