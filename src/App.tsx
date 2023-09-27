import { useRef } from 'react';
import styles from './App.module.css';
import { Button } from './stories/Button';

function App() {
  const modalRef = useRef();

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 id="h1">d4v3w Demos</h1>
      </header>
      <article>
        <h2 id="h2_1">Lorem ipsum dolor sit amet</h2>
        <h3 id="h3_1">Lorem ipsum dolor sit amet</h3>
        <h4 id="h4_1">Lorem ipsum dolor sit amet</h4>
        <p id="p_1">Lorem ipsum dolor sit amet. viverra nibh cras pulvinar mattis nunc sed. Faucibus a pellentesque sit amet porttitor eget. Blandit turpis cursus in hac habitasse. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis. Duis convallis convallis tellus id inte enim. Leo urna molestie at elementum eu.</p>
        <p id="p_2">Lorem ipsum dolor sit amet, consectetur quam elementum. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Et magnis dis parturient montes nascetur ridiculus mus mauris. Cursus euismod quis m diam quis enim lobortis. Duis convallis convallis tellus id interdum. Donec massa sapien faucibus et molestie. Ornare massa eget egestas purus.</p>
        <Button id="showDialog" label={'click'} primary />
        <dialog id="dialog">
          <p>Greetings, one and all!</p>
          <form method="dialog">
            <button>OK</button>
          </form>
        </dialog>
      </article>
    </div>
  );
}

export default App;
