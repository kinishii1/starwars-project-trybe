import { useContext } from 'react';
import AppContext from '../Context/AppContext';

function TableHead() {
  const { data } = useContext(AppContext);
  const dataKeys = Object.keys(data[0] || {});
  return (
    <thead data-testid="table-header">
      <tr>
        {dataKeys.map((key) => (
          <th key={ key }>{key}</th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHead;
