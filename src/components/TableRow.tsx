import { useState } from "react";

//TODO add type for book !

export const TableRow = ({ book }) => {
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
        <td>{book.authors}</td>
        <td>{book.subtitle}</td>
        <td>{book.pageCount}</td>
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
