import { Link } from "react-router-dom";

import "./buttonStyle.scss";

export const Button = ({ link, title }: { link: string; title: string }) => {
  return (
    <Link className="button" to={link}>
      {title}
    </Link>
  );
};
