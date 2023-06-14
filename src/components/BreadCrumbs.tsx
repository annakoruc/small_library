import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export const BreadCrumbs = () => {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname.split("/").filter((crumb) => crumb !== "");

  return (
    <div>
      <Link to="/">Home</Link>
      {crumbs.map((crumb) => {
        currentLink += `/${crumb}`;

        return (
          <Link key={crumb} to={currentLink}>
            {crumb}
          </Link>
        );
      })}
    </div>
  );
};
