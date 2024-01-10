import { useEffect, useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const saveOptions = (target: any) => {
    if (target.name === 'coluna') {
      setColumn(target.value);
    }
    if (target.name === 'operador') {
      setComparison(target.value);
    }
    if (target.name === 'valor') {
      setValue(target.value);
    }
  };

  const handleFilterNumber = () => {
    const newFilteredData = data.filter((planet: any) => {
      if (comparison === 'maior que') {
        return Number(planet[column]) > Number(value);
      }
      if (comparison === 'menor que') {
        return Number(planet[column]) < Number(value);
      }
      return Number(planet[column]) === Number(value);
    });
    setFilteredData(newFilteredData);
  };

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
        .name.toLowerCase().includes(filter.toLowerCase()));
      console.log(newFilteredData);
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
      } }
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
