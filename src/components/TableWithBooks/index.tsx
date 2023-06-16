import { BooksListProps } from "../../types";
import { TableRow } from "../TableRow";

import "./tableBooksstyle.scss";

export const TableWithBooks = ({ books }: { books: BooksListProps }) => {
  return (
    <table className="table_books">
      <thead>
        <tr>
          <th className="head_title">Title</th>
          <th>Pages</th>
          <th>Language</th>
          <th>Published</th>
        </tr>
      </thead>
      {books.map((book) => (
        <TableRow book={book} />
      ))}
    </table>
  );
};
