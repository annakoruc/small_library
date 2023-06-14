import { TableWithAuthors } from "../components";
import { arrayOfInternationalAuthors } from "../utils/arrayOfInternationalAuthors";

export const InternationalAuthors = () => {
  return (
    <div>
      <TableWithAuthors authors={arrayOfInternationalAuthors} />
    </div>
  );
};
