import classnames from "classnames";
import { useRef } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./querypage.module.css";

export const QueryPage = () => {
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
  const itemsRef = useRef<HTMLInputElement[]>([]);

  const [query, setQuery] = useSearchParams({ q: "" });
  const q: string = query.get("q") || "0";
  const content = "this is some card content";

  const scrollItem = (el: (EventTarget & Element) | null) => {
    if (el == null) return;
    el.scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });
  };

  const onChange = (e: React.ChangeEvent) => {
    const el = e.target;
    setQuery((prev) => {
      prev.set("q", el.id);
      return prev;
    });
    scrollItem(el);
  };

  const onFocus = (e: React.FocusEvent) => {
    const el = e.target;
    scrollItem(el);
  };
  
  return (
    <>
      <form className={styles.wrapper}>
        {cards.map((item, index) => {
          const id = `card-${item}`;
          const isSelected = id === q;
          return (
            <label
              onFocus={onFocus}
              key={item}
              htmlFor={id}
              tabIndex={index + 1}
              className={classnames(
                styles.card,
                isSelected ? styles.selected : null,
              )}
            >
              <input
                id={id}
                autoFocus={isSelected}
                ref={(el: HTMLInputElement) => {
                  itemsRef.current[index] = el;
                  return el;
                }}
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
