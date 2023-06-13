import { useEffect } from "react";
import "./App.css";
import { getBooks } from "./config/axios/getBooks";
import { Table } from "./components";
import {
  arrayOfInternationalAuthors,
  arrayOfPolishAuthors,
} from "./utils/arrayOfAuthors";

function App() {
  useEffect(() => {
    getBooks();
  }, []);
  return (
    <>
      <Table authors={arrayOfPolishAuthors} />
      <Table authors={arrayOfInternationalAuthors} />
    </>
  );
}

export default App;
