import { useContext, useEffect, useState } from 'react';
import AppContext from '../Context/AppContext';

export const useFilterNumbers = () => {
  const {
    column,
    comparison,
    value,
    columnOptions,
    setColumnOptions,
    setColumn,
    data,
    setFilteredData,
  } = useContext(AppContext);
  const [numberFilters, setNumberFilters] = useState<any[]>([]);

  const excludeNumberFilter = (filterToRemove: any) => {
    const newNumberFilters = numberFilters.filter(
      (numberFilter) => numberFilter.column !== filterToRemove,
    );
    setNumberFilters(newNumberFilters);
    setColumnOptions((prev: any) => [...prev, filterToRemove]);
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
      (columnOption: any) => columnOption !== numberFilters[numberFilters.length - 1]
        .column,
    );
    setColumnOptions(newColumnOptions);
    setColumn(columnOptions[0]);
  };

  const handleFilterNumber = () => {
    const newFilter = {
      column,
      comparison,
      value,
    };
    setNumberFilters([...numberFilters, newFilter]);
    console.log(numberFilters);
  };

  useEffect(() => {
    const updateData = () => {
      let newFilteredData = data;
      console.log(newFilteredData);
      numberFilters.forEach(
        ({
          column: columnFilter,
          comparison: comparisonFilter,
          value: valueFilter,
        }) => {
          newFilteredData = newFilteredData.filter((planet: any) => {
            if (comparisonFilter === 'maior que') {
              return Number(planet[columnFilter]) > Number(valueFilter);
            }
            if (comparisonFilter === 'menor que') {
              return Number(planet[columnFilter]) < Number(valueFilter);
            }
            if (comparisonFilter === 'igual a') {
              return Number(planet[columnFilter]) === Number(valueFilter);
            }
            return planet;
          });
        },
      );

      // setFilteredData(newFilteredData);
      updtadeColumnOptions();
      console.log(newFilteredData);
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
