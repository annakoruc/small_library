import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FallingLines } from "react-loader-spinner";

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
      {loading ? (
        <FallingLines color="#52d87e" width="100" visible={true} />
      ) : (
        <TableWithBooks books={books} />
      )}
    </>
  );
};
