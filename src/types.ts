export type Data = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export type SortProps = {
  sort: string;
  orderOpt: string;
  filteredData: string[];
  setFilteredData: React.Dispatch<React.SetStateAction<any>>;
  setOrder: React.Dispatch<React.SetStateAction<any>>;
  order: any;
};

export type ColumnType =
  | 'population'
  | 'orbital_period'
  | 'diameter'
  | 'rotation_period'
  | 'surface_water';

export type ComparisonType = 'maior que' | 'menor que' | 'igual a';

export type OrderType = {
  orderOpt: ColumnType;
  sort: 'ASC' | 'DESC';
};

export type FilterProps = {
  data: Data[];
  columnOptions: string[];
  setColumnOptions: React.Dispatch<React.SetStateAction<any>>;
  setColumn: React.Dispatch<React.SetStateAction<any>>;
  column: string;
  comparison: string;
  value: string | number;
  setFilteredData: React.Dispatch<React.SetStateAction<any>>;
};

export type SelectProps = {
  value: string;
  options: string[];
  label: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  dataTestId?: string;
};

export type NumberFiltersProps = {
  filter: {
    column: string;
    comparison: string;
    value: string;
  };
  dataTestId: string;
  key: string;
};

export type InputProps = {
  type: string;
  name?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  dataTestId?: string;
  value?: string | number;
};

export type ButtonProps = {
  type: 'button' | 'submit' | 'reset';
  dataTestId?: string;
  onClick: () => void;
  children: React.ReactNode;
};
