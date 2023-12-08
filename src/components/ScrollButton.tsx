import classnames from "classnames";
import styles from "./ScrollButton.module.css";

export enum Direction {
  Left,
  Right,
}

export type ScrollButtonProps = {
  direction?: Direction;
  onClick: (isRight: boolean) => void;
  disabled?: boolean;
};

export const ScrollButton = ({
  direction = Direction.Left,
  onClick,
  disabled = false,
}: ScrollButtonProps) => {
  const isRight: boolean = direction === Direction.Right;
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
      data-testId={`scroll-${isRight ? "right" : "left"}`}
    >
      {text}
    </button>
  );
};
