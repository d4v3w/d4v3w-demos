import classnames from "classnames";
import { useSearchParams } from "react-router-dom";
import styles from "./querypage.module.css";

export const QueryPage = () => {
  const [query, setQuery] = useSearchParams({ q: "" });
  const q = query.get("q");
  const content = "this is some card content";

  const cards: string[] = ["card 1", "card 2", "card 3", "card 4", "card 5"];

  return (
    <>
      <form className={styles.wrapper}>
        {cards.map((item, index) => {
          const id = `card-${index.toString()}`;
          return (
            <label
              key={id}
              htmlFor={id}
              className={classnames(
                styles.card,
                id === q ? styles.selected : null,
              )}
            >
              <input
                id={id}
                type="radio"
                name="card"
                className={styles.checkbox}
                onChange={(e) =>
                  setQuery((prev) => {
                    prev.set("q", e.target.id);
                    return prev;
                  })
                }
                checked={id == q}
              />
              <h3 className={styles.title}>{item}</h3>
              <p className={styles.content}>{content}</p>
            </label>
          );
        })}
      </form>
    </>
  );
};
