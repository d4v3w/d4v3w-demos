import classnames from "classnames";
import { Button } from "./Button";
import styles from "./CarouselChild.module.css";

export type CarouselChild = {
  title: string;
  description: string;
  content?: string[] | null;
  image?: string;
};

type CarouselChildProps = {
  item: CarouselChild;
  onClick: () => void;
  selected?: boolean;
};

export const CarouselChild = ({
  item,
  onClick,
  selected = false,
}: CarouselChildProps) => (
  <section
    className={classnames(styles.item, selected ? styles.selected : null)}
    data-testId="carousel-child"
  >
    <h3 className={styles.lineClampHeading}>{item.title}</h3>
    <p className={styles.lineClampContent}>{item.description}</p>

    <ul className={classnames(styles.list, styles.lineClampList)}>
      {item.content?.map((itemContent, key) => (
        <li className={styles.listItem} key={key}>
          {itemContent}
        </li>
      ))}
    </ul>

    <Button
      cta={true}
      onClick={() => {
        onClick();
      }}
      label="Select"
    />
  </section>
);
