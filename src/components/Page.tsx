import { useState } from "react";

import { Button } from "./Button";
import { Carousel } from "./Carousel";
import { Header } from "./Header";
import styles from "./page.module.css";

type User = {
  name: string;
};

export const Page = () => {
  const [user, setUser] = useState<User>();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: "Logged In" })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: "Logged In" })}
      />

      <section className={styles.page} id="top">
        <article>
          <h1 id="h1">Welcome!</h1>
          <h2 id="h2_1">THis is a demo working progress dumping ground</h2>
          <p id="p_1">
            Lorem ipsum dolor sit amet. viverra nibh cras pulvinar mattis nunc
            sed. Faucibus a pellentesque sit amet porttitor eget. Blandit turpis
            cursus in hac habitasse. Ullamcorper <a href="">grie ehty</a> eget
            nulla facilisi etiam dignissim diam quis enim lobortis. Duis
            convallis convallis tellus id inte enim. Leo urna molestie at
            elementum eu.
          </p>
          <Carousel />
          <h3 id="h3_1">Lorem ipsum dolor sit amet</h3>
          <p id="p_2">
            Lorem ipsum dolor sit amet, consectetur quam elementum. Mi ipsum
            faucibus vitae aliquet nec ullamcorper sit amet. Et magnis dis
            parturient montes nascetur ridiculus mus mauris. Cursus euismod quis
            m diam quis enim lobortis. Duis convallis convallis tellus id
            interdum. Donec massa sapien faucibus et molestie. Ornare massa eget
            egestas purus.
          </p>
          <h4 id="h4_1">Lorem ipsum dolor sit amet</h4>
          <p id="p_2">
            Lorem ipsum dolor sit amet, consectetur quam elementum. Mi ipsum
            faucibus vitae aliquet nec ullamcorper sit amet. Et magnis dis
            parturient montes nascetur ridiculus mus mauris. Cursus euismod quis
            m diam quis enim lobortis. Duis convallis convallis tellus id
            interdum. Donec massa sapien faucibus et molestie. Ornare massa eget
            egestas purus.
          </p>
          <Button label={"click"} primary />
          <Button label={"me"} primary={false} />
        </article>
      </section>
    </article>
  );
};
