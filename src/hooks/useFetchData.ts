import { useState, useEffect } from 'react';
import { Data } from '../types';

export const useFetchData = (url: string) => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        let resData = await response.json();

        resData = resData.results.map((planet: Data) => {
          const { residents, ...planetWithoutResidents } = planet;
          return planetWithoutResidents;
        });

        setData(resData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [url]);

  return { data };
};
