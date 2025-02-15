import Header from "./Components/Header/Header";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="full">
      <Header />
      <AnimatePresence location={location} key={location.pathname} mode="wait">
        {location.pathname === "/" ? (
          <Navigate to="/about" replace />
        ) : (
          <Outlet />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Layout;
