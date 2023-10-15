import classnames from "classnames";
import styles from "./ScrollButton.module.css";

enum Direction {
  left,
  right,
}

interface ScrollButtonProps {
  direction?: Direction;
  onClick: (isRight: boolean) => void;
  disabled?: boolean;
}

export const ScrollButton = ({
  direction = Direction.left,
  onClick,
  disabled = false,
}: ScrollButtonProps) => {
  const isRight: boolean = direction === Direction.right;
  const text = isRight ? ">" : "<";
  const title = isRight ? "Scroll Forwards" : "Scroll Backwards";
  return (
    <button
      onClick={() => {
        if (onClick != null) onClick(isRight);
      }}
      className={classnames(
        styles.scroll,
        isRight ? styles.right : styles.left,
      )}
      title={title}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
