import { Outlet } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <article className="main">
          <Outlet />
        </article>
      </div>
    </>
  );
};

export default Layout;
