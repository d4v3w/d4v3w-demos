import classnames from "classnames";
import { useId } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./querypage.module.css";

interface CardProps {
  title: string;
  content: string;
  selected?: boolean;
}

const Card = ({ title, content, selected }: CardProps) => {
  const [query, setQuery] = useSearchParams({ q: "" });
  const q = query.get("q");
  console.log(q);

  const labelId = useId();

  return (
    <label
      htmlFor={labelId}
      className={classnames(styles.card, selected ? styles.selected : null)}
    >
      <input
        id={labelId}
        type="checkbox"
        name="card"
        className={styles.checkbox}
        onChange={(e) =>
          setQuery((prev) => {
            prev.set("q", e.target.value);
            return prev;
          })
        }
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.content}>{content}</p>
    </label>
  );
};

export const QueryPage: React.FC = () => {
  //const [query, setQuery] = useSearchParams();

  return (
    <form className={styles.wrapper}>
      <Card title="Test Title" content="Some content for the card" />
      <Card title="Test Title" content="Some content for the card" />
      <Card title="Test Title" content="Some content for the card" />
      <Card title="Test Title" content="Some content for the card" />
      <Card title="Test Title" content="Some content for the card" />
    </form>
  );
};
