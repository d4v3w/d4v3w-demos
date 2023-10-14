import { useRef } from "react";
import { Button } from "./Button";
import styles from "./Dialog.module.css";

export const Dialog = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialogCloseRef = useRef<HTMLButtonElement>(null);

  const openDialog = () => {
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  return (
    <div className={styles.container}>
      <section>
        <Button onClick={openDialog} label="Click Me" />
      </section>
      <dialog ref={dialogRef} className={styles.dialog}>
        <form method="dialog" className={styles.dialogForm}>
          <h3>Dialog</h3>
          <p>Anim occaecat aliqua consequat pariatur.</p>
          <Button
            ref={dialogCloseRef}
            onClick={closeDialog}
            primary={false}
            size="small"
            label="Close"
          />
        </form>
      </dialog>
    </div>
  );
};
