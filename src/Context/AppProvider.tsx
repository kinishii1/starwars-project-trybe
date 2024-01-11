import { useEffect, useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [columnOptions, setColumnOptions] = useState<any[]>([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [column, setColumn] = useState(columnOptions[0]);
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [numberFilters, setNumberFilters] = useState<any[]>([]);
  const [orderOpt, setOrderOpt] = useState('population');
  const [sort, setSort] = useState('ASC');
  const [order, setOrder] = useState({ orderOpt, sort });

  const excludeNumberFilter = (filterToRemove: any) => {
    const newNumberFilters = numberFilters.filter(
      (numberFilter) => numberFilter.column !== filterToRemove,
    );
    setNumberFilters(newNumberFilters);
    setColumnOptions((prev) => [...prev, filterToRemove]);
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

  const saveOptions = (target: any) => {
    if (target.name === 'coluna') {
      setColumn(target.value);
      console.log(target.value);
    }
    if (target.name === 'operador') {
      setComparison(target.value);
    }
    if (target.name === 'valor') {
      setValue(target.value);
    }
    if (target.name === 'order') {
      setOrderOpt(target.value);
      console.log(orderOpt);
    }
    if (target.name === 'sort') {
      setSort(target.value);
      console.log(sort);
    }
  };

  const updtadeColumnOptions = () => {
    if (numberFilters.length === 0) return;
    const newColumnOptions = columnOptions.filter(
      (columnOption) => columnOption !== numberFilters[numberFilters.length - 1].column,
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

  const handleSort = () => {
    const newFilteredData = filteredData.sort((a: any, b: any) => {
      if (a[orderOpt] === 'unknown') return 1;
      if (b[orderOpt] === 'unknown') return -1;

      if (sort === 'ASC') {
        return a[orderOpt] - b[orderOpt];
      }
      return b[orderOpt] - a[orderOpt];
    });
    setFilteredData(newFilteredData);
  };

  const saveSortOptions = () => {
    const newOrder = {
      orderOpt,
      sort,
    };
    setOrder(newOrder);
    console.log(order);
    handleSort();
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

      setFilteredData(newFilteredData);
      updtadeColumnOptions();
      console.log(newFilteredData);
    };

    updateData();
  }, [data, filter, numberFilters]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://swapi.dev/api/planets');
      let resData = await response.json();

      resData = resData.results.map((planet: any) => {
        const { residents, ...planetWithoutResidents } = planet;
        return planetWithoutResidents;
      });
      console.log(resData);
      setData(resData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const updateData = () => {
      const newFilteredData = data
        .filter((planet: any) => planet
          .name.toLowerCase().includes(filter.toLowerCase()));
      console.log(newFilteredData);

      if (orderOpt !== '') {
        handleSort();
      }

      setFilteredData(newFilteredData);
    };
    updateData();
  }, [data, filter]);

  return (
    <AppContext.Provider
      value={ {
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
        filter,
      } }
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
