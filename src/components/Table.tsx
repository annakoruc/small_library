import { useState } from "react";
import { ArrayOfAutorsProps } from "../types/ArrayOfAutorsProps";

export const Table = ({ authors }: { authors: ArrayOfAutorsProps }) => {
  const [openListOfBooks, setOpenListOfBooks] = useState();
  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>surname</th>
        </tr>
      </thead>
      <tbody>
        {authors.map((author) => (
          <tr key={author.surname}>
            <th>{author.name}</th>
            <td>{author.surname}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
