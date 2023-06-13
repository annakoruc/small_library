import "./App.css";

import { Route, Routes } from "react-router-dom";
import { AuthorsBooks, HomePage, NotFoundPage } from "./pages";
import { arrayOfPolishAuthors } from "./utils/arrayOdPolishAuthors";
import { arrayOfInternationalAuthors } from "./utils/arrayOfInternationalAuthors";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {arrayOfPolishAuthors.map((author) => (
        <Route
          key={author.id}
          path={`${author.name}${author.surname}`}
          element={<AuthorsBooks name={author.name} surname={author.surname} />}
        />
      ))}
      {arrayOfInternationalAuthors.map((author) => (
        <Route
          key={author.id}
          path={`${author.name}${author.surname}`}
          element={<AuthorsBooks name={author.name} surname={author.surname} />}
        />
      ))}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
