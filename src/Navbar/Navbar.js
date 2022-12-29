/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="m-0 p-0 fixed-top">
      <div className="navbar bg-base-200 h-20 border-[0.01px] border-b-green-500">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {/* -------------------Small Navbar -----------------*/}
              <li className="font-semibold font-sans text-indigo-500">
                <a href="#home">Home</a>
              </li>
              <li className="font-semibold font-sans text-indigo-500">
                <a href="#projects">Projects</a>
              </li>
              <li className="font-semibold font-sans text-indigo-500">
                <a href="#contact">Contact Me</a>
              </li>
              <li className="font-semibold font-sans text-indigo-500">
                <a href="#about">About</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case lg:text-3xl sm:text-sm font-semibold text-green-600 tracking-widest portfolio" href="#home">
            Portfo<span className="text-indigo-500">lio</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          {/* -------------------Large Navbar -----------------*/}
          <ul className="menu menu-horizontal p-0">
            <li>
              <a className="font-sans font-bold text-green-600 tracking-wider portfolio" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="font-sans font-bold text-green-600 tracking-wider portfolio" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="font-sans font-bold text-green-600 tracking-wider portfolio" href="#contact">
                Contact Me
              </a>
            </li>
            <li>
              <a className="font-sans font-bold text-green-600 tracking-wider portfolio" href="#about">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex space-x-2 justify-center">
            <a className="btn btn-ghost font-sans normal-case text-green-600 tracking-wider portfolio" href="#">
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
