import { Table } from "../components";
import { arrayOfPolishAuthors } from "../utils/arrayOdPolishAuthors";
import { arrayOfInternationalAuthors } from "../utils/arrayOfInternationalAuthors";

export const HomePage = () => {
  return (
    <div>
      <Table authors={arrayOfPolishAuthors} />
      <Table authors={arrayOfInternationalAuthors} />
    </div>
  );
};
