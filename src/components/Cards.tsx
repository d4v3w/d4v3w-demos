import classnames from "classnames";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./Cards.module.css";

const cards: string[] = [
  "Excepteur tempor cupidatat mollit sit consectetur veniam amet eu.",
  "Aliqua aute eu reprehenderit adipisicing esse sunt id laborum magna sit aliquip.",
  "Velit magna nostrud non minim fugiat eu aliquip proident elit culpa officia.",
  "Commodo veniam voluptate incididunt Lorem deserunt ea tempor fugiat ipsum in.",
  "Anim adipisicing est pariatur aliqua pariatur esse enim occaecat minim dolore nostrud.",
  "Et non pariatur veniam velit dolore nulla ut anim cupidatat eiusmod.",
  "Dolor aliqua et ex eiusmod nostrud officia fugiat aliqua est ut.",
  "Quis dolore laboris eu anim pariatur laborum sint irure ea est aute minim in elit.",
  "Nostrud qui qui elit eiusmod nulla.",
  "Non labore velit amet occaecat magna officia aliqua Lorem ex veniam esse magna minim veniam.",
];

const content =
  "Consectetur in quis cupidatat officia ullamco nisi nulla consequat fugiat sunt velit proident quis. Ut veniam fugiat tempor dolore aliquip eiusmod sit labore enim excepteur non. Officia proident nulla enim enim fugiat cillum eiusmod nulla esse. Eu ullamco sit nostrud adipisicing ea Lorem dolor minim voluptate.";

export const Cards = () => {
  const labels = useRef<HTMLLabelElement[]>([]);

  const URL_STATE_QUERY = "card";
  const SELECT_KEYS = ["enter", " "];
  const [focusedItem, setFocusedItem] = useState<EventTarget & Element>();
  const [query, setQuery] = useSearchParams();

  // Defaults to selecting first item
  const q = query.get(URL_STATE_QUERY) || "0";
  const scrollToItem = () => {
    if (focusedItem == null) return;
    focusedItem.scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });
  };

  const updateQuery = (id: string) => {
    setQuery((prev) => {
      prev.set(URL_STATE_QUERY, id);
      return prev;
    });
  };

  const onChange = (e: React.ChangeEvent) => {
    const el = e.target;
    updateQuery(el.id);
    setFocusedItem(el);
  };

  const onFocus = (e: React.FocusEvent) => {
    const el = e.target;
    setFocusedItem(el);
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    const key = event.key.toLowerCase();
    const item = focusedItem as HTMLLabelElement;
    if (SELECT_KEYS.includes(key) && item != null) {
      const dataIndex: string = item.getAttribute("data-radio") || "";
      const index = parseInt(dataIndex);
      checkRadioButton(index);
    }
  };

  const checkRadioButton = (index: number) => {
    const children: HTMLCollection = labels.current[index].children;
    for (const tag of Array.from(children)) {
      if (tag.nodeName === "INPUT") {
        const radio = tag as HTMLInputElement;
        radio.checked = true;
      }
    }
    updateQuery(`${index}`);
  };

  useEffect(() => {
    scrollToItem();
  }, [focusedItem]);

  useEffect(() => {
    document.addEventListener("keypress", handleKeyPress);
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  });

  useEffect(() => {
    const defaultSelection = labels.current[parseInt(q)];
    defaultSelection.scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });
  }, []);

  return (
    <>
      <form className={styles.wrapper}>
        {cards.map((item, index) => {
          const id = `${index}`;
          const isSelected = id.toString() === q;
          return (
            <label
              ref={(el) => {
                el != null ? labels.current.push(el) : labels.current.push();
              }}
              onFocus={onFocus}
              key={item}
              htmlFor={id}
              tabIndex={index + 1}
              className={classnames(
                styles.card,
                isSelected ? styles.selected : null,
              )}
              data-radio={index}
            >
              <input
                id={id}
                autoFocus={isSelected}
                type="radio"
                name="card"
                className={styles.hide}
                onChange={onChange}
                checked={id == q}
              />
              <h3 className={classnames(styles.title, styles.lineClamp)}>
                {item}
              </h3>
              <section className={styles.content}>
                <p className={classnames(styles.text, styles.lineClamp)}>
                  {content}
                </p>
              </section>
            </label>
          );
        })}
      </form>
    </>
  );
};
