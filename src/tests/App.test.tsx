import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import mockdata from './mockdata';
import AppContext from '../Context/AppContext';
import Table from '../Components/Table';
import userEvent from '@testing-library/user-event';

describe('table', () => {
  it('render the table header correctly', () => {
    render(<App />);
    const header = screen.getByTestId('table-header');
    expect(header).toBeInTheDocument();
  });
  it('render the table body correctly', async () => {
    render(
      <AppContext.Provider value={mockdata}>
        <Table />
      </AppContext.Provider>
    );
    const table = screen.getByTestId('table');
    expect(table).toBeInTheDocument();
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(3);
  });
  it('render the table body correctly', async () => {
    render(
      <AppContext.Provider value={mockdata}>
        <Table />
      </AppContext.Provider>
    );
    const table = screen.getByTestId('table');
    expect(table).toBeInTheDocument();
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(3);
  });
  it('radio works', async () => {
    render(<App />);

    const orderOpt = screen.getByRole('combobox', {
      name: /ordenar/i
    });
    expect(orderOpt).toBeInTheDocument();
    await userEvent.selectOptions(orderOpt, 'diameter');

    const radioAsc = screen.getByRole('radio', {
      name: /ascendente/i,
    });
    const radioDesc = screen.getByRole('radio', {
      name: /decrescente/i,
    });
    expect(radioAsc).toBeInTheDocument();
    expect(radioDesc).toBeInTheDocument();

    const button = screen.getByRole('button', {
      name: /ordenar/i
    })

    expect(button).toBeInTheDocument();
    await userEvent.click(radioAsc);
    await userEvent.click(button);
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(1);
  });
  it('inputs works', async () => {
    render(<App />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    await userEvent.type(input, 'a');
    const button = screen.getByRole('button', {
      name: /filtrar/i
    })

    expect(button).toBeInTheDocument();
    await userEvent.click(button);
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(1);
  });
  it('Select works', async () => {
    render(<App />);
    const selectColumn = screen.getByRole('combobox', {
      name: /coluna/i
    });
    expect(selectColumn).toBeInTheDocument();
    await userEvent.selectOptions(selectColumn, 'population');

    const selectComparison = screen.getByRole('combobox', {
      name: /operador/i
    });
    expect(selectComparison).toBeInTheDocument();
    await userEvent.selectOptions(selectComparison, 'maior que');

    const input = screen.getByRole('spinbutton');
    expect(input).toBeInTheDocument();
    await userEvent.type(input, '100000');

    const button = screen.getByRole('button', {
      name: /filtrar/i
    })
    expect(button).toBeInTheDocument();
    await userEvent.click(button);
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(1);

    const filter = screen.getByTestId('filter');
    expect(filter).toBeInTheDocument();
    const excludeFilter = screen.getByRole('button', {
      name: /excluir/i
    })
    expect(excludeFilter).toBeInTheDocument();
    await userEvent.click(excludeFilter);
    
  });
});
