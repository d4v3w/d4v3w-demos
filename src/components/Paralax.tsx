import { Header } from "./Header";
import styles from "./Paralax.module.css";

export const Paralax = () => {
  return (
    <div className={styles.paralaxContext}>
      <header className={styles.header}>
        <img
          src="/images/italian_mountains_panarama.jpg"
          alt="mountains"
          className={styles.background}
        />
        <img
          src="/images/Trees.png"
          alt="trees"
          className={styles.foreground}
        />
        <h1 className={styles.title}>Welcome!</h1>
      </header>
      <section className={styles.section}>
        <Header />
        <p>
          Aliquip dolor aliqua consequat commodo esse tempor minim excepteur
          esse. Cillum enim tempor nisi aliqua et minim dolore. Labore eiusmod
          ex consectetur sunt excepteur incididunt dolore. Pariatur exercitation
          deserunt nostrud reprehenderit duis commodo esse fugiat ex eiusmod
          proident Lorem. Irure officia voluptate eiusmod ullamco consectetur
          nisi tempor et sit proident magna quis fugiat sunt.
        </p>
        <p>
          Aliquip dolor aliqua consequat commodo esse tempor minim excepteur
          esse. Cillum enim tempor nisi aliqua et minim dolore. Labore eiusmod
          ex consectetur sunt excepteur incididunt dolore. Pariatur exercitation
          deserunt nostrud reprehenderit duis commodo esse fugiat ex eiusmod
          proident Lorem. Irure officia voluptate eiusmod ullamco consectetur
          nisi tempor et sit proident magna quis fugiat sunt.
        </p>
      </section>
    </div>
  );
};
