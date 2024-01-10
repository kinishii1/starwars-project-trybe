import { useContext } from 'react';
import AppContext from '../Context/AppContext';

function Table() {
  const { data, setFilter, filteredData } = useContext(AppContext);

  const dataKeys = Object.keys(data[0] || {});
  console.log(dataKeys);

  return (
    <>
      <input
        type='text'
        data-testid='name-filter'
        onChange={({ target }) => setFilter(target.value)}
      />
      <table>
        <thead>
          <tr>
            {dataKeys.map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        {filteredData.length > 0 ? (
          <tbody>
            {filteredData.map((planet: any) => (
              <tr key={planet.name}>
                {dataKeys.map((key) => (
                  <td key={key}>{planet[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            {data.map((planet: any) => (
              <tr key={planet.name}>
                {dataKeys.map((key) => (
                  <td key={key}>{planet[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </>
  );
}

export default Table;
