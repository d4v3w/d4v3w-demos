import React from "react";

import { Button } from "./Button";
import { Header } from "./Header";
import styles from "./page.module.css";

type User = {
  name: string;
};

export const Page: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: "Jane Doe" })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: "Jane Doe" })}
      />

      <section className={styles.page}>
        <article>
          <h2 id="h2_1">Lorem ipsum dolor sit amet</h2>
          <h3 id="h3_1">Lorem ipsum dolor sit amet</h3>
          <h4 id="h4_1">Lorem ipsum dolor sit amet</h4>
          <p id="p_1">
            Lorem ipsum dolor sit amet. viverra nibh cras pulvinar mattis nunc
            sed. Faucibus a pellentesque sit amet porttitor eget. Blandit turpis
            cursus in hac habitasse. Ullamcorper eget nulla facilisi etiam
            dignissim diam quis enim lobortis. Duis convallis convallis tellus
            id inte enim. Leo urna molestie at elementum eu.
          </p>
          <p id="p_2">
            Lorem ipsum dolor sit amet, consectetur quam elementum. Mi ipsum
            faucibus vitae aliquet nec ullamcorper sit amet. Et magnis dis
            parturient montes nascetur ridiculus mus mauris. Cursus euismod quis
            m diam quis enim lobortis. Duis convallis convallis tellus id
            interdum. Donec massa sapien faucibus et molestie. Ornare massa eget
            egestas purus.
          </p>
          <Button label={"click"} primary />
        </article>
      </section>
    </article>
  );
};
