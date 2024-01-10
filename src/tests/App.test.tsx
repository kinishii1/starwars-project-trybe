import { render, screen } from '@testing-library/react';
import App from '../App';
import mockdata from './mockdata';
import AppContext from '../Context/AppContext';
import Table from '../Components/Table';

describe('table', () => {
  it('render the table header correctly', () => {
    render(<App />);
    const header = screen.getByTestId('table-header');
    expect(header).toBeInTheDocument();
  });
  it('render the table body correctly', async () => {
    render(<AppContext.Provider value={ { data: mockdata, filteredData: []} }><Table /></AppContext.Provider>);
    const table = screen.getByTestId('table');
    expect(table).toBeInTheDocument();
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(3);
  });
});

