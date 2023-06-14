import { Table } from "../components";
import { arrayOfPolishAuthors } from "../utils/arrayOdPolishAuthors";

export const PolishAuthors = () => {
  return (
    <div>
      <Table authors={arrayOfPolishAuthors} />
    </div>
  );
};
