import { useContext } from 'react';
import AppContext from '../Context/AppContext';

function TableBody(): JSX.Element {
  const { data, dataKeys, filteredData } = useContext(AppContext);
  if (filteredData.length > 0) {
    return (
      <tbody>
        {filteredData.map((planet: any) => (
          <tr key={ planet.name }>
            {dataKeys.map((key: string) => (key === 'name' ? (
              <td data-testid="planet-name" key={ key }>
                {planet[key]}
              </td>
            ) : (
              <td key={ key }>{planet[key]}</td>
            )))}
          </tr>
        ))}
      </tbody>
    );
  }
  return (
    <tbody>
      {data?.map((planet: any) => (
        <tr key={ planet.name }>
          {dataKeys.map((key: string) => (
            <td data-testid="planet-name" key={ key }>
              {planet[key]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
