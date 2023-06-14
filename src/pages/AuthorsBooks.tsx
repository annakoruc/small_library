import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { getDataFromApi } from "../store/books/booksSlice";
import { useParams } from "react-router-dom";

export const AuthorsBooks = () => {
  const [isOpenDescription, setIsOpenDescription] = useState(false);
  const books = useSelector((state: RootState) => {
    return state.books.books;
  });

  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getDataFromApi(id!));
  }, [id]);

  const setIsOpen = () => {
    setIsOpenDescription(!isOpenDescription);
  };

  console.log(id);

  return (
    <div>
      <h1>{id}</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>surname</th>
          </tr>
        </thead>
        {books.map((book) => (
          <tr key={book.id} onClick={setIsOpen}>
            <td>{book.title}</td>
            <td>{book.authors}</td>
            <td>{book.pageCount}</td>
            <td>{book.publishedDate}</td>

            {isOpenDescription && (
              <td>
                <p>{book.description}</p>
                <a href={book.link}>link</a>
              </td>
            )}
          </tr>
        ))}
      </table>
    </div>
  );
};
