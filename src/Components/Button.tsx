import { ButtonProps } from '../types';

function Button({
  type,
  dataTestId = '',
  onClick,
  children,
}: ButtonProps): JSX.Element {
  return (
    <button type={ type } data-testid={ dataTestId } onClick={ onClick as any }>
      {children}
    </button>
  );
}

export default Button;
