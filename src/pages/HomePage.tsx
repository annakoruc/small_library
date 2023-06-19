import "./HomePagetyle.scss";
import { Button } from "../components";

export const HomePage = () => {
  return (
    <div className="home_page">
      <h3>Select the range of authors to display:</h3>
      <div className="buttons">
        <Button link="polish-authors" title="Polish Authors" />
        <Button link="international-authors" title="International  Authors" />
      </div>
    </div>
  );
};
