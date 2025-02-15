import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import svg from "../../Images/nav-edge.svg";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
  const [manuOpen, setManuOpen] = useState(false);

  return (
    <div className="navv-container">
      <div className="manu-container">
        <CiMenuBurger
          onClick={() => {
            setManuOpen(!manuOpen);
          }}
          className=" manu-bar text-[3rem] hidden text-white bg-blue-700  sticky left-[13em] top-[0rem] z-50  rounded-b-[50%] rounded-l-[50%]  p-2"
        />
      </div>

      <div
        className={`nav-bar ${
          manuOpen ? "open" : ""
        } lg:w-[68.4rem] mt-12 mx-auto transition-all duration-300 ease-in-out ${
          manuOpen ? "fixed top-0 left-0 w-full h-full " : ""
        }`}
      >
        <nav className=" navbar-container  flex justify-end w-auto  mx-8 lg:mx-0">
          <ul
            className={`ul   relative flex md:w-auto w-full justify-around md:justify-end gap-8 border-none bg-white rounded-tr-2xl rounded-tl-2xl md:rounded-tl-none py-4 px-12`}
          >
            <img
              className=" SVG hidden md:block  absolute left-[-7rem] top-0  w-[8rem] "
              src={svg}
              alt="svg"
            />
            <li className="list">
              <NavLink
                to="/about"
                end
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "bg-blue-700 text-white px-3 py-2 rounded-xl transition-all duration-300 ease-in-out"
                      : "text-slate-400 font-medium hover:text-blue-500 hover:scale-105 transition-all duration-300 ease-in-out"
                  } `
                }
              >
                ABOUT
              </NavLink>
            </li>
            <li className="list">
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "bg-blue-700 text-white px-3 py-2 rounded-xl transition-all duration-300 ease-in-out"
                      : "text-slate-400 font-medium hover:text-blue-500 hover:scale-105 transition-all duration-300 ease-in-out"
                  } `
                }
                to="/resume"
              >
                RESUME
              </NavLink>
            </li>
            <li className="list">
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "bg-blue-700 text-white px-3 py-2 rounded-xl transition-all duration-300 ease-in-out"
                      : "text-slate-400 font-medium hover:text-blue-500 hover:scale-105 transition-all duration-300 ease-in-out"
                  } `
                }
                to="/portfolio"
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li className="list">
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "bg-blue-700 text-white px-3 py-2 rounded-xl transition-all duration-300 ease-in-out"
                      : "text-slate-400 font-medium hover:text-blue-500 hover:scale-105 transition-all duration-300 ease-in-out"
                  } `
                }
                to="/contact"
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
