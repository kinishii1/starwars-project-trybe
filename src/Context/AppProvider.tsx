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
  const {
    saveOptions,
    columnOptions,
    column,
    comparison,
    value,
    orderOpt,
    setOrderOpt,
    setSort,
    sort,
  } = useOptions();
  const {
    handleFilterNumber,
    excludeNumberFilter,
    excludeAllNumberFilters,
    numberFilters,
  } = useFilterNumbers();
  const { saveSortOptions, handleSort } = useSortData();
  const { filter, setFilteredData } = useFilterWord();

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
        excludeNumberFilter,
        excludeAllNumberFilters,
        orderOpt,
        saveSortOptions,
        setOrderOpt,
        setSort,
        filter,
        handleSort,
        sort,
        setFilteredData,
      } }
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
