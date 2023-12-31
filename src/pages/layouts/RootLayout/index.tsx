import { Outlet } from "react-router-dom";

import { BreadCrumbs, Logo } from "../../../components";

import "./rootStyle.scss";

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
