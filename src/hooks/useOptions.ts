import { useState } from 'react';

type ColumnType =
  | 'population'
  | 'orbital_period'
  | 'diameter'
  | 'rotation_period'
  | 'surface_water';

type ComparisonType = 'maior que' | 'menor que' | 'igual a';

type OrderType = {
  orderOpt: ColumnType;
  sort: 'ASC' | 'DESC';
};

export const useOptions = () => {
  const [columnOptions, setColumnOptions] = useState<string[]>([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [column, setColumn] = useState<ColumnType>(
    columnOptions[0] as ColumnType,
  );
  const [comparison, setComparison] = useState<ComparisonType>('maior que');
  const [value, setValue] = useState<number | string>(0);
  const [orderOpt, setOrderOpt] = useState<ColumnType>('population');
  const [sort, setSort] = useState<'ASC' | 'DESC'>('ASC');
  const [order, setOrder] = useState<OrderType>({ orderOpt, sort });

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
