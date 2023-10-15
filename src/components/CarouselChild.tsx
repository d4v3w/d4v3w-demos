import classnames from "classnames";
import { Button } from "./Button";
import styles from "./CarouselChild.module.css";

interface CarouselChildProps {
  onClick: () => void;
  selected?: boolean;
}
export const CarouselChild = ({
  onClick,
  selected = false,
}: CarouselChildProps) => (
  <section
    className={classnames(styles.item, selected ? styles.selected : null)}
  >
    <h3 className={styles.lineClampHeading}>Sint aliqua consectetur</h3>
    <p className={styles.lineClampContent}>
      Nostrud laboris fugiat incididunt esse nostrud ad.. Labore aute voluptate
      nulla ad laborum laboris consectetur.
    </p>
    <ul className={classnames(styles.list, styles.lineClampList)}>
      <li className={styles.listItem}>
        In reprehenderit adipisicing eu deserunt.
      </li>
      <li className={styles.listItem}>
        In reprehenderit adipisicing eu deserunt.
      </li>
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
