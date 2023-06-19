import { useState } from "react";

import { Button } from "../Button";
import { isMobile } from "../../utils/isMobile";
import { TableRowsProps } from "../../types/TableRowsProps";

import IconArrow from "../../assets/icon-arrow.svg";
import "./TableRowStyle.scss";

export const TableRow = ({ props, book }: TableRowsProps) => {
  const [isOpenDescription, setIsOpenDescription] = useState(false);

  const authors = book.authors?.join("; ");
  const pages = book.pageCount ? book.pageCount : "not stated";
  const language = book.language.toUpperCase();

  const setIsOpen = () => {
    setIsOpenDescription(!isOpenDescription);
  };

  const mobileContent = {
    header: (
      <tr onClick={setIsOpen} className="book_row">
        <td>
          <b>{book.title}</b>
        </td>
      </tr>
    ),
    rows: (
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
        <p>
          <span>Published: </span> {book.publishedDate}
        </p>
        <p>
          <span>Pages: </span>
          {pages}
        </p>
        <p>
          <span>Language: </span>
          {language}
        </p>
        {book.description && (
          <p>
            <span>Description: </span> {book.description}
          </p>
        )}
      </div>
    ),
  };

  const desktopContent = {
    header: (
      <tr onClick={setIsOpen} className="book_row">
        <td>
          <b>{book.title}</b>
        </td>
        <td>{pages}</td>
        <td>{language}</td>
        <td>{book.publishedDate}</td>
      </tr>
    ),
    rows: (
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
    ),
  };

  return (
    <tbody className={isOpenDescription ? "opened_row" : "closed_row"}>
      <tr {...props} className={isOpenDescription ? "opened_arrow" : "arrow"}>
        <td>
          <img src={IconArrow} alt="arrow" />
        </td>
      </tr>
      {isMobile ? mobileContent.header : desktopContent.header}
      {isOpenDescription && (
        <tr>
          <td colSpan={4}>
            <div className="hidden_row">
              {isMobile ? mobileContent.rows : desktopContent.rows}
              <Button link={book.link} title="go to Google Book" />
            </div>
          </td>
        </tr>
      )}
    </tbody>
  );
};
