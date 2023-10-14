import classnames from "classnames";
import { useRef } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./Carousel.module.css";

export const Carousel = () => {
  const URL_STATE_QUERY = "id";
  const [query, setQuery] = useSearchParams();
  const q = query.get(URL_STATE_QUERY);
  const selected: number = q ? parseInt(q) : 0;
  const formRef = useRef<HTMLFormElement>(null);
  const MAX_ITEMS = 10;

  const updateQuery = (e: number) => {
    setQuery(
      (prev) => {
        prev.set(URL_STATE_QUERY, e.toString());
        return prev;
      },
      { replace: true },
    );
  };

  enum Direction {
    left,
    right,
  }

  interface ScrollButtonProps {
    direction: Direction;
  }

  const handleScrollClick = (increment: boolean) => {
    let val = selected;
    if (increment && selected < MAX_ITEMS) {
      val = selected + 1;
    }
    if (!increment && selected > 0) {
      val = selected - 1;
    }
    updateQuery(val);
  };

  const ScrollButton = ({ direction = Direction.left }: ScrollButtonProps) => {
    const isRight: boolean = direction === Direction.right;
    const text = isRight ? ">" : "<";
    const title = isRight ? "Scroll Backwards" : "Scroll Forward";
    return (
      <button
        onClick={() => {
          handleScrollClick(isRight);
        }}
        className={classnames(
          styles.scroll,
          isRight ? styles.right : styles.left,
        )}
        title={title}
      >
        {text}
      </button>
    );
  };

  return (
    <div className={styles.container}>
      <ScrollButton direction={Direction.left} />
      <div className={styles.scroller}>
        {[...Array(MAX_ITEMS).keys()].map((key) => (
          <section
            className={classnames(
              styles.item,
              key === selected ? styles.selected : null,
            )}
            key={key}
          >
            <h3 className={styles.lineClamp2}>Sint aliqua consectetur</h3>
            <p className={styles.lineClamp3}>
              Nostrud laboris fugiat incididunt esse nostrud ad.. Labore aute
              voluptate nulla ad laborum laboris consectetur.
            </p>
            <button
              className={styles.button}
              onClick={() => {
                updateQuery(key);
              }}
              title="Select Sint aliqua consectetur"
            >
              Select
            </button>
          </section>
        ))}
      </div>
      <ScrollButton direction={Direction.right} />
      <form ref={formRef} action="">
        <input type="hidden" name={URL_STATE_QUERY} value={selected} />
        <button
          className={classnames(styles.button, styles.submit)}
          title="Select Sint aliqua consectetur"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
