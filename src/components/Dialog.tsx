import { useRef } from "react";
import { Button } from "./Button";
import styles from "./Dialog.module.css";

interface DialogProps {
  id?: string;
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
}
export const Dialog = ({
  id = "",
  primary = false,
  size = "medium",
  label,
}: DialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  return (
    <>
      <Button
        onClick={openDialog}
        id={id}
        primary={primary}
        size={size}
        label={label}
        data-testId="dialog-button"
      />
      <dialog ref={dialogRef} className={styles.dialog} data-testId="dialog">
        <legend>
          <h3>Dialog</h3>
        </legend>
        <form method="dialog" className={styles.dialogForm}>
          <section>
            <p>Anim occaecat aliqua consequat pariatur.</p>
            <Button
              onClick={closeDialog}
              primary={false}
              size="small"
              label="Close"
              data-testId="dialog-close-button"
            />
          </section>
        </form>
      </dialog>
    </>
  );
};
