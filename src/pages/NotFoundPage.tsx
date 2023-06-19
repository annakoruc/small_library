import notFound from "../assets/404.png";
import "./NotFoundStyle.scss";

export const NotFoundPage = () => {
  return (
    <div className="not_found">
      <img src={notFound} alt="notFoudPage" />
    </div>
  );
};
