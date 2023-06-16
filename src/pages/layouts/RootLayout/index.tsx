import { NavLink, Outlet } from "react-router-dom";
import { BreadCrumbs } from "../../../components";

import "./rootStyle.scss";
import { Logo } from "../../../components/Logo";

export const RootLayout = () => {
  return (
    <div>
      <header className="root_header">
        <div className="header_content">
          <BreadCrumbs />
          <Logo />
        </div>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};
