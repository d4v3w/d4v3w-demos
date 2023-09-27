import classnames from 'classnames';
import styles from './button.module.css';

interface ButtonProps {
  id?: string;
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  id = '',
  primary = false,
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'primary' : 'secondary';
  return (
    <button
      id={id}
      type="button"
      className={classnames(styles.button, styles[size], styles[mode])}
      {...props}
    >
      {label}
    </button>
  );
};
