import { Arrow } from "./Arrow";
import { Button } from "./Button";
import { Carousel } from "./Carousel";
import { Dialog } from "./Dialog";
import { Header } from "./Header";
import styles from "./Page.module.css";

export const Page = () => {
  return (
    <div className={styles.paralaxContext}>
      <div className={styles.header}>
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
      </div>
      <section>
        <Header />
      </section>

      <section className={styles.section} id="top">
        <article>
          <h2>This is a demo working progress dumping ground</h2>
          <p>
            Just a little update on this site. It gets updated occasionally with
            demo code and exaples I have been working on and testing out. If I
            decide to try a new CSS property, or create a new react component;
            it will be added here.
          </p>
          <h3>Background</h3>
          <p>
            I am a professional Software Developer working on large scale
            corporate retail and video platforms, primarily focused on front-end
            user experience with HTML, CSS and JavaScript.
          </p>
          <h4>Anything else?</h4>
          <p>
            Not really, but if you want to get in touch I am sure you can find
            my contact somewhere online.
          </p>
        </article>
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
