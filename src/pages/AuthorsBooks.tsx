import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../store";
import { getDataFromApi } from "../store/books/booksSlice";

import { TableWithBooks } from "../components";

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
      {loading ? <div>Loading</div> : <TableWithBooks books={books} />}
    </>
  );
};
