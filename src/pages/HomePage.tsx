import { Button } from "../components";

import "./HomePagetyle.scss";

export const HomePage = () => {
  return (
    <div className="home_page">
      <h3>Select the range of authors to display:</h3>
      <div className="buttons">
        <Button link="international-authors" title="International  Authors" />
        <Button link="polish-authors" title="Polish Authors" />
      </div>
    </div>
  );
};
