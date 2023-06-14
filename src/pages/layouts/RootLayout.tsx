import { NavLink, Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <div>
      <header>
        <h1>Small Library</h1>
        <nav>
          <NavLink to="polish-authors">Polish</NavLink>
          <NavLink to="international-authors">International</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
