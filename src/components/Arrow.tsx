import styles from "./Arrow.module.css";

export const Arrow = () => {
  return (
    <div className={styles.container}>
      <a className={styles.link} href="#top">
        <span className={styles.text}>[Scroll Down]</span>
      </a>
    </div>
  );
};
