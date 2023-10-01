import classnames from "classnames";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./querypage.module.css";

export const QueryPage = () => {
  const [query, setQuery] = useSearchParams({ q: "" });
  const q: string = query.get("q") || "0";
  const content = "this is some card content";

  const cards: string[] = [
    "card 1",
    "card 2",
    "card 3",
    "card 4",
    "card 5",
    "card 6",
    "card 7",
    "card 8",
    "card 9",
    "card 10",
  ];

  const scrollItem = (id: string) => {
    const el = document.getElementById(id);
    if (el == null) return;
    el.scrollIntoView({
      behavior: "smooth",
      inline: "end",
    });
  };

  const onChange = (e: React.ChangeEvent) => {
    const id: string = e.target.id;
    setQuery((prev) => {
      prev.set("q", id);
      return prev;
    });
    scrollItem(id);
  };

  useEffect(() => {
    scrollItem(q);
  }, []);

  return (
    <>
      <form className={styles.wrapper}>
        {cards.map((item, index) => {
          const id = `${index.toString()}`;
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
                onChange={(e) => onChange(e)}
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
