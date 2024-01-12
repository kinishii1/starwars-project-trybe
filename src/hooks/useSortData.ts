import { useContext } from 'react';
import AppContext from '../Context/AppContext';

export const useSortData = () => {
  const { sort, orderOpt, filteredData, setFilteredData, setOrder, order } =
    useContext(AppContext);
  const handleSort = () => {
    const newFilteredData = filteredData?.sort((a: any, b: any) => {
      if (a[orderOpt] === 'unknown') return 1;
      if (b[orderOpt] === 'unknown') return -1;

      if (sort === 'ASC') {
        return a[orderOpt] - b[orderOpt];
      }
      return b[orderOpt] - a[orderOpt];
    });
    // setFilteredData(newFilteredData);
  };

  const saveSortOptions = () => {
    const newOrder = {
      orderOpt,
      sort,
    };
    setOrder(newOrder);
    console.log(order);
    // handleSort();
  };

  return {
    saveSortOptions,
    handleSort,
  };
};
