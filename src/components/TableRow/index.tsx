import { useState } from "react";
import { BookProps } from "../../types";

//TODO add type for book !

export const TableRow = ({ book }: { book: BookProps }) => {
  const [isOpenDescription, setIsOpenDescription] = useState(false);

  const setIsOpen = () => {
    setIsOpenDescription(!isOpenDescription);
  };

  return (
    <tbody>
      <tr key={book.id} onClick={setIsOpen}>
        <td>
          <b>{book.title}</b>
        </td>

        <td>{book.pageCount}</td>
        <td>{book.language}</td>
        <td>{book.publishedDate}</td>
      </tr>
      {isOpenDescription && (
        <tr>
          <td>otwarte</td>
        </tr>
      )}
    </tbody>
  );
};
