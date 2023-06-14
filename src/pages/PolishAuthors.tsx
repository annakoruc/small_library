import { TableWithAuthors } from "../components";
import { arrayOfPolishAuthors } from "../utils/arrayOdPolishAuthors";

export const PolishAuthors = () => {
  return (
    <div>
      <TableWithAuthors authors={arrayOfPolishAuthors} />
    </div>
  );
};
