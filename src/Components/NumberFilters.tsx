import { useContext } from 'react';
import AppContext from '../Context/AppContext';
import { NumberFiltersProps } from '../types';

function NumberFilters({
  filter,
  dataTestId,
  key,
}: NumberFiltersProps) : JSX.Element {
  const { excludeNumberFilter } = useContext(AppContext);
  return (
    <div data-testid={ dataTestId } key={ key }>
      <span>{filter.column}</span>
      <span>{filter.comparison}</span>
      <span>{filter.value}</span>
      <button type="button" onClick={ () => excludeNumberFilter(filter.column) }>
        excluir
      </button>
    </div>
  );
}

export default NumberFilters;
