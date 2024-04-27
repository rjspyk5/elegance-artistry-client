import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./../Provider/AuthProvider";

export const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const menu = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-green-500 text-white focus:bg-green-500 focus:text-white"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/arts"
          className={({ isActive }) =>
            isActive
              ? "bg-green-500  text-white focus:bg-green-500 focus:text-white"
              : ""
          }
        >
          All Art Items
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/add"
            className={({ isActive }) =>
              isActive
                ? "bg-green-500 text-white focus:bg-green-500 focus:text-white"
                : ""
            }
          >
            Add Arts Item
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink
            to="/myart"
            className={({ isActive }) =>
              isActive
                ? "bg-green-500 text-white focus:bg-green-500 focus:text-white "
                : ""
            }
          >
            My Art&Craft List
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="sticky top-0 z-50">
      <div className="navbar bg-[#ffffff28] backdrop-blur-lg ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z  p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            EleganceArtistry
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
        <div className="navbar-end space-x-2">
          {user ? (
            <div className="dropdown dropdown-hover">
              <img
                tabIndex={0}
                role="button"
                className="w-10 rounded-full"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
              <ul
                tabIndex={0}
                className="dropdown-content z-[500] z  space-y-2  right-[-8px] menu p-2 shadow bg-base-100 rounded-box w-auto"
              >
                <p className="text-center">{user?.displayName}</p>
                <button
                  onClick={logOut}
                  className="btn btn-sm bg-[#ec3434] text-[white]"
                >
                  Logout
                </button>
              </ul>
            </div>
          ) : (
            <>
              <NavLink to="/login" className="btn">
                Login
              </NavLink>
              <NavLink to="/register" className="btn">
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
