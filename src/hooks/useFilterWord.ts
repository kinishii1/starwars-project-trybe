import { useEffect, useState } from 'react';
import { Data } from '../types';

export const useFilterWord = (data : Data[]) => {
  const [filter, setFilter] = useState('');
  const [filteredData, setFilteredData] = useState<Data[]>([]);

  useEffect(() => {
    const updateData = () => {
      const newFilteredData = data
        ?.filter((planet: Data) => planet
          .name.toLowerCase().includes(filter.toLowerCase()));
      console.log(newFilteredData);
      setFilteredData(newFilteredData);
    };
    updateData();
    console.log('filter', filter);
    console.log('data', data);
  }, [data, filter]);

  return { filter, setFilter, filteredData, setFilteredData };
};
