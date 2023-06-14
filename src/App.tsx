import "./App.css";

import { Route, Routes } from "react-router-dom";
import {
  AuthorsBooks,
  HomePage,
  InternationalAuthors,
  NotFoundPage,
  PolishAuthors,
} from "./pages";
import { RootLayout, TableLayouts } from "./pages/layouts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        //TODO add something to homepage
        <Route index element={<HomePage />} />
        <Route path="polish-authors" element={<TableLayouts />}>
          <Route index element={<PolishAuthors />} />
          <Route path=":id" element={<AuthorsBooks />} />
        </Route>
        <Route path="international-authors" element={<TableLayouts />}>
          <Route index element={<InternationalAuthors />} />
          <Route path=":id" element={<AuthorsBooks />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
