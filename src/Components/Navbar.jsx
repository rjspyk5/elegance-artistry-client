import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./../Provider/AuthProvider";

export const Navbar = () => {
  const { user } = useContext(AuthContext);
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
              ? "bg-green-500 text-white focus:bg-green-500 focus:text-white"
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
    <div>
      <div className="navbar bg-base-100">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
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
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
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
