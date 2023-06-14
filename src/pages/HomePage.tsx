import { NavLink } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
      <NavLink to="polish-authors">Polish</NavLink>
      <NavLink to="international-authors">International</NavLink>
    </div>
  );
};
