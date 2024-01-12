import {
  useFetchData,
  useFilterNumbers,
  useFilterWord,
  useOptions,
  useSortData,
} from '../hooks';
import AppContext from './AppContext';

function AppProvider({ children }: { children: React.ReactNode }) {
  const { data } = useFetchData('https://swapi.dev/api/planets');
  const { filter, setFilteredData, setFilter, filteredData } = useFilterWord(data);
  const {
    saveOptions,
    columnOptions,
    column,
    comparison,
    value,
    orderOpt,
    sort,
    order,
    setOrder,
    setColumn,
    setColumnOptions,
    setOrderOpt,
    setSort,
  } = useOptions();
  const {
    handleFilterNumber,
    excludeNumberFilter,
    excludeAllNumberFilters,
    numberFilters,
  } = useFilterNumbers({
    data,
    columnOptions,
    setColumnOptions,
    setColumn,
    column,
    comparison,
    value,
    setFilteredData,
  });
  const { saveSortOptions } = useSortData({
    sort,
    orderOpt,
    filteredData,
    setFilteredData,
    setOrder,
    order,
  });
  console.log('columnOptions', columnOptions);
  return (
    <AppContext.Provider
      value={ {
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
        excludeNumberFilter,
        setSort,
      } }
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
