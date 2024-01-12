import { useState, useEffect } from 'react';
import { Data } from '../types';

export const useFetchData = (url: string) => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      let resData = await response.json();

      resData = resData.results.map((planet: Data) => {
        const { residents, ...planetWithoutResidents } = planet;
        return planetWithoutResidents;
      });
      console.log(`resData: ${resData}`);
      setData(resData);
    };
    fetchData();
  }, []);

  return { data };
};
