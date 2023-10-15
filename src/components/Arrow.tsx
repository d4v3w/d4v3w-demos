import styles from "./Arrow.module.css";

const clickHandler = (href: string) => {
  const anchor = document.querySelector(href);
  anchor?.scrollIntoView({
    behavior: "smooth",
  });
};

export const Arrow = () => {
  return (
    <div className={styles.container}>
      <a
        className={styles.link}
        onClick={() => {
          clickHandler("#top");
        }}
      >
        <span className={styles.text}>[Scroll Down]</span>
        <span className={styles.arrow}></span>
      </a>
    </div>
  );
};
