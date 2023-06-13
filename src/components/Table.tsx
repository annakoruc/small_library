import { useNavigate } from "react-router-dom";
import { ArrayOfAutorsProps } from "../types/ArrayOfAutorsProps";

export const Table = ({ authors }: { authors: ArrayOfAutorsProps }) => {
  const navigate = useNavigate();

  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>surname</th>
        </tr>
      </thead>
      {authors.map((author) => (
        <tbody key={author.id}>
          <tr
            onClick={() => {
              navigate(`${author.name}${author.surname}`);
            }}
          >
            <td>{author.id}</td>
            <td>{author.name}</td>
            <td>{author.surname}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};
