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
   * Button will trigger a dialog
   */
  dialog?: boolean;
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
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  id = "",
  primary = false,
  submit = false,
  dialog = false,
  size = "medium",
  label,
  onClick = undefined,
  ...props
}: ButtonProps) => {
  let mode = primary ? "primary" : "secondary";
  mode = dialog ? "dialog" : mode;
  return (
    <button
      id={id}
      type={submit ? "submit" : "button"}
      className={classnames(styles.button, styles[size], styles[mode])}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};
