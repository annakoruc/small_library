import { useEffect, useState } from "react";
// import { getBooks } from "../config/axios/getBooks";
import { AuthorProps } from "../types/AuthorType";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { getDataFromApi } from "../store/books/booksSlice";

export const AuthorsBooks = ({ name, surname }: AuthorProps) => {
  const [isOpenDescription, setIsOpenDescription] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const books = useSelector((state: RootState) => {
    return state.books.books;
  });

  useEffect(() => {
    dispatch(getDataFromApi({ name, surname }));
  }, [name, surname, dispatch]);

  const setIsOpen = () => {
    setIsOpenDescription(!isOpenDescription);
    // e.stopPropagation();
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>authors</th>
            <th>pageCount</th>
            <th>publishedDate</th>
          </tr>
        </thead>
        {books.map((book) => (
          <tr key={book.id} onClick={setIsOpen}>
            <td>{book.title}</td>
            {/* <td>{book.authors}</td> */}
            <td>{book.pageCount}</td>
            <td>{book.publishedDate}</td>

            {isOpenDescription && (
              <div>
                <p>{book.description}</p>
                <a href={book.link}>link</a>
              </div>
            )}
          </tr>
        ))}
      </table>
    </div>
  );
};
