import { useContext } from 'react';
import AppContext from '../Context/AppContext';

function Table() {
  const { data } = useContext(AppContext);

  const dataKeys = Object.keys(data[0] || {});
  console.log(dataKeys);

  return (
    <table>
      <thead>
        <tr>
          {dataKeys.map((key) => (
            <th key={ key }>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((planet: any) => (
          <tr key={ planet.name }>
            {dataKeys.map((key) => (
              <td key={ key }>{planet[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
