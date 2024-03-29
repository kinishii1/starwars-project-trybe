import { useState } from 'react';
import { ColumnType, ComparisonType, OrderType } from '../types';

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

  const handleColumnChange = (
    target: (EventTarget & HTMLSelectElement) | (EventTarget & HTMLInputElement),
  ) => {
    if (target.name === 'coluna') {
      setColumn(target.value as ColumnType);
      console.log(target.value);
    }
    if (target.name === 'operador') {
      setComparison(target.value as ComparisonType);
    }
    if (target.name === 'valor') {
      setValue(target.value);
    }
    if (target.name === 'order') {
      setOrderOpt(target.value as ColumnType);
      console.log(orderOpt);
    }
    if (target.name === 'sort') {
      setSort(target.value as 'ASC' | 'DESC');
      console.log(sort);
    }
  };
  return {
    handleColumnChange,
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
