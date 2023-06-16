import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BooksListProps } from "../../types";

type StateProps = {
  loading: boolean;
  books: BooksListProps;
};

const initialState: StateProps = { loading: false, books: [] };

export const getDataFromApi = createAsyncThunk(
  "api/getBooks",
  async (author: string | undefined) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=inauthor:"${author}"&maxResults=40`;

    const res = await axios.get(url).then((res) => {
      const booksArray: BooksListProps = [];
      const listOfBookFromApi = res.data.items;

      for (const book of listOfBookFromApi) {
        const bookInfo = book.volumeInfo;
        console.log(bookInfo);

        booksArray.push({
          id: book.id,
          authors: bookInfo.authors,
          title: bookInfo.title,
          publishedDate: bookInfo.publishedDate,
          description: bookInfo.description,
          link: bookInfo.previewLink,
          pageCount: bookInfo.pageCount,
          subtitle: bookInfo.subtitle,
          language: bookInfo.language,
        });
      }

      return booksArray;
    });

    return res;
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDataFromApi.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDataFromApi.fulfilled, (state, action) => {
      state.loading = false;
      state.books = action.payload;
    });
    builder.addCase(getDataFromApi.rejected, (state, action) => {
      state.loading = false;
      console.log("rejected", action.error);
    });
  },
});

// export const {} = booksSlice.actions;
export default booksSlice.reducer;
