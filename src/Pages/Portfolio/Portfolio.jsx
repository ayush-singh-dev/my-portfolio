import React from "react";
import Profile from "../../Components/Header/Profile/Profile";
import PortfolioNavbar from "./PortfolioNavbar";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
const Portfolio = () => {
  const location = useLocation();
  return (
    <div className=" main-container  w-auto md:w-auto  mx-8  max-w-[60.4rem] md:max-w-[68.4rem] lg:flex-row md:flex-row flex-col lg:mx-auto   border-none flex items-start relative top-0 mb-12">
      <Profile />
      <motion.div
        className="tr"
        key={location.pathname} // Ensure animation runs on page change
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="content container mt-[2.5rem] mb-[1.875rem] pl-[1.875rem] pr-[1.875rem]">
          <div className=" mb-4">
            <h1 className="text-[1.875rem] font-semibold  ">Portfolio</h1>
          </div>
          <div>
            <PortfolioNavbar />
          </div>
          {location.pathname === "/portfolio" ? (
            <Navigate to="/portfolio/basic" replace />
          ) : (
            <Outlet />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
