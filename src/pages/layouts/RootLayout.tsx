import { NavLink, Outlet } from "react-router-dom";
import { BreadCrumbs } from "../../components";

export const RootLayout = () => {
  return (
    <div>
      <header>
        <h1>Small Library</h1>
        <BreadCrumbs />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
