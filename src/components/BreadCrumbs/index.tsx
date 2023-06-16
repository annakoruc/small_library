import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import homeIcon from "../../../public/icon-home.svg";

import "./bredcrumbsStyle.scss";

export const BreadCrumbs = () => {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname.split("/").filter((crumb) => crumb !== "");

  return (
    <div className="breadcrumbs">
      <Link to="/" className="home">
        <img src={homeIcon} />
      </Link>
      {crumbs.map((crumb) => {
        currentLink += `/${crumb}`;

        return (
          <Link className="crumb" key={crumb} to={currentLink}>
            {crumb}
          </Link>
        );
      })}
    </div>
  );
};
