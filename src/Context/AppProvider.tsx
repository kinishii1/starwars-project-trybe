import { useEffect, useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredData, setFilteredData] = useState([]);

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
      const newFilteredData = data.filter((planet: any) => planet
        .name.toLowerCase()
        .includes(filter.toLowerCase()));
      console.log(newFilteredData);
      setFilteredData(newFilteredData);
    };
    updateData();
  }, [data, filter]);

  return (
    <AppContext.Provider value={ { data, setFilter, filteredData } }>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
