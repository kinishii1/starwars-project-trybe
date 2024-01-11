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
    columnOptions,
    numberFilters,
    excludeNumberFilter,
    excludeAllNumberFilters,
    orderOpt,
    saveSortOptions,
    setOrderOpt,
    setSort,
  } = useContext(AppContext);

  const dataKeys = Object.keys(data[0] || {});
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
          {columnOptions.map((key: any) => (
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
      <div>
        {numberFilters.map((filter: any) => (
          <div data-testid="filter" key={ filter.column }>
            <span>{filter.column}</span>
            <span>{filter.comparison}</span>
            <span>{filter.value}</span>
            <button
              type="button"
              onClick={ () => excludeNumberFilter(filter.column) }
            >
              excluir
            </button>
          </div>
        ))}
      </div>
      <div>
        <label htmlFor="order">Ordenar</label>
        <select
          name="order"
          id="order"
          data-testid="column-sort"
          value={ orderOpt }
          onChange={ ({ target }) => setOrderOpt(target.value) }
        >
          {columnOptions.map((key: any) => (
            <option key={ key }>{key}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="asc">Ascendente</label>
        <input
          type="radio"
          name="sort"
          id="asc"
          data-testid="column-sort-input-asc"
          value="ASC"
          onChange={ ({ target }) => setSort(target.value) }
        />
        <label htmlFor="desc">Decrescente</label>
        <input
          type="radio"
          name="sort"
          id="desc"
          data-testid="column-sort-input-desc"
          value="DESC"
          onChange={ ({ target }) => setSort(target.value) }
        />
      </div>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ saveSortOptions }
      >
        Ordenar
      </button>
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ excludeAllNumberFilters }
      >
        Remover Filtros
      </button>
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
                {dataKeys.map((key) => (key === 'name' ? (
                  <td data-testid="planet-name" key={ key }>
                    {planet[key]}
                  </td>
                ) : (
                  <td key={ key }>{planet[key]}</td>
                )))}
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            {data.map((planet: any) => (
              <tr key={ planet.name }>
                {dataKeys.map((key) => (
                  <td data-testid="planet-name" key={ key }>
                    {planet[key]}
                  </td>
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
