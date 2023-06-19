import { useNavigate } from "react-router-dom";
import { ArrayOfAutorsProps } from "../../types/ArrayOfAutorsProps";

import "./tableAuthorsStyle.scss";

export const TableWithAuthors = ({
  authors,
}: {
  authors: ArrayOfAutorsProps;
}) => {
  const navigate = useNavigate();

  return (
    <table className="authors">
      <thead>
        <tr className="hearder_row">
          <th>Name</th>
          <th>Surname</th>
        </tr>
      </thead>
      <tbody>
        {authors.map((author) => (
          <tr
            key={authors.indexOf(author)}
            onClick={() => {
              navigate(`${author.name}+${author.surname}`);
            }}
            className="table_rows"
          >
            <td>{author.name}</td>
            <td>
              <b>{author.surname}</b>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
