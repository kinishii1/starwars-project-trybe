import { useEffect, useState } from 'react';
import { ColumnType, Data, FilterProps } from '../types';

export const useFilterNumbers = ({
  data,
  columnOptions,
  setColumnOptions,
  setColumn,
  column,
  comparison,
  value,
  setFilteredData,
}: FilterProps) => {
  const [numberFilters, setNumberFilters] = useState<any[]>([]);
  console.log('columnOptions', columnOptions);

  const excludeNumberFilter = (filterToRemove: string) => {
    const newNumberFilters = numberFilters.filter(
      (numberFilter) => numberFilter.column !== filterToRemove,
    );
    setNumberFilters(newNumberFilters);
    setColumnOptions((prev: string[]) => [...prev, filterToRemove]);
  };

  const excludeAllNumberFilters = () => {
    setNumberFilters([]);
    setColumnOptions([
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ]);
  };

  const updtadeColumnOptions = () => {
    if (numberFilters.length === 0) return;
    const newColumnOptions = columnOptions.filter(
      (columnOption: string) => columnOption
        !== numberFilters[numberFilters.length - 1].column,
    );
    setColumnOptions(newColumnOptions);
    setColumn(columnOptions[0] as ColumnType);
  };

  const handleFilterNumber = () => {
    const newFilter = {
      column,
      comparison,
      value,
    };
    setNumberFilters([...numberFilters, newFilter]);
    console.log('numberFilters', numberFilters);
  };

  useEffect(() => {
    const updateData = () => {
      let newFilteredData = data;
      console.log('numberFilters', numberFilters);
      numberFilters.forEach(
        ({
          column: columnFilter,
          comparison: comparisonFilter,
          value: valueFilter,
        }) => {
          newFilteredData = newFilteredData.filter((planet: Data) => {
            if (comparisonFilter === 'maior que') {
              return Number(planet[columnFilter as keyof Data]) > Number(valueFilter);
            }
            if (comparisonFilter === 'menor que') {
              return Number(planet[columnFilter as keyof Data]) < Number(valueFilter);
            }
            if (comparisonFilter === 'igual a') {
              return Number(planet[columnFilter as keyof Data]) === Number(valueFilter);
            }
            return planet;
          });
        },
      );

      setFilteredData(newFilteredData);
      updtadeColumnOptions();
      console.log('newFilteredData', newFilteredData);
    };

    updateData();
  }, [data, numberFilters]);

  return {
    handleFilterNumber,
    excludeNumberFilter,
    excludeAllNumberFilters,
    numberFilters,
  };
};
