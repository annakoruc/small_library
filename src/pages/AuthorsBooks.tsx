import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { getDataFromApi } from "../store/books/booksSlice";
import { useParams } from "react-router-dom";

export const AuthorsBooks = () => {
  const [isOpenDescription, setIsOpenDescription] = useState(false);
  const { books, loading } = useSelector((state: RootState) => {
    return state.books;
  });

  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const author = id?.split("+").join(" ");

  useEffect(() => {
    dispatch(getDataFromApi(id));
  }, [dispatch, id]);

  const setIsOpen = () => {
    setIsOpenDescription(!isOpenDescription);
  };

  return (
    <>
      <h1>{author}</h1>
      {loading ? (
        <div>Loading</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>title</th>
              <th>authors</th>
              <th>pageCount</th>
              <th>publishedDate</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id} onClick={setIsOpen}>
                <td>{book.title}</td>
                <td>{book.authors}</td>
                <td>{book.pageCount}</td>
                <td>{book.publishedDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
