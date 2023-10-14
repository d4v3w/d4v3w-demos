import classnames from "classnames";
import styles from "./button.module.css";

interface ButtonProps {
  id?: string;
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * Is this a form call to action in a form?
   */
  submit?: boolean;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Optional ref for the button
   */
  ref?: React.RefObject<HTMLButtonElement>;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  id = "",
  primary = false,
  submit = false,
  size = "medium",
  label,
  ref,
  onClick = undefined,
  ...props
}: ButtonProps) => {
  const mode = primary ? "primary" : "secondary";
  return (
    <button
      id={id}
      type={submit ? "submit" : "button"}
      className={classnames(styles.button, styles[size], styles[mode])}
      onClick={onClick}
      ref={ref}
      {...props}
    >
      {label}
    </button>
  );
};
