import { ReactNode, useRef } from "react";
import { Button } from "./Button";
import styles from "./Dialog.module.css";

type DialogProps = {
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
  /**
   * Content for the dialog
   */
  children?: ReactNode;
};
export const Dialog = ({
  id = "",
  primary = false,
  size = "medium",
  label,
  children = [],
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
          <h3>{label}</h3>
        </legend>
        <form method="dialog" className={styles.dialogForm}>
          <section>
            <div>{children}</div>
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
