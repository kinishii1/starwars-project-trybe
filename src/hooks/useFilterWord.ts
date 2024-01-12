import { useContext, useEffect, useState } from 'react';
import AppContext from '../Context/AppContext';

export const useFilterWord = () => {
  const [filter, setFilter] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const {
    data,
    orderOpt,
    handleSort,
  } = useContext(AppContext);

  useEffect(() => {
    const updateData = () => {
      const newFilteredData = data
        ?.filter((planet: any) => planet
          .name.toLowerCase().includes(filter.toLowerCase()));
      console.log(newFilteredData);

      if (orderOpt !== '') {
        // handleSort();
      }

      setFilteredData(newFilteredData);
    };
    updateData();
  }, [data, filter]);

  return { filter, setFilter, filteredData, setFilteredData };
};
