import { useContext } from 'react';
import AppContext from '../Context/AppContext';

function Table() {
  const {
    data,
    setFilter,
    filteredData,
    saveOptions,
    handleFilterNumber,
    column,
    comparison,
    value,

  } = useContext(AppContext);

  const dataKeys = Object.keys(data[0] || {});
  const columnOptions = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const comparisonOptions = ['maior que', 'menor que', 'igual a'];

  return (
    <>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ ({ target }) => setFilter(target.value) }
      />
      <div>
        <label htmlFor="coluna">Coluna</label>
        <select
          name="coluna"
          value={ column }
          id="coluna"
          data-testid="column-filter"
          onChange={ ({ target }) => saveOptions(target) }
        >
          {columnOptions.map((key) => (
            <option key={ key }>{key}</option>
          ))}
        </select>
        <label htmlFor="operador">Operador</label>
        <select
          name="operador"
          id="operador"
          value={ comparison }
          data-testid="comparison-filter"
          onChange={ ({ target }) => saveOptions(target) }
        >
          {comparisonOptions.map((key) => (
            <option key={ key }>{key}</option>
          ))}
        </select>
        <label htmlFor="valor">Valor</label>
        <input
          type="number"
          name="valor"
          id="valor"
          data-testid="value-filter"
          value={ value }
          onChange={ ({ target }) => saveOptions(target) }
        />

        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleFilterNumber }
        >
          Filtrar
        </button>
      </div>
      <table data-testid="table">
        <thead data-testid="table-header">
          <tr>
            {dataKeys.map((key) => (
              <th key={ key }>{key}</th>
            ))}
          </tr>
        </thead>
        {filteredData.length > 0 ? (
          <tbody>
            {filteredData.map((planet: any) => (
              <tr key={ planet.name }>
                {dataKeys.map((key) => (
                  <td key={ key }>{planet[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            {data.map((planet: any) => (
              <tr key={ planet.name }>
                {dataKeys.map((key) => (
                  <td key={ key }>{planet[key]}</td>
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
