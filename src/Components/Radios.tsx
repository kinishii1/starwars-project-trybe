import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';

function Radios() {
  const { setSort } = useContext(AppContext);
  return (
    <div>
      <label htmlFor="asc">Ascendente</label>
      <input
        type="radio"
        name="sort"
        id="asc"
        data-testid="column-sort-input-asc"
        value="ASC"
        onChange={ ({ target }) => setSort(target.value) }
      />
      <label htmlFor="desc">Decrescente</label>
      <input
        type="radio"
        name="sort"
        id="desc"
        data-testid="column-sort-input-desc"
        value="DESC"
        onChange={ ({ target }) => setSort(target.value) }
      />
    </div>
  );
}

export default Radios;
