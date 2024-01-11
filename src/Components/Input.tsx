type InputProps = {
  type: string;
  name?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  dataTestId?: string;
  value?: string | number;
};

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
