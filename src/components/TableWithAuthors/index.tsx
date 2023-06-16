import { useNavigate } from "react-router-dom";
import { ArrayOfAutorsProps } from "../../types/ArrayOfAutorsProps";

export const TableWithAuthors = ({
  authors,
}: {
  authors: ArrayOfAutorsProps;
}) => {
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
      <tbody>
        {authors.map((author) => (
          <tr
            key={authors.indexOf(author)}
            onClick={() => {
              navigate(`${author.name}+${author.surname}`);
            }}
          >
            <td>{author.name}</td>
            <td>{author.surname}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
