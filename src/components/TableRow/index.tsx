import { useState } from "react";
import { BookProps } from "../../types";

import "./TableRowStyle.scss";
import IconArrow from "../../assets/icon-arrow.svg";
import { Button } from "../Button";

export const TableRow = ({ book, key }: { book: BookProps; key: string }) => {
  const [isOpenDescription, setIsOpenDescription] = useState(false);

  const authors = book.authors?.join("; ");

  const setIsOpen = () => {
    setIsOpenDescription(!isOpenDescription);
  };

  return (
    <tbody
      key={key}
      className={isOpenDescription ? "opened_row" : "closed_row"}
    >
      <tr className={isOpenDescription ? "opened_arrow" : "arrow"}>
        <td>
          <img src={IconArrow} alt="arrow" />
        </td>
      </tr>
      <tr onClick={setIsOpen} className="book_row">
        <td>
          <b>{book.title}</b>
        </td>

        <td>{book.pageCount ? book.pageCount : "not stated"}</td>
        <td>{book.language.toUpperCase()}</td>
        <td>{book.publishedDate}</td>
      </tr>
      {isOpenDescription && (
        <td colSpan={4}>
          <div className="hidden_row">
            <div>
              {book.subtitle && (
                <p>
                  <span>Subtitle: </span> {book.subtitle}
                </p>
              )}
              {book.authors && (
                <p>
                  <span>Authors: </span> {authors}
                </p>
              )}
              {book.description && (
                <p>
                  <span>Description: </span> {book.description}
                </p>
              )}
            </div>
            <Button link={book.link} title="go to Google Book" />
          </div>
        </td>
        // </tr>
      )}
    </tbody>
  );
};
