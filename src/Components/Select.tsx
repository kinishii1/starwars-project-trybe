import { SelectProps } from '../types';

function Select({
  value,
  options,
  label,
  name,
  onChange,
  dataTestId = '',
}: SelectProps): JSX.Element {
  return (
    <>
      <label htmlFor={ name }>{label}</label>
      <select
        name={ name }
        value={ value }
        id={ name }
        data-testid={ dataTestId }
        onChange={ onChange }
      >
        {options.map((key: any) => (
          <option key={ key }>{key}</option>
        ))}
      </select>
    </>
  );
}

export default Select;
