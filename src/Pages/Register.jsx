import React, { useContext } from "react";
import bg from "../assets/images/bg.png";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

export const Register = () => {
  const errorToast = (msz) => toast.error(msz);
  const { signUp, updateInfo } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const pass = e.target.pass.value;
    const photo = e.target.photo.value;

    if (!/[A-Z]/.test(pass) || !/[a-z]/.test(pass) || pass.length < 6) {
      return errorToast(
        "Password must have an uppercase,a lowercase and length at least six character"
      );
    }

    signUp(email, pass)
      .then((res) => {
        updateInfo(res.user, name, photo)
          .then(() => {
            Swal.fire({
              title: "Succussfully register",

              icon: "success",
              customClass: {
                title: "text-[green]",
              },
            });
          })
          .catch((err) => errorToast(err));
      })
      .catch((err) => errorToast(err));
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
        className="hero min-h-screen  bg-contain bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex-col w-full">
          <div className="text-center lg:text-left"></div>
          <div className="card my-10 shrink-0 p-6 w-full md:w-3/6 mx-auto shadow-2xl bg-[#3f3e3e34] backdrop-blur-md">
            <h1 className="text-5xl font-bold text-center  text-[white]">
              Register now!
            </h1>
            <form onSubmit={handleRegister} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[white]">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                />
              </div>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[white]">Photo url</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Give your phot url"
                  className="input input-bordered"
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
