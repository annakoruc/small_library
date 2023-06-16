import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { getDataFromApi } from "../store/books/booksSlice";
import { useParams } from "react-router-dom";
import { TableRow } from "../components/TableRow";

export const AuthorsBooks = () => {
  const { books, loading } = useSelector((state: RootState) => {
    return state.books;
  });

  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const author = id?.split("+").join(" ");

  useEffect(() => {
    dispatch(getDataFromApi(id));
  }, [dispatch, id]);

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
          {books.map((book) => (
            <TableRow book={book} />
          ))}
        </table>
      )}
    </>
  );
};
