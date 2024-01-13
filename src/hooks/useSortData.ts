import { Data, SortProps } from '../types';

export const useSortData = ({
  sort,
  orderOpt,
  filteredData,
  setFilteredData,
  setOrder,
  order,
}: SortProps) => {
  const handleSort = () => {
    if (!filteredData) {
      throw new Error('filteredData is undefined');
    }

    const newFilteredData = filteredData?.sort((a: Data, b: Data) => {
      if (a[orderOpt as keyof Data] === 'unknown') return 1;
      if (b[orderOpt as keyof Data] === 'unknown') return -1;

      if (sort === 'ASC') {
        return Number(a[orderOpt as keyof Data]) - Number(b[orderOpt as keyof Data]);
      }
      return Number(b[orderOpt as keyof Data]) - Number(a[orderOpt as keyof Data]);
    });
    setFilteredData(newFilteredData);
    console.log('newFilteredData', newFilteredData);
  };

  const saveSortOptions = () => {
    const newOrder = {
      orderOpt,
      sort,
    };
    setOrder(newOrder);
    console.log('order', order);
    handleSort();
  };

  return {
    saveSortOptions,
    handleSort,
  };
};
