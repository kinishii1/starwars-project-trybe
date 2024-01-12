import { useEffect, useState } from 'react';

export const useFilterWord = (data : any) => {
  const [filter, setFilter] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const updateData = () => {
      const newFilteredData = data
        ?.filter((planet: any) => planet
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
