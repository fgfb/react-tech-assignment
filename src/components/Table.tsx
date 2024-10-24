import { DataType } from "../types";

function Table({ data }: { data: DataType }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Notes</th>
          <th>Engineer ID</th>
          <th>Coords [0]</th>
          <th>Coords [1]</th>
        </tr>
      </thead>
      <tbody>
      {data.length ? (data.map(({ id, notes, engineerId, coords: [lat, lng] }, index) => (
          <tr key={id}>
            <td data-testid={`id-${index}`}>{id}</td>
            <td data-testid={`notes-${index}`}>{notes}</td>
            <td data-testid={`engineerId-${index}`}>{engineerId}</td>
            <td data-testid={`lat-${index}`}>{lat}</td>
            <td data-testid={`lng-${index}`}>{lng}</td>
          </tr>
      ))) : (
          <tr>
            <td colSpan={5}>No Data available</td>
          </tr>
      )}
      </tbody>
    </table>
  );
}

export default Table;
