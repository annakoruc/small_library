import { useId } from "react";
import { TableRow } from "../TableRow";
import { BooksListProps } from "../../types";
import { isMobile } from "../../utils/isMobile";

import "./tableBooksstyle.scss";

export const TableWithBooks = ({ books }: { books: BooksListProps }) => {
  const reactId = useId();
  return (
    <table className="table_books" key={reactId}>
      <thead>
        {isMobile ? (
          <tr className="hearder_row">
            <th>Title</th>
          </tr>
        ) : (
          <tr className="hearder_row">
            <th>Title</th>
            <th>Pages</th>
            <th>Language</th>
            <th>Published</th>
          </tr>
        )}
      </thead>

      {books.map((book) => (
        <TableRow book={book} keyId={book.id} />
      ))}
    </table>
  );
};
