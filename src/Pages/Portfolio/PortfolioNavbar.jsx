import React from "react";
import { NavLink } from "react-router-dom";

const PortfolioNavbar = () => {
  return (
    <nav>
      <ul className={`ul flex gap-8 text-[1rem] mb-5 flex-wrap pl-3 `}>
        <li className="pr-2">
          <NavLink
            to={"/portfolio/basic"}
            className={({ isActive }) =>
              `${
                isActive
                  ? " bg-blue-700 text-white px-3 py-2  rounded-xl"
                  : " text-slate-400 font-medium"
              } `
            }
          >
            Basic
          </NavLink>
        </li>
        <li className="pr-2">
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? " bg-blue-700 text-white px-3 py-2  rounded-xl"
                  : " text-slate-400 font-medium"
              } `
            }
            to={"/portfolio/intermediate"}
          >
            Intermediate
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? " bg-blue-700 text-white px-3 py-2  rounded-xl"
                  : " text-slate-400 font-medium"
              } `
            }
            to={"/portfolio/advance"}
          >
            Advance
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PortfolioNavbar;
