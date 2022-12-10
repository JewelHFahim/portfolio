import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menItems = (
    <>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link>Experience</Link>
      </li>
      <li>
        <Link to= "/project">Projects</Link>
      </li>
      <li>
        <Link to = "/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-primary mt-1">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden text-slate-400">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#0f223d]  text-slate-300 rounded-box w-52"
            >
              {menItems}
            </ul>
          </div>
          <Link
            to = "/"
            className="btn btn-ghost normal-case text-xl text-secondary font-bold border border-secondary rounded-full"
          >
            JHF
            <span class="hex"></span>
          </Link>
        </div>
        <div className="navbar-end">

        <div className="navbar-center  hidden lg:flex mr-8">
          <ul className="menu menu-horizontal py-4 text-slate-200">
            {menItems}
          </ul>
        </div>
          <a href="https://drive.google.com/file/d/15B6cxhJ8z_cXMghkfksIVvTZDgIB-kYb/view?usp=share_link"  target="_blank" rel="noreferrer noopener" className="btn btn-outline btn-secondary btn-sm rounded-sm">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
