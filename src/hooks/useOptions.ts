import { useState } from 'react';

export const useOptions = () => {
  const [columnOptions, setColumnOptions] = useState<any[]>([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [column, setColumn] = useState(columnOptions[0]);
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [orderOpt, setOrderOpt] = useState('population');
  const [sort, setSort] = useState('ASC');
  const [order, setOrder] = useState({ orderOpt, sort });

  const saveOptions = (target: any) => {
    if (target.name === 'coluna') {
      setColumn(target.value);
      console.log(target.value);
    }
    if (target.name === 'operador') {
      setComparison(target.value);
    }
    if (target.name === 'valor') {
      setValue(target.value);
    }
    if (target.name === 'order') {
      setOrderOpt(target.value);
      console.log(orderOpt);
    }
    if (target.name === 'sort') {
      setSort(target.value);
      console.log(sort);
    }
  };
  return {
    saveOptions,
    columnOptions,
    column,
    comparison,
    value,
    orderOpt,
    sort,
    order,
    setOrder,
    setColumn,
    setColumnOptions,
    setOrderOpt,
    setSort,
    setComparison,
    setValue,
  };
};
