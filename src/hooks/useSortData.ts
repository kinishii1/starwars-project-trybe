type SortProps = {
  sort: string;
  orderOpt: string;
  filteredData: string[];
  setFilteredData: React.Dispatch<React.SetStateAction<any>>;
  setOrder: React.Dispatch<React.SetStateAction<any>>;
  order: any;
};

export const useSortData = ({
  sort,
  orderOpt,
  filteredData,
  setFilteredData,
  setOrder,
  order,
}: SortProps) => {
  const handleSort = () => {
    const newFilteredData = filteredData?.sort((a: any, b: any) => {
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
    console.log('order', order);
    handleSort();
  };

  return {
    saveSortOptions,
    handleSort,
  };
};
