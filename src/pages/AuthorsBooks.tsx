import { useEffect } from "react";
import { getBooks } from "../config/axios/getBooks";
import { AuthorProps } from "../types/AuthorType";

export const AuthorsBooks = ({ name, surname }: AuthorProps) => {
  useEffect(() => {
    getBooks(name, surname);
  }, [name, surname]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>surname</th>
          </tr>
        </thead>
        {}
      </table>
    </div>
  );
};
