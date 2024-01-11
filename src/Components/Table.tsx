import { useContext } from 'react';
import AppContext from '../Context/AppContext';
import Input from './Input';
import Select from './Select';
import Button from './Button';
import NumberFilters from './NumberFilters';
import Radios from './Radios';
import TableBody from './TableBody';
import TableHead from './TableHead';

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
    excludeAllNumberFilters,
    orderOpt,
    saveSortOptions,
    setOrderOpt,
    filter,
  } = useContext(AppContext);

  const dataKeys = Object.keys(data[0] || {});
  const comparisonOptions = ['maior que', 'menor que', 'igual a'];
  return (
    <>
      <Input
        type="text"
        dataTestId="name-filter"
        onChange={ ({ target }) => setFilter(target.value) }
        placeholder="Filtrar por"
        name="filter"
        value={ filter }
      />
      <div>
        <Select
          label="Coluna"
          name="coluna"
          options={ columnOptions }
          onChange={ ({ target }) => saveOptions(target) }
          value={ column }
          dataTestId="column-filter"
        />
        {/*
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
        </select> */}
        <Select
          label="Operador"
          name="operador"
          options={ comparisonOptions }
          onChange={ ({ target }) => saveOptions(target) }
          value={ comparison }
          dataTestId="comparison-filter"
        />
        {/* <label htmlFor="operador">Operador</label>
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
        </select> */}
        <label htmlFor="valor">Valor</label>
        <Input
          type="number"
          name="valor"
          onChange={ ({ target }) => saveOptions(target) }
          dataTestId="value-filter"
          value={ value }
        />
        {/* <input
          type="number"
          name="valor"
          id="valor"
          data-testid="value-filter"
          value={ value }
          onChange={ ({ target }) => saveOptions(target) }
        /> */}

        <Button
          type="button"
          dataTestId="button-filter"
          onClick={ handleFilterNumber }
        >
          Filtrar
        </Button>
        {/* <button
          type="button"
          data-testid="button-filter"
          onClick={ handleFilterNumber }
        >
          Filtrar
        </button> */}
      </div>
      <div>
        {numberFilters.map((filterNum: any) => (
          <NumberFilters
            filter={ filterNum }
            dataTestId="filter"
            key={ filterNum.column }
          />
          // <div data-testid="filter" key={ filterNum.column }>
          //   <span>{filterNum.column}</span>
          //   <span>{filterNum.comparison}</span>
          //   <span>{filterNum.value}</span>
          //   <button
          //     type="button"
          //     onClick={ () => excludeNumberFilter(filterNum.column) }
          //   >
          //     excluir
          //   </button>
          // </div>
        ))}
      </div>
      <div>
        <Select
          label="Ordenar"
          name="order"
          options={ columnOptions }
          onChange={ ({ target }) => setOrderOpt(target.value) }
          value={ orderOpt }
          dataTestId="column-sort"
        />
        {/* <label htmlFor="order">Ordenar</label>
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
        </select> */}
      </div>
      <Radios />
      {/* <div>
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
      </div> */}
      <Button
        type="button"
        dataTestId="column-sort-button"
        onClick={ saveSortOptions }
      >
        Ordenar
      </Button>

      {/* <button
        type="button"
        data-testid="column-sort-button"
        onClick={ saveSortOptions }
      >
        Ordenar
      </button> */}
      <Button
        type="button"
        dataTestId="button-remove-filters"
        onClick={ excludeAllNumberFilters }
      >
        Remover Filtros
      </Button>
      {/* <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ excludeAllNumberFilters }
      >
        Remover Filtros
      </button> */}
      <table data-testid="table">
        <TableHead />
        {/* <thead data-testid="table-header">
          <tr>
            {dataKeys.map((key) => (
              <th key={ key }>{key}</th>
            ))}
          </tr>
        </thead> */}
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
