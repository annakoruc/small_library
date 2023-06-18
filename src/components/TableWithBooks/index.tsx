import { BooksListProps } from "../../types";
import { TableRow } from "../TableRow";

import "./tableBooksstyle.scss";

export const TableWithBooks = ({ books }: { books: BooksListProps }) => {
  return (
    <table className="table_books">
      <thead>
        <tr className="hearder_row">
          <th>Title</th>
          <th>Pages</th>
          <th>Language</th>
          <th>Published</th>
        </tr>
      </thead>
      {books.map((book) => (
        <TableRow book={book} key={book.id} />
      ))}
    </table>
  );
};
