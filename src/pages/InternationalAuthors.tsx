import { Table } from "../components";
import { arrayOfInternationalAuthors } from "../utils/arrayOfInternationalAuthors";

export const InternationalAuthors = () => {
  return (
    <div>
      <Table authors={arrayOfInternationalAuthors} />
    </div>
  );
};
