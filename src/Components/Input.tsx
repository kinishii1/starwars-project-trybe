import { InputProps } from '../types';

function Input({
  type,
  name = '',
  onChange,
  placeholder = '',
  dataTestId = '',
  value = '',
}: InputProps) {
  return (
    <input
      type={ type }
      name={ name }
      onChange={ onChange }
      placeholder={ placeholder }
      data-testid={ dataTestId }
      value={ value }
    />
  );
}

export default Input;
