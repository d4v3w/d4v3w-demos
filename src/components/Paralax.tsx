import { Arrow } from "./Arrow";
import { Button } from "./Button";
import { Carousel } from "./Carousel";
import { Dialog } from "./Dialog";
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
        <Arrow />
      </header>
      <section>
        <Header />
      </section>
      <section className={styles.section}>
        <h2>Carousel Demo</h2>
        <p>Scroll the carousel below to see the demo in action:</p>
        <Carousel />
      </section>
      <section className={styles.section}>
        <h2>Dialog Demo</h2>
        <p>Click the button below to see the dialog demo in action:</p>
        <Dialog label={"click"} primary />
      </section>
      <section className={styles.section}>
        <h2>Button Demo</h2>
        <p>Click and hover the buttons below see them in action:</p>
        <Button label={"click"} primary={true} />
        <Button label={"me"} primary={false} />
      </section>
    </div>
  );
};
