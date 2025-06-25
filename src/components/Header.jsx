import React, { use } from "react";

import logo from "../../src/assets/image.png";
import userIcon from "../../src/assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { Link, NavLink } from "react-router";

const Header = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Logged out successfully"))
      .catch(() => toast.error("An error occurred"));
  };

  const Links = (
    <>
      <li>
        <NavLink
          to="/category/1"
          className={({ isActive }) =>
            isActive ? "text-secondary font-bold border-b-2 border-secondary" : "font-semibold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "text-secondary font-bold border-b-2 border-secondary" : "font-semibold"
          }
        >
          Profile
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 lg:px-8">
      {/* Navbar Start */}
      <div className="flex-1">
        <div className="dropdown lg:hidden">
          <button tabIndex={0} className="btn btn-ghost">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {Links}
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="btn btn-ghost text-xl flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
          <span className="hidden sm:inline font-bold">GreenMind</span>
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{Links}</ul>
      </div>

      {/* Navbar End */}
      <div className="flex items-center gap-2">
      {user && (
          <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
            <img
              src={user.photoURL || userIcon}
              alt="User"
              className="w-10 h-10 rounded-full border-2 border-secondary object-cover"
            />
          </div>
        )}
        {user ? (
          <button onClick={handleLogOut} className="btn btn-secondary btn-sm rounded-full">
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-secondary btn-sm rounded-full">
            Login
          </Link>
        )}
        
      </div>
    </div>
  );
};

export default Header;
