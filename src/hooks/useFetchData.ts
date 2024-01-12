import { useState, useEffect } from 'react';

export const useFetchData = (url: string) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      let resData = await response.json();

      resData = resData.results.map((planet: any) => {
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
