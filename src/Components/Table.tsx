import { useContext } from 'react';
import AppContext from '../Context/AppContext';
import Input from './Input';
import Select from './Select';
import Button from './Button';
import NumberFilters from './NumberFilters';
import Radios from './Radios';
import TableHead from './TableHead';

function Table() {
  const {
    data,
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
    setFilter,
    filteredData,
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
        <Select
          label="Operador"
          name="operador"
          options={ comparisonOptions }
          onChange={ ({ target }) => saveOptions(target) }
          value={ comparison }
          dataTestId="comparison-filter"
        />
        <label htmlFor="valor">Valor</label>
        <Input
          type="number"
          name="valor"
          onChange={ ({ target }) => saveOptions(target) }
          dataTestId="value-filter"
          value={ value }
        />
        <Button
          type="button"
          dataTestId="button-filter"
          onClick={ handleFilterNumber }
        >
          Filtrar
        </Button>
      </div>
      <div>
        {numberFilters.map((filterNum: any) => (
          <NumberFilters
            filter={ filterNum }
            dataTestId="filter"
            key={ filterNum.column }
          />
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
      </div>
      <Radios />
      <Button
        type="button"
        dataTestId="column-sort-button"
        onClick={ saveSortOptions }
      >
        Ordenar
      </Button>
      <Button
        type="button"
        dataTestId="button-remove-filters"
        onClick={ excludeAllNumberFilters }
      >
        Remover Filtros
      </Button>
      <table data-testid="table">
        <TableHead />
        {filteredData?.length > 0 ? (
          <tbody>
            {filteredData?.map((planet: any) => (
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
